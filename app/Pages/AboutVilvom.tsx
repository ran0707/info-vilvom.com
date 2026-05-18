"use client";
import Image from "next/image";

export default function AboutVilvom() {
  return (
    <section className="section-full about-section">
      <div className="about-inner">
        <div>
          <span className="stag">About Vilvom</span>
          <h2>The Brand Behind the Mission</h2>
          <p className="section-sub">VILVOM was founded to transform tea plantation management through AI-enabled precision agriculture and intelligent digital farming solutions. The platform empowers tea growers with real-time pest diagnostics, adaptive farm recommendations, and expert-assisted decision support while ensuring accessibility in low-resource rural environments. By combining edge AI, offline-first technology, and sustainable agricultural practices, VILVOM supports scalable, data-driven, and environmentally responsible tea cultivation aligned with Digital India and Atmanirbhar Bharat initiatives.</p>
          <div className="brand-values">
            <div className="bv-card">
              <span className="bv-icon">🤖</span>
              <h4>Edge AI Innovation</h4>
              <p>The AI symbol represents VILVOM's proprietary edge-computing architecture that enables real-time pest and disease diagnostics directly on mobile devices without dependency on continuous internet connectivity.</p>
            </div>
            <div className="bv-card">
              <span className="bv-icon">🌿</span>
              <h4>Sustainable Precision Agriculture</h4>
              <p>The tea leaf symbolizes intelligent farm management, reduced chemical usage, adaptive recommendation systems, and environmentally conscious plantation practices for long-term sustainability.</p>
            </div>
            <div className="bv-card">
              <span className="bv-icon">☁️</span>
              <h4>Integrated Smart Ecosystem</h4>
              <p>The connected digital network represents the seamless integration of computer vision, expert advisory support, weather intelligence, and community-driven knowledge sharing into a unified AgriTech platform.</p>
            </div>
            <div className="bv-card">
              <span className="bv-icon">�</span>
              <h4>SDG Alignment</h4>
              <p>• SDG 2 – Zero Hunger<br/>• SDG 9 – Industry, Innovation & Infrastructure<br/>• SDG 12 – Responsible Consumption & Production<br/>• SDG 13 – Climate Action</p>
            </div>
          </div>
        </div>
        <div className="logo-showcase">
          
          <div
  className=""
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  }}
>
  <Image
    src="/vilvom.jpeg"
    alt="Vilvom Logo"
    width={250}
    height={250}
    priority
    style={{
      objectFit: "contain",
    }}
  />

</div>
          
          
        </div>
      </div>
    </section>
  );
}