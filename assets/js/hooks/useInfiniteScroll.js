import { useEffect } from 'react';

export const useInfiniteScroll = ({ infiniteScrollTrigger, fetchMore }) => {
  useEffect(() => {
    const ref = infiniteScrollTrigger.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
          fetchMore();
        }
      },
      {
        root: null, // window by default
        rootMargin: '0px',
        threshold: 0.25,
      }
    );
    if (infiniteScrollTrigger && ref) {
      observer.observe(ref);
    }

    return () => observer.unobserve(ref);
  }, [infiniteScrollTrigger, fetchMore]);
};
