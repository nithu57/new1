import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import type { Article } from '../types';

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-3">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            {article.category}
          </span>
          <div className="flex items-center text-gray-500 text-sm">
            <Clock className="h-4 w-4 mr-1" />
            {formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true })}
          </div>
        </div>
        
        <Link to={`/article/${article.id}`}>
          <h2 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600">
            {article.title}
          </h2>
        </Link>
        
        <p className="text-gray-600 mb-4">{article.summary}</p>
        
        <div className="flex items-center text-gray-500 text-sm">
          <User className="h-4 w-4 mr-1" />
          <span>By {article.author}</span>
        </div>
      </div>
    </article>
  );
}