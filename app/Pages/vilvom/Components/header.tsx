"use client";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/vilvom" },
  { label: "About Us", href: "/vilvom/about" },
  { label: "Contact Us", href: "/vilvom/contact" },
];

export default function VilvomHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        width: "100%",
        background: "#fff",
        borderBottom: "1px solid #e8e8e8",
        fontFamily: "var(--font-geist-sans, Georgia, serif)",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          padding: "0 2.5rem",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxSizing: "border-box",
        }}
      >
        {/* Left: Logo + Name */}
        <Link
          href="/vilvom"
          style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.6rem" }}
        >
          <img
            src="/icon.jpeg"
            alt="Vilvom Logo"
            style={{ width: 36, height: 36, borderRadius: "50%", objectFit: "cover" }}
          />
          <span
            style={{
              fontWeight: 700,
              fontSize: "1rem",
              color: "#2e7d32",
              letterSpacing: "0.01em",
            }}
          >
            Vilvom Distributor Pvt Ltd
          </span>
        </Link>

        {/* Right: Nav links */}
        <nav
          style={{
            display: "flex",
            gap: "2rem",
            background: "transparent",
            padding: 0,
            margin: 0,
            border: "none",
          }}
          className="vilvom-desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                textDecoration: "none",
                color: "#111",
                fontSize: "0.875rem",
                fontWeight: 500,
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#2e7d32")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#111")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "1.4rem",
            color: "#333",
          }}
          className="vilvom-hamburger"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            background: "#fff",
            borderTop: "1px solid #eee",
            padding: "1rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                textDecoration: "none",
                color: "#555",
                fontSize: "0.95rem",
                fontWeight: 500,
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        .vilvom-desktop-nav {
          background: transparent !important;
          padding: 0 !important;
          margin: 0 !important;
          border: none !important;
        }
        @media (max-width: 700px) {
          .vilvom-desktop-nav { display: none !important; }
          .vilvom-hamburger { display: block !important; }
        }
      `}</style>
    </header>
  );
}
