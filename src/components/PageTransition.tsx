"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [currentChildren, setCurrentChildren] = useState(children);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setCurrentChildren(children);
      return;
    }

    setVisible(false);
    const timeout = setTimeout(() => {
      setCurrentChildren(children);
      setVisible(true);
    }, 200);

    return () => clearTimeout(timeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, reducedMotion]);

  if (reducedMotion) {
    return <>{children}</>;
  }

  return (
    <div
      className="transition-opacity duration-300 ease-in-out"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {currentChildren}
    </div>
  );
}
