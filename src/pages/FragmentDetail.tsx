
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import MythNavbar from '@/components/MythNavbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FragmentProps } from '@/components/FragmentCard';
import { ArrowLeft } from 'lucide-react';
import MintFragmentDialog from '@/components/MintFragmentDialog';
import BuildUponDialog from '@/components/BuildUponDialog';
import { allFragmentsData, extendedContent, childFragments } from '@/data/fragmentsData';

const FragmentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const fragment = allFragmentsData.find(f => f.id === id);
  const [mintDialogOpen, setMintDialogOpen] = useState(false);
  const [buildDialogOpen, setBuildDialogOpen] = useState(false);
  
  if (!fragment) {
    return (
      <div className="min-h-screen flex flex-col">
        <MythNavbar />
        <main className="flex-grow pt-24 pb-16 container mx-auto px-4">
          <div className="text-center py-16">
            <h1 className="font-serif text-3xl text-white mb-4">Fragment Not Found</h1>
            <p className="font-mono text-white/70 mb-6">The fragment you're looking for doesn't exist or has been removed.</p>
            <Button asChild className="bg-myth-primary hover:bg-myth-primary/90 text-white">
              <Link to="/explore">Return to Explore</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  // Get the full content for this fragment
  const fullContent = extendedContent[id as keyof typeof extendedContent] || fragment.excerpt;
  
  // Get parent fragments
  const parentFragments = fragment.parents.map(parentTitle => {
    return allFragmentsData.find(f => f.title === parentTitle);
  }).filter(Boolean);
  
  // Get child fragments
  const fragmentChildren = (childFragments[id as keyof typeof childFragments] || [])
    .map(childId => allFragmentsData.find(f => f.id === childId))
    .filter(Boolean) as FragmentProps[];

  return (
    <div className="min-h-screen flex flex-col">
      <MythNavbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-6 text-white/70 hover:text-white hover:bg-white/5">
            <Link to="/explore" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              Back to Explore
            </Link>
          </Button>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Column */}
            <div className="lg:col-span-2">
              <Card className="glass-card border-myth-primary/30 overflow-hidden">
                <div className="h-1 w-full bg-gradient-to-r from-myth-primary to-myth-accent"></div>
                <CardContent className="p-6">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                    <Badge variant="outline" className="bg-myth-primary/20 text-myth-light border-myth-primary/50">
                      Generation {fragment.generation}
                    </Badge>
                    <Badge variant="outline" className="bg-transparent border-myth-accent/50 text-myth-accent">
                      Echo Score: {fragment.echoScore}
                    </Badge>
                  </div>
                  
                  <h1 className="font-serif text-3xl text-white font-bold mb-4">{fragment.title}</h1>
                  
                  <div className="mb-6">
                    <p className="font-mono text-sm text-white/70 mb-2">
                      Created by <span className="text-myth-accent">@{fragment.creatorHandle}</span>
                    </p>
                  </div>
                  
                  <div className="prose prose-invert max-w-none font-mono text-white/90">
                    <p className="leading-relaxed">{fullContent}</p>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-white/10 flex justify-between">
                    <Button 
                      variant="outline" 
                      className="border-myth-primary/50 text-myth-light hover:bg-myth-primary/20"
                      onClick={() => setMintDialogOpen(true)}
                    >
                      Mint This Fragment
                    </Button>
                    <Button 
                      className="bg-myth-primary hover:bg-myth-primary/90 text-white"
                      onClick={() => setBuildDialogOpen(true)}
                    >
                      Build Upon
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Sidebar Column */}
            <div className="space-y-6">
              {/* Fragment Details */}
              <Card className="glass-card border-myth-primary/30 overflow-hidden">
                <div className="h-1 w-full bg-gradient-to-r from-myth-primary to-myth-accent"></div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl text-white font-bold mb-4">Fragment Details</h3>
                  
                  <div className="space-y-4 font-mono text-sm">
                    <div>
                      <p className="text-white/60">Fragment ID</p>
                      <p className="text-white/90">#{fragment.id}</p>
                    </div>
                    <div>
                      <p className="text-white/60">Generation</p>
                      <p className="text-white/90">{fragment.generation}</p>
                    </div>
                    <div>
                      <p className="text-white/60">Echo Score</p>
                      <p className="text-white/90">{fragment.echoScore}</p>
                    </div>
                    <div>
                      <p className="text-white/60">Minting Price</p>
                      <p className="text-white/90">0.0005 ETH</p>
                    </div>
                    <div>
                      <p className="text-white/60">Build Price</p>
                      <p className="text-white/90">0.001 ETH <span className="text-myth-accent">(or use a Myth Seed)</span></p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Parent Fragments */}
              {parentFragments.length > 0 && (
                <Card className="glass-card border-myth-primary/30 overflow-hidden">
                  <div className="h-1 w-full bg-gradient-to-r from-myth-primary to-myth-accent"></div>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl text-white font-bold mb-4">Built Upon</h3>
                    
                    <div className="space-y-3">
                      {parentFragments.map(parent => (
                        parent && (
                          <Link to={`/fragment/${parent.id}`} key={parent.id}>
                            <div className="p-3 bg-white/5 rounded-md hover:bg-white/10 transition-colors">
                              <p className="font-serif text-white/90 font-semibold">{parent.title}</p>
                              <p className="font-mono text-xs text-white/60">by @{parent.creatorHandle}</p>
                            </div>
                          </Link>
                        )
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
              
              {/* Child Fragments */}
              {fragmentChildren.length > 0 && (
                <Card className="glass-card border-myth-primary/30 overflow-hidden">
                  <div className="h-1 w-full bg-gradient-to-r from-myth-primary to-myth-accent"></div>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl text-white font-bold mb-4">Built Upon By</h3>
                    
                    <div className="space-y-3">
                      {fragmentChildren.map(child => (
                        <Link to={`/fragment/${child.id}`} key={child.id}>
                          <div className="p-3 bg-white/5 rounded-md hover:bg-white/10 transition-colors">
                            <p className="font-serif text-white/90 font-semibold">{child.title}</p>
                            <p className="font-mono text-xs text-white/60">by @{child.creatorHandle}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      
      {/* Dialogs */}
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
    </div>
  );
};

export default FragmentDetail;
