import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Software Engineering Lab — All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a href="#" className="hover:text-slate-700">Kebijakan Privasi</a>
          <span>•</span>
          <a href="#" className="hover:text-slate-700">Kontak</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
