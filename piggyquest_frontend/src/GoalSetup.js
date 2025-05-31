import React from 'react';

// PUBLIC_INTERFACE
function GoalSetup() {
  return (
    <section className="hero">
      <div className="subtitle" style={{ color: '#FF6F61' }}>Start a New Quest</div>
      <h1 className="title" style={{ marginBottom: '0.5em' }}>Goal Setup</h1>
      <div className="description">
        Set up a new savings jar! Name your goal, choose your piggy avatar, and set your target amount.
        <br />
        <span role="img" aria-label="goal flag">🏁</span> Begin your savings journey!
      </div>
    </section>
  );
}

export default GoalSetup;
