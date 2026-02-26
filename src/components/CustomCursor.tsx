'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div 
        className="custom-cursor hidden lg:block"
        style={{ 
          transform: `translate3d(${position.x - 5}px, ${position.y - 5}px, 0) scale(${isHovering ? 0 : 1})`
        }}
      />
      <div 
        className="custom-cursor-follower hidden lg:block"
        style={{ 
          transform: `translate3d(${position.x - 20}px, ${position.y - 20}px, 0) scale(${isHovering ? 2 : 1})`,
          opacity: isHovering ? 0.8 : 0.2,
          backgroundColor: isHovering ? 'var(--accent)' : 'transparent',
          mixBlendMode: isHovering ? 'difference' : 'normal'
        }}
      />
    </>
  );
}
