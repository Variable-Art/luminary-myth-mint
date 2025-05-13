
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { FragmentProps } from '@/components/FragmentCard';
import { toast } from '@/components/ui/use-toast';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, HelpCircle } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface BuildUponDialogProps {
  parentFragment: FragmentProps;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BuildUponDialog: React.FC<BuildUponDialogProps> = ({
  parentFragment,
  open,
  onOpenChange,
}) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('eth');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [contributionShare, setContributionShare] = useState(30); // Default 30%
  
  // Check if user has Myth Seeds available
  const hasMythSeeds = true; // This would come from a user context or API call
  
  // Calculate points earned per 0.1 ETH
  const calculatePointsPer01Eth = () => {
    // Base points for each 0.1 ETH
    const basePoints = 100;
    // Additional points based on contribution percentage
    const contributionPoints = contributionShare * 2;
    return basePoints + contributionPoints;
  };
  
  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) {
      toast({
        title: "Missing Information",
        description: "Please provide both a title and content for your fragment.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate submission process
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      toast({
        title: "Fragment Created Successfully!",
        description: "Your new fragment has been added to The Luminary.",
      });
      
      // Reset success state after showing
      setTimeout(() => {
        setIsSuccess(false);
        onOpenChange(false);
        navigate('/fragment/new-fragment-id'); // Would navigate to the new fragment
      }, 2000);
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-card border-myth-primary/30 sm:max-w-md">
        <div className="h-1 w-full bg-gradient-to-r from-myth-primary to-myth-accent absolute top-0 left-0"></div>
        
        {!isSuccess ? (
          <>
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl text-white">Build Upon Fragment</DialogTitle>
              <DialogDescription className="font-mono text-white/70">
                Create a new fragment that builds on "{parentFragment.title}".
              </DialogDescription>
            </DialogHeader>
            
            <div className="py-4 space-y-4">
              <div className="space-y-2">
                <label className="font-mono text-sm text-white/80">Fragment Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter a title..."
                  className="w-full px-3 py-2 bg-white/5 border border-myth-primary/30 rounded-md font-mono text-sm text-white/90 focus:outline-none focus:border-myth-accent/50 focus:ring-1 focus:ring-myth-accent/50"
                />
              </div>
              
              <div className="space-y-2">
                <label className="font-mono text-sm text-white/80">Fragment Content</label>
                <Textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Write your fragment..."
                  className="min-h-[100px] w-full px-3 py-2 bg-white/5 border border-myth-primary/30 rounded-md font-mono text-sm text-white/90 focus:outline-none focus:border-myth-accent/50 focus:ring-1 focus:ring-myth-accent/50"
                />
                <p className="text-xs text-white/60 font-mono">{content.length}/500 characters</p>
              </div>
              
              <div className="p-3 bg-white/5 rounded-md">
                <p className="font-mono text-sm text-white/80 mb-2">Building Upon:</p>
                <p className="font-serif text-sm text-white">{parentFragment.title}</p>
                <p className="font-mono text-xs text-white/60">by @{parentFragment.creatorHandle}</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="font-mono text-sm text-white/80">Luminary Contribution</label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-5 w-5 text-white/60 hover:text-white hover:bg-white/10">
                          <HelpCircle size={14} />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="bg-myth-dark border-myth-primary/30 text-white max-w-xs">
                        <p className="text-xs">
                          Choose how much of your 69% creator revenue to share with The Luminary Project.
                          Higher contributions earn you more points and visibility in the community.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-grow">
                    <Slider 
                      value={[contributionShare]} 
                      min={10} 
                      max={100} 
                      step={5}
                      onValueChange={(value) => setContributionShare(value[0])} 
                      className="w-full"
                    />
                  </div>
                  <div className="w-16 text-right font-mono text-white/90 text-sm">
                    {contributionShare}%
                  </div>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-white/60 font-mono">Min: 10%</span>
                  <span className="text-xs text-white/60 font-mono">Max: 100%</span>
                </div>
                <div className="p-2 bg-myth-primary/10 rounded-md mt-2 flex items-center gap-2">
                  <div className="text-myth-accent">🔥</div>
                  <div className="text-xs text-white">
                    <span className="font-bold">{calculatePointsPer01Eth()} points</span> will be earned for every 0.1 ETH this contribution earns
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="font-mono text-sm text-white/80">Payment Method</label>
                <Select
                  value={paymentMethod}
                  onValueChange={(value) => setPaymentMethod(value)}
                >
                  <SelectTrigger className="w-full bg-white/5 border-myth-primary/30 text-white">
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent className="bg-myth-dark border-myth-primary/30">
                    <SelectItem value="eth" className="text-white hover:bg-white/10">
                      Pay 0.001 ETH
                    </SelectItem>
                    {hasMythSeeds && (
                      <SelectItem value="seed" className="text-myth-accent hover:bg-white/10">
                        Use Myth Seed (1 available)
                      </SelectItem>
                    )}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="p-3 bg-white/5 rounded-md space-y-1">
                <p className="font-mono text-sm text-white/80">Revenue Split:</p>
                <div className="flex justify-between">
                  <span className="font-mono text-xs text-white/60">You:</span>
                  <span className="font-mono text-xs text-white/90">69%</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mono text-xs text-white/60">The Luminary:</span>
                  <span className="font-mono text-xs text-white/90">{contributionShare}% of your 69%</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mono text-xs text-white/60">Parent:</span>
                  <span className="font-mono text-xs text-white/90">20%</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mono text-xs text-white/60">Grandparents:</span>
                  <span className="font-mono text-xs text-white/90">10%</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mono text-xs text-white/60">Protocol:</span>
                  <span className="font-mono text-xs text-white/90">1%</span>
                </div>
              </div>
            </div>
            
            <DialogFooter className="flex flex-col sm:flex-row gap-2">
              <Button
                variant="outline"
                className="border-myth-primary/50 text-myth-light hover:bg-myth-primary/20"
                onClick={() => onOpenChange(false)}
              >
                Cancel
              </Button>
              <Button 
                className="bg-myth-primary hover:bg-myth-primary/90 text-white"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Creating..." : "Create Fragment"}
              </Button>
            </DialogFooter>
          </>
        ) : (
          <div className="flex flex-col items-center py-6">
            <div className="w-12 h-12 mb-4 text-myth-accent">
              <CheckCircle size={48} />
            </div>
            <h2 className="font-serif text-xl text-white mb-2">Fragment Created!</h2>
            <p className="font-mono text-sm text-white/70 text-center mb-6">
              Your fragment is now part of The Luminary myth.
            </p>
            <div className="bg-myth-primary/10 p-3 rounded-md w-full text-center">
              <div className="text-myth-accent text-sm mb-1">🔥 {calculatePointsPer01Eth()} points per 0.1 ETH earned</div>
              <div className="text-white/70 text-xs">Contributing {contributionShare}% to The Luminary</div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BuildUponDialog;
