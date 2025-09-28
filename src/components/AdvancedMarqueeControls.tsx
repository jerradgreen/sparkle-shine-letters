import React from 'react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, RotateCcw } from 'lucide-react';
import { MarqueeSettings, DEFAULT_MARQUEE_SETTINGS } from '@/types/marquee';

interface AdvancedMarqueeControlsProps {
  settings: MarqueeSettings;
  onSettingsChange: (settings: MarqueeSettings) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export const AdvancedMarqueeControls: React.FC<AdvancedMarqueeControlsProps> = ({
  settings,
  onSettingsChange,
  isOpen,
  onToggle
}) => {
  const updateSetting = (path: string, value: number) => {
    const newSettings = { ...settings };
    if (path.includes('.')) {
      const [parent, child] = path.split('.');
      (newSettings as any)[parent] = {
        ...(newSettings as any)[parent],
        [child]: value
      };
    } else {
      (newSettings as any)[path] = value;
    }
    onSettingsChange(newSettings);
  };

  const resetToDefaults = () => {
    onSettingsChange(DEFAULT_MARQUEE_SETTINGS);
  };

  const copySettings = () => {
    navigator.clipboard.writeText(JSON.stringify(settings, null, 2));
  };

  return (
    <Collapsible open={isOpen} onOpenChange={onToggle}>
      <CollapsibleTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-between mb-4"
        >
          Advanced Controls
          <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </Button>
      </CollapsibleTrigger>
      
      <CollapsibleContent className="space-y-4">
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="text-lg">Manual Adjustments</CardTitle>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={resetToDefaults}
                className="flex items-center gap-2"
              >
                <RotateCcw className="h-3 w-3" />
                Reset
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={copySettings}
              >
                Copy Settings
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Spacing Controls */}
            <div className="space-y-4">
              <h4 className="font-medium">Letter Spacing</h4>
              
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">
                  Main Text Kerning: {settings.mainKerning}px
                </label>
                <Slider
                  value={[settings.mainKerning]}
                  onValueChange={([value]) => updateSetting('mainKerning', value)}
                  min={1}
                  max={20}
                  step={1}
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">
                  Topper Kerning: {settings.topperKerning}px
                </label>
                <Slider
                  value={[settings.topperKerning]}
                  onValueChange={([value]) => updateSetting('topperKerning', value)}
                  min={1}
                  max={15}
                  step={1}
                  className="w-full"
                />
              </div>
            </div>

            {/* Size & Position Controls */}
            <div className="space-y-4">
              <h4 className="font-medium">Size & Position</h4>
              
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">
                  Topper Size Ratio: {settings.topperSizeRatio.toFixed(2)}
                </label>
                <Slider
                  value={[settings.topperSizeRatio]}
                  onValueChange={([value]) => updateSetting('topperSizeRatio', value)}
                  min={0.70}
                  max={0.95}
                  step={0.01}
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">
                  Overlap Factor: {settings.overlapFactor.toFixed(2)}
                </label>
                <Slider
                  value={[settings.overlapFactor]}
                  onValueChange={([value]) => updateSetting('overlapFactor', value)}
                  min={0.10}
                  max={0.40}
                  step={0.01}
                  className="w-full"
                />
              </div>
            </div>

            {/* Scaling Controls */}
            <div className="space-y-4">
              <h4 className="font-medium">Auto-Scaling</h4>
              
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">
                  Per-Character Shrink: {settings.perCharacterShrink.toFixed(3)}
                </label>
                <Slider
                  value={[settings.perCharacterShrink]}
                  onValueChange={([value]) => updateSetting('perCharacterShrink', value)}
                  min={0.010}
                  max={0.030}
                  step={0.001}
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">
                  Min Main Scale: {settings.minMainScale.toFixed(2)}
                </label>
                <Slider
                  value={[settings.minMainScale]}
                  onValueChange={([value]) => updateSetting('minMainScale', value)}
                  min={0.20}
                  max={0.60}
                  step={0.01}
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">
                  Min Topper Scale: {settings.minTopperScale.toFixed(2)}
                </label>
                <Slider
                  value={[settings.minTopperScale]}
                  onValueChange={([value]) => updateSetting('minTopperScale', value)}
                  min={0.15}
                  max={0.50}
                  step={0.01}
                  className="w-full"
                />
              </div>
            </div>

            {/* Vertical Position by Device */}
            <Tabs defaultValue="desktop" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="desktop">Desktop</TabsTrigger>
                <TabsTrigger value="portrait">Mobile Portrait</TabsTrigger>
                <TabsTrigger value="landscape">Mobile Landscape</TabsTrigger>
              </TabsList>
              
              <TabsContent value="desktop" className="space-y-2">
                <label className="text-sm text-muted-foreground">
                  Desktop Vertical Offset: {settings.verticalOffset.desktop}px
                </label>
                <Slider
                  value={[settings.verticalOffset.desktop]}
                  onValueChange={([value]) => updateSetting('verticalOffset.desktop', value)}
                  min={200}
                  max={500}
                  step={10}
                  className="w-full"
                />
              </TabsContent>
              
              <TabsContent value="portrait" className="space-y-2">
                <label className="text-sm text-muted-foreground">
                  Mobile Portrait Vertical Offset: {settings.verticalOffset.mobilePortrait}px
                </label>
                <Slider
                  value={[settings.verticalOffset.mobilePortrait]}
                  onValueChange={([value]) => updateSetting('verticalOffset.mobilePortrait', value)}
                  min={400}
                  max={800}
                  step={10}
                  className="w-full"
                />
              </TabsContent>
              
              <TabsContent value="landscape" className="space-y-2">
                <label className="text-sm text-muted-foreground">
                  Mobile Landscape Vertical Offset: {settings.verticalOffset.mobileLandscape}px
                </label>
                <Slider
                  value={[settings.verticalOffset.mobileLandscape]}
                  onValueChange={([value]) => updateSetting('verticalOffset.mobileLandscape', value)}
                  min={200}
                  max={400}
                  step={10}
                  className="w-full"
                />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </CollapsibleContent>
    </Collapsible>
  );
};