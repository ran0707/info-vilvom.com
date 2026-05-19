"use client";

export default function DroneSpraying() {
  return (
    <>
      <style>{`
        .drone-spraying-page {
          background: #f5f8f0;
          padding: 4rem 5%;
        }

        /* How It Works Section */
        .how-it-works-section {
          max-width: 1280px;
          margin: 0 auto 4rem;
        }

        .how-it-works-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 800;
          color: #1a5a4a;
          margin-bottom: 3rem;
        }

        .how-it-works-steps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .step-card {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .step-card:hover {
          transform: translateY(-8px);
        }

        .step-image-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem 1rem;
          background: #f5f8f0;
          flex: 1;
        }

        .step-image-frame {
          position: relative;
          width: 220px;
          border: 8px solid #1a1a1a;
          border-radius: 30px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }

        .step-image-frame::before {
          content: '';
          position: absolute;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 6px;
          background: #333;
          border-radius: 3px;
          z-index: 1;
        }

        .step-image {
          width: 100%;
          height: 350px;
          object-fit: cover;
          display: block;
        }

        .step-content {
          padding: 1.5rem;
        }

        .step-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #1a5a4a;
          margin-bottom: 0.75rem;
        }

        .step-description {
          font-size: 0.9rem;
          color: #3d5232;
          line-height: 1.6;
          margin: 0;
        }

        /* Why Choose Section */
        .why-choose-section {
          max-width: 1280px;
          margin: 0 auto 4rem;
        }

        .why-choose-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 800;
          color: #1a5a4a;
          margin-bottom: 2.5rem;
        }

        .why-choose-features {
          display: flex;
          justify-content: center;
          gap: 3rem;
          flex-wrap: wrap;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .feature-icon {
          width: 50px;
          height: 50px;
          background: #6DC132;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .feature-content h4 {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1a5a4a;
          margin: 0 0 0.25rem 0;
        }

        .feature-content p {
          font-size: 0.9rem;
          color: #3d5232;
          margin: 0;
        }

        /* Types of Crops Section */
        .types-of-crops-section {
          max-width: 1280px;
          margin: 0 auto;
        }

        .types-of-crops-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 800;
          color: #1a5a4a;
          margin-bottom: 2.5rem;
        }

        .crops-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.5rem;
        }

        .crop-card {
          position: relative;
          height: 180px;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s ease;
          text-decoration: none;
          display: block;
        }

        .crop-card:hover {
          transform: scale(1.05);
        }

        .crop-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .crop-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
          padding: 1rem;
        }

        .crop-name {
          color: #fff;
          font-size: 1rem;
          font-weight: 700;
          margin: 0;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .how-it-works-steps {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .crops-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .drone-spraying-page {
            padding: 3rem 4%;
          }

          .how-it-works-title,
          .why-choose-title,
          .types-of-crops-title {
            font-size: 2rem;
          }

          .why-choose-features {
            flex-direction: column;
            gap: 2rem;
          }

          .crops-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .how-it-works-title,
          .why-choose-title,
          .types-of-crops-title {
            font-size: 1.75rem;
          }

          .step-number {
            font-size: 2.5rem;
          }

          .crops-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="drone-spraying-page">
        {/* Why Choose Section */}
        <section className="why-choose-section">
          <h2 className="why-choose-title">Why Choose Drone Spraying?</h2>
          <div className="why-choose-features">
            <div className="feature-item">
              <div className="feature-icon">📈</div>
              <div className="feature-content">
                <h4>Efficiency</h4>
                <p>Spray Up to 50 Acres a Day!</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <div className="feature-content">
                <h4>Higher Productivity</h4>
                <p>15% increase in output</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💰</div>
              <div className="feature-content">
                <h4>Savings</h4>
                <p>Reduce Farming Costs by 20-30%!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Crops Section */}
        <section className="types-of-crops-section">
          <h2 className="types-of-crops-title">Types of crops for drone spraying</h2>
          <div className="crops-grid">
            <a href="/crops/sugar-cane" className="crop-card">
              <img src="https://i.pinimg.com/1200x/11/87/53/118753baa60bcbbb4eff16011f7dd964.jpg" alt="Sugar Cane" className="crop-image" />
              <div className="crop-overlay">
                <h3 className="crop-name">Sugar Cane</h3>
              </div>
            </a>
            <a href="/crops/paddy" className="crop-card">
              <img src="https://i.pinimg.com/1200x/1a/06/26/1a062644fd9309daddd1764a29458335.jpg" alt="Paddy" className="crop-image" />
              <div className="crop-overlay">
                <h3 className="crop-name">Paddy</h3>
              </div>
            </a>
            <a href="/crops/cotton" className="crop-card">
              <img src="https://i.pinimg.com/736x/bd/28/c0/bd28c000e8371a8a1c255efc7c865b70.jpg" alt="Cotton" className="crop-image" />
              <div className="crop-overlay">
                <h3 className="crop-name">Cotton</h3>
              </div>
            </a>
            <a href="/crops/wheat" className="crop-card">
              <img src="https://i.pinimg.com/736x/a4/18/12/a4181249c14ce65cf17814ec6da03deb.jpg" alt="Wheat" className="crop-image" />
              <div className="crop-overlay">
                <h3 className="crop-name">Wheat</h3>
              </div>
            </a>
            <a href="/crops/vegetable" className="crop-card">
              <img src="https://i.pinimg.com/736x/11/ba/f6/11baf6c33a7078af8800a7a545bc218f.jpg" alt="Vegetable" className="crop-image" />
              <div className="crop-overlay">
                <h3 className="crop-name">Vegetable</h3>
              </div>
            </a>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="how-it-works-section">
          <h2 className="how-it-works-title">How to Avail Vilvom's Drone Service to your Farm </h2>
          <div className="how-it-works-steps">
            {/* Step 01 */}
            <div className="step-card">
              <div className="step-image-container">
                <div className="step-image-frame">
                  <img src="/app.png" alt="Book via App" className="step-image" />
                </div>
              </div>
              <div className="step-content">
                <h3 className="step-title">Book via the Vilvom App</h3>
                <p className="step-description">
                  Download the Leher App and schedule drone spray service for your crops with just three clicks.
                </p>
              </div>
            </div>

            {/* Step 02 */}
            <div className="step-card">
              <div className="step-image-container">
                <div className="step-image-frame">
                  <img src="/drone.png" alt="Pilot Sprays" className="step-image" />
                </div>
              </div>
              <div className="step-content">
                <h3 className="step-title">Pilot Sprays Your Crops</h3>
                <p className="step-description">
                  Our trained drone pilot arrives at your farm on the scheduled day, ready to spray your crops with precision.
                </p>
              </div>
            </div>

            {/* Step 03 */}
            <div className="step-card">
              <div className="step-image-container">
                <div className="step-image-frame">
                  <img src="/payment.png" alt="Pay after Done" className="step-image" />
                </div>
              </div>
              <div className="step-content">
                <h3 className="step-title">Pay after Spraying Done</h3>
                <p className="step-description">
                  After the service is completed to your satisfaction, make a secure payment directly through the app.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
