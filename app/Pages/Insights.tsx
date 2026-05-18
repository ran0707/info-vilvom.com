"use client";

export default function Insights() {
  return (
    <section id="blog" className="section">
      <span className="stag">Insights & News</span>
      <h2>Plantation Intelligence Today</h2>
      <p className="section-sub">The latest in precision tea farming — research, technology breakthroughs, and best practices from Vilvom's agronomists and field teams.</p>
      <div className="blog-grid">
        <div className="blog-card">
          <div className="blog-thumb bt1">🛸</div>
          <div className="blog-body">
            <div className="blog-cat">Drone Technology</div>
            <h3>How Autonomous Drones are Transforming Tea Plantation Disease Scouting Across South India</h3>
            <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.7, margin: "0.5rem 0 0.8rem" }}>Vilvom's drone fleet detected blister blight outbreaks 3 weeks earlier than traditional visual scouting — dramatically cutting treatment costs across Nilgiris estates...</p>
            <div className="blog-meta">Vilvom Research Team · Apr 20, 2026 · 7 min read</div>
          </div>
        </div>
        <div className="blog-card">
          <div className="blog-thumb bt2">🍃</div>
          <div className="blog-body">
            <div className="blog-cat">Crop Intelligence</div>
            <h3>AI Pest Detection Reduces Pesticide Use by 40% in Tamil Nadu Tea Gardens</h3>
            <div className="blog-meta" style={{ marginTop: "0.8rem" }}>Priya Nair · Apr 15, 2026 · 5 min read</div>
          </div>
        </div>
        <div className="blog-card">
          <div className="blog-thumb bt3">🌱</div>
          <div className="blog-body">
            <div className="blog-cat">Sustainability</div>
            <h3>Carbon Insetting in Tea Supply Chains: What Every Plantation Owner Must Know</h3>
            <div className="blog-meta" style={{ marginTop: "0.8rem" }}>Dr. Rajan Iyer · Apr 10, 2026 · 6 min read</div>
          </div>
        </div>
      </div>
    </section>
  );
}
