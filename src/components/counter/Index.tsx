import React, { useEffect, useRef, useState } from 'react';

interface CounterProps {
  limit: number;
}

const Counter = ({ limit }: CounterProps) => {
  const componentRef = useRef(null);

  const [count, setCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Component is in the viewport
            // Start counting from 1 to 50
            let i = 1;
            const interval = setInterval(() => {
              setCount(i);
              i += 1;
              if (i > limit) {
                clearInterval(interval);
              }
            }, 150); // Adjust the interval as needed
          }
        });
      },
      { threshold: 0.5 } // You can adjust the threshold as needed
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div ref={componentRef}>
      {count}
      <sup>+</sup>
    </div>
  );
};

export { Counter };
