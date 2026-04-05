import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Small delay ensures the DOM is fully rendered before scrolling
    setTimeout(() => {
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
      
      // Fallback: If no hash or element doesn't exist, strictly scroll to the absolute top of the page.
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    }, 50);
  }, [pathname, hash]);

  return null;
}
