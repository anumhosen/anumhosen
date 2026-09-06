import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ParticlesBackground from '../components/common/ParticlesBackground';
import SEOStructuredData from '../components/common/SEOStructuredData';

export default function RootLayout() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="relative min-h-screen bg-gray-950 text-gray-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Background tech mesh and particles */}
      <div className="fixed inset-0 tech-grid-pattern pointer-events-none opacity-40 z-0" />
      <ParticlesBackground />
      <SEOStructuredData />
      
      {/* Top cyan ambient glow */}
      <div className="fixed -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-br from-cyan-500/15 via-blue-600/10 to-transparent blur-3xl pointer-events-none rounded-full z-0" />

      {/* Subtle bottom-right accent glow */}
      <div className="fixed -bottom-40 right-0 w-[450px] h-[300px] bg-blue-600/10 blur-3xl pointer-events-none rounded-full z-0" />

      {/* Main Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow z-10 pt-20">
        <Outlet />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
