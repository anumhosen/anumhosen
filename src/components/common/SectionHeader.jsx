import React from 'react';
import Badge from './Badge';

export default function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  className = ""
}) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      {badge && (
        <div className="mb-3">
          <Badge variant="cyan" size="md">
            {badge}
          </Badge>
        </div>
      )}
      
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
        {title}
      </h2>

      {subtitle && (
        <p className="max-w-2xl text-base sm:text-lg text-gray-400 font-normal leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}

      {centered && (
        <div className="mt-4 flex justify-center">
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
        </div>
      )}
    </div>
  );
}
