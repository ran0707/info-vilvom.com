"use client";

export default function Services() {
  const services = [
    {
      title: "Sales & Distribution",
      body: "Driven by a strong market presence and customer-focused operations, our distribution framework is structured to deliver efficiency at every level. Through an expanding network of regional offices and supply hubs, we maintain smooth coordination and wide-scale product availability across multiple territories. Our organization is powered by a dedicated team of more than 2,500 professionals, supported by a dynamic field force of 650+ sales specialists who consistently strengthen customer engagement, accelerate market growth, and ensure dependable service delivery. By combining operational expertise with technology-driven logistics, we continue to enhance supply chain performance and customer satisfaction across every region we serve.",
      img: "/coffe.png",
      alt: "Café and distribution products on shelf",
      categories: [
        "Fem-Care", "Baby-Care", "Health", "Hair-Care", "Grooming", "Personal-Care",
        "Fragrance", "Stationery", "Laundry", "Luxury Chocolates", "Confectionery", "Biscuits & Confectionery"
      ],
    },
    // {
    //   title: "E-Commerce Sales",
    //   body: "With a strong digital commerce presence, we have established ourselves as a trusted partner across the nation's leading online marketplaces and retail platforms. Our e-commerce operations are focused on delivering seamless customer experiences, efficient order fulfillment, and consistent product availability to a rapidly growing online consumer base. Backed by a dedicated digital sales team and streamlined logistics support, we continuously adapt to evolving market trends and consumer demands. Through data-driven strategies and platform optimization, we strengthen brand visibility, maximize reach, and drive sustainable online growth across multiple channels.",
    //   img: "/warehouse.png",
    //   alt: "Warehouse and e-commerce operations",
      

    // },
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
    {
      title: "Business to Consumer",
      body: "Our Business-to-Consumer (B2C) operations are focused on creating stronger customer relationships through premium tea products, seamless digital experiences, and personalized service. By connecting directly with consumers through our online platform, we provide a convenient and engaging shopping journey that enhances customer trust, brand value, and long-term loyalty. Supported by strategically managed fulfillment centers and an optimized logistics network, we ensure faster order processing and reliable doorstep delivery across multiple regions. With a customer-first approach and technology-driven operations, we continue to improve convenience, responsiveness, and overall consumer satisfaction while delivering fresh, high-quality tea products in the evolving digital marketplace.",
      img: "/b2c.png",
      alt: "Direct to consumer delivery",
    },
    {
      title: "Business to Business",
      body: "Our Business-to-Business (B2B) operations are focused on building strong partnerships through reliable supply chains, premium tea products, and efficient service solutions. By working directly with retailers, distributors, cafes, and wholesale partners, we deliver consistent quality and customized business solutions that strengthen trust, brand value, and long-term collaboration. Supported by strategically managed fulfillment centers and an optimized logistics network, we ensure timely bulk order processing and dependable delivery across multiple regions. With a partnership-driven approach and technology-enabled operations, we continue to enhance efficiency, scalability, and overall client satisfaction while meeting the evolving demands of the modern tea and beverage industry.",
      img: "/b2b.png",
      alt: "Direct to consumer delivery",
    },
    {
      title: "Marketplace Sales",
      body: "Our Marketplace Sales operations are focused on expanding customer reach through leading e-commerce platforms and digital marketplaces while delivering a seamless shopping experience. By partnering with trusted online marketplaces, we make our premium tea products more accessible to consumers across multiple regions, increasing brand visibility and customer engagement. Supported by efficient inventory management, strategically located fulfillment centers, and an optimized logistics network, we ensure faster order processing and reliable product delivery. With a technology-driven and customer-focused approach, we continue to strengthen marketplace performance, improve operational efficiency, and enhance overall customer satisfaction in the rapidly growing digital commerce ecosystem.",
      img: "https://i1-e.pinimg.com/1200x/c6/01/6c/c6016c97f375a50acdfb9514e96f641f.jpg",
      alt: "Direct to consumer delivery",
    },
  ];

  return (
    <>
      {/* Keyframes for animations - cannot be inline */}
      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

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

        {services.map((service, index) => (
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
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", width: "100%", gap: "2rem" }}>
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <h2
                    style={{
                      color: "#2e7d32",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      fontFamily: "Georgia, serif",
                      margin: "0 0 0.85rem 0",
                    }}
                  >
                    {service.title}
                  </h2>
                  <p
                    style={{
                      color: "#1a3a6b",
                      fontSize: "0.85rem",
                      lineHeight: 1.8,
                      margin: 0,
                      fontWeight: 600,
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

              {/* Category Marquee for Sales & Distribution */}
              {service.categories && (
                <div style={{ width: "100%" }}>
                  {/* First Row - Right to Left (Alternating Blue/Green) */}
                  <div
                    style={{
                      overflow: "hidden",
                      width: "100%",
                      margin: "1.5rem 0",
                      padding: "1rem 0",
                    }}
                    onMouseEnter={(e) => {
                      const track = e.currentTarget.querySelector('div') as HTMLElement;
                      if (track) track.style.animationPlayState = 'paused';
                    }}
                    onMouseLeave={(e) => {
                      const track = e.currentTarget.querySelector('div') as HTMLElement;
                      if (track) track.style.animationPlayState = 'running';
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: "0.5rem",
                        width: "fit-content",
                        animation: "marqueeLeft 40s linear infinite",
                      }}
                    >
                      {[...service.categories, ...service.categories, ...service.categories].map((cat, idx) => (
                        <div
                          key={`left-${idx}`}
                          style={{
                            flexShrink: 0,
                            padding: "0.6rem 1.5rem",
                            borderRadius: "50px",
                            fontSize: "0.9rem",
                            fontWeight: 600,
                            whiteSpace: "nowrap",
                            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                            transition: "transform 0.3s ease",
                            background: idx % 2 === 0 
                              ? "linear-gradient(135deg, #1a3a6b 0%, #2c5aa0 100%)"
                              : "linear-gradient(135deg, #2e7d32 0%, #4caf50 100%)",
                            color: "white",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.05)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                          }}
                        >
                          {cat}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Second Row - Left to Right (Alternating Green/Blue) */}
                  <div
                    style={{
                      overflow: "hidden",
                      width: "100%",
                      margin: "1.5rem 0",
                      padding: "1rem 0",
                    }}
                    onMouseEnter={(e) => {
                      const track = e.currentTarget.querySelector('div') as HTMLElement;
                      if (track) track.style.animationPlayState = 'paused';
                    }}
                    onMouseLeave={(e) => {
                      const track = e.currentTarget.querySelector('div') as HTMLElement;
                      if (track) track.style.animationPlayState = 'running';
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: "0.5rem",
                        width: "fit-content",
                        animation: "marqueeRight 40s linear infinite",
                      }}
                    >
                      {[...service.categories, ...service.categories, ...service.categories].map((cat, idx) => (
                        <div
                          key={`right-${idx}`}
                          style={{
                            flexShrink: 0,
                            padding: "0.6rem 1.5rem",
                            borderRadius: "50px",
                            fontSize: "0.9rem",
                            fontWeight: 600,
                            whiteSpace: "nowrap",
                            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                            transition: "transform 0.3s ease",
                            background: idx % 2 === 0 
                              ? "linear-gradient(135deg, #2e7d32 0%, #4caf50 100%)"
                              : "linear-gradient(135deg, #1a3a6b 0%, #2c5aa0 100%)",
                            color: "white",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.05)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                          }}
                        >
                          {cat}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        <div style={{ borderTop: "1px solid #ddd", width: "100%" }} />
      </section>
    </>
  );
}
