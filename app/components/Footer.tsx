"use client";

export default function Footer() {
  return (
    <>
      {/* CTA Banner */}
      {/* <div className="footer-cta-banner">
        <div className="footer-cta-content">
          <div>
            <h2 className="footer-cta-title">Transform Your Tea Plantation Today</h2>
            <p className="footer-cta-subtitle">Get in touch with our experts for advanced crop management solutions!</p>
          </div>
          <button className="footer-cta-button">Book Now</button>
        </div>
      </div> */}

      {/* Footer */}
      <footer className="footer-main">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img 
                src="/vilvom.jpeg" 
                alt="Vilvom Logo" 
                style={{
                  width: '120px',
                  height: '120px',
                  objectFit: 'contain'
                }}
              />
            </div>
            <p className="footer-brand-description">
              Empowering sustainable tea agriculture through advanced AI-driven plant health diagnostics and precision crop management technologies.
            </p>
            {/* <p className="footer-phone">+91 81110 15577</p> */}
          </div>

          {/* Company Links */}
          <div className="footer-column footer-column-blue">
            <h3 className="footer-column-title">Company</h3>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#technology">Technology</a></li>
              <li><a href="#team">Our Team</a></li>
              <li><a href="#blog">Insights</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="footer-column footer-column-green">
            <h3 className="footer-column-title">Services</h3>
            <ul className="footer-links">
              <li><a href="#drone-spray">Drone Spraying</a></li>
              <li><a href="#pest">Pest Detection</a></li>
              <li><a href="#disease">Disease Management</a></li>
              <li><a href="#solutions">Farm Solutions</a></li>
              <li><a href="#consulting">Consulting</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="footer-column footer-column-blue">
            <h3 className="footer-column-title">Legal</h3>
            <ul className="footer-links">
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#refund">Refund Policy</a></li>
              <li><a href="#cookie">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="footer-column footer-column-green">
            <h3 className="footer-column-title">Get In Touch</h3>
            <div className="footer-contact">
              <p className="footer-address">
                Vilvom LLP, Coimbatore, Tamil Nadu, India
              </p>
              {/* <p className="footer-contact-item">📞 +91 81110 15577</p> */}
              <p className="footer-contact-item">✉️ support@vilvom.in</p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="footer-disclaimer">
          <p>© 2026 Vilvom LLP. All rights reserved.</p>
          <p style={{ marginTop: '0.5rem' }}>* Certain images on this website are created using AI-assisted design tools.</p>
        </div>
      </footer>

      <style jsx>{`
        .footer-cta-banner {
          background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
          padding: 3rem 5%;
          margin-top: 4rem;
        }

        .footer-cta-content {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
        }

        .footer-cta-title {
          font-size: 2rem;
          font-weight: 700;
          color: #fff;
          margin: 0 0 0.5rem 0;
        }

        .footer-cta-subtitle {
          font-size: 1rem;
          color: #fff;
          margin: 0;
          opacity: 0.95;
        }

        .footer-cta-button {
          background: #FFA500;
          color: #fff;
          border: none;
          padding: 1rem 3rem;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          white-space: nowrap;
        }

        .footer-cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(255, 165, 0, 0.4);
        }

        .footer-main {
          position: relative;
          background: #ffffff;
          padding: 4rem 5%;
          overflow: hidden;
        }

        .footer-content {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr 1.2fr;
          gap: 3rem;
          color: #1a1a1a;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
        }

        .footer-brand-name {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a1a1a;
        }

        .footer-brand-description {
          font-size: 0.9rem;
          line-height: 1.6;
          color: #666;
          margin: 0;
        }

        .footer-phone {
          font-size: 1.2rem;
          font-weight: 600;
          color: #1a1a1a;
          margin-top: 1rem;
        }

        .footer-column-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 1.5rem 0;
          position: relative;
          padding-bottom: 0.5rem;
        }

        .footer-column-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 2px;
          background: #4CAF50;
        }

        /* Blue column styling */
        .footer-column-blue .footer-column-title {
          color: #3B4FB8;
        }

        .footer-column-blue .footer-column-title::after {
          background: #3B4FB8;
        }

        .footer-column-blue .footer-links a {
          color: #3B4FB8;
        }

        .footer-column-blue .footer-links a:hover {
          color: #2a3a8a;
          padding-left: 5px;
        }

        /* Green column styling */
        .footer-column-green .footer-column-title {
          color: #52A020;
        }

        .footer-column-green .footer-column-title::after {
          background: #52A020;
        }

        .footer-column-green .footer-links a,
        .footer-column-green .footer-address,
        .footer-column-green .footer-contact-item {
          color: #52A020;
        }

        .footer-column-green .footer-links a:hover {
          color: #3d7818;
          padding-left: 5px;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-links a {
          color: #666;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease, padding-left 0.3s ease;
          display: inline-block;
        }

        .footer-links a:hover {
          color: #4CAF50;
          padding-left: 5px;
        }

        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-address {
          font-size: 0.85rem;
          line-height: 1.6;
          color: #666;
          margin: 0;
        }

        .footer-contact-item {
          font-size: 0.9rem;
          color: #666;
          margin: 0;
        }

        .footer-disclaimer {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 3rem auto 0;
          padding-top: 2rem;
          border-top: 1px solid #e0e0e0;
          text-align: center;
        }

        .footer-disclaimer p {
          font-size: 0.85rem;
          color: #999;
          margin: 0;
          font-style: italic;
        }

        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: repeat(3, 1fr);
          }

          .footer-brand {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 768px) {
          .footer-cta-content {
            flex-direction: column;
            text-align: center;
          }

          .footer-cta-title {
            font-size: 1.5rem;
          }

          .footer-content {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }

          .footer-brand {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 480px) {
          .footer-content {
            grid-template-columns: 1fr;
          }

          .footer-cta-banner {
            padding: 2rem 4%;
          }
        }
      `}</style>
    </>
  );
}
