"use client";
import Link from "next/link";

const portals = [
  {
    href: "/home",
    label: "Vilvom Agri Solutions",
    subtitle: "Precision Agriculture & Tea Plantation Management",
    description:
      "Explore AI-powered pest detection, drone technology, IoT sensors, and satellite imagery solutions built for thriving tea plantations across South India.",
    icon: "🌿",
    accent: "#1a6b3a",
    border: "rgba(255,255,255,0.25)",
  },
  {
    href: "/vilvom",
    label: "Vilvom Distributor Pvt Ltd",
    subtitle: "FMCG Distribution & Supply Chain",
    description:
      "Access South India's leading FMCG distribution network — connecting brands to retailers across Tamil Nadu, Kerala, Karnataka, Andhra Pradesh, and Telangana.",
    icon: "🏪",
    accent: "#1a3a6b",
    border: "rgba(255,255,255,0.25)",
  },
];

export default function LandingPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(160deg, #0a2a14 0%, #0d3b22 40%, #0a2240 100%)",
        fontFamily: "var(--font-geist-sans, sans-serif)",
        padding: "2rem 1rem",
      }}
    >
      {/* Brand header */}
      <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
        <img
          src="/icon.jpeg"
          alt="Vilvom Logo"
          style={{
            width: 88,
            height: 88,
            borderRadius: "50%",
            objectFit: "cover",
            border: "3px solid rgba(255,255,255,0.2)",
            marginBottom: "1.25rem",
            boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
          }}
        />
        <h1
          style={{
            color: "#fff",
            fontSize: "2.6rem",
            fontWeight: 800,
            letterSpacing: "0.06em",
            margin: "0 0 0.4rem 0",
            textTransform: "uppercase",
          }}
        >
          Vilvom
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: "0.9rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Choose your portal
        </p>
      </div>

      {/* Portal cards */}
      <div
        style={{
          display: "flex",
          gap: "1.75rem",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
          maxWidth: 860,
        }}
      >
        {portals.map((portal) => (
          <Link
            key={portal.href}
            href={portal.href}
            style={{ textDecoration: "none", flex: "1 1 340px", maxWidth: 400 }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.06)",
                border: `1px solid ${portal.border}`,
                borderRadius: "16px",
                padding: "2rem 1.75rem",
                cursor: "pointer",
                transition: "transform 0.2s, background 0.2s, box-shadow 0.2s",
                backdropFilter: "blur(8px)",
                height: "100%",
                boxSizing: "border-box",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-4px)";
                el.style.background = "rgba(255,255,255,0.12)";
                el.style.boxShadow = "0 16px 48px rgba(0,0,0,0.4)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(0)";
                el.style.background = "rgba(255,255,255,0.06)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Icon */}
              <div
                style={{
                  fontSize: "2.2rem",
                  marginBottom: "1rem",
                  width: 52,
                  height: 52,
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {portal.icon}
              </div>

              {/* Label */}
              <h2
                style={{
                  color: "#fff",
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  margin: "0 0 0.3rem 0",
                  lineHeight: 1.3,
                }}
              >
                {portal.label}
              </h2>

              {/* Subtitle */}
              <p
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  margin: "0 0 1rem 0",
                }}
              >
                {portal.subtitle}
              </p>

              {/* Divider */}
              <div
                style={{
                  height: 1,
                  background: "rgba(255,255,255,0.1)",
                  marginBottom: "1rem",
                }}
              />

              {/* Description */}
              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "0.85rem",
                  lineHeight: 1.7,
                  margin: "0 0 1.5rem 0",
                }}
              >
                {portal.description}
              </p>

              {/* CTA */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  color: "#fff",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  opacity: 0.85,
                }}
              >
                Enter Portal <span style={{ fontSize: "1rem" }}>→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer note */}
      <p
        style={{
          color: "rgba(255,255,255,0.25)",
          fontSize: "0.75rem",
          marginTop: "3rem",
          letterSpacing: "0.05em",
        }}
      >
        © {new Date().getFullYear()} Vilvom Group. All rights reserved.
      </p>
    </main>
  );
}
