import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const services = [
  {
    icon: "fas fa-code",
    title: "Full-Stack Development",
    description:
      "Building interactive front-ends and managing back-ends to bring ideas to life.",
  },
  {
    icon: "fas fa-laptop-code",
    title: "Landing Page Design",
    description:
      "Building custom landing pages that look great and work smoothly for users.",
  },
  {
    icon: "fas fa-mobile-alt",
    title: "Responsive Design",
    description:
      "Designing layouts that work smoothly on any device for a better user experience.",
  },
  {
    icon: "fab fa-instagram",
    title: "Social Media Integration",
    description:
      "Connecting and managing social media platforms to enhance engagement and reach.",
  },
  {
    icon: "fas fa-layer-group",
    title: "Frameworks",
    description:
      "Using React and Next.js to build modern, fast, and responsive web applications.",
  },
  {
    icon: "fas fa-database",
    title: "Database Integration",
    description:
      "Connecting databases to manage and access data effectively in applications.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-5 text-white" style={{ backgroundColor: "	 #001f2d" }}>
      <div className="container text-center">
        {/* Section Heading */}
        <h2 className="fw-bold mb-3 animate__animated animate__fadeInDown">
          What I Do
        </h2>
        <p className="text-light mb-5 animate__animated animate__fadeInUp">
          I create custom websites and web apps that combine beautiful design
          with seamless functionality.
        </p>

        {/* Services Grid */}
        <div className="row g-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-md-6 col-lg-4 animate__animated animate__fadeInUp service-fold"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                className="card h-100 border-0 text-white p-4 shadow-sm service-card"
                style={{
                  background:
                    "linear-gradient(135deg, #00344d 0%, #005780 100%)",
                  borderRadius: "12px",
                  perspective: "1000px",
                }}
              >
                <i
                  className={`${service.icon} fa-2x mb-3 text-info service-icon`}
                ></i>
                <h5 className="fw-bold">{service.title}</h5>
                <p className="text-light small">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS inside JSX */}
      <style jsx>{`
        @keyframes foldIn {
          0% {
            opacity: 0;
            transform: rotateY(-90deg) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: rotateY(0deg) translateY(0);
          }
        }
        @keyframes cardGlow {
          0% {
            box-shadow: 0 0 8px rgba(0, 212, 255, 0.5),
                        0 0 16px rgba(0, 212, 255, 0.3);
          }
          50% {
            box-shadow: 0 0 12px rgba(0, 212, 255, 0.7),
                        0 0 24px rgba(0, 212, 255, 0.5);
          }
          100% {
            box-shadow: 0 0 8px rgba(0, 212, 255, 0.5),
                        0 0 16px rgba(0, 212, 255, 0.3);
          }
        }
        @keyframes sweepGlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .service-fold {
          animation: foldIn 0.8s ease-out forwards;
          opacity: 0;
        }
        .service-card {
          transition: transform 0.4s ease, box-shadow 0.4s ease, border 0.4s ease;
          background: linear-gradient(135deg, #0d1b4c 0%, #081a3c 100%);
          background-size: 200% 200%;
          animation: sweepGlow 4s ease-in-out infinite;
          border: 1px solid rgba(0, 212, 255, 0.2);
          position: relative;
          overflow: hidden;
          transform-origin: left;
        }
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.4), transparent);
          transition: left 0.5s ease;
        }
        .service-card:hover::before {
          left: 100%;
        }
        .service-card:hover {
          transform: translateY(-12px) scale(1.05) rotateX(5deg) rotateY(5deg);
          box-shadow: 0 0 20px rgba(0, 212, 255, 0.9),
                      0 0 40px rgba(0, 212, 255, 0.6),
                      0 0 60px rgba(0, 212, 255, 0.4);
          animation: cardGlow 1.5s ease-in-out infinite;
          border: 1px solid rgba(0, 212, 255, 0.9);
        }
        .service-icon {
          transition: transform 0.3s ease, text-shadow 0.3s ease;
        }
        .service-card:hover .service-icon {
          animation: glowPulse 1.5s infinite;
          transform: scale(1.2);
          text-shadow: 0 0 12px #00d4ff,
                       0 0 24px #00d4ff,
                       0 0 36px #00d4ff;
        }
        @keyframes glowPulse {
          0% { transform: scale(1); text-shadow: 0 0 5px #00d4ff; }
          50% { transform: scale(1.2); text-shadow: 0 0 25px #00d4ff, 0 0 40px #00d4ff; }
          100% { transform: scale(1); text-shadow: 0 0 5px #00d4ff; }
        }
        @media (max-width: 768px) {
          .service-card {
            padding: 1rem;
          }
          .service-icon {
            font-size: 1.5rem;
          }
          .service-card h5 {
            font-size: 1.1rem;
          }
          .service-card p {
            font-size: 0.85rem;
          }
          .service-card:hover {
            box-shadow: 0 0 15px rgba(0, 212, 255, 0.7),
                        0 0 30px rgba(0, 212, 255, 0.4);
          }
        }
        @media (max-width: 576px) {
          .service-card {
            padding: 0.75rem;
          }
          .service-icon {
            font-size: 1.25rem;
          }
          .service-card h5 {
            font-size: 1rem;
          }
          .service-card p {
            font-size: 0.75rem;
          }
          .service-card:hover {
            box-shadow: 0 0 12px rgba(0, 212, 255, 0.6),
                        0 0 24px rgba(0, 212, 255, 0.3);
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;



