import {useEffect} from "react";
import {useLocation} from "react-router-dom";

const useScrollToTop = (ref: React.RefObject<HTMLElement>) => {
  const location = useLocation();

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = 0;
    }
  }, [location.pathname]);
};

export default useScrollToTop;
