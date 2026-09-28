'use client';

import {useRef,useState,useEffect} from 'react';
import {Play,ArrowUpRight,ArrowLeft} from 'lucide-react';
import Reveal from './Reveal';

export default function VideoResume(){
  const videoRef=useRef<HTMLVideoElement>(null);
  const playRef=useRef<HTMLButtonElement>(null);
  const playRequest=useRef(0);
  const [started,setStarted]=useState(false);
  const [error,setError]=useState(false);
  const [playbackBlocked,setPlaybackBlocked]=useState(false);
  function closeVideo(){
    playRequest.current+=1;
    const video=videoRef.current;
    video?.pause();
    if(video&&video.readyState>0){video.currentTime=0;}
    setStarted(false);
    setPlaybackBlocked(false);
    requestAnimationFrame(()=>playRef.current?.focus({preventScroll:true}));
  }
  useEffect(()=>{
    if(!started)return;
    const escape=(event:KeyboardEvent)=>{if(event.key==='Escape'&&!document.fullscreenElement&&!document.querySelector('dialog[open]'))closeVideo();};
    document.addEventListener('keydown',escape);
    return ()=>document.removeEventListener('keydown',escape);
  },[started]);
  function play(){
    const video=videoRef.current;
    if(!video) return;
    const request=++playRequest.current;
    setPlaybackBlocked(false);
    // Keep play() in the original tap handler: Safari requires user activation.
    const playback=video.play();
    setStarted(true);
    playback.catch(()=>{if(playRequest.current===request)setPlaybackBlocked(true);});
  }
  return <section className="video-resume container" id="video-resume" aria-labelledby="video-title">
    <Reveal><div className="video-heading"><div><div className="eyebrow">BEYOND THE NUMBERS</div><h2 id="video-title">My story, in motion<span className="accent">.</span></h2></div><p>A personal introduction.<br/>In my own words.</p></div>
      {started&&<button type="button" className="video-close" onClick={closeVideo}><ArrowLeft size={17}/>Close video</button>}
      <div className="video-frame">
        <video ref={videoRef} controls={started||error} playsInline preload="metadata" poster="/video/resume-memoji.png" aria-label="Sai Swaroop's video résumé" onPlaying={()=>setPlaybackBlocked(false)} onError={()=>setError(true)} tabIndex={started||error?0:-1}>
          <source src="/video/resume.mp4" type="video/mp4"/>
          Your browser does not support embedded video. <a href="/video/resume.mp4">Download the video résumé.</a>
        </video>
        {!started&&!error&&<button ref={playRef} className="video-cover memoji-cover" onClick={play} aria-label="Play Sai Swaroop's video résumé" style={{backgroundImage:'url(/video/resume-memoji.png)',backgroundSize:'cover',backgroundPosition:'center'}}><span className="video-play"><Play size={28} fill="currentColor"/></span><span className="video-cover-copy"><span>MEET SAI SWAROOP</span><strong>A little more<br/>than a résumé.</strong><span className="video-watch">WATCH MY VIDEO RÉSUMÉ <ArrowUpRight size={15}/></span></span></button>}
      </div>
      <div className="video-foot"><span>SAI SWAROOP · DATA & ANALYTICS</span><a href="/video/resume.mp4" download>Download video <ArrowUpRight size={13}/></a></div>
      {error&&<p role="alert" className="video-error">This browser couldn’t play the video. Use the download link to watch it on your device.</p>}
      {playbackBlocked&&!error&&<p role="status" className="video-error">Tap the player’s play control to start, or <a href="/video/resume.mp4">open the video directly</a>.</p>}
    </Reveal>
  </section>;
}
