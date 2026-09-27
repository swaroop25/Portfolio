import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MotionSurface from '@/components/MotionSurface';
import DataGraphic from '@/components/DataGraphic';
import Stats from '@/components/Stats';
import VideoResume from '@/components/VideoResume';
export default function Home(){return <><a className="skip-link" href="#about">Skip to content</a><Navbar/><MotionSurface><Hero/><Stats/><About/><VideoResume/><DataGraphic/><Experience/><Skills/><Projects/><Contact/></MotionSurface><Footer/></>}
