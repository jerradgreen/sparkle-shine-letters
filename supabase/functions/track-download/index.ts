import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface TrackingEvent {
  event_type: 'form_page_view' | 'thank_you_page_view' | 'download_click';
  user_ip?: string;
  user_agent?: string;
  referrer?: string;
  session_id?: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_ANON_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { event_type, referrer, user_agent, session_id }: TrackingEvent = await req.json();

    // Get client IP from request headers
    const user_ip = req.headers.get('x-forwarded-for')?.split(',')[0] || 
                    req.headers.get('x-real-ip') || 
                    'unknown';

    console.log(`Tracking event: ${event_type} from IP: ${user_ip}, Session: ${session_id}`);

    // Insert tracking event
    const { data, error } = await supabase
      .from('rental_guide_tracking')
      .insert({
        event_type,
        user_ip,
        user_agent,
        referrer,
        session_id,
      })
      .select()
      .single();

    if (error) {
      console.error('Error inserting tracking event:', error);
      throw error;
    }

    console.log('Successfully tracked event:', data);

    return new Response(
      JSON.stringify({ success: true, data }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error: any) {
    console.error('Error in track-download function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
