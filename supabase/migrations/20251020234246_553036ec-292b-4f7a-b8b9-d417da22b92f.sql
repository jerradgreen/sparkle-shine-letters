-- Create rental guide tracking table
CREATE TABLE IF NOT EXISTS public.rental_guide_tracking (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_type TEXT NOT NULL CHECK (event_type IN ('form_page_view', 'thank_you_page_view', 'download_click')),
  user_ip TEXT,
  user_agent TEXT,
  referrer TEXT,
  session_id TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_rental_tracking_event ON public.rental_guide_tracking(event_type);
CREATE INDEX IF NOT EXISTS idx_rental_tracking_created ON public.rental_guide_tracking(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_rental_tracking_session ON public.rental_guide_tracking(session_id);

-- Enable RLS
ALTER TABLE public.rental_guide_tracking ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert tracking data (anonymous tracking)
CREATE POLICY "Allow anonymous insert for tracking"
ON public.rental_guide_tracking
FOR INSERT
TO anon
WITH CHECK (true);

-- Allow authenticated users to read tracking data (for admin dashboard)
CREATE POLICY "Allow authenticated read for tracking"
ON public.rental_guide_tracking
FOR SELECT
TO authenticated
USING (true);

-- Allow public read for admin dashboard (if we want public access)
CREATE POLICY "Allow public read for tracking"
ON public.rental_guide_tracking
FOR SELECT
TO anon
USING (true);