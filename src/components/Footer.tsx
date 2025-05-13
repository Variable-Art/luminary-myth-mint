
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-myth-primary/20 py-10 mt-10 bg-myth-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center space-x-2">
              <span className="font-serif text-2xl font-bold text-gradient">MythMint</span>
            </Link>
            <p className="font-mono text-sm text-white/60 mt-2">Stories That Spread Themselves</p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="mb-6 md:mb-0">
              <h3 className="font-serif text-lg font-semibold text-white mb-4">Platform</h3>
              <ul className="space-y-2">
                <li><Link to="/explore" className="font-mono text-sm text-white/60 hover:text-white/90 transition-colors">Explore</Link></li>
                <li><Link to="/mint" className="font-mono text-sm text-white/60 hover:text-white/90 transition-colors">Mint</Link></li>
                <li><Link to="/build" className="font-mono text-sm text-white/60 hover:text-white/90 transition-colors">Build</Link></li>
              </ul>
            </div>
            
            <div className="mb-6 md:mb-0">
              <h3 className="font-serif text-lg font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="font-mono text-sm text-white/60 hover:text-white/90 transition-colors">How It Works</Link></li>
                <li><Link to="#" className="font-mono text-sm text-white/60 hover:text-white/90 transition-colors">FAQ</Link></li>
                <li><Link to="#" className="font-mono text-sm text-white/60 hover:text-white/90 transition-colors">About MythMint</Link></li>
              </ul>
            </div>
            
            <div className="mb-6 md:mb-0">
              <h3 className="font-serif text-lg font-semibold text-white mb-4">Community</h3>
              <ul className="space-y-2">
                <li><a href="#" className="font-mono text-sm text-white/60 hover:text-white/90 transition-colors">Twitter</a></li>
                <li><a href="#" className="font-mono text-sm text-white/60 hover:text-white/90 transition-colors">Discord</a></li>
                <li><a href="#" className="font-mono text-sm text-white/60 hover:text-white/90 transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="font-mono text-xs text-white/40">
            &copy; {new Date().getFullYear()} MythMint. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
