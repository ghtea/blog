import {useCallback, useEffect, useState} from "react";

export const useSize = (element: HTMLElement | null) => {
  const [width, setWidth] = useState(element?.offsetWidth)
  const [height, setHeight] = useState(element?.offsetHeight)

  const onResize = useCallback(() => {
    setWidth(element?.offsetWidth)
    setHeight(element?.offsetHeight);
  }, [element]);

  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [onResize]);

  return {
    width,
    height
  }
} 