"use client";
import Link from "next/link";
import Image from "next/image";

export default function VilvomFooter() {
  return (
    <footer
      style={{
        background: "#ffffff",
        color: "#555",
        fontFamily: "var(--font-geist-sans, sans-serif)",
        padding: "3rem 2rem 2rem",
        marginTop: "auto",
        borderTop: "2px solid #e0e0e0",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "3rem",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        {/* Brand with Logo */}
        <div style={{ flex: "1 1 300px" }}>
          <div style={{ marginBottom: "1rem" }}>
            <Image
              src="/vilvom.jpeg"
              alt="Vilvom Logo"
              width={200}
              height={60}
              style={{ objectFit: "contain" }}
            />
          </div>
          <p style={{ fontSize: "0.9rem", maxWidth: 320, lineHeight: 1.7, color: "#666" }}>
            Vilvom LLP Distributor - Connecting talent with opportunity. Building careers that make a difference across South India.
          </p>
        </div>

        {/* Quick Links */}
        <div style={{ flex: "1 1 200px" }}>
          <h4 
            style={{ 
              color: "#2e7d32", 
              fontSize: "1.1rem", 
              marginBottom: "1rem", 
              fontWeight: 700,
              fontFamily: "Georgia, serif"
            }}
          >
            Quick Links
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {[
              { label: "Home", href: "#home" },
              { label: "About Us", href: "#about" },
              { label: "Services", href: "#services" },
              { label: "Contact Us", href: "/distributor-llp/contact" },
              { label: "Privacy Policy", href: "/privacy-policy" }
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{ 
                  color: "#555", 
                  textDecoration: "none", 
                  fontSize: "0.9rem",
                  transition: "color 0.2s ease"
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#2e7d32";
                  (e.currentTarget as HTMLAnchorElement).style.textDecoration = "underline";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#555";
                  (e.currentTarget as HTMLAnchorElement).style.textDecoration = "none";
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Our Services */}
        <div style={{ flex: "1 1 200px" }}>
          <h4 
            style={{ 
              color: "#2e7d32", 
              fontSize: "1.1rem", 
              marginBottom: "1rem", 
              fontWeight: 700,
              fontFamily: "Georgia, serif"
            }}
          >
            Our Services
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {[
              "Sales & Distribution",
              "E-Commerce Sales",
              "Pharmaceuticals",
              "Direct to Consumers"
            ].map((item) => (
              <span
                key={item}
                style={{ 
                  color: "#666", 
                  fontSize: "0.9rem",
                  lineHeight: 1.5
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div style={{ flex: "1 1 250px" }}>
          <h4 
            style={{ 
              color: "#2e7d32", 
              fontSize: "1.1rem", 
              marginBottom: "1rem", 
              fontWeight: 700,
              fontFamily: "Georgia, serif"
            }}
          >
            Contact Us
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
              <span style={{ color: "#2e7d32", fontSize: "1.1rem" }}>📍</span>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.6, margin: 0, color: "#666" }}>
                Vilvom LLP,<br />Coimbatore, Tamil Nadu, India
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ color: "#2e7d32", fontSize: "1.1rem" }}>✉️</span>
              <a 
                href="mailto:support@vilvom.in"
                style={{ 
                  fontSize: "0.9rem", 
                  color: "#555",
                  textDecoration: "none"
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#2e7d32";
                  (e.currentTarget as HTMLAnchorElement).style.textDecoration = "underline";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#555";
                  (e.currentTarget as HTMLAnchorElement).style.textDecoration = "none";
                }}
              >
                support@vilvom.in
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div
        style={{
          maxWidth: 1200,
          margin: "2.5rem auto 0",
          borderTop: "1px solid #e0e0e0",
          paddingTop: "1.5rem",
          textAlign: "center",
        }}
      >
        <p style={{ 
          fontSize: "0.9rem", 
          color: "#999", 
          margin: "0 0 0.5rem 0",
          fontStyle: "italic"
        }}>
          © 2026 Vilvom LLP. All rights reserved.
        </p>
        <p style={{ 
          fontSize: "0.85rem", 
          color: "#aaa", 
          margin: 0,
          fontStyle: "italic"
        }}>
          * Certain images on this website are created using AI-assisted design tools.
        </p>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          maxWidth: 1200,
          margin: "1.5rem auto 0",
          paddingTop: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link 
          href="/" 
          style={{ 
            color: "#2e7d32", 
            textDecoration: "none",
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "0.9rem"
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.textDecoration = "underline";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.textDecoration = "none";
          }}
        >
          ← Back to Vilvom Portal
        </Link>
      </div>
    </footer>
  );
}
