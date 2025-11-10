import React from 'react';
import { useParams, Link } from 'react-router-dom';

const db = {
  aulia: {
    name: 'Aulia Rahman, M.Kom',
    role: 'Kepala Lab',
    avatar: 'https://i.pravatar.cc/240?img=1',
    bio: 'Peneliti di bidang Empirical SE dan DevOps. Fokus pada produktivitas developer dan kualitas perangkat lunak.',
    contacts: { github: 'auliarhmn', email: 'aulia@kampus.ac.id' },
  },
  bima: {
    name: 'Bima Pratama, M.T',
    role: 'Peneliti',
    avatar: 'https://i.pravatar.cc/240?img=2',
    bio: 'Meneliti AI for SE dan automasi pengujian. Antusias dengan LLM engineering.',
    contacts: { github: 'bimap', email: 'bima@kampus.ac.id' },
  },
  citra: {
    name: 'Citra Lestari, S.Kom',
    role: 'Asisten',
    avatar: 'https://i.pravatar.cc/240?img=3',
    bio: 'Fokus pada UX Engineering dan edukasi komputasi. Suka membangun tooling untuk belajar.',
    contacts: { github: 'citra-dev', email: 'citra@kampus.ac.id' },
  },
};

const PersonDetailPage = () => {
  const { id } = useParams();
  const p = db[id];

  if (!p) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Personil tidak ditemukan</h1>
        <p className="text-slate-600 mt-2">Periksa kembali tautan atau pilih dari daftar personil.</p>
        <Link to="/personil" className="inline-block mt-6 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">Kembali ke Personil</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-14">
      <Link to="/personil" className="text-sm text-blue-700 hover:underline">← Kembali</Link>
      <div className="mt-6 p-6 rounded-2xl border border-slate-200 bg-white">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <img src={p.avatar} alt={p.name} className="w-28 h-28 rounded-full object-cover" />
          <div>
            <h1 className="text-3xl font-extrabold">{p.name}</h1>
            <p className="text-slate-600">{p.role}</p>
            <p className="mt-4 text-slate-700 leading-relaxed">{p.bio}</p>
            <div className="mt-4 text-sm text-slate-600">
              <p>GitHub: <a href={`https://github.com/${p.contacts.github}`} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">@{p.contacts.github}</a></p>
              <p>Email: <a href={`mailto:${p.contacts.email}`} className="text-blue-700 hover:underline">{p.contacts.email}</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonDetailPage;
