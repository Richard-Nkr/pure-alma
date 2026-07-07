"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Theme } from "@astryxdesign/core/theme";
import { LinkProvider } from "@astryxdesign/core/Link";
import { butterTheme } from "@astryxdesign/theme-butter/built";

function ScrollReveal() {
  useEffect(() => {
    const selectors = ".reveal, .reveal-left, .reveal-right, .reveal-scale";
    const els = document.querySelectorAll<HTMLElement>(selectors);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return null;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Theme theme={butterTheme}>
      <LinkProvider component={Link}>
        <ScrollReveal />
        {children}
      </LinkProvider>
    </Theme>
  );
}
