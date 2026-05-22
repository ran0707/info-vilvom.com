"use client";
import VilvomHeader from "./Components/header";
import VilvomFooter from "./Components/footer";


export default function ContactUs() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        fontFamily: "var(--font-geist-sans, Georgia, serif)",
      }}
    >
      <VilvomHeader />

      {/* Full-viewport background with floating card */}
      <div
        style={{
          flex: 1,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "3rem 1rem",
          minHeight: "calc(100vh - 56px)",
        }}
      >
        {/* Background image */}
        <img
          src="/office2.png"
          alt="Office building background"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
          }}
        />

        {/* Light overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(200,210,220,0.35)",
          }}
        />

        {/* White floating card */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            background: "#fff",
            width: "100%",
            maxWidth: 360,
            padding: "2.5rem 2.25rem 2rem",
            boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
          }}
        >
          {/* Heading */}
          <h1
            style={{
              color: "#2e7d32",
              fontSize: "1.5rem",
              fontWeight: 700,
              fontFamily: "Georgia, serif",
              textAlign: "center",
              margin: "0 0 0.75rem 0",
            }}
          >
            Contact Us
          </h1>

          {/* Subtitle */}
          <p
            style={{
              color: "#666",
              fontSize: "0.78rem",
              lineHeight: 1.7,
              textAlign: "center",
              margin: "0 0 1.75rem 0",
            }}
          >
            Vilvom serves a diverse range of agri-tech and drone service companies
            throughout South India. If you have any questions, need assistance, or wish
            to join our dream team, we are here to assist. We invite you to fill out the
            form below, and we will be delighted to get back to you shortly.
          </p>

          {/* Form */}
          <form onSubmit={(e) => e.preventDefault()}>
            {/* Row 1: Name + Phone */}
            <div style={{ display: "flex", gap: "1.25rem", marginBottom: "1.25rem" }}>
              <div style={{ flex: 1 }}>
                <label style={labelStyle}>Name *</label>
                <input type="text" required placeholder="" style={inputStyle}
                  onFocus={(e) => (e.currentTarget.style.borderBottomColor = "#2e7d32")}
                  onBlur={(e) => (e.currentTarget.style.borderBottomColor = "#ccc")}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label style={labelStyle}>Phone Number *</label>
                <input type="tel" required placeholder="" style={inputStyle}
                  onFocus={(e) => (e.currentTarget.style.borderBottomColor = "#2e7d32")}
                  onBlur={(e) => (e.currentTarget.style.borderBottomColor = "#ccc")}
                />
              </div>
            </div>

            {/* Row 2: Email + Company */}
            <div style={{ display: "flex", gap: "1.25rem", marginBottom: "1.25rem" }}>
              <div style={{ flex: 1 }}>
                <label style={labelStyle}>Email *</label>
                <input type="email" required placeholder="" style={inputStyle}
                  onFocus={(e) => (e.currentTarget.style.borderBottomColor = "#2e7d32")}
                  onBlur={(e) => (e.currentTarget.style.borderBottomColor = "#ccc")}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label style={labelStyle}>Company</label>
                <input type="text" placeholder="" style={inputStyle}
                  onFocus={(e) => (e.currentTarget.style.borderBottomColor = "#2e7d32")}
                  onBlur={(e) => (e.currentTarget.style.borderBottomColor = "#ccc")}
                />
              </div>
            </div>

            {/* Subject */}
            <div style={{ marginBottom: "1.25rem" }}>
              <label style={labelStyle}>Subject</label>
              <input type="text" placeholder="" style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderBottomColor = "#2e7d32")}
                onBlur={(e) => (e.currentTarget.style.borderBottomColor = "#ccc")}
              />
            </div>

            {/* Message */}
            <div style={{ marginBottom: "1.75rem" }}>
              <label style={labelStyle}>Message</label>
              <textarea
                rows={3}
                placeholder=""
                style={{
                  ...inputStyle,
                  resize: "none",
                  paddingTop: "0.4rem",
                  height: 64,
                } as React.CSSProperties}
                onFocus={(e) => (e.currentTarget.style.borderBottomColor = "#2e7d32")}
                onBlur={(e) => (e.currentTarget.style.borderBottomColor = "#ccc")}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              style={{
                display: "block",
                width: "55%",
                background: "#2e7d32",
                color: "#fff",
                border: "none",
                padding: "0.65rem 0",
                fontSize: "0.85rem",
                fontWeight: 600,
                cursor: "pointer",
                letterSpacing: "0.03em",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background = "#1b5e20")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background = "#2e7d32")
              }
            >
              Sign Me Up
            </button>
          </form>
        </div>
      </div>

      <VilvomFooter />
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.72rem",
  color: "#555",
  marginBottom: "0.3rem",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  border: "none",
  borderBottom: "1px solid #ccc",
  outline: "none",
  fontSize: "0.82rem",
  padding: "0.3rem 0",
  background: "transparent",
  boxSizing: "border-box",
  transition: "border-bottom-color 0.15s",
};
