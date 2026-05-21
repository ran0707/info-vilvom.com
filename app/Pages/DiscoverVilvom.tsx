"use client";

export default function Technology() {
  return (
    <>
      <style>{`
        /* Technology Section */
        .technology-section {
          background: #f8f9fa;
          padding: 5rem 5%;
          min-height: 100vh;
        }

        /* Features Header */
        .features-header {
          text-align: center;
          margin-bottom: 5rem;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        .features-label {
          font-size: 0.9rem;
          font-weight: 600;
          color: #ff8c42;
          letter-spacing: 3px;
          margin-bottom: 1rem;
        }

        .features-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a1a1a;
          line-height: 1.3;
          margin-bottom: 1.5rem;
        }

        .vilvom-description {
          font-size: 1.1rem;
          color: #666;
          line-height: 1.8;
          margin: 0;
        }

        /* Features Container */
        .features-container {
          position: relative;
          max-width: 1400px;
          margin: 0 auto;
          min-height: 800px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Central Drone Image */
        .central-drone {
          position: relative;
          z-index: 2;
          max-width: 650px;
          width: 100%;
        }

        .central-drone img {
          width: 100%;
          height: auto;
          filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.2));
        }

        /* Feature Cards */
        .feature-card {
          position: absolute;
          width: 180px;
          height: 180px;
          background: white;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 1.5rem;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
          transition: all 0.3s ease;
          z-index: 1;
        }

        .feature-card:hover {
          transform: scale(1.1);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.18);
        }

        .feature-card h3 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 0.5rem 0;
          line-height: 1.2;
        }

        .feature-card p {
          font-size: 0.85rem;
          color: #666;
          line-height: 1.4;
          margin: 0;
        }

        /* Blue background cards */
        .feature-card.blue-bg {
          background: #3B4FB8;
        }

        .feature-card.blue-bg h3,
        .feature-card.blue-bg p {
          color: white;
        }

        /* Green background cards */
        .feature-card.green-bg {
          background: #52A020;
        }

        .feature-card.green-bg h3,
        .feature-card.green-bg p {
          color: white;
        }

        /* Position feature cards around the drone */
        .feature-top-left {
          top: 8%;
          left: 12%;
        }

        .feature-top-right {
          top: 8%;
          right: 12%;
        }

        .feature-middle-left {
          top: 50%;
          left: 6%;
          transform: translateY(-50%);
        }

        .feature-middle-right {
          top: 50%;
          right: 6%;
          transform: translateY(-50%);
        }

        .feature-bottom-left {
          bottom: 8%;
          left: 12%;
        }

        .feature-bottom-right {
          bottom: 8%;
          right: 12%;
        }

        /* How It Works Section */
        .how-it-works-section {
          background: white;
          padding: 4rem 5%;
          margin-top: 3rem;
        }

        .how-it-works-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .how-it-works-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #000;
          text-align: center;
          margin-bottom: 3rem;
          letter-spacing: 1px;
        }

        .how-it-works-content {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .how-it-works-text {
          text-align: center;
        }

        .how-it-works-text h2 {
          font-size: 2.5rem;
          font-weight: 800;
          color: #000;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .how-it-works-text p {
          font-size: 1rem;
          color: #666;
          line-height: 1.8;
          max-width: 800px;
          margin: 0 auto;
        }

        .how-it-works-phones {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 3rem;
          justify-items: center;
        }

        .phone-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .phone-frame {
          width: 100%;
          max-width: 220px;
          aspect-ratio: 9 / 19.5;
          background: linear-gradient(145deg, #2d2d2d, #1a1a1a);
          border-radius: 40px;
          padding: 14px;
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.1) inset,
            0 2px 4px rgba(255, 255, 255, 0.05) inset;
          position: relative;
          transition: transform 0.3s ease;
        }

        .phone-frame:hover {
          transform: translateY(-5px);
        }

        .phone-screen {
          width: 100%;
          height: 100%;
          background: #f5f5f5;
          border-radius: 28px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1) inset;
        }

        .phone-screen img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .phone-label {
          display: flex;
          align-items: center;
          background: white;
          border-radius: 8px;
          padding: 0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          min-width: 200px;
        }

        .phone-label::before {
          content: '';
          width: 6px;
          height: 100%;
          background: linear-gradient(180deg, #2563eb 0%, #10b981 100%);
          flex-shrink: 0;
        }

        .phone-label-text {
          flex: 1;
          padding: 0.75rem 1rem;
          font-size: 0.95rem;
          font-weight: 600;
          color: #1a1a1a;
          text-align: left;
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .features-container {
            min-height: 700px;
          }

          .central-drone {
            max-width: 550px;
          }

          .feature-card {
            width: 160px;
            height: 160px;
            padding: 1.25rem;
          }

          .feature-card h3 {
            font-size: 1rem;
          }

          .feature-card p {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 968px) {
          .features-container {
            min-height: 900px;
            flex-direction: column;
            padding: 2rem 0;
          }

          .central-drone {
            max-width: 450px;
            margin: 2rem 0;
          }

          .feature-card {
            position: relative;
            width: 200px;
            height: 200px;
            margin: 1.5rem auto;
          }

          .feature-top-left,
          .feature-top-right,
          .feature-middle-left,
          .feature-middle-right,
          .feature-bottom-left,
          .feature-bottom-right {
            position: relative;
            top: auto;
            left: auto;
            right: auto;
            bottom: auto;
            transform: none;
          }

          .how-it-works-content {
            gap: 2rem;
          }

          .how-it-works-text h2 {
            font-size: 2rem;
          }

          .how-it-works-phones {
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
          }

          .phone-frame {
            max-width: 160px;
          }

          .phone-label {
            min-width: 160px;
          }

          .phone-label-text {
            font-size: 0.85rem;
            padding: 0.6rem 0.85rem;
          }
        }

        @media (max-width: 768px) {
          .technology-section {
            padding: 3rem 4%;
          }

          .features-title {
            font-size: 2rem;
          }

          .central-drone {
            max-width: 350px;
          }

          .feature-card {
            width: 160px;
            height: 160px;
            padding: 1rem;
          }

          .feature-card h3 {
            font-size: 0.95rem;
          }

          .feature-card p {
            font-size: 0.75rem;
          }

          .how-it-works-title {
            font-size: 2rem;
          }

          .how-it-works-text h2 {
            font-size: 1.75rem;
          }

          .how-it-works-phones {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }

          .phone-frame {
            max-width: 180px;
          }

          .phone-label {
            min-width: 180px;
          }

          .phone-label-text {
            font-size: 0.8rem;
            padding: 0.6rem 0.85rem;
          }
        }

        @media (max-width: 480px) {
          .features-title {
            font-size: 1.5rem;
          }

          .central-drone {
            max-width: 280px;
          }

          .feature-card {
            width: 140px;
            height: 140px;
            padding: 0.75rem;
          }

          .feature-card h3 {
            font-size: 0.85rem;
          }

          .feature-card p {
            font-size: 0.7rem;
          }

          .how-it-works-title {
            font-size: 1.75rem;
          }

          .how-it-works-text h2 {
            font-size: 1.5rem;
          }

          .how-it-works-text p {
            font-size: 0.9rem;
          }

          .how-it-works-phones {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }

          .phone-frame {
            max-width: 150px;
          }

          .phone-label {
            min-width: 150px;
          }

          .phone-label::before {
            width: 4px;
          }

          .phone-label-text {
            font-size: 0.75rem;
            padding: 0.5rem 0.75rem;
          }
        }
      `}</style>

      <section id="about" className="technology-section">
        {/* What is Vilvom Header */}
        <div className="features-header">
          <h1 className="features-title"> Discover <span style={{ color: '#3B4FB8' }}>Vilv<img src="/o.png" alt="o" style={{ display: 'inline', height: '1em', verticalAlign: 'baseline', margin: '0', position: 'relative', top: '0.25em' }} />m</span> <span style={{ color: '#52A020' }}>Drones</span>
                <sup style={{ fontSize: '0.5em', marginLeft: '2px' }}>™</sup></h1>
          <p className="vilvom-description">
            Vilvom delivers comprehensive and efficient drone spraying solutions for agricultural fields, making precision aerial technology accessible and affordable for farmers. The platform offers efficient, cost-effective, and sustainable farming solutions that increases productivity and yields.
          </p>
        </div>

        {/* Features Container */}
        <div className="features-container">
          {/* Top Left - Faster Coverage */}
          <div className="feature-card feature-top-left blue-bg">
            <h3>Faster Coverage</h3>
            <p>Covers up to 8–10 hectares per day with high-speed spraying efficiency.</p>
          </div>

          {/* Top Right - Less Pesticides and Water */}
          <div className="feature-card feature-top-right green-bg">
            <h3>Minimal pesticides and less water</h3>
            <p>Reduces chemical and water usage with optimized low-volume spraying.</p>
          </div>

          {/* Middle Left - GPS Precision Targeting */}
          <div className="feature-card feature-middle-left green-bg">
            <h3>GPS Precision Targeting</h3>
            <p>Ensures accurate and uniform spraying with advanced GPS-guided flight paths.</p>
          </div>

          {/* Central Drone Image */}
          <div className="central-drone">
            <img src="/drone-sp.png" alt="Agricultural Drone" />
          </div>

          {/* Middle Right - Spray Composition */}
          <div className="feature-card feature-middle-right blue-bg">
            <h3>Spray Composition</h3>
            <p>Provides customized spray mixtures based on crop and field requirements.</p>
          </div>

          {/* Bottom Left - Spray Uniformity and Canopy Penetration */}
          <div className="feature-card feature-bottom-left blue-bg">
            <h3>Spray Uniformity and Canopy Penetration</h3>
            <p>Delivers uniform coverage with deep canopy penetration for better effectiveness.</p>
          </div>

          {/* Bottom Right - MRL and Residue Analysis */}
          <div className="feature-card feature-bottom-right green-bg">
            <h3>MRL and Residue Analysis</h3>
            <p>Maintains safe residue levels to support crop quality and food safety.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <h2 className="how-it-works-title">How to Avail <span style={{ color: '#3B4FB8' }}>Vilv<img src="/o.png" alt="o" style={{ display: 'inline', height: '1em', verticalAlign: 'baseline', margin: '0', position: 'relative', top: '0.25em' }} />m</span> <span style={{ color: '#52A020' }}>Drones</span>
                <sup style={{ fontSize: '0.5em', marginLeft: '2px' }}>™</sup>
                <br />
                Spray Service to your Farm</h2>
        
        <div className="how-it-works-container">
          <div className="how-it-works-content">
            <div className="how-it-works-text">
              {/* <h2>
                Book your <span style={{ color: '#3B4FB8' }}>Vilv<img src="/o.png" alt="o" style={{ display: 'inline', height: '1em', verticalAlign: 'baseline', margin: '0', position: 'relative', top: '0.25em' }} />m</span> <span style={{ color: '#52A020' }}>Drones</span>
                <sup style={{ fontSize: '0.5em', marginLeft: '2px' }}>™</sup>'s<br />
                Spray Service
              </h2> */}
              <p>
                Experience the future of precision agriculture with our advanced drone spraying technology. 
                Our Vilvom service provides efficient, cost-effective, and environmentally friendly crop 
                management solutions tailored to your farm's specific needs.
              </p>
            </div>
            <div className="how-it-works-phones">
              <div className="phone-wrapper">
                <div className="phone-frame">
                  <div className="phone-screen">
                    <img src="/how it work/1.jpeg" alt="Step 1" />
                  </div>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  overflow: 'hidden',
                  minWidth: '200px'
                }}>
                  <span style={{
                    background: '#3B4FB8',
                    padding: '0.75rem 1rem',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: 'white',
                    whiteSpace: 'nowrap'
                  }}>Step 1</span>
                  <span style={{
                    flex: 1,
                    background: '#52A020',
                    padding: '0.75rem 1rem',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: 'white',
                    textAlign: 'center'
                  }}>Sign Up</span>
                </div>
              </div>
              <div className="phone-wrapper">
                <div className="phone-frame">
                  <div className="phone-screen">
                    <img src="/how it work/2.jpeg" alt="Step 2" />
                  </div>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  overflow: 'hidden',
                  minWidth: '200px'
                }}>
                  <span style={{
                    background: '#3B4FB8',
                    padding: '0.75rem 1rem',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: 'white',
                    whiteSpace: 'nowrap'
                  }}>Step 2</span>
                  <span style={{
                    flex: 1,
                    background: '#52A020',
                    padding: '0.75rem 1rem',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: 'white',
                    textAlign: 'center'
                  }}>Select Service</span>
                </div>
              </div>
              <div className="phone-wrapper">
                <div className="phone-frame">
                  <div className="phone-screen">
                    <img src="/how it work/3.jpeg" alt="Step 3" />
                  </div>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  overflow: 'hidden',
                  minWidth: '200px'
                }}>
                  <span style={{
                    background: '#3B4FB8',
                    padding: '0.75rem 1rem',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: 'white',
                    whiteSpace: 'nowrap'
                  }}>Step 3</span>
                  <span style={{
                    flex: 1,
                    background: '#52A020',
                    padding: '0.75rem 1rem',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: 'white',
                    textAlign: 'center'
                  }}>Schedule</span>
                </div>
              </div>
              <div className="phone-wrapper">
                <div className="phone-frame">
                  <div className="phone-screen">
                    <img src="/how it work/4.jpeg" alt="Step 4" />
                  </div>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  overflow: 'hidden',
                  minWidth: '200px'
                }}>
                  <span style={{
                    background: '#3B4FB8',
                    padding: '0.75rem 1rem',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: 'white',
                    whiteSpace: 'nowrap'
                  }}>Step 4</span>
                  <span style={{
                    flex: 1,
                    background: '#52A020',
                    padding: '0.75rem 1rem',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: 'white',
                    textAlign: 'center'
                  }}>Track Progress</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
