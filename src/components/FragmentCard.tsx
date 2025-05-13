
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import MintFragmentDialog from './MintFragmentDialog';
import BuildUponDialog from './BuildUponDialog';

export interface FragmentProps {
  id: string;
  title: string;
  excerpt: string;
  creator: string;
  creatorHandle: string;
  echoScore: number;
  generation: number;
  parents: string[];
}

const FragmentCard: React.FC<{ fragment: FragmentProps; featured?: boolean }> = ({ 
  fragment, 
  featured = false 
}) => {
  const [mintDialogOpen, setMintDialogOpen] = useState(false);
  const [buildDialogOpen, setBuildDialogOpen] = useState(false);

  return (
    <>
      <Card 
        className={`glass-card border-myth-primary/30 transition-all duration-300 hover:border-myth-accent/50 overflow-hidden ${
          featured ? 'col-span-2 row-span-2' : ''
        }`}
      >
        <div className="h-1 w-full bg-gradient-to-r from-myth-primary to-myth-accent"></div>
        <CardHeader className="pb-2">
          <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
            <Badge variant="outline" className="bg-transparent border-myth-accent/50 text-myth-accent">
              Echo Score: {fragment.echoScore}
            </Badge>
          </div>
          <h3 className="font-serif text-xl text-white font-bold">{fragment.title}</h3>
        </CardHeader>
        <CardContent>
          <p className="font-mono text-sm text-white/80 mb-4">
            {fragment.excerpt}
          </p>
          <div className="text-xs text-white/60 font-mono">
            By: <span className="text-myth-accent">@{fragment.creatorHandle}</span>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t border-white/10 pt-4">
          <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/5">
            <Link to={`/fragment/${fragment.id}`}>View Details</Link>
          </Button>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="border-myth-primary/50 text-myth-light hover:bg-myth-primary/20"
              onClick={() => setMintDialogOpen(true)}
            >
              Mint
            </Button>
            <Button 
              size="sm" 
              className="bg-myth-primary hover:bg-myth-primary/90 text-white"
              onClick={() => setBuildDialogOpen(true)}
            >
              Build Upon
            </Button>
          </div>
        </CardFooter>
      </Card>

      <MintFragmentDialog 
        fragment={fragment} 
        open={mintDialogOpen} 
        onOpenChange={setMintDialogOpen} 
      />
      
      <BuildUponDialog 
        parentFragment={fragment} 
        open={buildDialogOpen} 
        onOpenChange={setBuildDialogOpen} 
      />
    </>
  );
};

export default FragmentCard;
