
import React from 'react';
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
import { CheckCircle } from 'lucide-react';

interface MintFragmentDialogProps {
  fragment: FragmentProps;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const MintFragmentDialog: React.FC<MintFragmentDialogProps> = ({
  fragment,
  open,
  onOpenChange,
}) => {
  const navigate = useNavigate();
  const [isMinting, setIsMinting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleMint = () => {
    setIsMinting(true);
    
    // Simulate minting process
    setTimeout(() => {
      setIsMinting(false);
      setIsSuccess(true);
      
      toast({
        title: "Fragment Minted Successfully!",
        description: `You've minted "${fragment.title}" to your collection.`,
      });
      
      // Reset success state after showing
      setTimeout(() => {
        setIsSuccess(false);
        onOpenChange(false);
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
              <DialogTitle className="font-serif text-2xl text-white">Mint Fragment</DialogTitle>
              <DialogDescription className="font-mono text-white/70">
                You're about to mint "{fragment.title}" to your collection.
              </DialogDescription>
            </DialogHeader>
            
            <div className="py-4">
              <div className="mb-4 p-4 bg-white/5 rounded-md">
                <p className="font-mono text-sm text-white/80 mb-2">Fragment Preview:</p>
                <h3 className="font-serif text-lg text-white mb-2">{fragment.title}</h3>
                <p className="font-mono text-xs text-white/80">{fragment.excerpt}</p>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-md">
                <span className="font-mono text-sm text-white/80">Mint Price:</span>
                <span className="font-mono text-sm text-white">0.0005 ETH</span>
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
                onClick={handleMint}
                disabled={isMinting}
              >
                {isMinting ? "Minting..." : "Confirm Mint"}
              </Button>
            </DialogFooter>
          </>
        ) : (
          <div className="flex flex-col items-center py-6">
            <div className="w-12 h-12 mb-4 text-myth-accent">
              <CheckCircle size={48} />
            </div>
            <h2 className="font-serif text-xl text-white mb-2">Mint Successful!</h2>
            <p className="font-mono text-sm text-white/70 text-center mb-6">
              The fragment is now part of your collection.
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="border-myth-primary/50 text-myth-light hover:bg-myth-primary/20"
                onClick={() => navigate('/dashboard')}
              >
                View Collection
              </Button>
              <Button 
                className="bg-myth-primary hover:bg-myth-primary/90 text-white"
                onClick={() => {
                  onOpenChange(false);
                  // Here we would open the build upon dialog
                }}
              >
                Build Upon
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default MintFragmentDialog;
