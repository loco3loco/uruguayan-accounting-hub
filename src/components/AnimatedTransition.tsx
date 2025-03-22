
import { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface AnimatedTransitionProps {
  children: React.ReactNode;
}

const AnimatedTransition = ({ children }: AnimatedTransitionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, isMobile ? 50 : 100); // Faster transition on mobile

    return () => clearTimeout(timeout);
  }, [isMobile]);

  return (
    <div
      className={`transition-all duration-500 ease-in-out transform ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
};

export default AnimatedTransition;
