"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={menuOpen ? "nav-open" : ""}>
      {/* Logo */}
      <Link
        href="/"
        className="vilvom-logo"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
        }}
      >
        <Image
          src="/vilvom.jpeg"
          alt="Vilvom Logo"
          width={180}
          height={180}
          priority
          style={{ objectFit: "contain" }}
        />
      </Link>

      {/* Navigation Menu */}
      <ul>
        <li>
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <a href="#technology" onClick={() => setMenuOpen(false)}>Technology</a>
        </li>
        <li>
          <a href="#pest" onClick={() => setMenuOpen(false)}>Pest Infestation</a>
        </li>
        <li>
          <a href="#solutions" onClick={() => setMenuOpen(false)}>Solutions</a>
        </li>
        <li>
          <a href="#blog" onClick={() => setMenuOpen(false)}>Insights</a>
        </li>
        <li>
          <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>
            Contact Us
          </a>
        </li>
      </ul>

      {/* Hamburger button — hidden on desktop via CSS */}
      <button
        className="nav-hamburger"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((prev) => !prev)}
        style={{
          display: "none",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "8px",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        <span
          style={{
            display: "block",
            width: "24px",
            height: "2px",
            background: "#fff",
            borderRadius: "2px",
            transition: "transform 0.25s, opacity 0.25s",
            transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
          }}
        />
        <span
          style={{
            display: "block",
            width: "24px",
            height: "2px",
            background: "#fff",
            borderRadius: "2px",
            transition: "opacity 0.25s",
            opacity: menuOpen ? 0 : 1,
          }}
        />
        <span
          style={{
            display: "block",
            width: "24px",
            height: "2px",
            background: "#fff",
            borderRadius: "2px",
            transition: "transform 0.25s, opacity 0.25s",
            transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
          }}
        />
      </button>
    </nav>
  );
}
