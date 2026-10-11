import { useEffect } from "react";

// Loads a stylesheet only while a page that needs it is mounted, keeping it off the critical path.
export function useStylesheet(href: string) {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
    return () => {
      link.remove();
    };
  }, [href]);
}
