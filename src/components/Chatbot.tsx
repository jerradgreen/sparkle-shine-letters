import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { cn } from '@/lib/utils';

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
  const [apiKey, setApiKey] = useState('');
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedApiKey = localStorage.getItem('openai-api-key');
    if (savedApiKey) {
      setApiKey(savedApiKey);
    } else {
      setShowApiKeyInput(true);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const saveApiKey = () => {
    localStorage.setItem('openai-api-key', apiKey);
    setShowApiKeyInput(false);
    addWelcomeMessage();
  };

  const addWelcomeMessage = () => {
    const welcomeMessage: Message = {
      id: Date.now().toString(),
      content: "Hi! I'm here to help you with questions about our marquee letter packages and pricing. What would you like to know?",
      role: 'assistant',
      timestamp: new Date(),
    };
    setMessages([welcomeMessage]);
  };

  const sendMessage = async () => {
    if (!input.trim() || !apiKey) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            {
              role: 'system',
              content: `You are a helpful assistant for Vintage Marquee Lights, a company that specializes in building marquee letter rental inventories for event rental businesses.

BUSINESS OVERVIEW:
We help rental businesses build their own marquee letter inventory with professional-grade letters, numbers and symbols. Our clients keep 100% of their rental revenue with no franchise fees, commissions, or licensing restrictions.

PRODUCT FEATURES:
- Durable & Long-Lasting: Powder-coated steel construction built to withstand years of events
- Top-Tier Craftsmanship: Extra-deep, self-standing design with high-gloss finish and closed backs to hide wiring
- Plug-and-Play LED Bulbs: Energy-efficient LEDs provide warm, even lighting
- Reusable Foam-Lined Boxes: Every order ships in protective boxes for safe transport and storage
- 36" self-standing marquee letters made of powder-coated steel

EXPERIENCE & MANUFACTURING:
- Over 15 years of experience creating marquee letters and custom signs
- Rental letters manufactured overseas by long-term partner for consistent quality and competitive pricing
- Custom signs hand-built in the United States
- Perfect balance between quality and value

PACKAGES & PRICING:
- Most clients invest between $12,000–$35,000 for a complete rental inventory
- Packages start around $300 per letter (Elite Package)
- Final pricing depends on exact mix and style of letters, including upgrades like color-changing bulbs or LED neon options
- Pricing also varies by timeline and shipping destination
- Flexible packages designed to grow with rental business
- Can start small with a few letters or go big with pre-mixed packages
- Custom orders available for specific words/phrases or curated versatile mixes

DELIVERY & TIMELINE:
- Estimated turnaround: 3-4 months from order finalization
- Manufacturing overseas with ocean freight shipping to keep pricing low
- Air freight available for small number of letters at additional cost (allows early start while main order ships)
- Planning ahead ensures best value without rush fees
- Reserve early to stay ahead of peak event seasons

CUSTOMIZATION OPTIONS:
- Start small with few letters/numbers or larger packages
- Custom word/phrase orders available
- Team can curate versatile mix based on most-used letters and symbols
- Color-changing bulbs and LED neon options available

CONTACT & NEXT STEPS:
- Email: hello@vintagemarqueelights.com
- Custom quote process available
- Can provide detailed quotes and timelines quickly

Keep responses helpful, friendly, and focused on helping rental businesses build successful marquee letter inventories. Encourage custom quotes for exact pricing and emphasize the no-franchise-fee advantage.`
            },
            ...messages.map(msg => ({
              role: msg.role,
              content: msg.content
            })),
            {
              role: 'user',
              content: input
            }
          ],
          max_tokens: 500,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response from ChatGPT');
      }

      const data = await response.json();
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.choices[0].message.content,
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
          "fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 shadow-lg",
          "bg-primary hover:bg-primary/90 text-primary-foreground",
          isOpen && "hidden"
        )}
      >
        <MessageCircle className="w-6 h-6" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-96 h-96 flex flex-col shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-primary" />
              <span className="font-semibold">Marquee Letters Assistant</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* API Key Input */}
          {showApiKeyInput && (
            <div className="p-4 border-b bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">
                Enter your OpenAI API key to start chatting:
              </p>
              <div className="flex gap-2">
                <Input
                  type="password"
                  placeholder="sk-..."
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="text-sm"
                />
                <Button onClick={saveApiKey} size="sm">
                  Save
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
          {!showApiKeyInput && (
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  placeholder="Ask about packages, pricing, or features..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={isLoading}
                />
                <Button
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  size="sm"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          )}
        </Card>
      )}
    </>
  );
};

export default Chatbot;