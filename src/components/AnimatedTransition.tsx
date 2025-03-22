
import { useEffect, useState } from 'react';

interface AnimatedTransitionProps {
  children: React.ReactNode;
}

const AnimatedTransition = ({ children }: AnimatedTransitionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`transition-all duration-700 ease-in-out transform ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

export default AnimatedTransition;
