import { useEffect } from 'react';

export const useScrollIntoView = ({ observableSelector, focusElementId }) => {
  useEffect(() => {
    document.getElementById(focusElementId)?.scrollIntoView({ block: 'center', inline: 'center' });
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            history.replaceState(null, null, `#${entry.target.id}`);
            // The first visible
            break;
          }
        }
      },
      {
        threshold: 1,
      }
    );
    document.querySelectorAll(observableSelector).forEach((e) => observer.observe(e));
    return () => observer.disconnect();
  });
};
