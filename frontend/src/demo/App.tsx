import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import CardSystemPage from './pages/CardSystemPage';
import InspirationsPage from './pages/InspirationsPage';
import ScriptsPage from './pages/ScriptsPage';
import SeriesPage from './pages/SeriesPage';
import TemplateLibraryPage from './pages/TemplateLibraryPage';

import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="project" element={<ProjectPage />} />
            <Route path="cards" element={<CardSystemPage />} />
            <Route path="inspirations" element={<InspirationsPage />} />
            <Route path="scripts" element={<ScriptsPage />} />
            <Route path="series" element={<SeriesPage />} />
            <Route path="template-library" element={<TemplateLibraryPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
