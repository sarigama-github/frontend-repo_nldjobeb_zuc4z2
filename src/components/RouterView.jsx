import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage.jsx';
import PersonnelPage from './pages/PersonnelPage.jsx';
import PersonDetailPage from './pages/PersonDetailPage.jsx';
import RecruitmentPage from './pages/RecruitmentPage.jsx';
import BlogPage from './pages/BlogPage.jsx';

const RouterView = () => {
  return (
    <Routes>
      <Route path="/" element={<div />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/personil" element={<PersonnelPage />} />
      <Route path="/personil/:id" element={<PersonDetailPage />} />
      <Route path="/recruitment" element={<RecruitmentPage />} />
      <Route path="/blog" element={<BlogPage />} />
    </Routes>
  );
};

export default RouterView;
