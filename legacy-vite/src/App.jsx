import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Achievements from './pages/Achievements';
import Projects from './pages/Projects';
import Team from './pages/Team';
import Membership from './pages/Membership';
import LearningHub from './pages/LearningHub';
import Opportunities from './pages/Opportunities';
import Contact from './pages/Contact';

export default function App() {
  const [activePath, setActivePath] = useState('home');

  const renderActiveView = () => {
    switch (activePath) {
      case 'achievements':
        return <Achievements />;
      case 'projects':
        return <Projects />;
      case 'team':
        return <Team />;
      case 'membership':
        return <Membership />;
      case 'learning-hub':
        return <LearningHub />;
      case 'opportunities':
        return <Opportunities />;
      case 'contact':
        return <Contact />;
      case 'home':
      default:
        return <Home />;
    }
  };

  const handleSetActivePath = (path) => {
    setActivePath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background font-body-md text-on-background flex flex-col">
      {/* Global Navbar */}
      <Navbar activePath={activePath} setActivePath={handleSetActivePath} />

      {/* Main View Router */}
      <main className="relative pt-20 flex-grow">
        {renderActiveView()}
      </main>

      {/* Global Footer */}
      <Footer setActivePath={handleSetActivePath} />
    </div>
  );
}
