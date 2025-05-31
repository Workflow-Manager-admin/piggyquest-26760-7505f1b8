import React from 'react';

// PUBLIC_INTERFACE
function ParentDashboard() {
  return (
    <section className="hero">
      <div className="subtitle" style={{ color: '#8E24AA' }}>Parent Portal</div>
      <h1 className="title" style={{ marginBottom: '0.5em' }}>Parent Dashboard</h1>
      <div className="description">
        Manage child accounts, assign chores, send allowances, and review savings requests.
        <br />
        <span role="img" aria-label="parent-guardianship">👨‍👩‍👧‍👦</span> Your tools for guidance!
      </div>
    </section>
  );
}

export default ParentDashboard;
