"use client";
import VilvomHeader from "./Components/header";
import VilvomFooter from "./Components/footer";

const values = [
  {
    title: "Seva Before Self",
    body: "We place the needs of our retail partners, farmers, and communities ahead of our own gains, ensuring every distribution decision is guided by genuine service and shared prosperity.",
    img: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&q=80",
    alt: "Volunteers serving community food distribution",
  },
  {
    title: "Roots, Reach, Reliability",
    body: "Inspired by the banyan tree, we grow deep into rural and semi-urban markets, ensuring every small retailer — however remote — receives consistent, on-time supply they can depend on.",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&q=80",
    alt: "Rural village road through farmland",
  },
  {
    title: "Fair Trade, Strong Bonds",
    body: "Every retailer, large or small, deserves honest pricing and respectful partnership; we build lasting relationships through transparent dealings and equitable terms that honour the dignity of every business.",
    img: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=400&q=80",
    alt: "Two business people shaking hands over a deal",
  },
  {
    title: "Do More With Less",
    body: "Rooted in Gandhian frugality, we design lean, resource-conscious supply chains that reduce waste, lower costs, and pass real savings to our partners without compromising quality or service.",
    img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&q=80",
    alt: "Recycling and sustainable resource management",
  },
  {
    title: "Uplift the Small Seller",
    body: "We actively empower kirana stores, micro-retailers, and first-generation entrepreneurs by providing them access, credit support, and market knowledge that levels the playing field.",
    img: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=400&q=80",
    alt: "Small kirana shop owner at counter",
  },
  {
    title: "Dharma in Every Deal",
    body: "We conduct every transaction with integrity, accountability, and ethical clarity — because sustainable business is built not on short-term profit, but on the trust earned through righteous action.",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80",
    alt: "Person signing a contract with integrity",
  },
];

export default function AboutUs() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        fontFamily: "var(--font-geist-sans, Georgia, serif)",
        background: "#fff",
      }}
    >
      <VilvomHeader />

      {/* ── ABOUT US ── */}
      <section
        id="about"
        style={{ width: "100%", padding: "3rem 3rem 0", boxSizing: "border-box" }}
      >
        <h1
          style={{
            color: "#2e7d32",
            fontSize: "2.2rem",
            fontWeight: 700,
            fontFamily: "Georgia, serif",
            marginBottom: "2rem",
          }}
        >
          About Us
        </h1>

        <div
          style={{
            display: "flex",
            gap: "3rem",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {/* Left: logo image */}
          <div style={{ flexShrink: 0, width: 220, height: 220, overflow: "hidden", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", background: "#f5f5f5" }}>
            <img
              src="/icon.jpeg"
              alt="Vilvom logo"
              style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
            />
          </div>

          {/* Right: paragraphs */}
          <div style={{ flex: 1, minWidth: 280 }}>
            <p style={{ color: "#444", fontSize: "0.9rem", lineHeight: 1.85, marginBottom: "1.25rem" }}>
              Vilvom Distributor Pvt Ltd was established with a vision to revolutionise agricultural
              distribution and drone technology services across South India. Founded by
              passionate agri-tech entrepreneurs, Vilvom has leveraged deep expertise in
              precision agriculture, drone operations, and supply-chain management to build
              one of the most trusted distribution networks in the region. Over the past
              decade, Vilvom has demonstrated exceptional growth, positioning itself as the
              largest drone-assisted distribution firm in South India, with a consistent
              record of double-digit annual growth.
            </p>
            <p style={{ color: "#444", fontSize: "0.9rem", lineHeight: 1.85, marginBottom: "1.25rem" }}>
              Vilvom distinguishes itself within the industry as an acclaimed agri-tech
              distribution firm, having received numerous prestigious honours from national
              agricultural bodies and technology councils. Currently, we operate as the
              exclusive drone services partner for leading FMCG and pharmaceutical brands
              across Tamil Nadu, Kerala, Karnataka, Andhra Pradesh, and Telangana.
            </p>
            <p style={{ color: "#444", fontSize: "0.9rem", lineHeight: 1.85 }}>
              The primary asset of our company is a multifunctional team proficient in
              essential domains such as Human Resources, Systems, Logistics, Finance, and
              Capability. The core leadership team has remained intact since Vilvom&apos;s
              inception, collectively contributing over 80 years of experience in the
              fast-moving consumer goods and agri-technology sector.
            </p>
          </div>
        </div>
      </section>

      {/* ── OUR VISION ── */}
      <section
        id="vision"
        style={{
          width: "100%",
          background: "#2e7d32",
          padding: "4rem 3rem",
          marginTop: "3rem",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            gap: "3rem",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {/* Left: text */}
          <div style={{ flex: 1, minWidth: 280 }}>
            <h2
              style={{
                color: "#fff",
                fontSize: "1.9rem",
                fontWeight: 700,
                fontFamily: "Georgia, serif",
                marginBottom: "1.25rem",
              }}
            >
              Our Vision
            </h2>
            <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.95rem", lineHeight: 1.85 }}>
              We aspire to achieve annual growth of 20% in both distribution reach and
              profitability by consistently providing exceptional service and excelling in
              essential business fundamentals and initiative execution. This vision will be
              realised through developing a world-class organisation characterised by
              loyalty and capability, positioning Vilvom for unprecedented growth across
              South India&apos;s FMCG and distribution landscape.
            </p>
          </div>

          {/* Right: team image */}
          <div
            style={{
              flexShrink: 0,
              width: 340,
              height: 220,
              overflow: "hidden",
              borderRadius: "4px",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80"
              alt="Vilvom leadership team"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* ── OUR VALUES ── */}
      <section
        id="values"
        style={{
          width: "100%",
          background: "#fff",
          padding: "4rem 3rem",
          boxSizing: "border-box",
        }}
      >
        <h2
          style={{
            color: "#2e7d32",
            fontSize: "2rem",
            fontWeight: 700,
            fontFamily: "Georgia, serif",
            textAlign: "center",
            marginBottom: "2.5rem",
          }}
        >
          Our Values
        </h2>

        {/* 2-column grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(440px, 1fr))",
            gap: "1.5rem",
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
          {values.map((v) => (
            <div
              key={v.title}
              style={{
                display: "flex",
                background: "#fff8f9",
                overflow: "hidden",
                borderRadius: "2px",
              }}
            >
              {/* Image */}
              <div style={{ flexShrink: 0, width: 170, height: 160, overflow: "hidden" }}>
                <img
                  src={v.img}
                  alt={v.alt}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              {/* Text */}
              <div style={{ padding: "1.25rem 1.25rem", flex: 1 }}>
                <h3
                  style={{
                    color: "#2e7d32",
                    fontSize: "1rem",
                    fontWeight: 700,
                    fontFamily: "Georgia, serif",
                    margin: "0 0 0.6rem 0",
                  }}
                >
                  {v.title}
                </h3>
                <p style={{ color: "#555", fontSize: "0.82rem", lineHeight: 1.75, margin: 0 }}>
                  {v.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <VilvomFooter />
    </div>
  );
}

