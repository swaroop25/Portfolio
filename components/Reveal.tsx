'use client';
import { motion, useReducedMotion } from 'framer-motion';
export default function Reveal({children, className='', delay=0}: {children: React.ReactNode; className?: string; delay?: number}) {
  const reduced=useReducedMotion();
  return <motion.div className={`reveal ${className}`} initial={reduced?false:'hidden'} whileInView="visible" viewport={{once:true,amount:0.12}} variants={{hidden:{opacity:0,y:30,filter:'blur(4px)'},visible:{opacity:1,y:0,filter:'blur(0px)',transition:{duration:.8,delay,ease:[.22,1,.36,1]}}}}>{children}</motion.div>;
}
