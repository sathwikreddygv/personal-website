import { useState, useEffect, useRef } from 'react';

export interface IntersectionObserverElement {
  elementRef: React.MutableRefObject<HTMLElement | null>;
  isVisible: boolean;
}

const useIntersectionObserver = (elements: IntersectionObserverElement[], options: IntersectionObserverInit) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          elements[index].isVisible = true;
        } else {
          elements[index].isVisible = false;
        }
      });
    }, options);

    elements.forEach(({ elementRef }) => {
      if (elementRef.current) {
        observer.observe(elementRef.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [elements, options]);

  return elements;
};

export default useIntersectionObserver;
