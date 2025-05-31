import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomeDashboard from './HomeDashboard';
import GoalSetup from './GoalSetup';
import ParentDashboard from './ParentDashboard';
import SavingsReport from './SavingsReport';

// PUBLIC_INTERFACE
function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol" role="img" aria-label="pig">🐷</span> <span style={{ color: '#1DE9B6' }}>PiggyQuest</span>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link to="/" className="btn" style={{ textDecoration: 'none' }}>Home</Link>
              <Link to="/goal-setup" className="btn" style={{ textDecoration: 'none' }}>Goal Setup</Link>
              <Link to="/parent-dashboard" className="btn" style={{ textDecoration: 'none' }}>Parent Dashboard</Link>
              <Link to="/savings-report" className="btn" style={{ textDecoration: 'none' }}>Savings Report</Link>
            </div>
          </div>
        </nav>
        <main style={{ paddingTop: 92 /* account for fixed navbar height + spacing */ }}>
          <div className="container">
            <Routes>
              <Route path="/" element={<HomeDashboard />} />
              <Route path="/goal-setup" element={<GoalSetup />} />
              <Route path="/parent-dashboard" element={<ParentDashboard />} />
              <Route path="/savings-report" element={<SavingsReport />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;