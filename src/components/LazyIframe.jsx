// src/components/LazyIframe.jsx
import  { useEffect, useRef, useState } from "react";

export default function LazyIframe({ src, title, height = "100vh" }) {
  const hostRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (shouldLoad) return;

    const el = hostRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShouldLoad(true);
        observer.disconnect();
      }
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <div ref={hostRef} style={{ width: "100%", height }}>
      {shouldLoad ? (
        <iframe
          src={src}
          title={title}
          loading="lazy"
          style={{ width: "100%", height: "100%", border: 0 }}
        />
      ) : (
        <div style={{ width: "100%", height: "100%", display: "grid", placeItems: "center" }}>
          Loading game…
        </div>
      )}
    </div>
  );
}
