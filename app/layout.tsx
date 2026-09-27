import type { Metadata } from 'next';
import './globals.css';
import './motion.css';
import './projects.css';
import './stats.css';
import './video.css';
export const metadata: Metadata = { title: 'Sai Swaroop — Data Analyst & BI Professional', description: 'Turning complex business data into clear decisions. Power BI, SQL, cloud analytics and automated reporting by Sai Swaroop.', icons: { icon: '/favicon.svg' } };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
