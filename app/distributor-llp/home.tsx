"use client";
import VilvomHeader from "./Components/header";
import VilvomFooter from "./Components/footer";

import Link from "next/link";

export default function VilvomHome() {
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
      {/* HEADER */}
      <VilvomHeader />

      {/* HERO SECTION */}
      <section
        id="home"
        style={{
          position: "relative",
          width: "100%",
          height: "420px",
          overflow: "hidden",
        }}
      >
        <img
          src="/office.png"
          alt="Office background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 40%",
            display: "block",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.25)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "2.5rem",
            left: "2.5rem",
            background: "rgba(180, 180, 190, 0.82)",
            backdropFilter: "blur(4px)",
            padding: "1.5rem 1.75rem",
            maxWidth: 320,
            borderRadius: "2px",
          }}
        >
          <h2
            style={{
              color: "#2e7d32",
              fontSize: "1.4rem",
              fontWeight: 700,
              margin: "0 0 0.6rem 0",
              fontFamily: "Georgia, serif",
            }}
          >
            Let&apos;s Connect
          </h2>
          <p
            style={{
              color: "#222",
              fontSize: "0.82rem",
              lineHeight: 1.65,
              margin: "0 0 1rem 0",
            }}
          >
            Are you looking for an exciting career change? We are actively seeking talented
            and passionate individuals to join our dynamic team. If you have the skills and
            drive to make a difference, we would love to hear from you!
          </p>
          <a
            href="/vilvom/contact"
            style={{
              display: "inline-block",
              background: "#2e7d32",
              color: "#fff",
              padding: "0.45rem 1.1rem",
              fontSize: "0.82rem",
              fontWeight: 600,
              borderRadius: "3px",
              textDecoration: "none",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.background = "#1b5e20")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.background = "#2e7d32")
            }
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section
        id="about"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "3.5rem 1.5rem 2rem",
          width: "100%",
        }}
      >
        <h2
          style={{
            color: "#2e7d32",
            fontSize: "2rem",
            fontWeight: 700,
            fontFamily: "Georgia, serif",
            marginBottom: "1.25rem",
          }}
        >
          About Us
        </h2>
        <p
          style={{
            color: "#444",
            fontSize: "1rem",
            lineHeight: 1.8,
            maxWidth: 760,
          }}
        >
          Vilvom Distributor Pvt Ltd is a leading distribution company committed to excellence,
          innovation, and building lasting partnerships. With decades of experience across
          diverse markets, we bring unmatched expertise and a passion for delivering results
          that matter to our clients, partners, and communities.
        </p>

        <Link href="/vilvom/about" style={{ textDecoration: "none", display: "inline-block", marginTop: "1.25rem" }}>
          <button
            style={{
              background: "transparent",
              border: "2px solid #2e7d32",
              color: "#2e7d32",
              padding: "0.55rem 1.5rem",
              fontSize: "0.875rem",
              fontWeight: 600,
              cursor: "pointer",
              borderRadius: "3px",
              transition: "background 0.15s, color 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "#2e7d32";
              (e.currentTarget as HTMLButtonElement).style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "transparent";
              (e.currentTarget as HTMLButtonElement).style.color = "#2e7d32";
            }}
          >
            Learn More
          </button>
        </Link>
      </section>

      {/* SOUTH INDIA DISTRIBUTOR SECTION */}
      <section
        style={{
          width: "100%",
          background: "#1a3a6b",
          padding: "4rem 2.5rem",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "3rem",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: "1 1 420px", minWidth: 280 }}>
            <h2
              style={{
                color: "#4caf50",
                fontSize: "2rem",
                fontWeight: 700,
                fontFamily: "Georgia, serif",
                marginBottom: "1.25rem",
                lineHeight: 1.3,
              }}
            >
              Largest Distributor In South India
            </h2>
            <p
              style={{
                color: "#f1f5f1ff",
                fontSize: "0.95rem",
                lineHeight: 1.8,
                maxWidth: 520,
              }}
            >
              Vilvom Distributor Pvt Ltd is the prominent distributor of FMCG products in South India,
              recognised for establishing enduring partnerships with national suppliers and
              key retail stakeholders. Our comprehensive network, innovative and cost-effective
              solutions, robust logistics support, and deep market expertise position us to
              enhance market penetration and visibility for FMCG companies aspiring to enter
              and thrive in the rapidly expanding markets of Tamil Nadu, Kerala, Karnataka,
              Andhra Pradesh, and Telangana.
            </p>
          </div>

          <div
            style={{
              flex: "0 0 auto",
              width: 260,
              height: 300,
              overflow: "hidden",
              borderRadius: "4px",
            }}
          >
            <img
              src="/map.png"
              alt="South India map"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>
        </div>
      </section>

      {/* OUR SERVICES SECTION */}
      <section
        id="services"
        style={{
          width: "100%",
          background: "#fff",
          paddingTop: "3.5rem",
          boxSizing: "border-box",
        }}
      >
        <div style={{ padding: "0 3rem 2rem" }}>
          <h2
            style={{
              color: "#2e7d32",
              fontSize: "2.2rem",
              fontWeight: 700,
              fontFamily: "Georgia, serif",
              margin: "0 0 0.35rem 0",
            }}
          >
            Our Services
          </h2>
          <p style={{ color: "#aaa", fontSize: "0.85rem", fontStyle: "italic", margin: 0 }}>
            Delivering Impactful Solutions for Success
          </p>
        </div>

        {([
          {
            title: "Sales & Distribution",
            body: "Driven by a strong market presence and customer-focused operations, our distribution framework is structured to deliver efficiency at every level. Through an expanding network of regional offices and supply hubs, we maintain smooth coordination and wide-scale product availability across multiple territories. Our organization is powered by a dedicated team of more than 2,500 professionals, supported by a dynamic field force of 650+ sales specialists who consistently strengthen customer engagement, accelerate market growth, and ensure dependable service delivery. By combining operational expertise with technology-driven logistics, we continue to enhance supply chain performance and customer satisfaction across every region we serve.",
            img: "/coffe.png",
            alt: "Café and distribution products on shelf",
          },
          {
            title: "E-Commerce Sales",
            body: "With a strong digital commerce presence, we have established ourselves as a trusted partner across the nation's leading online marketplaces and retail platforms. Our e-commerce operations are focused on delivering seamless customer experiences, efficient order fulfillment, and consistent product availability to a rapidly growing online consumer base. Backed by a dedicated digital sales team and streamlined logistics support, we continuously adapt to evolving market trends and consumer demands. Through data-driven strategies and platform optimization, we strengthen brand visibility, maximize reach, and drive sustainable online growth across multiple channels.",
            img: "/warehouse.png",
            alt: "Warehouse and e-commerce operations",
          },
          {
            title: "Pharmaceuticals",
            body: "Our pharmaceutical distribution network is built to support reliable healthcare access through efficient and streamlined supply chain operations. With a strong regional presence and an extensive channel network, we ensure the smooth movement of medical and healthcare products to pharmacies, hospitals, and healthcare partners across multiple territories. Equipped with modern warehousing infrastructure and a highly coordinated logistics system, our operations are designed to maintain product integrity, timely dispatch, and consistent availability. Supported by experienced distribution professionals and strategic partnerships with leading healthcare brands, we continue to strengthen our position as a trusted pharmaceutical supply and distribution partner.",
            img: "/Logistics.png",
            alt: "Pharmaceutical logistics and distribution",
          },
          {
            title: "Direct to Consumers",
            body: "Our Direct-to-Consumer operations are focused on building stronger customer relationships through seamless digital experiences and personalized service. By connecting directly with consumers through our online platform, we create a more engaging shopping journey that strengthens customer trust, brand value, and long-term loyalty. Supported by strategically located fulfillment centers and an optimized logistics network, we ensure faster order processing and reliable doorstep delivery across multiple regions. With a customer-first approach and technology-driven operations, we continue to enhance convenience, responsiveness, and overall consumer satisfaction in the evolving digital marketplace.",
            img: "/develery.png",
            alt: "Direct to consumer delivery",
          },
        ] as { title: string; body: string; img: string; alt: string }[]).map((service) => (
          <div key={service.title}>
            <div style={{ borderTop: "1px solid #ddd", width: "100%" }} />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                minHeight: 220,
                gap: "2rem",
                padding: "2rem 3rem",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h3
                  style={{
                    color: "#2e7d32",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    fontFamily: "Georgia, serif",
                    margin: "0 0 0.85rem 0",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    color: "#555",
                    fontSize: "0.85rem",
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  {service.body}
                </p>
              </div>

              <div
                style={{
                  flexShrink: 0,
                  width: 380,
                  height: 280,
                  overflow: "hidden",
                }}
              >
                <img
                  src={service.img}
                  alt={service.alt}
                  style={{
                    width: 380,
                    height: 280,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        ))}

        <div style={{ borderTop: "1px solid #ddd", width: "100%" }} />
      </section>

      {/* FOOTER */}
      <VilvomFooter />
    </div>
  );
}
