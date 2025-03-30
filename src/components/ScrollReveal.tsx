import React, { useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  origin?: 'bottom' | 'left' | 'right' | 'top';
  distance?: string;
  reset?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 700,
  origin = 'bottom',
  distance = '30px',
  reset = false,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            if (!reset) {
              observer.unobserve(entry.target);
            }
          } else if (reset) {
            entry.target.classList.remove('active');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [reset]);

  let transformOrigin = '';
  
  switch (origin) {
    case 'bottom':
      transformOrigin = `translateY(${distance})`;
      break;
    case 'left':
      transformOrigin = `translateX(-${distance})`;
      break;
    case 'right':
      transformOrigin = `translateX(${distance})`;
      break;
    case 'top':
      transformOrigin = `translateY(-${distance})`;
      break;
    default:
      transformOrigin = `translateY(${distance})`;
  }

  return (
    <div
      ref={sectionRef}
      className={`reveal ${className}`}
      style={{
        transform: transformOrigin,
        transition: `all ${duration}ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
