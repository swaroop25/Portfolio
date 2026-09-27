'use client';

import {useEffect,useRef,useState} from 'react';
import {animate,useInView,useReducedMotion} from 'framer-motion';

const stats=[
  {value:5,suffix:'+',label:'Years of Experience'},
  {value:25,suffix:'+',label:'Dashboards Built'},
  {value:40,suffix:'+',label:'DAX Measures Created'},
  {value:35,suffix:'%',label:'Support Dependency Reduced'},
];

export default function Stats(){
  const ref=useRef<HTMLElement>(null);
  const visible=useInView(ref,{once:true,amount:.4});
  const reduced=useReducedMotion();
  const [progress,setProgress]=useState(0);

  useEffect(()=>{
    if(!visible || reduced) return;
    const controls=animate(0,1,{duration:2,ease:[.16,1,.3,1],onUpdate:setProgress});
    return ()=>controls.stop();
  },[visible,reduced]);

  return <section ref={ref} className="stats-section" aria-label="Career at a glance">
    <dl className="container stats-grid">{stats.map(stat=><div className="stat" key={stat.label}>
      <dt>{stat.label}</dt>
      <dd><span aria-hidden="true">{Math.round(stat.value*(reduced?1:progress))}{stat.suffix}</span><span className="sr-only">{stat.value}{stat.suffix}</span></dd>
    </div>)}</dl>
  </section>;
}
