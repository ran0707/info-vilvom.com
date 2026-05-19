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
    <>
      <style>{`
        .landing-root {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #2c3d99;
          background-image:
            radial-gradient(ellipse at 20% 50%, rgba(59,79,184,0.6) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(44,61,153,0.8) 0%, transparent 55%),
            radial-gradient(ellipse at 60% 90%, rgba(20,30,90,0.7) 0%, transparent 50%);
          font-family: var(--font-geist-sans, sans-serif);
          padding: 2rem 1rem;
        }

        .landing-brand {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .landing-logo {
          width: 430px;
          height: 120px;
          object-fit: cover;
          border: 3px solid rgba(255,255,255,0.25);
          border-radius: 8px;
          margin-bottom: 1.25rem;
          box-shadow: 0 4px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(109,193,50,0.2);
        }

        .landing-title {
          color: #fff;
          font-size: 2.6rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          margin: 0 0 0.4rem 0;
          text-transform: uppercase;
        }

        .landing-subtitle {
          color: rgba(255,255,255,0.5);
          font-size: 0.9rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin: 0;
        }

        .landing-cards {
          display: flex;
          gap: 1.75rem;
          flex-wrap: wrap;
          justify-content: center;
          width: 100%;
          max-width: 860px;
        }

        .landing-card-link {
          text-decoration: none;
          flex: 1 1 340px;
          max-width: 400px;
        }

        .landing-card {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 16px;
          padding: 2rem 1.75rem;
          cursor: pointer;
          transition: transform 0.2s, background 0.2s, box-shadow 0.2s, border-color 0.2s;
          backdrop-filter: blur(12px);
          height: 100%;
          box-sizing: border-box;
        }

        .landing-card:hover {
          transform: translateY(-4px);
          background: rgba(255,255,255,0.13);
          border-color: rgba(109,193,50,0.45);
          box-shadow: 0 16px 48px rgba(0,0,0,0.35), 0 0 0 1px rgba(109,193,50,0.2);
        }

        .landing-card-icon {
          font-size: 2.2rem;
          margin-bottom: 1rem;
          width: 52px;
          height: 52px;
          background: rgba(255,255,255,0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .landing-card-label {
          color: #fff;
          font-size: 1.15rem;
          font-weight: 700;
          margin: 0 0 0.3rem 0;
          line-height: 1.3;
        }

        .landing-card-sub {
          color: rgba(255,255,255,0.5);
          font-size: 0.75rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin: 0 0 1rem 0;
        }

        .landing-card-divider {
          height: 1px;
          background: rgba(255,255,255,0.1);
          margin-bottom: 1rem;
        }

        .landing-card-desc {
          color: rgba(255,255,255,0.7);
          font-size: 0.85rem;
          line-height: 1.7;
          margin: 0 0 1.5rem 0;
        }

        .landing-card-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          color: #fff;
          font-size: 0.85rem;
          font-weight: 600;
          opacity: 0.85;
        }

        .landing-footer {
          color: rgba(255,255,255,0.25);
          font-size: 0.75rem;
          margin-top: 3rem;
          letter-spacing: 0.05em;
        }

        /* Tablet */
        @media (max-width: 768px) {
          .landing-logo {
            width: 300px;
            height: 90px;
          }

          .landing-title {
            font-size: 2rem;
          }

          .landing-brand {
            margin-bottom: 2.5rem;
          }

          .landing-cards {
            gap: 1.25rem;
          }

          .landing-card-link {
            flex: 1 1 280px;
          }
        }

        /* Mobile */
        @media (max-width: 480px) {
          .landing-root {
            padding: 1.5rem 1rem;
            justify-content: flex-start;
            padding-top: 2.5rem;
          }

          .landing-logo {
            width: 240px;
            height: 70px;
          }

          .landing-title {
            font-size: 1.6rem;
          }

          .landing-subtitle {
            font-size: 0.75rem;
            letter-spacing: 0.08em;
          }

          .landing-brand {
            margin-bottom: 2rem;
          }

          .landing-cards {
            flex-direction: column;
            gap: 1rem;
          }

          .landing-card-link {
            flex: none;
            max-width: 100%;
            width: 100%;
          }

          .landing-card {
            padding: 1.5rem 1.25rem;
          }

          .landing-card-label {
            font-size: 1rem;
          }

          .landing-card-desc {
            font-size: 0.82rem;
          }

          .landing-footer {
            margin-top: 2rem;
            text-align: center;
          }
        }
      `}</style>

      <main className="landing-root">
        {/* Brand header */}
        <div className="landing-brand">
          <img
            src="/vilvom.jpeg"
            alt="Vilvom Logo"
            className="landing-logo"
          />
          <h1 className="landing-title">Vilvom</h1>
          <p className="landing-subtitle">Choose your portal</p>
        </div>

        {/* Portal cards */}
        <div className="landing-cards">
          {portals.map((portal) => (
            <Link
              key={portal.href}
              href={portal.href}
              className="landing-card-link"
            >
              <div className="landing-card">
                {/* Icon */}
                <div className="landing-card-icon">{portal.icon}</div>

                {/* Label */}
                <h2 className="landing-card-label">{portal.label}</h2>

                {/* Subtitle */}
                <p className="landing-card-sub">{portal.subtitle}</p>

                {/* Divider */}
                <div className="landing-card-divider" />

                {/* Description */}
                <p className="landing-card-desc">{portal.description}</p>

                {/* CTA */}
                <div className="landing-card-cta">
                  Enter Portal <span style={{ fontSize: "1rem" }}>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer note */}
        <p className="landing-footer">
          © {new Date().getFullYear()} Vilvom Group. All rights reserved.
        </p>
      </main>
    </>
  );
}
