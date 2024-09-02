import { useState, useEffect } from 'react';

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 450px)").matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 450px)");

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return isMobile;
}

export default useIsMobile;
