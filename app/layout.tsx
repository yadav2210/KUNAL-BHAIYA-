import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SmoothScroll from '../components/SmoothScroll';
import { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Kunal — Video Editor & Colourist | Cinematic Portfolio',
  description:
    'Explore the creative portfolio of Kunal, professional Video Editor & Colourist. Specializing in brand films, commercial advertisements, short-form viral retention edits, and cinematic colour grading.',
  keywords: [
    'Video Editor Portfolio',
    'Professional Video Editor',
    'Video Colourist',
    'Cinematic Video Editing',
    'Brand Film Editor',
    'Corporate Video Editor',
    'Advertisement Video Editor',
    'Colour Grading',
    'Kunal Video Editor'
  ],
  authors: [{ name: 'Kunal' }],
  openGraph: {
    title: 'Kunal — Video Editor & Colourist | Cinematic Portfolio',
    description:
      'Turning raw footage into powerful stories. Explore brand films, digital commercials, and colour grading projects.',
    siteName: 'Kunal Portfolio',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kunal — Video Editor & Colourist',
    description:
      'Transforming raw footage into compelling visual stories through cinematic editing and professional colour grading.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth bg-white text-[#111111]">
      <body className="bg-white text-[#111111] font-sans min-h-screen flex flex-col antialiased selection:bg-[#FF8500] selection:text-white">
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
