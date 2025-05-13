
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MythNavbar from '@/components/MythNavbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FragmentProps } from '@/components/FragmentCard';
import { ArrowLeft, Search, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample fragments data for parent selection
import { allFragmentsData } from '@/data/fragmentsData';

const NewFragment: React.FC = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedParents, setSelectedParents] = useState<FragmentProps[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('eth');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Check if user has Myth Seeds available
  const hasMythSeeds = true; // This would come from a user context or API call
  
  // Filter fragments for parent selection
  const filteredFragments = allFragmentsData
    .filter(fragment => 
      fragment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fragment.creatorHandle.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
  const handleAddParent = (fragment: FragmentProps) => {
    if (selectedParents.length < 3 && !selectedParents.some(p => p.id === fragment.id)) {
      setSelectedParents([...selectedParents, fragment]);
    } else if (selectedParents.length >= 3) {
      toast({
        title: "Maximum Parents Reached",
        description: "You can select up to 3 parent fragments.",
      });
    }
  };
  
  const handleRemoveParent = (fragmentId: string) => {
    setSelectedParents(selectedParents.filter(p => p.id !== fragmentId));
  };
  
  const handleSubmit = () => {
    if (!title.trim()) {
      toast({
        title: "Missing Title",
        description: "Please provide a title for your fragment.",
        variant: "destructive",
      });
      return;
    }
    
    if (!content.trim()) {
      toast({
        title: "Missing Content",
        description: "Please provide content for your fragment.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate submission process
    setTimeout(() => {
      setIsSubmitting(false);
      
      toast({
        title: "Fragment Created Successfully!",
        description: "Your new fragment has been added to The Luminary.",
      });
      
      navigate('/explore'); // Navigate back to explore page
    }, 1500);
  };

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
          
          <h1 className="font-serif text-3xl text-white font-bold mb-6">Create New Fragment</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Column */}
            <div className="lg:col-span-2">
              <Card className="glass-card border-myth-primary/30 overflow-hidden">
                <div className="h-1 w-full bg-gradient-to-r from-myth-primary to-myth-accent"></div>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="title" className="block font-mono text-sm text-white/80">Fragment Title</label>
                      <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter a title..."
                        className="w-full px-4 py-2 bg-white/5 border border-myth-primary/30 rounded-md font-mono text-white focus:outline-none focus:border-myth-accent/50 focus:ring-1 focus:ring-myth-accent/50"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="content" className="block font-mono text-sm text-white/80">Fragment Content</label>
                      <Textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Write your fragment..."
                        className="min-h-[200px] w-full px-4 py-2 bg-white/5 border border-myth-primary/30 rounded-md font-mono text-white focus:outline-none focus:border-myth-accent/50 focus:ring-1 focus:ring-myth-accent/50"
                      />
                      <p className="text-xs text-white/60 font-mono">
                        {content.length}/500 characters
                      </p>
                    </div>
                    
                    {selectedParents.length > 0 && (
                      <div className="space-y-2">
                        <h3 className="font-mono text-sm text-white/80">Selected Parent Fragments:</h3>
                        <div className="space-y-2">
                          {selectedParents.map(parent => (
                            <div key={parent.id} className="flex justify-between items-center p-3 bg-white/5 rounded-md">
                              <div>
                                <p className="font-serif text-sm text-white">{parent.title}</p>
                                <p className="font-mono text-xs text-white/60">by @{parent.creatorHandle}</p>
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-white/50 hover:text-white hover:bg-white/10"
                                onClick={() => handleRemoveParent(parent.id)}
                              >
                                Remove
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="pt-4 border-t border-white/10">
                      <div className="space-y-2">
                        <label className="block font-mono text-sm text-white/80">Payment Method</label>
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
                    </div>
                    
                    <Button 
                      className="w-full bg-myth-primary hover:bg-myth-primary/90 text-white mt-4"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Creating Fragment..." : "Create Fragment"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Sidebar Column */}
            <div className="space-y-6">
              <Card className="glass-card border-myth-primary/30 overflow-hidden">
                <div className="h-1 w-full bg-gradient-to-r from-myth-primary to-myth-accent"></div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl text-white font-bold mb-4">Add Parent Fragments</h3>
                  <p className="font-mono text-sm text-white/70 mb-4">
                    You can select up to 3 parent fragments. Building upon others earns them a portion of future revenue.
                  </p>
                  
                  <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" size={18} />
                    <input
                      type="text"
                      placeholder="Search fragments..."
                      className="w-full pl-10 pr-4 py-2 bg-white/5 border border-myth-primary/30 rounded-md font-mono text-sm text-white/90 focus:outline-none focus:border-myth-accent/50 focus:ring-1 focus:ring-myth-accent/50"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-3 max-h-[300px] overflow-y-auto scrollbar-none pr-1">
                    {filteredFragments.length > 0 ? (
                      filteredFragments.map(fragment => (
                        <div 
                          key={fragment.id} 
                          className="p-3 bg-white/5 rounded-md hover:bg-white/10 transition-colors flex justify-between items-center"
                        >
                          <div>
                            <p className="font-serif text-sm text-white/90 font-medium">{fragment.title}</p>
                            <p className="font-mono text-xs text-white/60">by @{fragment.creatorHandle}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-myth-accent hover:bg-myth-accent/10"
                            onClick={() => handleAddParent(fragment)}
                            disabled={selectedParents.some(p => p.id === fragment.id) || selectedParents.length >= 3}
                          >
                            <Plus size={16} />
                          </Button>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-4">
                        <p className="font-mono text-sm text-white/60">No fragments found</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-myth-primary/30 overflow-hidden">
                <div className="h-1 w-full bg-gradient-to-r from-myth-primary to-myth-accent"></div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl text-white font-bold mb-4">Revenue Split</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-md">
                      <span className="font-mono text-sm text-white/80">You:</span>
                      <span className="font-mono text-sm text-white">
                        {selectedParents.length === 0 ? "99%" : "69%"}
                      </span>
                    </div>
                    
                    {selectedParents.length > 0 && (
                      <div className="flex justify-between items-center p-3 bg-white/5 rounded-md">
                        <span className="font-mono text-sm text-white/80">Parents:</span>
                        <span className="font-mono text-sm text-white">20%</span>
                      </div>
                    )}
                    
                    {selectedParents.length > 0 && selectedParents.some(p => p.parents.length > 0) && (
                      <div className="flex justify-between items-center p-3 bg-white/5 rounded-md">
                        <span className="font-mono text-sm text-white/80">Grandparents:</span>
                        <span className="font-mono text-sm text-white">10%</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-md">
                      <span className="font-mono text-sm text-white/80">Protocol:</span>
                      <span className="font-mono text-sm text-white">
                        {selectedParents.length === 0 ? "1%" : "1%"}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NewFragment;
