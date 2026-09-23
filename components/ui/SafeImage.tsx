"use client";

import { useState } from "react";

export function SafeImage({
  src,
  fallback,
  alt,
  className,
  style,
}: {
  src: string;
  fallback: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [err, setErr] = useState(false);
  return (
    <img
      src={err ? fallback : src}
      alt={alt}
      className={className}
      style={style}
      onError={() => setErr(true)}
    />
  );
}
