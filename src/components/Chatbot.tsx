import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [showEmailInput, setShowEmailInput] = useState(true);
  const [messageCount, setMessageCount] = useState(0);
  const [lastMessageTime, setLastMessageTime] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Security: Email validation
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email) && email.length <= 254;
  };

  // Security: Input sanitization
  const sanitizeInput = (input: string): string => {
    return input
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<[^>]+>/g, '')
      .trim()
      .slice(0, 1000); // Limit message length
  };

  // Security: Rate limiting
  const isRateLimited = (): boolean => {
    const now = Date.now();
    if (now - lastMessageTime < 2000) { // 2 second minimum between messages
      return true;
    }
    if (messageCount >= 20) { // Max 20 messages per session
      return true;
    }
    return false;
  };

  useEffect(() => {
    // No need to check for webhook URL since it's now securely stored in Supabase
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);


  const saveEmailAndStart = async () => {
    const trimmedEmail = userEmail.trim();
    if (!trimmedEmail || !isValidEmail(trimmedEmail)) {
      alert('Please enter a valid email address');
      return;
    }

    // Show loading state
    setIsLoading(true);

    try {
      // Verify email with Abstract API
      const { data, error } = await supabase.functions.invoke('verify-email', {
        body: { email: trimmedEmail }
      });

      if (error) {
        console.error('Email verification error:', error);
        // Proceed anyway if verification service fails
        setShowEmailInput(false);
        addWelcomeMessage();
        return;
      }

      if (!data.valid) {
        alert(data.reason || 'Please enter a valid email address');
        return;
      }

      // Email is valid, proceed with chat
      setShowEmailInput(false);
      addWelcomeMessage();

    } catch (error) {
      console.error('Email verification failed:', error);
      // Fallback: proceed anyway if verification completely fails
      setShowEmailInput(false);
      addWelcomeMessage();
    } finally {
      setIsLoading(false);
    }
  };

  const sendChatTranscript = async () => {
    if (!userEmail || messages.length === 0) return;

    try {
      const chatTranscript = messages.map(msg => 
        `${msg.role.toUpperCase()}: ${msg.content}`
      ).join('\n\n');

      const { error } = await supabase.functions.invoke('send-chat-transcript', {
        body: {
          userEmail,
          chatTranscript,
          totalMessages: messages.length,
        }
      });

      if (error) {
        console.error('Error sending chat transcript:', error);
      }
    } catch (error) {
      console.error('Error sending chat transcript:', error);
    }
  };

  const addWelcomeMessage = () => {
    const welcomeMessage: Message = {
      id: Date.now().toString(),
      content: "Hi! I'm here to help you with questions about our marquee letter packages and pricing. What would you like to know?\n\nNote: At the end of our chat, you'll receive a transcript via email. You can reply to that email with any additional questions and I'll get back to you!",
      role: 'assistant',
      timestamp: new Date(),
    };
    setMessages([welcomeMessage]);
  };

  const sendMessage = async () => {
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    // Security: Rate limiting check
    if (isRateLimited()) {
      alert('Please wait a moment before sending another message.');
      return;
    }

    // Security: Input sanitization
    const sanitizedInput = sanitizeInput(trimmedInput);
    if (!sanitizedInput) {
      alert('Invalid message content.');
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      content: sanitizedInput,
      role: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setMessageCount(prev => prev + 1);
    setLastMessageTime(Date.now());

    try {
      const { data, error } = await supabase.functions.invoke('chat-with-ai', {
        body: {
          messages: [
            ...messages.map(msg => ({
              role: msg.role,
              content: msg.content
            })),
            {
              role: 'user',
              content: sanitizedInput
            }
          ]
        }
      });

      if (error) {
        throw new Error(error.message || 'Failed to get response');
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.content,
        role: 'assistant',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm sorry, I'm having trouble connecting right now. Please try again or contact us directly through our quote form.",
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    }

    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(true)}
        size="lg"
        className={cn(
          "fixed bottom-6 right-6 z-50 rounded-full shadow-2xl",
          "bg-primary hover:bg-primary/90 text-primary-foreground",
          "transition-all duration-300",
          "hover:scale-110 hover:shadow-[0_0_20px_rgba(var(--primary),0.5)]",
          "ring-4 ring-primary/20 hover:ring-primary/40",
          "px-6 py-4 h-auto min-w-[120px]",
          isOpen && "hidden"
        )}
      >
        <div className="flex items-center gap-2">
          <MessageCircle className="w-6 h-6" />
          <span className="text-sm font-medium">Questions?</span>
        </div>
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-96 h-96 flex flex-col shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-primary" />
              <span className="font-semibold">Rental Inventory Assistant</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                sendChatTranscript();
                setIsOpen(false);
              }}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>



          {/* Email Input */}
          {showEmailInput && (
            <div className="p-4 border-b bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">
                Please enter your email to start the conversation:
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className="text-sm"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      saveEmailAndStart();
                    }
                  }}
                />
                <Button onClick={saveEmailAndStart} size="sm">
                  Start Chat
                </Button>
              </div>
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex gap-3",
                  message.role === 'user' ? "justify-end" : "justify-start"
                )}
              >
                {message.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-primary" />
                  </div>
                )}
                <div
                  className={cn(
                    "max-w-[80%] rounded-lg px-3 py-2 text-sm",
                    message.role === 'user'
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  )}
                >
                  {message.content}
                </div>
                {message.role === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-primary" />
                </div>
                <div className="bg-muted rounded-lg px-3 py-2 text-sm">
                  <span className="inline-flex items-center gap-1">
                    <span className="animate-bounce">●</span>
                    <span className="animate-bounce delay-100">●</span>
                    <span className="animate-bounce delay-200">●</span>
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          {!showEmailInput && (
            <div className="p-4 border-t">
              <form autoComplete="off" onSubmit={(e) => { e.preventDefault(); sendMessage(); }}>
                <div className="flex gap-2">
                  <Input
                    placeholder="Ask about packages, pricing, or features..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    disabled={isLoading}
                    autoComplete="new-password"
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                    name="chat-message-input"
                    id="chat-message-input"
                    type="text"
                    role="textbox"
                    data-form-type="other"
                  />
                  <Button
                    type="button"
                    onClick={sendMessage}
                    disabled={!input.trim() || isLoading}
                    size="sm"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </form>
            </div>
          )}
        </Card>
      )}
    </>
  );
};

export default Chatbot;