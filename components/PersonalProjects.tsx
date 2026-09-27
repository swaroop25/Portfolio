'use client';
import {useRef,useState,useEffect} from 'react';
import Image from 'next/image';
import {ArrowUpRight, Maximize2, ArrowLeft} from 'lucide-react';
import {personalProjects} from '@/lib/content';
import Reveal from './Reveal';

export default function PersonalProjects(){
  const dialog=useRef<HTMLDialogElement>(null);
  const opener=useRef<HTMLElement|null>(null);
  const [selected,setSelected]=useState<(typeof personalProjects)[number]|null>(null);
  useEffect(()=>{
    if(!selected) return;
    const previous=document.body.style.overflow;
    document.body.style.overflow='hidden';
    dialog.current?.showModal();
    return ()=>{document.body.style.overflow=previous;opener.current?.focus();};
  },[selected]);
  function open(project:(typeof personalProjects)[number],button:HTMLElement){opener.current=button;setSelected(project);}
  function close(){dialog.current?.close();setSelected(null);}
  return <>
  <dialog ref={dialog} className="project-dialog" aria-labelledby="preview-title" onCancel={close} onClose={()=>setSelected(null)} onClick={event=>{if(event.target===event.currentTarget)close();}}>
    {selected&&<div className="preview-panel"><div className="preview-toolbar"><button type="button" autoFocus onClick={close} className="preview-back"><ArrowLeft size={18}/>Back to portfolio</button><h2 id="preview-title">{selected.title}</h2></div><div className="preview-image-scroll"><Image src={selected.image} alt={selected.alt} width={selected.width} height={selected.height} sizes="95vw"/></div></div>}
  </dialog>
  <Reveal><div className="project-group-heading"><h3>Personal projects</h3><span>BUILT FROM CURIOSITY</span></div></Reveal>
  <div className="personal-project-grid">{personalProjects.map((project,index)=><Reveal key={project.title} delay={index*.06}>
    <article className="project-card personal-project-card">
      <button type="button" className="dashboard-preview" onClick={event=>open(project,event.currentTarget)} aria-label={`Open ${project.title} preview`}>
        <Image src={project.image} alt={project.alt} width={project.width} height={project.height} sizes="(max-width: 1000px) 90vw, 660px"/>
        <span className="preview-hint"><Maximize2 size={14}/>View dashboard</span>
      </button>
      <div className="project-content"><div className="project-category">0{index+1} / {project.category}</div>
        <h3>{project.title}</h3><p>{project.description}</p>
        <div className="tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div>
        <button type="button" className="project-link" onClick={event=>open(project,event.currentTarget)} aria-label={`View ${project.title}`}>View full dashboard<ArrowUpRight size={17}/></button>
      </div>
    </article>
  </Reveal>)}</div>
  <Reveal><div className="project-group-heading professional-heading"><h3>Professional work</h3><span>BUSINESS PROBLEMS, CLEARER ANSWERS</span></div></Reveal>
</>}
