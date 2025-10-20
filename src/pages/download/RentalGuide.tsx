import { useEffect } from 'react';
import { FormPageTemplate } from '@/components/templates/FormPageTemplate';
import { supabase } from '@/integrations/supabase/client';

const RentalGuide = () => {
  useEffect(() => {
    // Wrap in timeout to ensure it doesn't block rendering
    const trackPageView = async () => {
      try {
        // Generate or retrieve session ID
        let sessionId = sessionStorage.getItem('rental_guide_session');
        if (!sessionId) {
          sessionId = crypto.randomUUID();
          sessionStorage.setItem('rental_guide_session', sessionId);
        }

        // Track form page view
        const { error } = await supabase.functions.invoke('track-download', {
          body: {
            event_type: 'form_page_view',
            referrer: document.referrer || 'direct',
            user_agent: navigator.userAgent,
            session_id: sessionId,
          }
        });

        if (error) {
          console.error('Tracking error:', error);
        } else {
          console.log('Tracked form page view');
        }
      } catch (error) {
        // Silent fail - tracking shouldn't break the page
        console.error('Error tracking page view:', error);
      }
    };

    // Delay tracking slightly to not interfere with page load
    setTimeout(trackPageView, 500);
  }, []);

  return (
    <FormPageTemplate
      title="Download Free Rental Guide"
      description="Get our comprehensive guide to starting your marquee light rental business"
      formId="11"
      prefill={{ 'WhatStyleOfSignAreYouWantingUsToMake': 'Download Rental Guide' }}
    />
  );
};

export default RentalGuide;
