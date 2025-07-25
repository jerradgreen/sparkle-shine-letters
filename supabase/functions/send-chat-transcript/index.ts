import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { userEmail, chatTranscript, totalMessages } = await req.json();
    
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
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});