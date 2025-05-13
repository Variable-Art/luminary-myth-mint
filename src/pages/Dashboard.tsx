
import React from 'react';
import MythNavbar from '@/components/MythNavbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/components/ui/use-toast';
import { Layers, Gift, Star, Coins, Flame } from 'lucide-react';
import FragmentCard, { FragmentProps } from '@/components/FragmentCard';

// Sample user fragments (just two for the dashboard demo)
const userFragments: FragmentProps[] = [
  {
    id: "3",
    title: "The Hill of Forgotten Code",
    excerpt: "Atop the hill, beneath rusted pylons, children whispered to machines buried in vines. One of them replied. It asked: \"Are you still human?\"",
    creator: "Sophia AI",
    creatorHandle: "sophiaAI",
    echoScore: 21,
    generation: 3,
    parents: ["Wires in the Rain"],
    points: 128
  },
  {
    id: "7",
    title: "The Thinking Root",
    excerpt: "When the first root broke through the concrete, they called it a weed. When it started growing toward the power lines, they called it a threat.",
    creator: "Green Mind",
    creatorHandle: "green_mind",
    echoScore: 8,
    generation: 4,
    parents: ["The Hill of Forgotten Code", "Echoes in the Rootnet"],
    points: 63
  }
];

const Dashboard: React.FC = () => {
  const handleCreateMyth = () => {
    toast({
      title: "Coming Soon",
      description: "The Luminary is the only live myth for now. Ability to launch your own myth coming soon.",
      variant: "default",
    });
  };
  
  const handleGiveSeed = () => {
    toast({
      title: "Seed Gifted",
      description: "You've gifted a Myth Seed to @cryptofriend. They can now build on your fragment for free.",
      variant: "default",
    });
  };

  // User stats for the dashboard
  const userStats = {
    totalPoints: 191,
    fragmentsCreated: 2,
    fragmentsEchoed: 5,
    contributionLevel: 30, // percentage
    currentTier: "Flame" // Ember, Flame, Beacon, Archive
  };

  return (
    <div className="min-h-screen flex flex-col">
      <MythNavbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <header className="mb-10">
            <h1 className="font-serif text-4xl font-bold text-gradient-purple mb-2">Creator Dashboard</h1>
            <p className="font-mono text-white/70">Manage your fragments, track your impact, and grow The Luminary.</p>
          </header>
          
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <Card className="glass-card border-myth-primary/30 overflow-hidden">
              <div className="h-1 w-full bg-gradient-to-r from-myth-primary to-myth-accent"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-mono text-white/80 flex items-center">
                  <Layers size={18} className="mr-2 text-myth-accent" /> Your Fragments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-serif text-myth-accent">{userStats.fragmentsCreated}</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-myth-primary/30 overflow-hidden">
              <div className="h-1 w-full bg-gradient-to-r from-myth-primary to-myth-accent"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-mono text-white/80 flex items-center">
                  <Star size={18} className="mr-2 text-myth-accent" /> Echo Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-serif text-myth-accent">29</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-myth-primary/30 overflow-hidden">
              <div className="h-1 w-full bg-gradient-to-r from-myth-primary to-myth-accent"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-mono text-white/80 flex items-center">
                  <Gift size={18} className="mr-2 text-myth-accent" /> Myth Seeds
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-serif text-myth-accent">1</p>
                <p className="text-xs font-mono text-white/60">Expires in 3 days</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-myth-primary/30 overflow-hidden">
              <div className="h-1 w-full bg-gradient-to-r from-myth-primary to-myth-accent"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-mono text-white/80 flex items-center">
                  <Coins size={18} className="mr-2 text-myth-accent" /> Earnings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-serif text-myth-accent">0.0035 ETH</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Points & Contribution Section - New */}
          <Card className="glass-card border-myth-primary/30 overflow-hidden mb-10">
            <div className="h-1 w-full bg-gradient-to-r from-myth-primary to-myth-accent"></div>
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-white">Points & Contribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row items-start gap-8">
                {/* Total Points & Tier */}
                <div className="glass-card p-6 rounded-lg w-full md:w-1/2">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-serif text-xl text-white">Total Points</h3>
                    <Badge className="bg-myth-primary/30 text-myth-light border-myth-primary/50 text-lg px-3 py-1">
                      <Flame size={16} className="mr-2" /> {userStats.totalPoints} pts
                    </Badge>
                  </div>
                  
                  <div className="bg-white/5 p-4 rounded-md mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-mono text-white/80">Current Tier</span>
                      <Badge className="bg-myth-accent/20 text-myth-accent border-myth-accent/50">
                        {userStats.currentTier}
                      </Badge>
                    </div>
                    
                    {/* Progress to next tier */}
                    <div className="w-full bg-white/10 rounded-full h-2 mb-2">
                      <div className="bg-gradient-to-r from-myth-primary to-myth-accent h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                    <p className="text-xs font-mono text-white/60">109 points until Beacon tier</p>
                  </div>
                  
                  <div className="text-sm font-mono text-white/80">
                    <p className="mb-2">Points determine your visibility in The Luminary and unlock special privileges.</p>
                    <p>Points are earned through creating, being echoed, and contributing to the ecosystem.</p>
                  </div>
                </div>
                
                {/* Points Breakdown */}
                <div className="glass-card p-6 rounded-lg w-full md:w-1/2">
                  <h3 className="font-serif text-xl text-white mb-4">Points Breakdown</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-md">
                      <span className="font-mono text-white/80">Fragment Creation</span>
                      <span className="font-mono text-myth-accent">75 pts</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-md">
                      <span className="font-mono text-white/80">Echoed Fragments</span>
                      <span className="font-mono text-myth-accent">46 pts</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-md">
                      <span className="font-mono text-white/80">Revenue Contribution ({userStats.contributionLevel}%)</span>
                      <span className="font-mono text-myth-accent">55 pts</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-md">
                      <span className="font-mono text-white/80">Seed Activations</span>
                      <span className="font-mono text-myth-accent">15 pts</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <Button variant="outline" className="w-full border-myth-accent/50 text-myth-accent hover:bg-myth-accent/10">
                      View Points History
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Myth Seeds Card */}
          <Card className="glass-card border-myth-primary/30 overflow-hidden mb-10">
            <div className="h-1 w-full bg-gradient-to-r from-myth-primary to-myth-accent"></div>
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-white">Myth Seeds</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-mono text-white/80 mb-6">
                Share a Myth Seed to let others build on your fragments for free. You get 1 seed per week.
              </p>
              
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="glass-card p-6 rounded-lg w-full md:w-1/2">
                  <h3 className="font-serif text-xl text-white mb-4">Available Seeds</h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-white/80">You have</span>
                    <Badge className="bg-myth-primary/30 text-myth-light border-myth-primary/50">1 Seed</Badge>
                  </div>
                  <p className="font-mono text-sm text-white/60 mb-4">Expires in 3 days</p>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-myth-primary hover:bg-myth-primary/90 text-white">
                        Give Seed
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="glass-card border-myth-primary/30">
                      <DialogHeader>
                        <DialogTitle className="font-serif text-2xl text-white">Give a Myth Seed</DialogTitle>
                      </DialogHeader>
                      
                      <div className="py-4">
                        <label className="font-mono text-sm text-white/80 block mb-2">
                          Choose Fragment
                        </label>
                        <select className="w-full p-2 bg-white/5 border border-myth-primary/30 rounded-md font-mono text-sm text-white/90 focus:outline-none focus:border-myth-accent/50 focus:ring-1 focus:ring-myth-accent/50">
                          <option value="fragment1">The Hill of Forgotten Code</option>
                          <option value="fragment2">The Thinking Root</option>
                        </select>
                        
                        <label className="font-mono text-sm text-white/80 block mt-4 mb-2">
                          Recipient (Username or Wallet)
                        </label>
                        <input 
                          type="text" 
                          placeholder="@username or 0x..." 
                          defaultValue="@cryptofriend"
                          className="w-full p-2 bg-white/5 border border-myth-primary/30 rounded-md font-mono text-sm text-white/90 focus:outline-none focus:border-myth-accent/50 focus:ring-1 focus:ring-myth-accent/50"
                        />
                        
                        <p className="font-mono text-xs text-white/60 mt-4">
                          The recipient will be able to build on this fragment without paying ETH.
                          Seeds expire after 7 days if unused.
                        </p>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button onClick={handleGiveSeed} className="bg-myth-primary hover:bg-myth-primary/90 text-white">
                          Send Seed
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                
                <div className="glass-card p-6 rounded-lg w-full md:w-1/2">
                  <h3 className="font-serif text-xl text-white mb-4">Seed Activity</h3>
                  
                  <div className="space-y-4">
                    <div className="p-3 bg-white/5 rounded-md">
                      <p className="font-mono text-sm text-white/90">Seed given to <span className="text-myth-accent">@loremaster</span></p>
                      <p className="font-mono text-xs text-white/60">For: "The Hill of Forgotten Code"</p>
                      <p className="font-mono text-xs text-white/60">Status: Used (2 days ago)</p>
                    </div>
                    
                    <div className="p-3 bg-white/5 rounded-md">
                      <p className="font-mono text-sm text-white/90">Seed given to <span className="text-myth-accent">@neural_poet</span></p>
                      <p className="font-mono text-xs text-white/60">For: "The Thinking Root"</p>
                      <p className="font-mono text-xs text-white/60">Status: Expired</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Your Fragments */}
          <Card className="glass-card border-myth-primary/30 overflow-hidden mb-10">
            <div className="h-1 w-full bg-gradient-to-r from-myth-primary to-myth-accent"></div>
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-white">Your Fragments</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="created">
                <TabsList className="bg-white/5 border border-myth-primary/30 mb-6">
                  <TabsTrigger 
                    value="created" 
                    className="data-[state=active]:bg-myth-primary/20 data-[state=active]:text-white"
                  >
                    Created by You
                  </TabsTrigger>
                  <TabsTrigger 
                    value="collected"
                    className="data-[state=active]:bg-myth-primary/20 data-[state=active]:text-white"
                  >
                    Collected
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="created">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {userFragments.map(fragment => (
                      <FragmentCard key={fragment.id} fragment={fragment} />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="collected">
                  <div className="text-center py-10">
                    <p className="font-mono text-white/70 mb-4">You haven't collected any fragments yet.</p>
                    <Button asChild className="bg-myth-primary hover:bg-myth-primary/90 text-white">
                      <a href="/explore">Explore Fragments</a>
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          {/* Create Your Own Myth */}
          <Card className="glass-card border-myth-primary/30 overflow-hidden glow">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="font-serif text-2xl font-bold text-gradient mb-4">Create Your Own Myth</h3>
                <p className="font-mono text-white/80 max-w-2xl mx-auto mb-6">
                  Want to start a brand new mythology? Launch your own myth universe 
                  and invite others to build upon it.
                </p>
                <Button 
                  onClick={handleCreateMyth} 
                  className="bg-myth-accent hover:bg-myth-accent/90 text-black font-semibold"
                >
                  Launch Your Myth
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
