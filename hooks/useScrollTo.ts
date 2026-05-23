"use client";

import { useLenis } from "lenis/react";

export function useScrollTo() {
  const lenis = useLenis();

  const scrollTo = (target: string | HTMLElement, offset = 0) => {
    if (!lenis) return;

    lenis.scrollTo(target, {
      duration: 1.2,
      offset,
    });
  };

  return { scrollTo };
}
