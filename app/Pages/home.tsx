
"use client";
import { useEffect } from "react";
import TopBanner from "../components/TopBanner";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Technology from "./Technology";
import PestDisease from "./PestDisease";
import Solutions from "./Solutions";
import AboutVilvom from "./AboutVilvom";
import Insights from "./Insights";
import ContactUs from "./ContactUs";

export default function Home() {
  // Move vals outside useEffect so it's available for rendering
  const vals = [55, 70, 62, 85, 78, 90, 68, 82, 75, 95, 88, 72];

  // Smooth scroll for anchor links (optional, can keep in useEffect)
  // This is safe because it doesn't affect SSR/DOM structure
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
        const t = document.querySelector(a.getAttribute("href") || "");
        if (t) {
          e.preventDefault();
          t.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }, []);

  return (
    <>
      {/* TOP BANNER */}
      <TopBanner />

      {/* NAV */}
      <Header />

      {/* HERO SECTION */}
      <section className="hero">
        <svg className="hero-bg-rings" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="300" cy="300" r="280" stroke="white" strokeWidth="1.5" />
          <circle cx="300" cy="300" r="220" stroke="white" strokeWidth="1.5" />
          <circle cx="300" cy="300" r="160" stroke="white" strokeWidth="1.5" />
          <circle cx="300" cy="300" r="100" stroke="white" strokeWidth="1.5" />
          <circle cx="300" cy="300" r="40" stroke="white" strokeWidth="1.5" />
        </svg>
        <div className="hero-inner">
          <div>
            <div className="hero-tag"><span></span> Precision Agriculture · Coimbatore, India</div>
            <p className="hero-tagline">Pure Care for Every Plantation</p>
            <h1>Smart Tech for <span className="accent">Thriving</span> Tea Plantations</h1>
            <p>Vilvom nurtures and protects tea plantations through innovative, nature-driven care solutions combining AI, IoT sensors, drone technology, and satellite imagery to deliver reliability, growth, and prosperity for tea farmers.</p>
            <div className="hero-actions">
              <a href="#technology" className="btn-green">Explore Technology</a>
              <a href="#contact" className="btn-outline-white">Get in Touch</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-panel">
              <div className="panel-header">
                <span className="panel-title">Integrated Smart Tea Plantation Ecosystem</span>
                {/* <div className="live-pill"><span className="live-dot"></span> Live</div> */}
              </div>
              <div className="panel-metrics">
                <div className="pm g"><span className="lbl">Intelligent Pest Detection & Monitoring</span></div>
                <div className="pm gb"><span className="lbl">Precision Spraying & Treatment Recommendation</span></div>
                <div className="pm gb"><span className="lbl">MRL-Compliant Sustainable Operations</span></div>
                <div className="pm g"><span className="lbl">GPS-Guided Smart Field Management</span></div>              
              </div>
             
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <div className="stats-strip">
        <div className="stat-item"><span className="stat-num">12,000+</span><span className="stat-lbl">Acres Managed</span></div>
        <div className="stat-item"><span className="stat-num">98%</span><span className="stat-lbl">Pest Detection Accuracy</span></div>
        <div className="stat-item"><span className="stat-num">40%</span><span className="stat-lbl">Pesticide Reduction</span></div>
        <div className="stat-item"><span className="stat-num">22%</span><span className="stat-lbl">Yield Increase</span></div>
        <div className="stat-item"><span className="stat-num">11</span><span className="stat-lbl">Patents Granted</span></div>
      </div>

      {/* TECHNOLOGY SECTION */}
      <Technology />

      {/* PEST & DISEASE DETECTION SECTION */}
      <PestDisease />

      {/* SOLUTIONS / FEATURES SECTION */}
      <Solutions />

      <div className="section-divider"></div>

      {/* ABOUT / BRAND SECTION */}
      <AboutVilvom />

      {/* BLOG SECTION */}
      <Insights />

      {/* CTA SECTION */}
      <ContactUs />

      {/* FOOTER SECTION */}
      <Footer />
    </>
  );
}