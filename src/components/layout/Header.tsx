import React from 'react';
import { AlertTriangle, Github, ExternalLink } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">TechDebt Analyzer</h1>
              <p className="text-sm text-gray-500">Technical Debt Management Framework</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="hidden sm:inline text-sm">GitHub</span>
            </a>
            <a
              href="https://docs.example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              <span className="hidden sm:inline text-sm">Docs</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;