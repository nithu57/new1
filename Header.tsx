import React from 'react';
import { Link } from 'react-router-dom';
import { Newspaper, Search } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Newspaper className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">NewsHub</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/category/technology" className="text-gray-700 hover:text-blue-600">Technology</Link>
            <Link to="/category/business" className="text-gray-700 hover:text-blue-600">Business</Link>
            <Link to="/category/science" className="text-gray-700 hover:text-blue-600">Science</Link>
            <Link to="/category/health" className="text-gray-700 hover:text-blue-600">Health</Link>
          </nav>

          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search news..."
                className="w-64 pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}