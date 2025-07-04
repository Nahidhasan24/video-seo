
import React from 'react';
import { Youtube } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center mb-4">
        <Youtube className="w-12 h-12 text-red-600 mr-3" />
        <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
          Title to Treasure
        </h1>
      </div>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Transform your YouTube video titles into high-converting descriptions, SEO keywords, tags, and AI-generated thumbnails
      </p>
    </div>
  );
};

export default Header;
