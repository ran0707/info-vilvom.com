"use client";
import Link from "next/link";

export default function VilvomFooter() {
  return (
    <footer
      style={{
        background: "#1b5e20",
        color: "#aaa",
        fontFamily: "var(--font-geist-sans, sans-serif)",
        padding: "2.5rem 1.5rem",
        marginTop: "auto",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
            <img
              src="/icon.jpeg"
              alt="Vilvom Logo"
              style={{ width: 32, height: 32, borderRadius: "50%", objectFit: "cover" }}
            />
            <span style={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem" }}>
              Vilvom Distributor Pvt Ltd
            </span>
          </div>
          <p style={{ fontSize: "0.85rem", maxWidth: 260, lineHeight: 1.6 }}>
            Connecting talent with opportunity. Building careers that make a difference.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ color: "#fff", fontSize: "0.9rem", marginBottom: "0.75rem", fontWeight: 600 }}>
            Quick Links
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            {["Home", "About Us", "Careers", "Contact Us", "Jobs"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                style={{ color: "#aaa", textDecoration: "none", fontSize: "0.85rem" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#2e7d32")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#aaa")}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ color: "#fff", fontSize: "0.9rem", marginBottom: "0.75rem", fontWeight: 600 }}>
            Contact
          </h4>
          <p style={{ fontSize: "0.85rem", lineHeight: 1.8 }}>
            Coimbatore, Tamil Nadu, India<br />
            info@bgdistributors.com<br />
            +91 98765 43210
          </p>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1100,
          margin: "2rem auto 0",
          borderTop: "1px solid #333",
          paddingTop: "1.25rem",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "0.5rem",
          fontSize: "0.8rem",
        }}
      >
        <span>© {new Date().getFullYear()} Vilvom Distributor Pvt Ltd. All rights reserved.</span>
        <Link href="/" style={{ color: "#2e7d32", textDecoration: "none" }}>
          ← Back to Vilvom Portal
        </Link>
      </div>
    </footer>
  );
}
