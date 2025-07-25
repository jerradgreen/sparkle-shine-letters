import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Content-Security-Policy': "default-src 'none'; script-src 'none'; object-src 'none';"
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { userEmail, chatTranscript, totalMessages } = await req.json();
    
    // Security: Input validation
    if (!userEmail || typeof userEmail !== 'string' || userEmail.length > 254 ||
        !chatTranscript || typeof chatTranscript !== 'string' || chatTranscript.length > 50000 ||
        !totalMessages || typeof totalMessages !== 'number' || totalMessages > 100) {
      throw new Error('Invalid input parameters');
    }
    
    // Security: Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(userEmail)) {
      throw new Error('Invalid email format');
    }
    
    const webhookUrl = Deno.env.get('ZAPIER_WEBHOOK_URL');
    if (!webhookUrl) {
      throw new Error('Zapier webhook URL not configured');
    }

    console.log('Sending chat transcript to Zapier for user:', userEmail);

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userEmail,
        chatTranscript,
        timestamp: new Date().toISOString(),
        totalMessages,
        triggered_from: 'vintage-marquee-lights-chatbot'
      }),
    });

    if (!response.ok) {
      console.error('Zapier webhook error:', response.status, await response.text());
      throw new Error(`Zapier webhook error: ${response.status}`);
    }

    console.log('Successfully sent chat transcript to Zapier');

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in send-chat-transcript function:', error);
    // Security: Generic error message to avoid information disclosure
    return new Response(JSON.stringify({ error: 'Failed to process request. Please try again.' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});