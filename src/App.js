import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Layout components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Page components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResearchPage from './pages/ResearchPage';
import SurveysPage from './pages/SurveysPage';
import InterviewsPage from './pages/InterviewsPage';
import DashboardPage from './pages/DashboardPage';
import ContactPage from './pages/ContactPage';
import SurveyDetailPage from './pages/SurveyDetailPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/surveys" element={<SurveysPage />} />
          <Route path="/surveys/:surveyId" element={<SurveyDetailPage />} />
          <Route path="/interviews" element={<InterviewsPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
