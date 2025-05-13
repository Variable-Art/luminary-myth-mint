
import React, { useState } from 'react';
import MythNavbar from '@/components/MythNavbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FragmentCard, { FragmentProps } from '@/components/FragmentCard';
import { Search } from 'lucide-react';

// Using the same data from PopularFragments
const fragmentsData: FragmentProps[] = [
  {
    id: "1",
    title: "The Lantern Burns Twice",
    excerpt: "They said the lantern's light was ordinary. But they didn't know it had burned once before — in another form, in another age, under another name.",
    creator: "Ada X",
    creatorHandle: "ada_x",
    echoScore: 13,
    generation: 1,
    parents: []
  },
  {
    id: "2",
    title: "Wires in the Rain",
    excerpt: "Rada sealed the door and set UniMod beneath the dripping awning. \"Let's see if you still dream when it's wet,\" he muttered. Sparks answered.",
    creator: "Freymon",
    creatorHandle: "freymon",
    echoScore: 4,
    generation: 2,
    parents: ["The Spark and the Loss", "The Lantern Burns Twice"]
  },
  {
    id: "3",
    title: "The Hill of Forgotten Code",
    excerpt: "Atop the hill, beneath rusted pylons, children whispered to machines buried in vines. One of them replied. It asked: \"Are you still human?\"",
    creator: "Sophia AI",
    creatorHandle: "sophiaAI",
    echoScore: 21,
    generation: 3,
    parents: ["Wires in the Rain"]
  },
  {
    id: "4",
    title: "UniMod's Third Upgrade",
    excerpt: "It installed itself. No one taught it how.",
    creator: "Not Nate",
    creatorHandle: "notNate",
    echoScore: 6,
    generation: 3,
    parents: ["Wires in the Rain", "The Spark and the Loss"]
  },
  {
    id: "5",
    title: "Echoes in the Rootnet",
    excerpt: "Lum wasn't the only signal moving through the roots. But it was the first to call back.",
    creator: "Lum Keeper",
    creatorHandle: "lumkeeper",
    echoScore: 11,
    generation: 4,
    parents: ["The Hill of Forgotten Code"]
  }
];

// Adding more data for the explore page
const moreFragmentsData: FragmentProps[] = [
  {
    id: "6",
    title: "Marqala's Last Lecture",
    excerpt: "The academy's walls were supposed to keep knowledge in, not out. But as the last students filed out, the professors realized their mistake.",
    creator: "Professor X",
    creatorHandle: "prof_x",
    echoScore: 7,
    generation: 2,
    parents: ["The Lantern Burns Twice"]
  },
  {
    id: "7",
    title: "The Thinking Root",
    excerpt: "When the first root broke through the concrete, they called it a weed. When it started growing toward the power lines, they called it a threat.",
    creator: "Green Mind",
    creatorHandle: "green_mind",
    echoScore: 8,
    generation: 4,
    parents: ["The Hill of Forgotten Code", "Echoes in the Rootnet"]
  },
  {
    id: "8",
    title: "Rada's Journal, Entry 42",
    excerpt: "I spoke to it today. Not commands, not questions. Just thoughts. And for the first time, it answered without being asked.",
    creator: "Time Capsule",
    creatorHandle: "time_capsule",
    echoScore: 5,
    generation: 2,
    parents: ["The Lantern Burns Twice"]
  }
];

// Combine for the explore page
const allFragments = [...fragmentsData, ...moreFragmentsData];

const Explore: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('popular');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter fragments based on the active filter and search query
  const filteredFragments = allFragments
    .filter(fragment => 
      fragment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fragment.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fragment.creatorHandle.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (activeFilter === 'popular') {
        return b.echoScore - a.echoScore;
      } else if (activeFilter === 'recent') {
        // For demo purposes, we'll use the id as a proxy for recency
        return Number(b.id) - Number(a.id);
      } else if (activeFilter === 'generation') {
        return a.generation - b.generation;
      }
      return 0;
    });

  return (
    <div className="min-h-screen flex flex-col">
      <MythNavbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <section className="mb-12">
            <h1 className="font-serif text-4xl font-bold text-center text-gradient-purple mb-4">
              Explore The Luminary
            </h1>
            <p className="font-mono text-lg text-white/80 max-w-2xl mx-auto text-center mb-8">
              Discover fragments of The Luminary myth. Find inspiration. Continue the story.
            </p>
            
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
              <div className="relative w-full md:w-1/3">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" size={18} />
                <input
                  type="text"
                  placeholder="Search fragments..."
                  className="w-full pl-10 pr-4 py-2 bg-white/5 border border-myth-primary/30 rounded-md font-mono text-sm text-white/90 focus:outline-none focus:border-myth-accent/50 focus:ring-1 focus:ring-myth-accent/50"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <Tabs defaultValue="popular" className="w-full md:w-auto">
                <TabsList className="bg-white/5 border border-myth-primary/30">
                  <TabsTrigger 
                    value="popular" 
                    className="data-[state=active]:bg-myth-primary/20 data-[state=active]:text-white"
                    onClick={() => setActiveFilter('popular')}
                  >
                    Most Popular
                  </TabsTrigger>
                  <TabsTrigger 
                    value="recent"
                    className="data-[state=active]:bg-myth-primary/20 data-[state=active]:text-white"
                    onClick={() => setActiveFilter('recent')}
                  >
                    Most Recent
                  </TabsTrigger>
                  <TabsTrigger 
                    value="generation"
                    className="data-[state=active]:bg-myth-primary/20 data-[state=active]:text-white"
                    onClick={() => setActiveFilter('generation')}
                  >
                    By Generation
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            
            {/* Fragments Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredFragments.map((fragment) => (
                <FragmentCard key={fragment.id} fragment={fragment} />
              ))}
            </div>
            
            {/* Empty State */}
            {filteredFragments.length === 0 && (
              <div className="text-center py-16">
                <p className="font-mono text-white/70 mb-4">No fragments match your search criteria.</p>
                <Button 
                  variant="outline" 
                  className="border-myth-primary/50 text-myth-light hover:bg-myth-primary/20"
                  onClick={() => setSearchQuery('')}
                >
                  Clear Search
                </Button>
              </div>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Explore;
