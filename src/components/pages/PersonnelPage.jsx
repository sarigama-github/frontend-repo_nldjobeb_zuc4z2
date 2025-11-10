import React from 'react';
import { Link } from 'react-router-dom';

const people = [
  { id: 'aulia', name: 'Aulia Rahman, M.Kom', role: 'Kepala Lab', interests: 'Empirical SE, DevOps', avatar: 'https://i.pravatar.cc/160?img=1' },
  { id: 'bima', name: 'Bima Pratama, M.T', role: 'Peneliti', interests: 'AI for SE, Test Automation', avatar: 'https://i.pravatar.cc/160?img=2' },
  { id: 'citra', name: 'Citra Lestari, S.Kom', role: 'Asisten', interests: 'UX Engineering, EduTech', avatar: 'https://i.pravatar.cc/160?img=3' },
];

const PersonCard = ({ p }) => (
  <Link to={`/personil/${p.id}`} className="group p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition block">
    <div className="flex items-center gap-4">
      <img src={p.avatar} alt={p.name} className="w-16 h-16 rounded-full object-cover" />
      <div>
        <h3 className="font-semibold group-hover:text-blue-600">{p.name}</h3>
        <p className="text-sm text-slate-600">{p.role}</p>
        <p className="text-xs text-slate-500 mt-1">Minat: {p.interests}</p>
      </div>
    </div>
  </Link>
);

const PersonnelPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-14">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold">Personil Lab</h1>
        <p className="text-slate-600">Klik salah satu untuk melihat profil lengkap.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {people.map((p) => (
          <PersonCard key={p.id} p={p} />
        ))}
      </div>
    </div>
  );
};

export default PersonnelPage;
