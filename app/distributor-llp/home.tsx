"use client";
import VilvomHeader from "./Components/header";
import VilvomFooter from "./Components/footer";
import Services from "./services";

import Link from "next/link";

export default function VilvomHome() {
  return (
    <>
      <style>{`
        /* Responsive Media Queries for Distributor LLP */
        
        /* Tablet: 768px - 1024px */
        @media (max-width: 1024px) {
          .distributor-hero {
            height: 350px !important;
          }

          .distributor-hero-cta {
            bottom: 2rem !important;
            left: 2rem !important;
            max-width: 280px !important;
            padding: 1.25rem 1.5rem !important;
          }

          .distributor-hero-cta h2 {
            font-size: 1.2rem !important;
          }

          .distributor-hero-cta p {
            font-size: 0.78rem !important;
          }

          .distributor-about {
            padding: 3rem 1.5rem 1.5rem !important;
          }

          .distributor-about h2 {
            font-size: 1.75rem !important;
          }

          .distributor-about p {
            font-size: 0.95rem !important;
          }

          .distributor-south-india {
            padding: 3.5rem 2rem !important;
          }

          .distributor-south-india-content {
            gap: 2.5rem !important;
          }

          .distributor-south-india h2 {
            font-size: 1.75rem !important;
          }

          .distributor-south-india p {
            font-size: 0.9rem !important;
          }

          .distributor-south-india-map {
            width: 220px !important;
            height: 260px !important;
          }

          .distributor-services-header {
            padding: 0 2.5rem 1.5rem !important;
          }

          .distributor-services-header h2 {
            font-size: 2rem !important;
          }

          .distributor-service-item {
            padding: 1.75rem 2.5rem !important;
            gap: 1.5rem !important;
          }

          .distributor-service-item h3 {
            font-size: 1rem !important;
          }

          .distributor-service-item p {
            font-size: 0.82rem !important;
          }

          .distributor-service-image {
            width: 320px !important;
            height: 240px !important;
          }
        }

        /* Mobile: up to 767px */
        @media (max-width: 767px) {
          .distributor-hero {
            height: 300px !important;
          }

          .distributor-hero-cta {
            bottom: 1.5rem !important;
            left: 1.5rem !important;
            right: 1.5rem !important;
            max-width: none !important;
            padding: 1rem 1.25rem !important;
          }

          .distributor-hero-cta h2 {
            font-size: 1.1rem !important;
            margin-bottom: 0.5rem !important;
          }

          .distributor-hero-cta p {
            font-size: 0.75rem !important;
            margin-bottom: 0.75rem !important;
          }

          .distributor-hero-cta a {
            padding: 0.4rem 1rem !important;
            font-size: 0.75rem !important;
          }

          .distributor-about {
            padding: 2.5rem 1.25rem 1.5rem !important;
          }

          .distributor-about h2 {
            font-size: 1.5rem !important;
            margin-bottom: 1rem !important;
          }

          .distributor-about p {
            font-size: 0.9rem !important;
            line-height: 1.7 !important;
          }

          .distributor-about button {
            padding: 0.5rem 1.25rem !important;
            font-size: 0.8rem !important;
            margin-top: 1rem !important;
          }

          .distributor-south-india {
            padding: 3rem 1.5rem !important;
          }

          .distributor-south-india-content {
            flex-direction: column !important;
            gap: 2rem !important;
          }

          .distributor-south-india-text {
            flex: 1 1 100% !important;
            min-width: 100% !important;
          }

          .distributor-south-india h2 {
            font-size: 1.5rem !important;
            margin-bottom: 1rem !important;
          }

          .distributor-south-india p {
            font-size: 0.85rem !important;
            line-height: 1.7 !important;
          }

          .distributor-south-india-map {
            width: 100% !important;
            max-width: 220px !important;
            height: 250px !important;
            margin: 0 auto !important;
          }

          .distributor-services {
            padding-top: 2.5rem !important;
          }

          .distributor-services-header {
            padding: 0 1.5rem 1.5rem !important;
          }

          .distributor-services-header h2 {
            font-size: 1.5rem !important;
          }

          .distributor-services-header p {
            font-size: 0.8rem !important;
          }

          .distributor-service-item {
            flex-direction: column !important;
            padding: 1.5rem 1.5rem !important;
            gap: 1.25rem !important;
            min-height: auto !important;
          }

          .distributor-service-content {
            flex: 1 1 100% !important;
          }

          .distributor-service-item h3 {
            font-size: 0.95rem !important;
            margin-bottom: 0.75rem !important;
          }

          .distributor-service-item p {
            font-size: 0.8rem !important;
            line-height: 1.7 !important;
          }

          .distributor-service-image {
            width: 100% !important;
            height: 220px !important;
            flex-shrink: 1 !important;
          }

          .distributor-service-image img {
            width: 100% !important;
            height: 220px !important;
          }
        }

        /* Small Mobile: up to 480px */
        @media (max-width: 480px) {
          .distributor-hero {
            height: 280px !important;
          }

          .distributor-hero-cta {
            bottom: 1rem !important;
            left: 1rem !important;
            right: 1rem !important;
            padding: 0.875rem 1rem !important;
          }

          .distributor-hero-cta h2 {
            font-size: 1rem !important;
          }

          .distributor-hero-cta p {
            font-size: 0.7rem !important;
            line-height: 1.5 !important;
          }

          .distributor-about {
            padding: 2rem 1rem 1.25rem !important;
          }

          .distributor-about h2 {
            font-size: 1.35rem !important;
          }

          .distributor-about p {
            font-size: 0.85rem !important;
          }

          .distributor-south-india {
            padding: 2.5rem 1rem !important;
          }

          .distributor-south-india h2 {
            font-size: 1.35rem !important;
          }

          .distributor-south-india p {
            font-size: 0.8rem !important;
          }

          .distributor-services-header {
            padding: 0 1rem 1.25rem !important;
          }

          .distributor-services-header h2 {
            font-size: 1.35rem !important;
          }

          .distributor-service-item {
            padding: 1.25rem 1rem !important;
          }

          .distributor-service-item h3 {
            font-size: 0.9rem !important;
          }

          .distributor-service-item p {
            font-size: 0.75rem !important;
          }

          .distributor-service-image {
            height: 200px !important;
          }

          .distributor-service-image img {
            height: 200px !important;
          }
        }
      `}</style>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          fontFamily: "var(--font-geist-sans, Georgia, serif)",
          background: "#fff",
        }}
      >
        {/* HEADER */}
        <VilvomHeader />

      {/* HERO SECTION */}
      <section
        id="home"
        className="distributor-hero"
        style={{
          position: "relative",
          width: "100%",
          height: "420px",
          overflow: "hidden",
        }}
      >
        <img
          src="/office.png"
          alt="Office background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 40%",
            display: "block",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.25)",
          }}
        />
        <div
          className="distributor-hero-cta"
          style={{
            position: "absolute",
            bottom: "2.5rem",
            left: "2.5rem",
            background: "rgba(180, 180, 190, 0.82)",
            backdropFilter: "blur(4px)",
            padding: "1.5rem 1.75rem",
            maxWidth: 320,
            borderRadius: "2px",
          }}
        >
          <h2
            style={{
              color: "#2e7d32",
              fontSize: "1.4rem",
              fontWeight: 700,
              margin: "0 0 0.6rem 0",
              fontFamily: "Georgia, serif",
            }}
          >
            Let&apos;s Connect
          </h2>
          <p
            style={{
              color: "#222",
              fontSize: "0.82rem",
              lineHeight: 1.65,
              margin: "0 0 1rem 0",
            }}
          >
          Are you loooking for innovative solutions tailored to your business needs. Our team is committed to providing reliable support, seamless communication, and exceptional service. Please fill out the form below and we’ll connect with you as soon as possible.

          </p>
          <a
            href="/distributor-llp/contact"
            style={{
              display: "inline-block",
              background: "#2e7d32",
              color: "#fff",
              padding: "0.45rem 1.1rem",
              fontSize: "0.82rem",
              fontWeight: 600,
              borderRadius: "3px",
              textDecoration: "none",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.background = "#1b5e20")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.background = "#2e7d32")
            }
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section
        id="about"
        className="distributor-about"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "3.5rem 1.5rem 2rem",
          width: "100%",
        }}
      >
        <h2
          style={{
            color: "#2e7d32",
            fontSize: "2rem",
            fontWeight: 700,
            fontFamily: "Georgia, serif",
            marginBottom: "1.25rem",
          }}
        >
          About Us
        </h2>
        <p
          style={{
            color: "#444",
            fontSize: "1rem",
            lineHeight: 1.8,
            maxWidth: 760,
          }}
        >
          Vilvom LLP Distributor is a leading distribution company committed to excellence,
          innovation, and building lasting partnerships. With decades of experience across
          diverse markets, we bring unmatched expertise and a passion for delivering results
          that matter to our clients, partners, and communities.
        </p>

        <Link href="/distributor-llp/about" style={{ textDecoration: "none", display: "inline-block", marginTop: "1.25rem" }}>
          <button
            style={{
              background: "transparent",
              border: "2px solid #2e7d32",
              color: "#2e7d32",
              padding: "0.55rem 1.5rem",
              fontSize: "0.875rem",
              fontWeight: 600,
              cursor: "pointer",
              borderRadius: "3px",
              transition: "background 0.15s, color 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "#2e7d32";
              (e.currentTarget as HTMLButtonElement).style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "transparent";
              (e.currentTarget as HTMLButtonElement).style.color = "#2e7d32";
            }}
          >
            Learn More
          </button>
        </Link>
      </section>

      {/* SOUTH INDIA DISTRIBUTOR SECTION */}
      <section
        className="distributor-south-india"
        style={{
          width: "100%",
          background: "#1a3a6b",
          padding: "4rem 2.5rem",
          boxSizing: "border-box",
        }}
      >
        <div
          className="distributor-south-india-content"
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "3rem",
            flexWrap: "wrap",
          }}
        >
          <div className="distributor-south-india-text" style={{ flex: "1 1 420px", minWidth: 280 }}>
            <h2
              style={{
                color: "#4caf50",
                fontSize: "2rem",
                fontWeight: 700,
                fontFamily: "Georgia, serif",
                marginBottom: "1.25rem",
                lineHeight: 1.3,
              }}
            >
              One of Prominent Distributor In South India
            </h2>
            <p
              style={{
                color: "#f1f5f1ff",
                fontSize: "0.95rem",
                lineHeight: 1.8,
                maxWidth: 520,
              }}
            >
              Vilvom LLP-Distribution is the prominent distributor of FMCG products in South India,
              recognised for establishing enduring partnerships with national suppliers and
              key retail stakeholders. Our comprehensive network, innovative and cost-effective
              solutions, robust logistics support, and deep market expertise position us to
              enhance market penetration and visibility for FMCG companies aspiring to enter
              and thrive in the rapidly expanding markets of Tamil Nadu, Kerala, Karnataka,
              Andhra Pradesh, and Telangana.
            </p>
          </div>

          <div
            className="distributor-south-india-map"
            style={{
              flex: "0 0 auto",
              width: 260,
              height: 300,
              overflow: "hidden",
              borderRadius: "4px",
            }}
          >
            <img
              src="/map.png"
              alt="South India map"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>
        </div>
      </section>

      {/* OUR SERVICES SECTION */}
      <Services />

      {/* FOOTER */}
      <VilvomFooter />
    </div>
    </>
  );
}
