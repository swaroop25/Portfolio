'use client';

import {motion,useReducedMotion} from 'framer-motion';

/** Abstract data paths, not business metrics. */
export default function DataGraphic(){
  const reduced=useReducedMotion();
  return <div className="data-graphic" aria-hidden="true">
    <svg viewBox="0 0 1100 210" fill="none">
      <defs><linearGradient id="data-thread"><stop stopColor="#a855f7" stopOpacity="0"/><stop offset=".45" stopColor="#bb8af2"/><stop offset="1" stopColor="#a855f7" stopOpacity="0"/></linearGradient></defs>
      <path d="M0 150H1100M0 90H1100M0 30H1100" stroke="#ab80d7" strokeOpacity=".08" strokeDasharray="2 12"/>
      {["M0 160C140 160 160 40 280 65S410 180 540 110 680 130 800 60 970 70 1100 25","M0 90C130 90 150 170 280 145S420 30 550 100 690 35 800 105 990 85 1100 130"].map((d,index)=><motion.path key={d} d={d} stroke="url(#data-thread)" strokeWidth={index?1:1.5} initial={reduced?false:{pathLength:0,opacity:0}} whileInView={{pathLength:1,opacity:index?.3:.65}} viewport={{once:true}} transition={{duration:2.2,delay:index*.2,ease:'easeInOut'}}/>)}
      {[[280,65],[540,110],[800,60]].map(([x,y],i)=><motion.g key={x} initial={reduced?false:{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:.5+i*.4,duration:.6}}><circle cx={x} cy={y} r="13" fill="#a855f7" fillOpacity=".06"/><circle cx={x} cy={y} r="3" fill="#c498f4" fillOpacity=".65"/></motion.g>)}
    </svg>
    <span>CONNECTING THE DOTS</span>
  </div>
}
