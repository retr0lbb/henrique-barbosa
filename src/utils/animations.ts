import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const EASING = {
  enter: "power2.out",
  exit: "power2.inOut",
  smooth: "power3.out",
} as const;

export const TIMING = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
} as const;

export const STAGGER = {
  tight: 0.05,
  normal: 0.1,
  loose: 0.15,
} as const;

export function fadeIn(
  targets: gsap.TweenTarget,
  options: { duration?: number; delay?: number; y?: number } = {},
) {
  const { duration = TIMING.normal, delay = 0, y = 0 } = options;
  return gsap.fromTo(
    targets,
    { opacity: 0, y },
    { opacity: 1, y: 0, duration, delay, ease: EASING.enter },
  );
}

export function slideIn(
  targets: gsap.TweenTarget,
  direction: "left" | "right" | "up" | "down" = "up",
  options: { duration?: number; delay?: number } = {},
) {
  const { duration = TIMING.normal, delay = 0 } = options;
  const directions = {
    left: { x: -50 },
    right: { x: 50 },
    up: { y: 50 },
    down: { y: -50 },
  };
  const fromVars = { opacity: 0, ...directions[direction] };
  const toVars = {
    opacity: 1,
    x: 0,
    y: 0,
    duration,
    delay,
    ease: EASING.enter,
  };

  return gsap.fromTo(targets, fromVars, toVars);
}

export function scaleIn(
  targets: gsap.TweenTarget,
  options: { duration?: number; delay?: number; scale?: number } = {},
) {
  const { duration = TIMING.normal, delay = 0, scale = 0.8 } = options;
  return gsap.fromTo(
    targets,
    { opacity: 0, scale },
    { opacity: 1, scale: 1, duration, delay, ease: EASING.smooth },
  );
}

export function staggerReveal(
  targets: gsap.TweenTarget,
  options: { duration?: number; stagger?: number; y?: number } = {},
) {
  const {
    duration = TIMING.normal,
    stagger = STAGGER.normal,
    y = 30,
  } = options;
  return gsap.fromTo(
    targets,
    { opacity: 0, y },
    { opacity: 1, y: 0, duration, stagger, ease: EASING.enter },
  );
}

export function withScrollTrigger(
  tween: gsap.core.Tween,
  trigger: gsap.DOMTarget,
  options: {
    start?: string;
    end?: string;
    scrub?: boolean | number;
    markers?: boolean;
  } = {},
) {
  const { start = "top 80%", end = "bottom 20%", scrub, markers } = options;

  ScrollTrigger.create({
    animation: tween,
    trigger,
    start,
    end,
    scrub,
    markers,
  });

  return tween;
}

export function hoverScale(targets: gsap.TweenTarget) {
  return gsap.to(targets, {
    scale: 1.05,
    duration: TIMING.fast,
    ease: EASING.smooth,
  });
}

export function hoverScaleReset(targets: gsap.TweenTarget) {
  return gsap.to(targets, {
    scale: 1,
    duration: TIMING.fast,
    ease: EASING.smooth,
    clearProps: "transform",
  });
}

export function pressEffect(targets: gsap.TweenTarget) {
  return gsap.to(targets, {
    scale: 0.95,
    duration: TIMING.fast / 2,
    ease: "power2.in",
  });
}
