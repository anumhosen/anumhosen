import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  icon: Icon,
  disabled = false,
  target,
  rel
}) {
  const baseClasses = "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-950 disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const sizeClasses = {
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-4 py-2.5",
    lg: "text-base px-6 py-3"
  };

  const variantClasses = {
    primary: "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-950/40 focus:ring-cyan-500 active:scale-[0.98]",
    secondary: "bg-gray-800/80 text-gray-200 hover:bg-gray-750 hover:text-white border border-gray-700/80 hover:border-gray-600 focus:ring-gray-600 active:scale-[0.98]",
    outline: "bg-transparent text-cyan-400 border border-cyan-500/50 hover:bg-cyan-950/30 hover:border-cyan-400 focus:ring-cyan-500 active:scale-[0.98]",
    ghost: "bg-transparent text-gray-400 hover:text-white hover:bg-gray-800/50 focus:ring-gray-700"
  };

  const combined = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant] || variantClasses.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combined}>
        {Icon && <Icon className="w-4 h-4" />}
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a 
        href={href} 
        target={target || "_blank"} 
        rel={rel || "noopener noreferrer"} 
        className={combined}
      >
        {Icon && <Icon className="w-4 h-4" />}
        {children}
      </a>
    );
  }

  return (
    <button 
      type="button" 
      onClick={onClick} 
      disabled={disabled} 
      className={combined}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </button>
  );
}
