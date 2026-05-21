"use client";

export default function PestDisease() {
  return (
    <section id="pest" className="section-full pest-section" style={{ background: '#ffffff' }}>
      <div className="pest-inner">
        <div className="section" style={{ paddingTop: 0, paddingBottom: "2rem" }}>
          <h2><span style={{ color: '#3B4FB8' }}>Vilv<img src="/o.png" alt="o" style={{ display: 'inline', height: '1em', verticalAlign: 'baseline', margin: '0', position: 'relative', top: '0.25em' }} />m</span> <span style={{ color: '#52A020' }}>App</span>
                <sup style={{ fontSize: '0.5em', marginLeft: '2px', color: '#1a1a1a' }}>™</sup><br /> 
              </h2>
          <h2 style={{ color: '#1a1a1a' }}>Pest Infestation Severity Assessment</h2>
          <p className="section-sub" style={{ color: '#666' }}>Vilvom's AI-powered scouting system identifies pests, diseases, and nutritional deficiencies across your entire plantation weeks before they become visible to the human eye.</p>
        </div>
        <div className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
          
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
                  
                  {/* Slide 5 */}
                  <div style={{ width: '100%', height: '612px', flexShrink: 0 }}>
                    <img src="/pest/pest1.jpeg" alt="Pest Detection Screen 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  
                  {/* Slide 6 */}
                  <div style={{ width: '100%', height: '612px', flexShrink: 0 }}>
                    <img src="/pest/pest2.jpeg" alt="Pest Detection Screen 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  
                  {/* Slide 7 */}
                  <div style={{ width: '100%', height: '612px', flexShrink: 0 }}>
                    <img src="/pest/pest3.jpeg" alt="Pest Detection Screen 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  
                  {/* Slide 8 */}
                  <div style={{ width: '100%', height: '612px', flexShrink: 0 }}>
                    <img src="/pest/pest4.jpeg" alt="Pest Detection Screen 4" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                Experience the <span style={{ color: '#3B4FB8' }}>Vilv<img src="/o.png" alt="o" style={{ display: 'inline', height: '0.9em', verticalAlign: 'baseline', margin: '0', position: 'relative', top: '0.15em' }} />m</span> <span style={{ color: '#52A020' }}>App</span>
              </h3>
              <p style={{ 
                fontSize: '1.1rem', 
                color: '#666', 
                lineHeight: '1.8',
                marginBottom: '1.5rem'
              }}>
                Scroll through the mobile screen to explore our intuitive app interface designed for tea plantation management with multilingual support.
              </p>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0,
                color: '#666'
              }}>
                <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <span style={{ color: '#3B4FB8', fontSize: '1.5rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                  <span style={{ color: '#3B4FB8' }}><strong>AI-powered pest and disease detection</strong></span>
                </li>
                <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <span style={{ color: '#52A020', fontSize: '1.5rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                  <span style={{ color: '#52A020' }}><strong>Mobile-based field monitoring system</strong></span>
                </li>
                <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <span style={{ color: '#3B4FB8', fontSize: '1.5rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                  <span style={{ color: '#3B4FB8' }}><strong>DGCA-certified drone spraying services</strong></span>
                </li>
                <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <span style={{ color: '#52A020', fontSize: '1.5rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                  <span style={{ color: '#52A020' }}><strong>Faster field coverage with reduced manpower</strong></span>
                </li>
                <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <span style={{ color: '#3B4FB8', fontSize: '1.5rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                  <span style={{ color: '#3B4FB8' }}><strong>FSSAI and EU MRL compliance support</strong></span>
                </li>
                <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <span style={{ color: '#52A020', fontSize: '1.5rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                  <span style={{ color: '#52A020' }}><strong>Safe and export-quality crop assurance</strong></span>
                </li>
                <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <span style={{ color: '#3B4FB8', fontSize: '1.5rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                  <span style={{ color: '#3B4FB8' }}><strong>Spray log and operational tracking</strong></span>
                </li>
                <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <span style={{ color: '#52A020', fontSize: '1.5rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                  <span style={{ color: '#52A020' }}><strong>Data-driven decision support system</strong></span>
                </li>
                <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <span style={{ color: '#3B4FB8', fontSize: '1.5rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                  <span style={{ color: '#3B4FB8' }}><strong>Supports 7 Indian languages</strong></span>
                </li>
                <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <span style={{ color: '#52A020', fontSize: '1.5rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                  <span style={{ color: '#52A020' }}><strong>Multispectral crop health analysis</strong></span>
                </li>
                <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <span style={{ color: '#3B4FB8', fontSize: '1.5rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                  <span style={{ color: '#3B4FB8' }}><strong>Ultra-low-volume pesticide application</strong></span>
                </li>
                <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <span style={{ color: '#52A020', fontSize: '1.5rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                  <span style={{ color: '#52A020' }}><strong>Spray deposition validation</strong></span>
                </li>
              </ul>
            </div>

            {/* Right Side - Multilingual Feature */}
            <div style={{ 
              width: '320px',
              height: '640px',
              background: 'linear-gradient(135deg, #3B4FB8 0%, #52A020 100%)',
              borderRadius: '40px',
              padding: '2rem 1.5rem',
              boxShadow: '0 20px 60px rgba(59, 79, 184, 0.3)',
              position: 'relative',
              overflow: 'hidden',
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'column'
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

              {/* Language List */}
              <div style={{
                position: 'relative',
                zIndex: 1,
                flex: 1,
                overflowY: 'auto',
                paddingRight: '0.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                justifyContent: 'center'
              }}>
                <style>{`
                  .lang-scroll::-webkit-scrollbar {
                    width: 4px;
                  }
                  .lang-scroll::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                  }
                  .lang-scroll::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 10px;
                  }
                `}</style>
                {[
                  { num: '1', name: 'Tamil', native: 'தமிழ்' },
                  { num: '2', name: 'Telugu', native: 'తెలుగు' },
                  { num: '3', name: 'Bengali', native: 'বাংলা' },
                  { num: '4', name: 'Assamese', native: 'অসমীয়া' },
                  { num: '5', name: 'Malayalam', native: 'മലയാളം' },
                  { num: '6', name: 'Hindi', native: 'हिन्दी' },
                  { num: '7', name: 'English', native: 'English' }
                ].map((lang) => (
                  <div key={lang.num} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem',
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
                    e.currentTarget.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: 'white',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '800',
                      color: '#3B4FB8',
                      fontSize: '1rem',
                      flexShrink: 0,
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
                    }}>
                      {lang.num}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ 
                        color: 'white', 
                        fontWeight: '700',
                        fontSize: '1rem',
                        marginBottom: '3px'
                      }}>
                        {lang.name}
                      </div>
                      <div style={{ 
                        color: 'rgba(255, 255, 255, 0.85)', 
                        fontSize: '0.95rem',
                        fontWeight: '500'
                      }}>
                        {lang.native}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Camellia-I Dataset Section */}
          <div style={{
            margin: '6rem 0 4rem',
            textAlign: 'center'
          }}>
            <div style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #3B4FB8 0%, #52A020 100%)',
              color: 'white',
              padding: '0.5rem 1.5rem',
              borderRadius: '50px',
              fontSize: '0.75rem',
              fontWeight: '700',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
              boxShadow: '0 4px 15px rgba(59, 79, 184, 0.3)'
            }}>
              🎓 AI-Powered Technology
            </div>

            <h3 style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              color: '#1a1a1a',
              marginBottom: '1rem',
              lineHeight: '1.2'
            }}>
              Trained on <span style={{ color: '#3B4FB8' }}>Camellia-I</span>
            </h3>

            <p style={{
              fontSize: '1.2rem',
              color: '#666',
              lineHeight: '1.8',
              marginBottom: '3rem',
              maxWidth: '800px',
              margin: '0 auto 3rem'
            }}>
              The world's largest tea image dataset, constructed in-house with thousands of annotated images for precise pest and disease detection
            </p>

            {/* Laptop/TV Screen */}
            <div style={{
              maxWidth: '1000px',
              margin: '0 auto',
              position: 'relative'
            }}>
              {/* Laptop Frame */}
              <div style={{
                background: 'linear-gradient(145deg, #2d2d2d, #1a1a1a)',
                borderRadius: '20px 20px 0 0',
                padding: '20px 30px 0',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
              }}>
                {/* Screen */}
                <div style={{
                  background: '#000',
                  borderRadius: '8px 8px 0 0',
                  overflow: 'hidden',
                  position: 'relative',
                  paddingTop: '56.25%' // 16:9 aspect ratio
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                  }}>
                    <img 
                      src="/display.png" 
                      alt="Camellia-I Dataset" 
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Laptop Base */}
              <div style={{
                background: 'linear-gradient(145deg, #3d3d3d, #2a2a2a)',
                height: '30px',
                borderRadius: '0 0 20px 20px',
                position: 'relative',
                boxShadow: '0 10px 30px rgba(61, 14, 231, 0.2)'
              }}>
                <div style={{
                  position: 'absolute',
                  bottom: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '200px',
                  height: '10px',
                  background: 'linear-gradient(145deg, #2d2d2d, #1a1a1a)',
                  borderRadius: '0 0 10px 10px',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)'
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
