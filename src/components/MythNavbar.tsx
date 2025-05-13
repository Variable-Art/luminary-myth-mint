
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { User, BookOpen, Home, Layers } from 'lucide-react';

const MythNavbar: React.FC = () => {
  return (
    <nav className="w-full px-4 py-4 border-b border-myth-primary/20 bg-gradient-to-r from-myth-dark to-myth-dark/80 backdrop-blur-md fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-serif text-2xl font-bold text-gradient">MythMint</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="font-mono text-sm text-white/80 hover:text-white transition-colors">
            <span className="flex items-center"><Home size={16} className="mr-2" /> Home</span>
          </Link>
          <Link to="/explore" className="font-mono text-sm text-white/80 hover:text-white transition-colors">
            <span className="flex items-center"><BookOpen size={16} className="mr-2" /> Explore</span>
          </Link>
          <Link to="/dashboard" className="font-mono text-sm text-white/80 hover:text-white transition-colors">
            <span className="flex items-center"><Layers size={16} className="mr-2" /> Dashboard</span>
          </Link>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="outline" className="border-myth-primary/50 text-myth-light hover:bg-myth-primary/20">
            <User size={16} className="mr-2" /> Connect Wallet
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default MythNavbar;
