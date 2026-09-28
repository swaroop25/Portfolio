'use client';

import {useEffect,useState} from 'react';
import {AnimatePresence,motion,useReducedMotion} from 'framer-motion';

const roles=['Data Analyst','AI BI Engineer','Analytics Engineer'];

export default function RotatingRole(){
  const [index,setIndex]=useState(0);
  const reduced=useReducedMotion();
  useEffect(()=>{
    if(reduced)return;
    const timer=window.setInterval(()=>setIndex(current=>(current+1)%roles.length),3800);
    return ()=>window.clearInterval(timer);
  },[reduced]);

  return <>
    <span className="sr-only">I'm a Data Analyst, AI BI Engineer and Analytics Engineer.</span>
    <span aria-hidden="true" className="rotating-role-heading">
      <span className="role-prefix">I'm {index===0||reduced?'a':'an'}</span>{' '}
      <span className="role-slot">
        <span className="role-sizing">Analytics Engineer</span>
        <AnimatePresence mode="wait">
          <motion.span key={reduced?'static':index} className="role-word" initial={reduced?false:'hidden'} animate="visible" exit="exit"
            variants={{hidden:{},visible:{transition:{staggerChildren:.045}},exit:{transition:{staggerChildren:.018}}}}>
            {(reduced?roles[0]:roles[index]).split('').map((letter,i)=><motion.span key={i} className="role-letter"
              variants={{hidden:{opacity:0,x:-8,filter:'blur(3px)'},visible:{opacity:1,x:0,filter:'blur(0px)',transition:{duration:.4}},exit:{opacity:0,x:7,filter:'blur(3px)',transition:{duration:.25}}}}>{letter===' '? '\u00a0':letter}</motion.span>)}
          </motion.span>
        </AnimatePresence>
        <span className="role-cursor">|</span>
      </span>
    </span>
  </>;
}
