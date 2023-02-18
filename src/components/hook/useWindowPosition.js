import { useLayoutEffect, useState } from 'react';

export default function useWindowPosition(id) {
  const [animation, setAnimation] = useState(false);

  useLayoutEffect(() => {
    function updatePosition() {
      const offetSetHeight = window.document.getElementById(id).offsetHeight+70;
      console.log(offetSetHeight);
      console.log(window.pageYOffset);

      console.log("offset",window.pageYOffset,offetSetHeight)
      if (window.pageYOffset > offetSetHeight * 1 ) {
        setAnimation(true);
      }
    }
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, [id]);
  return animation;
}