"use client";

export default function PestDisease() {
  return (
    <section id="pest" className="section-full pest-section">
      <div className="pest-inner">
        <div className="section" style={{ paddingTop: 0, paddingBottom: "2rem" }}>
          <span className="stag">Crop Intelligence</span>
          <h2>Pest Infestation Severity Assessment</h2>
          <p className="section-sub">Vilvom's AI-powered scouting system identifies pests, diseases, and nutritional deficiencies across your entire plantation weeks before they become visible to the human eye.</p>
        </div>
        <div className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div className="pest-grid">
            <div className="pest-card">
              <div className="pest-card-icon">📷</div>
              <h3>Pest Infestation Detection</h3>
              <p>Camera-first mobile workflow enables instant pest identification and severity assessment directly from tea leaf images.</p>
            </div>
            <div className="pest-card">
              <div className="pest-card-icon">🌿</div>
              <h3>Disease Severity Analysis</h3>
              <p>Advanced plant health analysis detects leaf diseases and infection severity for faster treatment recommendations.</p>
            </div>
            <div className="pest-card">
              <div className="pest-card-icon">💡</div>
              <h3>Smart Recommendation System</h3>
              <p>Provides precise treatment suggestions, pesticide guidance, and plantation management recommendations based on detected conditions.</p>
            </div>
            <div className="pest-card">
              <div className="pest-card-icon">🌐</div>
              <h3>Multilingual User Access</h3>
              <p>Supports multiple Indian languages with a simple and user-friendly interface accessible to tea planters across regions.</p>
            </div>
            <div className="pest-card">
              <div className="pest-card-icon">�</div>
              <h3>Offline & Background Sync</h3>
              <p>Offline-ready mobile application with AsyncStorage support and automatic synchronization when internet connectivity becomes available.</p>
            </div>
            <div className="pest-card">
              <div className="pest-card-icon">🤝</div>
              <h3>Expert & Community Support</h3>
              <p>Integrated advisory support and collaborative community platform enabling planters to connect with experts for clarification and guidance.</p>
            </div>
          </div>
          {/* AI Detection Bar Chart */}
          <div className="pest-detect-bar">
            <div className="detect-title">AI Detection Confidence — Current Scan Results</div>
            <div className="detect-rows">
              <div className="detect-row">
                <span className="detect-label">Blister Blight</span>
                <div className="detect-bar-track"><div className="detect-bar-fill" style={{ width: "92%" }}></div></div>
                <span className="detect-pct">92%</span>
              </div>
              <div className="detect-row">
                <span className="detect-label">Tea Mosquito Bug</span>
                <div className="detect-bar-track"><div className="detect-bar-fill warn" style={{ width: "67%" }}></div></div>
                <span className="detect-pct warn">67%</span>
              </div>
              <div className="detect-row">
                <span className="detect-label">Red Spider Mite</span>
                <div className="detect-bar-track"><div className="detect-bar-fill danger" style={{ width: "28%" }}></div></div>
                <span className="detect-pct danger">28%</span>
              </div>
              <div className="detect-row">
                <span className="detect-label">Nitrogen Deficiency</span>
                <div className="detect-bar-track"><div className="detect-bar-fill" style={{ width: "85%" }}></div></div>
                <span className="detect-pct">85%</span>
              </div>
              <div className="detect-row">
                <span className="detect-label">Grey Blight</span>
                <div className="detect-bar-track"><div className="detect-bar-fill warn" style={{ width: "44%" }}></div></div>
                <span className="detect-pct warn">44%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
