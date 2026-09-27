'use client';

import { useRef, type PointerEvent, type ReactNode } from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';

/** One delegated pointer handler keeps the card lighting independent of React renders. */
export default function MotionSurface({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const activeCard = useRef<HTMLElement | null>(null);

  function clearCard() {
    activeCard.current?.removeAttribute('data-lit');
    activeCard.current = null;
  }

  function illuminate(event: PointerEvent<HTMLElement>) {
    if (reduced || event.pointerType !== 'mouse') return;
    const card = (event.target as HTMLElement).closest<HTMLElement>('.experience-card, .project-card, .skill-pill');
    if (activeCard.current !== card) clearCard();
    if (!card) return;
    const bounds = card.getBoundingClientRect();
    card.style.setProperty('--light-x', `${event.clientX - bounds.left}px`);
    card.style.setProperty('--light-y', `${event.clientY - bounds.top}px`);
    card.setAttribute('data-lit', 'true');
    activeCard.current = card;
  }

  return <>
    <motion.div aria-hidden="true" className="reading-progress" style={{ scaleX: reduced ? scrollYProgress : progress }} />
    <main onPointerMove={illuminate} onPointerLeave={clearCard}>{children}</main>
  </>;
}
