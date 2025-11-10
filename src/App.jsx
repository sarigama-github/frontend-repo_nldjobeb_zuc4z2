import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import HomeHero from './components/HomeHero.jsx';
import RouterView from './components/RouterView.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white text-slate-900">
        <Navbar />
        <main className="flex-1">
          <HomeHero />
          <RouterView />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
