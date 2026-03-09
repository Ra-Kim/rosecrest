"use client";

import { useEffect, useRef, ReactNode } from "react";

type Animation =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "fade"
  | "zoom-in";

interface RevealProps {
  children: ReactNode;
  animation?: Animation;
  delay?: number;       // ms
  duration?: number;    // ms
  threshold?: number;   // 0–1, how much of the element must be visible
  className?: string;
  once?: boolean;       // only animate once (default true)
}

const INITIAL: Record<Animation, string> = {
  "fade-up":    "opacity-0 translate-y-10",
  "fade-down":  "opacity-0 -translate-y-10",
  "fade-left":  "opacity-0 translate-x-10",
  "fade-right": "opacity-0 -translate-x-10",
  "fade":       "opacity-0",
  "zoom-in":    "opacity-0 scale-95",
};

export const Reveal = ({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 500,
  threshold = 0.15,
  className = "",
  once = true,
}: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.style.transitionDuration = `${duration}ms`;
          el.classList.remove(...INITIAL[animation].split(" "));
          el.classList.add("opacity-100", "translate-x-0", "translate-y-0", "scale-100");
          if (once) observer.disconnect();
        } else if (!once) {
          el.classList.add(...INITIAL[animation].split(" "));
          el.classList.remove("opacity-100", "translate-x-0", "translate-y-0", "scale-100");
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animation, delay, duration, threshold, once]);

  return (
    <div
      ref={ref}
      className={`transition-all ease-out will-change-transform ${INITIAL[animation]} ${className}`}
    >
      {children}
    </div>
  );
};

// ─── Stagger: wraps multiple children, each offset by `staggerMs` ────────────

interface StaggerProps {
  children: ReactNode[];
  animation?: Animation;
  staggerMs?: number;
  duration?: number;
  threshold?: number;
  className?: string;  // applied to the outer wrapper
  itemClassName?: string;
}

export const Stagger = ({
  children,
  animation = "fade-up",
  staggerMs = 100,
  duration = 500,
  threshold = 0.1,
  className = "",
  itemClassName = "",
}: StaggerProps) => {
  return (
    <div className={className}>
      {(Array.isArray(children) ? children : [children]).map((child, i) => (
        <Reveal
          key={i}
          animation={animation}
          delay={i * staggerMs}
          duration={duration}
          threshold={threshold}
          className={itemClassName}
        >
          {child}
        </Reveal>
      ))}
    </div>
  );
};