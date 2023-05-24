import { useState } from 'react';

const useGetwidth = () => {
  const [width, setWidth] = useState(window?.innerWidth);

  window.onresize = window.onload = function () {
    setWidth(this.innerWidth);
  };
  return { width };
};

export default useGetwidth;
