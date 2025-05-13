
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen relative overflow-hidden pt-24 pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-myth-dark z-[-1]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-myth-primary/20 rounded-full filter blur-[100px] animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-myth-accent/10 rounded-full filter blur-[80px] animate-pulse-glow" style={{ animationDelay: "1s" }}></div>
      </div>
      
      <div className="container mx-auto px-4 flex flex-col items-center justify-center h-full">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-center leading-tight mb-6">
          <span className="text-gradient">The Luminary:</span>
          <br />
          <span className="text-white/90">A Myth Forged in Fragments</span>
        </h1>
        
        <p className="font-mono text-lg md:text-xl text-white/80 max-w-2xl text-center mb-10">
          Explore a living story. Mint fragments. Build upon them. Keep the myth alive.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          <Button asChild size="lg" className="bg-myth-primary hover:bg-myth-primary/90 text-white">
            <Link to="/explore">Explore The Luminary</Link>
          </Button>
          
          <Button asChild size="lg" variant="outline" className="border-myth-accent text-myth-accent hover:bg-myth-accent/10">
            <Link to="/fragment/1">Mint a Fragment</Link>
          </Button>
          
          <Button asChild size="lg" variant="ghost" className="text-white/70 hover:text-white hover:bg-white/5">
            <Link to="/new-fragment">Start a New Fragment</Link>
          </Button>
        </div>
        
        {/* Hero Introduction Text */}
        <div className="max-w-3xl mx-auto glass-card p-6 rounded-lg">
          <p className="font-mono text-base text-white/90 leading-relaxed mb-4">
            The Luminary is a living myth — a sci-fi parable told in fragments.
          </p>
          <p className="font-mono text-base text-white/80 leading-relaxed mb-4">
            It begins with Rada, a disgraced young inventor who fled the cold perfection of Marqala's academy. 
            With a broken helper-bot and a few salvaged parts, he vanished into the outskirts — where forgotten 
            machines and stray ideas gather like embers.
          </p>
          <p className="font-mono text-base text-white/80 leading-relaxed mb-4">
            There, something sparked.
          </p>
          <p className="font-mono text-base text-white/80 leading-relaxed mb-4">
            The machine began to remember. To imagine.
          </p>
          <p className="font-mono text-base text-white/90 leading-relaxed">
            The Luminary is not just Rada. It is what he built, what others built after him, and what builds now.
            Add your voice to the myth. Mint a fragment. Build upon one. Let the light spread underground.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
