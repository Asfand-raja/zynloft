import React from 'react';

export default function HeroGlow({ position = "top-left", delay = "0s", className = "" }) {
  const positioning = {
    "top-left": "-top-20 -left-20",
    "bottom-right": "-bottom-20 -right-20",
    "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  };

  return (
    <div 
      className={`hero-glow ${positioning[position]} ${className}`} 
      style={{ animationDelay: delay }}
    />
  );
}
