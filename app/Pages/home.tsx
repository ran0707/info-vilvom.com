
"use client";
import { useEffect } from "react";
import TopBanner from "./components/TopBanner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Technology from "./DiscoverVilvom";
import DroneSpraying from "./DroneSpraying";
import PestDisease from "./PestDisease";
import Solutions from "./Solutions";
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
      <section id="home" className="hero">
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="hero-bg-video"
        >
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>
        
        <div className="hero-inner">
          <div className="hero-center-content">
            <h1 className="hero-center-heading">
              Delivering effective crop spraying by <span className="accent">precision farming drones</span>
            </h1>
<p className="hero-center-subtitle" style={{ transform: "translateX(190px)", color: "#ffffff", fontSize: "1.55rem", whiteSpace: "nowrap" }}>
  Increase Your Yield with Our Spraying Service
</p>
            <div className="app-store-buttons">
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="store-button">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" />
              </a>
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="store-button">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      {/* <div className="stats-strip">
        <div className="stat-item"><span className="stat-num">12,000+</span><span className="stat-lbl">Acres Managed</span></div>
        <div className="stat-item"><span className="stat-num">98%</span><span className="stat-lbl">Pest Detection Accuracy</span></div>
        <div className="stat-item"><span className="stat-num">40%</span><span className="stat-lbl">Pesticide Reduction</span></div>
        <div className="stat-item"><span className="stat-num">22%</span><span className="stat-lbl">Yield Increase</span></div>
        <div className="stat-item"><span className="stat-num">11</span><span className="stat-lbl">Patents Granted</span></div>
      </div> */}

      {/* TECHNOLOGY SECTION */}
      <Technology />

      {/* DRONE SPRAYING SECTION */}
      <DroneSpraying />

      {/* PEST & DISEASE DETECTION SECTION */}
      <PestDisease />

      {/* SOLUTIONS / FEATURES SECTION */}
      <Solutions />

      <div className="section-divider"></div>

      {/* CTA SECTION */}
      <ContactUs />

      {/* FOOTER SECTION */}
      <Footer />
    </>
  );
}