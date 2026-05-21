"use client";

export default function HowItWorks() {
  return (
    <section id="howitworks" className="section-full" style={{ background: '#ffffff', padding: '5rem 5%' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="section" style={{ paddingTop: 0, paddingBottom: "2rem", textAlign: 'center' }}>
          <h2><span style={{ color: '#3B4FB8' }}>How It</span> <span style={{ color: '#52A020' }}>Works</span></h2>
          <p className="section-sub" style={{ color: '#666' }}>Discover how Vilvom's mobile app makes tea plantation management simple and effective</p>
        </div>

        {/* Mobile App Showcase */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start',
          margin: '4rem 0',
          gap: '3rem',
          flexWrap: 'wrap'
        }}>
          {/* Mobile Frame */}
          <div style={{
            position: 'relative',
            width: '320px',
            height: '640px',
            background: 'linear-gradient(145deg, #2d2d2d, #1a1a1a)',
            borderRadius: '40px',
            padding: '14px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1) inset',
            flexShrink: 0
          }}>
            {/* Notch */}
            <div style={{
              position: 'absolute',
              top: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '120px',
              height: '25px',
              background: '#1a1a1a',
              borderRadius: '0 0 20px 20px',
              zIndex: 2
            }}></div>
            
            {/* Screen with scrollable content */}
            <div style={{
              width: '100%',
              height: '100%',
              background: '#f5f5f5',
              borderRadius: '28px',
              overflow: 'hidden',
              position: 'relative'
            }}>
              {/* Scroll Indicator */}
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                animation: 'bounce 2s infinite',
                pointerEvents: 'none'
              }}>
                <style>{`
                  @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% {
                      transform: translateY(0);
                    }
                    40% {
                      transform: translateY(-10px);
                    }
                    60% {
                      transform: translateY(-5px);
                    }
                  }
                  @keyframes fadeInOut {
                    0%, 100% {
                      opacity: 0.4;
                    }
                    50% {
                      opacity: 1;
                    }
                  }
                `}</style>
                <div style={{
                  background: 'rgba(59, 79, 184, 0.9)',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                  animation: 'fadeInOut 2s infinite'
                }}>
                  Scroll Down
                </div>
                <div style={{
                  fontSize: '1.5rem',
                  animation: 'fadeInOut 2s infinite'
                }}>
                  ↓
                </div>
              </div>

              <div style={{
                width: '100%',
                height: '100%',
                overflowY: 'scroll',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }} className="mobile-scroll">
                <style>{`
                  .mobile-scroll::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
                
                {/* Slide 1 */}
                <div style={{ width: '100%', height: '612px', flexShrink: 0 }}>
                  <img src="/how it work/1.jpeg" alt="App Screen 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                
                {/* Slide 2 */}
                <div style={{ width: '100%', height: '612px', flexShrink: 0 }}>
                  <img src="/how it work/2.jpeg" alt="App Screen 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                
                {/* Slide 3 */}
                <div style={{ width: '100%', height: '612px', flexShrink: 0 }}>
                  <img src="/how it work/3.jpeg" alt="App Screen 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                
                {/* Slide 4 */}
                <div style={{ width: '100%', height: '612px', flexShrink: 0 }}>
                  <img src="/how it work/4.jpeg" alt="App Screen 4" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>
          
          {/* Center Content - Instructions */}
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h3 style={{ 
              fontSize: '2rem', 
              fontWeight: '800', 
              color: '#1a1a1a',
              marginBottom: '1rem'
            }}>
              Simple Steps to <span style={{ color: '#3B4FB8' }}>Better</span> <span style={{ color: '#52A020' }}>Farming</span>
            </h3>
            <p style={{ 
              fontSize: '1.1rem', 
              color: '#666', 
              lineHeight: '1.8',
              marginBottom: '2rem'
            }}>
              Follow these easy steps to get started with Vilvom's mobile app and transform your tea plantation management.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Step 1 */}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #3B4FB8 0%, #52A020 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '800',
                  fontSize: '1.5rem',
                  flexShrink: 0
                }}>
                  1
                </div>
                <div>
                  <h4 style={{ color: '#3B4FB8', fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                    Download & Register
                  </h4>
                  <p style={{ color: '#666', lineHeight: '1.6', margin: 0 }}>
                    Download the Vilvom app from Play Store or App Store and create your account with basic details.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #52A020 0%, #3B4FB8 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '800',
                  fontSize: '1.5rem',
                  flexShrink: 0
                }}>
                  2
                </div>
                <div>
                  <h4 style={{ color: '#52A020', fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                    Capture Leaf Images
                  </h4>
                  <p style={{ color: '#666', lineHeight: '1.6', margin: 0 }}>
                    Use your phone camera to capture clear images of tea leaves showing signs of pests or diseases.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #3B4FB8 0%, #52A020 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '800',
                  fontSize: '1.5rem',
                  flexShrink: 0
                }}>
                  3
                </div>
                <div>
                  <h4 style={{ color: '#3B4FB8', fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                    Get AI Analysis
                  </h4>
                  <p style={{ color: '#666', lineHeight: '1.6', margin: 0 }}>
                    Our AI instantly analyzes the images and identifies pests, diseases, and severity levels.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #52A020 0%, #3B4FB8 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '800',
                  fontSize: '1.5rem',
                  flexShrink: 0
                }}>
                  4
                </div>
                <div>
                  <h4 style={{ color: '#52A020', fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                    Receive Recommendations
                  </h4>
                  <p style={{ color: '#666', lineHeight: '1.6', margin: 0 }}>
                    Get personalized treatment recommendations and book drone spraying services directly from the app.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - App Store Buttons */}
          <div style={{ 
            width: '320px',
            height: '640px',
            background: 'linear-gradient(135deg, #3B4FB8 0%, #52A020 100%)',
            borderRadius: '40px',
            padding: '3rem 2rem',
            boxShadow: '0 20px 60px rgba(59, 79, 184, 0.3)',
            position: 'relative',
            overflow: 'hidden',
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            {/* Decorative circles */}
            <div style={{
              position: 'absolute',
              top: '-80px',
              right: '-80px',
              width: '200px',
              height: '200px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50%'
            }}></div>
            <div style={{
              position: 'absolute',
              bottom: '-60px',
              left: '-60px',
              width: '150px',
              height: '150px',
              background: 'rgba(255, 255, 255, 0.08)',
              borderRadius: '50%'
            }}></div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <h3 style={{
                color: 'white',
                fontSize: '2rem',
                fontWeight: '800',
                marginBottom: '1rem'
              }}>
                Download Now
              </h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '1rem',
                lineHeight: '1.6',
                marginBottom: '3rem'
              }}>
                Get started with Vilvom today and experience the future of tea plantation management
              </p>

              {/* App Store Buttons */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                alignItems: 'center'
              }}>
                <a 
                  href="https://play.google.com/store" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    width: '100%',
                    maxWidth: '220px',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                    alt="Get it on Google Play"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </a>
                <a 
                  href="https://www.apple.com/app-store/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    width: '100%',
                    maxWidth: '220px',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                    alt="Download on the App Store"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </a>
              </div>

              <div style={{
                marginTop: '3rem',
                padding: '1.5rem',
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <p style={{
                  color: 'white',
                  fontSize: '0.9rem',
                  margin: 0,
                  fontWeight: '600'
                }}>
                  ⭐ 4.8/5 Rating
                </p>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '0.85rem',
                  margin: '0.5rem 0 0',
                }}>
                  Trusted by 10,000+ tea planters
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
