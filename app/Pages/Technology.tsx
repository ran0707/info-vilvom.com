"use client";

export default function Technology() {
  return (
    <>
      <style>{`
        /* What is Vilvom Section */
        .what-is-vilvom-section {
          background: #fff;
          padding: 4rem 5%;
        }

        .what-is-vilvom-container {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .vilvom-circles {
          display: none;
        }

        .vilvom-content {
          text-align: center;
          max-width: 800px;
        }

        .vilvom-content h2 {
          font-size: 2.5rem;
          font-weight: 800;
          color: #1a2a10;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .vilvom-content p {
          font-size: 1rem;
          color: #3d5232;
          line-height: 1.8;
          margin: 0;
        }

        /* Drone Spraying Section */
        .drone-spraying-section {
          background-image: url('/drone.png');
          background-size: cover;
          background-position: center top;
          background-repeat: no-repeat;
          min-height: 600px;
          position: relative;
          padding: 4rem 5%;
        }

        .drone-spraying-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.05);
          z-index: 0;
        }

        .drone-spraying-overlay {
          position: relative;
          z-index: 1;
        }

        .drone-spraying-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .drone-spraying-title {
          font-size: 3rem;
          font-weight: 800;
          color: #6DC132;
          margin-bottom: 0.5rem;
          line-height: 1.2;
        }

        .drone-spraying-subtitle {
          color: #6DC132;
          font-size: 2rem;
          font-weight: 600;
        }

        .drone-stats-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 1.5rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 1.5rem;
          margin: 2rem 0;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
          max-width: 600px;
        }

        .drone-stat-item {
          text-align: center;
          flex: 1;
        }

        .drone-stat-item h3 {
          font-size: 2.2rem;
          font-weight: 800;
          color: #1a2a10;
          margin-bottom: 0.3rem;
          line-height: 1;
        }

        .drone-stat-item p {
          font-size: 0.85rem;
          color: #3d5232;
          font-weight: 600;
          margin: 0;
        }

        .drone-stat-divider {
          width: 2px;
          height: 50px;
          background: #6DC132;
        }

        .drone-tech-feature {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 16px;
          padding: 1rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          max-width: 600px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
        }

        .tech-feature-icon {
          flex-shrink: 0;
        }

        .drone-tech-feature p {
          font-size: 0.85rem;
          color: #1a2a10;
          font-weight: 600;
          margin: 0;
          line-height: 1.5;
        }

        /* Bottom Features Section */
        .drone-bottom-features {
          background: #2c3d99;
          padding: 2.5rem 5%;
          display: flex;
          justify-content: center;
          gap: 4rem;
          flex-wrap: wrap;
        }

        .drone-feature-item {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .drone-feature-icon {
          font-size: 3rem;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .drone-feature-content h4 {
          font-size: 1.1rem;
          font-weight: 700;
          color: #fff;
          margin: 0 0 0.25rem 0;
        }

        .drone-feature-content p {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .vilvom-content h2 {
            font-size: 2rem;
          }

          .drone-spraying-title {
            font-size: 2rem;
          }

          .drone-spraying-subtitle {
            font-size: 1.5rem;
          }

          .drone-stats-card {
            flex-direction: column;
            padding: 2rem;
            gap: 1.5rem;
          }

          .drone-stat-divider {
            width: 60px;
            height: 2px;
          }

          .drone-bottom-features {
            flex-direction: column;
            gap: 2rem;
            align-items: center;
          }
        }

        @media (max-width: 480px) {
          .what-is-vilvom-section {
            padding: 3rem 4%;
          }

          .vilvom-content h2 {
            font-size: 1.75rem;
          }

          .vilvom-content p {
            font-size: 0.9rem;
          }

          .drone-spraying-section {
            padding: 3rem 4%;
            min-height: 500px;
          }

          .drone-spraying-title {
            font-size: 1.5rem;
          }

          .drone-spraying-subtitle {
            font-size: 1.2rem;
          }

          .drone-stats-card {
            padding: 1.5rem;
          }

          .drone-stat-item h3 {
            font-size: 2rem;
          }

          .drone-stat-item p {
            font-size: 0.9rem;
          }

          .drone-tech-feature {
            padding: 1.25rem 1.5rem;
          }

          .drone-tech-feature p {
            font-size: 0.85rem;
          }

          .drone-feature-icon {
            font-size: 2rem;
            width: 50px;
            height: 50px;
          }

          .drone-feature-content h4 {
            font-size: 1rem;
          }

          .drone-feature-content p {
            font-size: 0.85rem;
          }
        }
      `}</style>

      {/* What is Vilvom Section */}
      <section className="what-is-vilvom-section">
        <div className="what-is-vilvom-container">
          <div className="vilvom-content">
            <h2>What is Vilvom?</h2>
            <p>
              Vilvom delivers comprehensive and efficient drone spraying solutions for India’s tea plantations, making precision aerial technology accessible and affordable for tea estate farmers.  The platform empowers tea estates with efficient, cost-effective, and sustainable farming solutions that enhance productivity and yields.
            </p>
          </div>
        </div>
      </section>

      {/* Drone Spraying Section */}
      <section className="drone-spraying-section">
        <div className="drone-spraying-overlay">
          <div className="drone-spraying-container">
            <h2 className="drone-spraying-title">
              Drone Spraying:<br />
              <span className="drone-spraying-subtitle">A Modern Solution for Tea Estates</span>
            </h2>

            {/* Stats Card */}
            <div className="drone-stats-card">
              <div className="drone-stat-item">
                <h3>80%</h3>
                <p>Water Saving</p>
              </div>
              <div className="drone-stat-divider"></div>
              <div className="drone-stat-item">
                <h3>60%</h3>
                <p>Input Saving</p>
              </div>
              <div className="drone-stat-divider"></div>
              <div className="drone-stat-item">
                <h3>40%</h3>
                <p>Cost Saving</p>
              </div>
            </div>

            {/* Technology Feature */}
            <div className="drone-tech-feature">
              <div className="tech-feature-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" fill="#6DC132" opacity="0.2"/>
                  <circle cx="20" cy="20" r="12" fill="#6DC132" opacity="0.4"/>
                  <circle cx="20" cy="20" r="6" fill="#6DC132"/>
                </svg>
              </div>
              <p>Advanced sensors and GPS technology ensures Precise targeting & Equidistribution</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Features Section */}
      <section className="drone-bottom-features">
        <div className="drone-feature-item">
          <div className="drone-feature-icon">
            {/* <img src="/icon.jpeg" alt="Sprays Icon" style={{width: '50px', height: '50px', borderRadius: '8px'}} /> */}
          </div>
          <div className="drone-feature-content">
            <h4>Sprays 50 Acres/Day</h4>
            <p>8x Productivity</p>
          </div>
        </div>
        <div className="drone-feature-item">
          <div className="drone-feature-icon">⚡</div>
          <div className="drone-feature-content">
            <h4>5 Mins</h4>
            <p>For an acre only</p>
          </div>
        </div>
        <div className="drone-feature-item">
          <div className="drone-feature-icon">🛡️</div>
          <div className="drone-feature-content">
            <h4>No Human Exposure</h4>
            <p>Safest Spraying Mechanism</p>
          </div>
        </div>
      </section>
    </>
  );
}
