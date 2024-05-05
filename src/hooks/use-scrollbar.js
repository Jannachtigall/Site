import 'overlayscrollbars/overlayscrollbars.css';

import { 
  OverlayScrollbars, 
} from 'overlayscrollbars';

import { useEffect } from 'react';

const config = {
  scrollbars: {
    visibility: "auto",
    autoHide: "never",
  }
};

const useScrollbar = (root, hasScroll) => {
  useEffect(() => {
    let scrollbars;

    if (root.current && hasScroll) {
      scrollbars = OverlayScrollbars(root.current, config);
    }

    return () => {
      if (scrollbars) {
        scrollbars.destroy();
      }
    }
  }, [root, hasScroll]);
};

export { useScrollbar };
