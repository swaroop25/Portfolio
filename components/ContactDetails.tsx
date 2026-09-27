import {Phone,Mail,Linkedin,FileDown} from 'lucide-react';

export default function ContactDetails(){return <address className="contact-details">
  <a href="mailto:swaroop2526@gmail.com"><Mail size={17}/><span><small>EMAIL</small>swaroop2526@gmail.com</span></a>
  <a href="tel:+919398256891"><Phone size={17}/><span><small>PHONE</small>+91 93982 56891</span></a>
  <a href="https://www.linkedin.com/in/swaroopmdataanalyst/" target="_blank" rel="noopener noreferrer"><Linkedin size={17}/><span><small>LINKEDIN</small>swaroopmdataanalyst</span></a>
  <a href="/Sai-Swaroop-Resume.pdf" download="Sai-Swaroop-Resume.pdf"><FileDown size={17}/><span><small>RÉSUMÉ</small>Download PDF</span></a>
</address>}
