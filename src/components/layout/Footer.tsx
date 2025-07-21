import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-600 text-sm">
              © 2025 TechDebt Analyzer. Built for engineering teams.
            </p>
          </div>
          
          <div className="flex items-center space-x-1 text-sm text-gray-600">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>for better software</span>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Features</h3>
              <ul className="space-y-1 text-gray-600">
                <li>Technical Debt Assessment</li>
                <li>Priority Scoring</li>
                <li>Executive Reporting</li>
                <li>Category Analysis</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Resources</h3>
              <ul className="space-y-1 text-gray-600">
                <li>Documentation</li>
                <li>Best Practices</li>
                <li>Case Studies</li>
                <li>API Reference</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Support</h3>
              <ul className="space-y-1 text-gray-600">
                <li>Help Center</li>
                <li>Community</li>
                <li>Contact Us</li>
                <li>Feature Requests</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;