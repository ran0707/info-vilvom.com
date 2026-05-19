"use client";
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .landing-root {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #3B4FB8 0%, #3B4FB8 50%, #52A020 50%, #52A020 100%);
          font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          padding: 2rem;
          position: relative;
          overflow: hidden;
        }

        .landing-root::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            linear-gradient(135deg, 
              #3B4FB8 0%, 
              #3B4FB8 49.5%, 
              #52A020 50.5%, 
              #52A020 100%
            );
          z-index: 0;
        }

        .landing-container {
          background: rgba(255, 255, 255, 0.98);
          border-radius: 32px;
          padding: 5%;
          max-width: 90%;
          width: 90%;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          position: relative;
          z-index: 1;
        }

        .landing-header {
          text-align: center;
          margin-bottom: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .landing-logo {
          max-width: 420px;
          width: 100%;
          height: auto;
          margin: 0 auto;
          display: block;
        }

        .landing-cards {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .landing-card {
          background: #fff;
          border: 3px solid #d0d0d0;
          border-radius: 24px;
          overflow: hidden;
          text-decoration: none;
          transition: all 0.3s ease;
          display: grid;
          grid-template-columns: 1fr 1fr;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
          height: 280px;
        }

        .landing-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
          border-color: #6DC132;
        }

        .card-left {
          position: relative;
          overflow: hidden;
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-right {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 2.5rem 2rem;
          text-align: center;
        }

        .card-right-green {
          background: #6DC132;
        }

        .card-right-blue {
          background: #3B4FB8;
        }

        .card-title {
          color: #fff;
          font-size: 1.75rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          line-height: 1.2;
          letter-spacing: 0.5px;
        }

        .card-subtitle {
          color: rgba(255, 255, 255, 0.95);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 2rem;
          line-height: 1.4;
        }

        .card-button {
          background: #fff;
          color: #333;
          padding: 0.75rem 1.75rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        .card-button:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
        }

        .card-button-icon {
          width: 24px;
          height: 24px;
          background: #333;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 0.85rem;
          font-weight: bold;
        }

        .landing-footer {
          text-align: center;
          color: #666;
          font-size: 0.75rem;
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid #e0e0e0;
        }

        /* Tablet */
        @media (max-width: 768px) {
          .landing-container {
            padding: 2.5rem;
            width: 95%;
            max-width: 95%;
          }

          .landing-cards {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .landing-card {
            grid-template-columns: 1fr;
            height: auto;
          }

          .card-left {
            height: 200px;
          }

          .card-right {
            padding: 2rem;
          }

          .card-title {
            font-size: 1.4rem;
          }

          .card-subtitle {
            font-size: 0.9rem;
            margin-bottom: 1.5rem;
          }
        }

        /* Mobile */
        @media (max-width: 480px) {
          .landing-root {
            padding: 1rem;
          }

          .landing-container {
            padding: 2rem;
            border-radius: 24px;
            width: 95%;
            max-width: 95%;
          }

          .landing-logo {
            max-width: 280px;
          }

          .landing-header {
            margin-bottom: 2rem;
          }

          .landing-card {
            grid-template-columns: 1fr;
            height: auto;
          }

          .card-left {
            height: 180px;
          }

          .card-right {
            padding: 1.75rem 1.5rem;
          }

          .card-title {
            font-size: 1.2rem;
          }

          .card-subtitle {
            font-size: 0.85rem;
            margin-bottom: 1.25rem;
          }

          .card-button {
            padding: 0.65rem 1.5rem;
            font-size: 0.75rem;
          }

          .card-button-icon {
            width: 20px;
            height: 20px;
          }
        }
      `}</style>

      <main className="landing-root">
        <div className="landing-container">
          {/* Header with Logo */}
          <div className="landing-header">
            <img
              src="/vilvom.jpeg"
              alt="Vilvom - Rooted in Nature, Grown for Life"
              className="landing-logo"
            />
          </div>

          {/* Portal Cards */}
          <div className="landing-cards">
            {/* Precision Agriculture Card */}
            <Link href="/home" className="landing-card">
              <div className="card-left">
                <img
                  src="/drone.png"
                  alt="Precision Agriculture"
                  className="card-image"
                />
              </div>
              <div className="card-right card-right-green">
                <h2 className="card-title">Vilvom LLP</h2>
                <p className="card-subtitle">Precision Agriculture</p>
                <div className="card-button">
                  <span>ENTER PORTAL</span>
                  <div className="card-button-icon">→</div>
                </div>
              </div>
            </Link>

            {/* Sales & Distribution Card */}
            <Link href="/vilvom" className="landing-card">
              <div className="card-left">
                <img
                  src="/FMCG.png"
                  alt="Sales & Distribution"
                  className="card-image"
                />
              </div>
              <div className="card-right card-right-blue">
                <h2 className="card-title">Vilvom LLP</h2>
                <p className="card-subtitle">Sales & Distribution</p>
                <div className="card-button">
                  <span>ENTER PORTAL</span>
                  <div className="card-button-icon">→</div>
                </div>
              </div>
            </Link>
          </div>

          {/* Footer */}
          <div className="landing-footer">
            © {new Date().getFullYear()} Vilvom Group. All rights reserved.
          </div>
        </div>
      </main>
    </>
  );
}
