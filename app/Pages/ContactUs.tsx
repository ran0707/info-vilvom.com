"use client";

export default function ContactUs() {
  return (
    <section id="contact" className="cta-section">
      <span className="stag stag-blue" style={{ background: "rgba(59,79,184,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }}>Start Today</span>
      <h2 style={{ marginTop: "1rem" }}>Pure Care for Every Plantation</h2>
      <p>Join tea farmers across Tamil Nadu and beyond who trust Vilvom's AI-powered platform to nurture, protect, and grow their plantations sustainably.</p>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
        <a href="#" className="btn-white">Request a Demo</a>
        <a href="#" className="btn-outline-white2">Contact Our Team</a>
      </div>
    </section>
  );
}
