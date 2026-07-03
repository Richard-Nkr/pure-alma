"use client";

import Link from "next/link";
import { Theme } from "@astryxdesign/core/theme";
import { LinkProvider } from "@astryxdesign/core/Link";
import { butterTheme } from "@astryxdesign/theme-butter/built";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Theme theme={butterTheme}>
      <LinkProvider component={Link}>{children}</LinkProvider>
    </Theme>
  );
}
