import React from 'react';
import { Target, Flag, Workflow, Focus } from 'lucide-react';

const Section = ({ title, children }) => (
  <section className="py-10 border-b border-slate-200 last:border-none">
    <h2 className="text-2xl font-bold mb-3">{title}</h2>
    <div className="text-slate-700 leading-relaxed">{children}</div>
  </section>
);

const Card = ({ title, Icon, children }) => (
  <div className="p-5 rounded-xl border border-slate-200 bg-white/60 backdrop-blur">
    <div className="flex items-center gap-2 mb-2">
      {Icon && <Icon className="w-5 h-5 text-blue-600" />}
      <h3 className="font-semibold">{title}</h3>
    </div>
    <div className="text-slate-700 text-sm">{children}</div>
  </div>
);

const ProfilePage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-14">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold">Profil Laboratorium SE</h1>
        <p className="text-slate-600 mt-2 max-w-2xl">Tentang laboratorium, visi-misi, roadmap, serta fokus & lingkup penelitian kami.</p>
      </div>

      <Section title="Tentang Lab SE">
        <p>
          Laboratorium Software Engineering adalah pusat kegiatan riset, praktik, dan kolaborasi lintas disiplin dalam pengembangan perangkat lunak modern. Kami mendorong budaya engineering yang kuat dengan prinsip kualitas, otomatisasi, dan pembelajaran berkelanjutan.
        </p>
      </Section>

      <div className="grid md:grid-cols-2 gap-5">
        <Card title="Visi" Icon={Target}>
          Menjadi laboratorium rujukan di bidang rekayasa perangkat lunak yang berdampak pada industri dan masyarakat.
        </Card>
        <Card title="Misi" Icon={Flag}>
          - Mengembangkan talenta melalui proyek nyata dan riset terapan.
          <br />- Mendorong budaya open-source dan kolaborasi.
          <br />- Menghasilkan publikasi dan produk berkualitas.
        </Card>
      </div>

      <Section title="Roadmap">
        <div className="grid md:grid-cols-3 gap-4">
          <Card title="2025: Foundation" Icon={Workflow}>
            CI/CD, testing, coding standards, dokumentasi, kurikulum inti.
          </Card>
          <Card title="2026: Scaling Research" Icon={Workflow}>
            Arsitektur microservices, cloud-native, data-driven products, publikasi.
          </Card>
          <Card title="2027: Impact" Icon={Workflow}>
            Kerja sama industri, produk spin-off, kontribusi OSS kelas dunia.
          </Card>
        </div>
      </Section>

      <Section title="Fokus & Lingkup Penelitian">
        <div className="grid md:grid-cols-2 gap-4">
          <Card title="Empirical SE" Icon={Focus}>
            Mining software repositories, developer productivity, code quality analytics.
          </Card>
          <Card title="AI for SE / SE for AI" Icon={Focus}>
            Code intelligence, test generation, LLM engineering, model evaluation.
          </Card>
          <Card title="Software Architecture" Icon={Focus}>
            Distributed systems, performance, reliability, DevOps, observability.
          </Card>
          <Card title="HCI & Education" Icon={Focus}>
            Tooling, learning platforms, UX engineering untuk edukasi computing.
          </Card>
        </div>
      </Section>
    </div>
  );
};

export default ProfilePage;
