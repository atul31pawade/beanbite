import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    document.documentElement.scrollTo(0, 0);
    
    if (document.body) {
      document.body.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;