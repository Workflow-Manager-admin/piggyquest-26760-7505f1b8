import React from 'react';

// PUBLIC_INTERFACE
function HomeDashboard() {
  return (
    <section className="hero">
      <div className="subtitle" style={{ color: '#1DE9B6' }}>Your Saving Goals & Piggies</div>
      <h1 className="title" style={{ marginBottom: '0.5em' }}>Home Dashboard</h1>
      <div className="description">
        Here you'll see all your savings jars (piggy avatars), goal progress, and your total balance.<br />
        <span role="img" aria-label="coins">💰</span> Start your savings adventure!
      </div>
    </section>
  );
}

export default HomeDashboard;
