import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom';

const HomeHero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ZXa8w6R7uTjY7u5H/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 py-28 lg:py-36">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur text-slate-700 border border-slate-200 mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-medium">Software Engineering Lab</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Membangun Masa Depan melalui Riset & Rekayasa Perangkat Lunak
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Laboratorium SE kampus yang fokus pada penelitian, pengembangan, dan kolaborasi untuk mencetak engineers berkualitas dan berdampak.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/profile" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
              Jelajahi Profil
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/recruitment" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-slate-900 border border-slate-200 font-medium hover:bg-slate-50 transition">
              Daftar SE Geeks
            </Link>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white" />
    </section>
  );
};

export default HomeHero;
