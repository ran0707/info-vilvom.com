"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 32px",
        width: "100%",
      }}
    >
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
          style={{
            objectFit: "contain",
          }}
        />
      </Link>

      {/* Navigation Menu */}
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <a href="#technology">Technology</a>
        </li>

        <li>
          <a href="#pest">Pest Infestation</a>
        </li>

        <li>
          <a href="#solutions">Solutions</a>
        </li>

        <li>
          <a href="#blog">Insights</a>
        </li>

        <li>
          <a href="#contact" className="nav-cta">
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
}