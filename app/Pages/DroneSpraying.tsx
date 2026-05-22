"use client";

export default function DroneSpraying() {
  return (
    <>
      <style>{`
        .drone-spraying-page {
          background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
          padding: 5rem 5%;
        }

        /* Why Choose Section - Card Style */
        .why-choose-section {
          max-width: 1400px;
          margin: 0 auto 6rem;
        }

        .why-choose-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-badge {
          display: inline-block;
          background: linear-gradient(135deg, #3B4FB8 0%, #52A020 100%);
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }

        .why-choose-title {
          font-size: 3rem;
          font-weight: 900;
          background: linear-gradient(135deg, #3B4FB8 0%, #52A020 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
        }

        .why-choose-subtitle {
          font-size: 1.2rem;
          color: #666;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .why-choose-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }

        .feature-card-modern {
          background: white;
          border-radius: 24px;
          padding: 3rem 2rem;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          border: 2px solid transparent;
        }

        .feature-card-modern::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: linear-gradient(90deg, #3B4FB8 0%, #52A020 100%);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }

        .feature-card-modern:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(59, 79, 184, 0.15);
          border-color: #3B4FB8;
        }

        .feature-card-modern:hover::before {
          transform: scaleX(1);
        }

        .feature-icon-modern {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #3B4FB8 0%, #52A020 100%);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          box-shadow: 0 8px 20px rgba(59, 79, 184, 0.2);
        }

        .feature-card-modern h4 {
          font-size: 1.5rem;
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 0.75rem;
        }

        .feature-card-modern p {
          font-size: 1rem;
          color: #666;
          line-height: 1.6;
          margin: 0;
        }

        /* Types of Crops Section - Modern Grid */
        .types-of-crops-section {
          max-width: 1400px;
          margin: 0 auto;
          padding: 4rem 0;
        }

        .crops-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .crops-title {
          font-size: 3rem;
          font-weight: 900;
          color: #1a1a1a;
          margin-bottom: 1rem;
        }

        .crops-subtitle {
          font-size: 1.2rem;
          color: #666;
          max-width: 700px;
          margin: 0 auto;
        }

        .crops-grid-modern {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 2rem;
        }

        .crop-card-modern {
          position: relative;
          height: 280px;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          display: block;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }

        .crop-card-modern::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(59, 79, 184, 0.8) 0%, rgba(82, 160, 32, 0.8) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 1;
        }

        .crop-card-modern:hover::before {
          opacity: 1;
        }

        .crop-card-modern:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
        }

        .crop-image-modern {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .crop-card-modern:hover .crop-image-modern {
          transform: scale(1.1);
        }

        .crop-overlay-modern {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1.5rem;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
          z-index: 2;
          transform: translateY(0);
          transition: transform 0.4s ease;
        }

        .crop-card-modern:hover .crop-overlay-modern {
          transform: translateY(-10px);
        }

        .crop-name-modern {
          color: #fff;
          font-size: 1.3rem;
          font-weight: 800;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .crop-icon {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          z-index: 2;
          opacity: 0;
          transform: scale(0);
          transition: all 0.4s ease;
        }

        .crop-card-modern:hover .crop-icon {
          opacity: 1;
          transform: scale(1);
        }

        /* Decorative Elements */
        .floating-shape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.05;
          pointer-events: none;
        }

        .shape-1 {
          width: 300px;
          height: 300px;
          background: #3B4FB8;
          top: -150px;
          right: -150px;
        }

        .shape-2 {
          width: 200px;
          height: 200px;
          background: #52A020;
          bottom: -100px;
          left: -100px;
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .why-choose-cards {
            grid-template-columns: repeat(2, 1fr);
          }

          .crops-grid-modern {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .drone-spraying-page {
            padding: 3rem 4%;
          }

          .why-choose-title,
          .crops-title {
            font-size: 2rem;
          }

          .why-choose-cards {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .crops-grid-modern {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }

          .crop-card-modern {
            height: 220px;
          }

          .feature-card-modern {
            padding: 2rem 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .why-choose-title,
          .crops-title {
            font-size: 1.75rem;
          }

          .crops-grid-modern {
            grid-template-columns: 1fr;
          }

          .feature-icon-modern {
            width: 60px;
            height: 60px;
            font-size: 2rem;
          }
        }
      `}</style>

      <div id="drone-spraying" className="drone-spraying-page">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
      </div>
    </>
  );
}
