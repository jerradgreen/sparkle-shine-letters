import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw, TrendingUp, MousePointer, Eye, Download } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { formatDistanceToNow } from "date-fns";

interface TrackingEvent {
  id: string;
  event_type: 'form_page_view' | 'thank_you_page_view' | 'download_click';
  user_ip: string;
  user_agent: string;
  referrer: string;
  session_id: string;
  created_at: string;
}

interface Stats {
  formPageViews: number;
  thankYouPageViews: number;
  downloadClicks: number;
  conversionRate: number;
  clickRate: number;
}

const DownloadStats = () => {
  const [events, setEvents] = useState<TrackingEvent[]>([]);
  const [stats, setStats] = useState<Stats>({
    formPageViews: 0,
    thankYouPageViews: 0,
    downloadClicks: 0,
    conversionRate: 0,
    clickRate: 0,
  });
  const [loading, setLoading] = useState(true);
  const [dateFilter, setDateFilter] = useState<'today' | 'week' | 'month' | 'all'>('all');

  const fetchData = async () => {
    setLoading(true);
    try {
      let query = supabase
        .from('rental_guide_tracking')
        .select('*')
        .order('created_at', { ascending: false });

      // Apply date filter
      const now = new Date();
      if (dateFilter === 'today') {
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        query = query.gte('created_at', today.toISOString());
      } else if (dateFilter === 'week') {
        const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        query = query.gte('created_at', weekAgo.toISOString());
      } else if (dateFilter === 'month') {
        const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        query = query.gte('created_at', monthAgo.toISOString());
      }

      const { data, error } = await query.limit(100);

      if (error) throw error;

      setEvents((data as TrackingEvent[]) || []);

      // Calculate stats
      const formViews = data?.filter(e => e.event_type === 'form_page_view').length || 0;
      const thankYouViews = data?.filter(e => e.event_type === 'thank_you_page_view').length || 0;
      const downloads = data?.filter(e => e.event_type === 'download_click').length || 0;

      setStats({
        formPageViews: formViews,
        thankYouPageViews: thankYouViews,
        downloadClicks: downloads,
        conversionRate: formViews > 0 ? (thankYouViews / formViews) * 100 : 0,
        clickRate: thankYouViews > 0 ? (downloads / thankYouViews) * 100 : 0,
      });
    } catch (error) {
      console.error('Error fetching tracking data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [dateFilter]);

  const getEventIcon = (eventType: string) => {
    switch (eventType) {
      case 'form_page_view':
        return <Eye className="h-4 w-4 text-blue-500" />;
      case 'thank_you_page_view':
        return <MousePointer className="h-4 w-4 text-green-500" />;
      case 'download_click':
        return <Download className="h-4 w-4 text-purple-500" />;
      default:
        return null;
    }
  };

  const getEventLabel = (eventType: string) => {
    switch (eventType) {
      case 'form_page_view':
        return 'Form Page View';
      case 'thank_you_page_view':
        return 'Thank You Page View';
      case 'download_click':
        return 'Download Click';
      default:
        return eventType;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Download Stats - Admin Dashboard</title>
        <meta name="description" content="Track rental guide download statistics" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Download Statistics</h1>
              <p className="text-muted-foreground">Track rental guide download funnel performance</p>
            </div>
            <Button onClick={fetchData} disabled={loading}>
              <RefreshCw className={`mr-2 h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
          </div>

          {/* Date Filter */}
          <div className="flex gap-2 mb-6">
            <Button 
              variant={dateFilter === 'today' ? 'default' : 'outline'}
              onClick={() => setDateFilter('today')}
              size="sm"
            >
              Today
            </Button>
            <Button 
              variant={dateFilter === 'week' ? 'default' : 'outline'}
              onClick={() => setDateFilter('week')}
              size="sm"
            >
              Last 7 Days
            </Button>
            <Button 
              variant={dateFilter === 'month' ? 'default' : 'outline'}
              onClick={() => setDateFilter('month')}
              size="sm"
            >
              Last 30 Days
            </Button>
            <Button 
              variant={dateFilter === 'all' ? 'default' : 'outline'}
              onClick={() => setDateFilter('all')}
              size="sm"
            >
              All Time
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Form Page Views</CardTitle>
                <Eye className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.formPageViews}</div>
                <p className="text-xs text-muted-foreground">
                  People who visited the download page
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Thank You Page Views</CardTitle>
                <MousePointer className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.thankYouPageViews}</div>
                <p className="text-xs text-muted-foreground">
                  {stats.conversionRate.toFixed(1)}% conversion rate
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Download Clicks</CardTitle>
                <Download className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.downloadClicks}</div>
                <p className="text-xs text-muted-foreground">
                  {stats.clickRate.toFixed(1)}% click rate
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Conversion Funnel */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Conversion Funnel
              </CardTitle>
              <CardDescription>Track user journey through the download process</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-32 text-sm font-medium">Form Page</div>
                  <div className="flex-1">
                    <div className="h-8 bg-blue-500/20 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-500 flex items-center justify-end pr-4 text-white text-sm font-medium"
                        style={{ width: '100%' }}
                      >
                        {stats.formPageViews}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-32 text-sm font-medium">Thank You Page</div>
                  <div className="flex-1">
                    <div className="h-8 bg-green-500/20 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-green-500 flex items-center justify-end pr-4 text-white text-sm font-medium"
                        style={{ 
                          width: stats.formPageViews > 0 
                            ? `${(stats.thankYouPageViews / stats.formPageViews) * 100}%`
                            : '0%'
                        }}
                      >
                        {stats.thankYouPageViews} ({stats.conversionRate.toFixed(1)}%)
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-32 text-sm font-medium">Downloads</div>
                  <div className="flex-1">
                    <div className="h-8 bg-purple-500/20 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-purple-500 flex items-center justify-end pr-4 text-white text-sm font-medium"
                        style={{ 
                          width: stats.formPageViews > 0 
                            ? `${(stats.downloadClicks / stats.formPageViews) * 100}%`
                            : '0%'
                        }}
                      >
                        {stats.downloadClicks} ({stats.clickRate.toFixed(1)}%)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Last 50 events</CardDescription>
            </CardHeader>
            <CardContent>
              {events.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  No tracking data yet. Events will appear here once users start interacting with the download page.
                </div>
              ) : (
                <div className="space-y-3 max-h-[500px] overflow-y-auto">
                  {events.map((event) => (
                    <div 
                      key={event.id} 
                      className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      {getEventIcon(event.event_type)}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-sm">
                            {getEventLabel(event.event_type)}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {formatDistanceToNow(new Date(event.created_at), { addSuffix: true })}
                          </span>
                        </div>
                        <div className="text-xs text-muted-foreground space-y-1">
                          <div className="truncate">
                            IP: {event.user_ip} • Session: {event.session_id?.slice(0, 8)}...
                          </div>
                          {event.referrer && event.referrer !== 'direct' && (
                            <div className="truncate">Referrer: {event.referrer}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DownloadStats;
