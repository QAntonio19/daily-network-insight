"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedNumberProps {
  value: string;
  className?: string;
  duration?: number;
}

export function AnimatedNumber({ 
  value, 
  className = "",
  duration = 1500 
}: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState("0");
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateValue();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateValue = () => {
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
    const hasK = value.includes("K");
    const hasPercent = value.includes("%");
    const hasComma = value.includes(",");
    const hasPlus = value.startsWith("+");
    const isDecimal = value.includes(".") && !hasK;
    
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = numericValue * easeOut;
      
      let formatted: string;
      
      if (hasK) {
        formatted = current.toFixed(1) + "K";
      } else if (hasPercent) {
        formatted = (isDecimal ? current.toFixed(1) : Math.round(current).toString()) + "%";
      } else if (hasComma) {
        formatted = Math.round(current).toLocaleString();
      } else {
        formatted = Math.round(current).toString();
      }
      
      if (hasPlus) {
        formatted = "+" + formatted;
      }
      
      setDisplayValue(formatted);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };
    
    requestAnimationFrame(animate);
  };

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
