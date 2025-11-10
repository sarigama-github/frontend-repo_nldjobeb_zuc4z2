import React, { useState } from 'react';

const initialList = [
  { name: 'Dita A.', angkatan: '2022', minat: 'Quality Engineering' },
  { name: 'Rizky P.', angkatan: '2023', minat: 'Backend & DevOps' },
];

const RecruitmentPage = () => {
  const [list, setList] = useState(initialList);
  const [form, setForm] = useState({ name: '', angkatan: '', minat: '' });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.angkatan) return;
    setList([{ ...form }, ...list]);
    setForm({ name: '', angkatan: '', minat: '' });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-14">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold">SE Geeks Recruitment</h1>
        <p className="text-slate-600">Daftar untuk bergabung sebagai kontributor/anggota lab. Sederhana dan cepat.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <form onSubmit={submit} className="p-6 border border-slate-200 rounded-xl bg-white">
          <div className="mb-4">
            <label className="block text-sm font-medium">Nama</label>
            <input value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} className="mt-1 w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500" placeholder="Nama lengkap" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Angkatan</label>
            <input value={form.angkatan} onChange={(e)=>setForm({...form,angkatan:e.target.value})} className="mt-1 w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500" placeholder="2023" />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium">Minat</label>
            <input value={form.minat} onChange={(e)=>setForm({...form,minat:e.target.value})} className="mt-1 w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500" placeholder="AI for SE, Testing, DevOps, dsb." />
          </div>
          <button type="submit" className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">Kirim</button>
        </form>

        <div>
          <h2 className="text-xl font-semibold mb-3">Daftar SE Geeks</h2>
          <div className="space-y-3">
            {list.map((s, idx) => (
              <div key={idx} className="p-4 rounded-lg border border-slate-200 bg-white flex items-center justify-between">
                <div>
                  <p className="font-medium">{s.name}</p>
                  <p className="text-sm text-slate-600">Angkatan {s.angkatan} · {s.minat}</p>
                </div>
                <span className="text-xs px-2 py-1 rounded bg-blue-50 text-blue-700 border border-blue-200">SE Geeks</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentPage;
