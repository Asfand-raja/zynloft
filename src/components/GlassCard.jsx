import React from 'react';

export default function GlassCard({ children, className = '', ...props }) {
  return (
    <div 
      className={`glass-card relative overflow-hidden rounded-3xl ${className}`}
      {...props}
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
