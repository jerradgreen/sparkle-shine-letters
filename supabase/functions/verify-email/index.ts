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
    const { email } = await req.json();
    
    // Security: Input validation
    if (!email || typeof email !== 'string' || email.length > 254) {
      throw new Error('Invalid email format');
    }

    // Basic email format validation first
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ 
        valid: false, 
        reason: 'Invalid email format' 
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const abstractApiKey = Deno.env.get('ABSTRACT_API_EMAIL_KEY');
    if (!abstractApiKey) {
      console.error('Abstract API key not configured');
      // Fallback to basic validation if API key not available
      return new Response(JSON.stringify({ 
        valid: true, 
        reason: 'Basic validation only' 
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log('Verifying email with Abstract API:', email);

    // Call Abstract API for email verification
    const response = await fetch(`https://emailvalidation.abstractapi.com/v1/?api_key=${abstractApiKey}&email=${encodeURIComponent(email)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.error('Abstract API error:', response.status, await response.text());
      // Fallback to basic validation if API fails
      return new Response(JSON.stringify({ 
        valid: true, 
        reason: 'API unavailable, basic validation passed' 
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const data = await response.json();
    console.log('Abstract API response:', data);

    // Check Abstract API response
    const isValid = data.deliverability === 'DELIVERABLE' && 
                   !data.is_disposable_email.value && 
                   data.is_valid_format.value;

    let reason = '';
    if (!data.is_valid_format.value) {
      reason = 'Invalid email format';
    } else if (data.is_disposable_email.value) {
      reason = 'Temporary/disposable email addresses are not allowed';
    } else if (data.deliverability !== 'DELIVERABLE') {
      reason = 'Email address appears to be undeliverable';
    }

    return new Response(JSON.stringify({ 
      valid: isValid,
      reason: reason || 'Email verified successfully'
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in verify-email function:', error);
    // Security: Generic error message and fallback to basic validation
    return new Response(JSON.stringify({ 
      valid: true, 
      reason: 'Verification service unavailable, proceeding with basic validation' 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});