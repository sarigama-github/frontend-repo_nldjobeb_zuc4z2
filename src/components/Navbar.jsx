import React from 'react';
import { Home, Users, BookOpen, Newspaper, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavLink = ({ to, icon: Icon, label }) => (
  <Link
    to={to}
    className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition"
  >
    <Icon className="w-4 h-4" />
    {label}
  </Link>
);

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-semibold text-slate-900">
            <Rocket className="w-5 h-5 text-blue-600" />
            <span>SE Lab</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" icon={Home} label="Home" />
            <NavLink to="/profile" icon={BookOpen} label="Profil" />
            <NavLink to="/personil" icon={Users} label="Personil" />
            <NavLink to="/recruitment" icon={Rocket} label="Recruitment" />
            <NavLink to="/blog" icon={Newspaper} label="Blog" />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
