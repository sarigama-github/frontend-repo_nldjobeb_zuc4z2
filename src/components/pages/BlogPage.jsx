import React, { useMemo } from 'react';

const sample = [
  { slug: 'praktik-ci-cd-di-lab', title: 'Praktik CI/CD di Lab', excerpt: 'Bagaimana kami menerapkan pipeline modern untuk kualitas dan kecepatan.', tag: 'DevOps', date: '2025-01-10' },
  { slug: 'ai-untuk-testing', title: 'AI untuk Otomasi Testing', excerpt: 'Eksperimen kami menggunakan LLM untuk menghasilkan test case.', tag: 'AI for SE', date: '2025-02-04' },
  { slug: 'observability-untuk-microservices', title: 'Observability untuk Microservices', excerpt: 'Tracing, logging, dan metrics yang dapat ditindaklanjuti.', tag: 'Architecture', date: '2025-03-01' },
];

const BlogCard = ({ post }) => (
  <a href={`#/blog/${post.slug}`} className="block p-5 rounded-xl border border-slate-200 bg-white hover:shadow-md transition">
    <div className="text-xs text-slate-500">{new Date(post.date).toLocaleDateString('id-ID')}</div>
    <h3 className="mt-1 font-semibold">{post.title}</h3>
    <p className="text-sm text-slate-600 mt-1">{post.excerpt}</p>
    <span className="inline-block mt-3 text-xs px-2 py-1 rounded bg-slate-100 text-slate-700">{post.tag}</span>
  </a>
);

const BlogPage = () => {
  const posts = useMemo(() => sample, []);
  return (
    <div className="max-w-6xl mx-auto px-4 py-14">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold">Blog</h1>
        <p className="text-slate-600">Artikel singkat seputar riset dan engineering di lab kami.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {posts.map((p) => (
          <BlogCard key={p.slug} post={p} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
