import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import SkillsPage from '../pages/SkillsPage';
import ProjectsPage from '../pages/ProjectsPage';
import ResearchPage from '../pages/ResearchPage';
import OpenSourcePage from '../pages/OpenSourcePage';
import ContactPage from '../pages/ContactPage';
import NotFoundPage from '../pages/NotFoundPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="research" element={<ResearchPage />} />
        <Route path="opensource" element={<OpenSourcePage />} />
        <Route path="open-source" element={<OpenSourcePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
