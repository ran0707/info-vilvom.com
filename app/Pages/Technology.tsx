"use client";

export default function Technology() {
  return (
    <section id="technology" className="section-full tech-section">
      <div className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="tech-grid">
          <div>
            <span className="stag">Our Technology</span>
            <h2>Flying Autonomous Drones™ Powered by AI</h2>
            <p className="section-sub">Vilvom's drone fleet is guided by cutting-edge algorithms that enable extraordinary accuracy across tea plantation canopies continuously collecting real-time data on plant health, pest presence, and soil conditions with every flight.</p>
            <div className="tech-points">
              <div className="tp-item">
                <div className="tp-icon tp-icon-g">🌿</div>
                <div>
                  <h4>Tea-Specific Spray Formulation Protocols</h4>
                  <p>Exclusive spraying formulations and dosage standards are developed specifically for tea plantations, ensuring effective pest control while reducing phytotoxicity risks and excessive chemical concentration on tea leaves.</p>
                </div>
              </div>
              <div className="tp-item">
                <div className="tp-icon tp-icon-b">🧪</div>
                <div>
                  <h4>MRL-Compliant Precision Spraying</h4>
                  <p>Drone spraying operations are designed to support compliance with FSSAI, Codex Alimentarius, and EU MRL standards through controlled ultra-low-volume application, geo-tagged spray records, and scientifically monitored residue analysis.</p>
                </div>
              </div>
              <div className="tp-item">
                <div className="tp-icon tp-icon-g">🎯</div>
                <div>
                  <h4>Spray Uniformity & Canopy Penetration</h4>
                  <p>Advanced drone spraying protocols ensure optimized droplet deposition across dense tea canopies. Parameters such as flight height, rotor airflow, nozzle configuration, and droplet size are calibrated to improve spray uniformity and minimize drift loss.</p>
                </div>
              </div>
              <div className="tp-item">
                <div className="tp-icon tp-icon-b">�</div>
                <div>
                  <h4>Geo-Tagged Targeted Application</h4>
                  <p>GPS-guided drone operations enable precise zonal spraying instead of blanket chemical application, reducing pesticide wastage and ensuring better coverage of affected plantation blocks.</p>
                </div>
              </div>
              <div className="tp-item">
                <div className="tp-icon tp-icon-g">⚡</div>
                <div>
                  <h4>High-Efficiency Ultra-Low-Volume Spraying</h4>
                  <p>Drone-based spraying achieves 5–10× faster field coverage with 60–80% lower water and pesticide usage compared to conventional manual spraying methods.</p>
                </div>
              </div>
              <div className="tp-item">
                <div className="tp-icon tp-icon-b">🤝</div>
                <div>
                  <h4>Estate-Focused Operational Framework</h4>
                  <p>A structured collaboration model supports tea estates through DGCA-certified drone operators, scientific validation workflows, estate-level dashboards, and year-round spraying engagement.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="tech-visual">
            <div className="drone-stats">
              <div className="drone-stat"><span className="ds-val">Active Drones</span><span className="ds-lbl">Drones maneuvered by DGCA-certified pilots.</span></div>
              <div className="drone-stat"><span className="ds-val">98%</span><span className="ds-lbl">Flight Accuracy</span></div>
              <div className="drone-stat"><span className="ds-val">4K+</span><span className="ds-lbl">Acres / Day</span></div>
              <div className="drone-stat"><span className="ds-val">2</span><span className="ds-lbl">Global Patents</span></div>
            </div>
            <div className="algo-list">
              <div className="algo-item"><div className="algo-dot"></div><span>Tea-Specific Spray Formulation Protocols : Precise droplet distribution across tea canopies</span></div>
              <div className="algo-item"><div className="algo-dot"></div><span>MRL Compliance Tracking : Real-time residue monitoring & regulatory adherence</span></div>
              <div className="algo-item"><div className="algo-dot"></div><span>Canopy Penetration Analysis : Optimal flight height & nozzle configuration</span></div>
              <div className="algo-item"><div className="algo-dot"></div><span>Geo-Tagged Application : GPS-guided zonal spraying with drift minimization</span></div>
              <div className="algo-item"><div className="algo-dot"></div><span>Ultra-Low-Volume Calibration : Efficient chemical usage with maximum coverage</span></div>
              <div className="algo-item"><div className="algo-dot"></div><span>Estate Management Integration : DGCA-certified operations & dashboard analytics</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
