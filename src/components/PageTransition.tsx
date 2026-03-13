"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    setVisible(false);
    const timeout = setTimeout(() => {
      setVisible(true);
    }, 150);

    return () => clearTimeout(timeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, reducedMotion]);

  if (reducedMotion) {
    return <>{children}</>;
  }

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 200ms ease-in-out",
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
}
