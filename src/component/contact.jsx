import React from 'react';

const ContactSection = () => {
  return (
    <section className="contact py-5 bg-light" id="contact">
      <div className="container text-center">
        <h2 className="text-primary fw-bold mb-4 animate__animated animate__fadeInUp">Get In Touch With Us Now!</h2>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="p-3 contact-icon-wrapper">
              <i className="fas fa-phone fa-2x mb-3 text-primary contact-icon"></i>
              <h4>Phone Number</h4>
              <p>+91 80004 38640</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="p-3 contact-icon-wrapper">
              <i className="fas fa-envelope fa-2x mb-3 text-primary contact-icon"></i>
              <h4>Email</h4>
              <p><a href="mailto:mohibali6650514@gmail.com">mohibali6650514@gmail.com</a></p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="p-3 contact-icon-wrapper">
              <i className="fas fa-map-marker-alt fa-2x mb-3 text-primary contact-icon"></i>
              <h4>Location</h4>
              <p>51B, Rhythm Plaza, Amar Jawan Circle, Nikol, Ahmedabad, Gujarat - 382350</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="card p-4 shadow-sm contact-form-card">
              <h3 className="text-primary mb-4">Contact Us</h3>
              <form>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <input type="text" className="form-control mb-2" placeholder="First Name *" required />
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="form-control mb-2" placeholder="Last Name" />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <input type="tel" className="form-control mb-2" placeholder="Mobile No *" required />
                  </div>
                  <div className="col-md-6">
                    <input type="email" className="form-control mb-2" placeholder="Email ID *" required />
                  </div>
                </div>
                <div className="mb-3">
                  <textarea className="form-control mb-2" rows="3" placeholder="Message" required></textarea>
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control mb-2" placeholder="Please type the characters *" required />
                  <small className="text-muted">This helps us prevent spam, thank you.</small>
                </div>
                <button type="submit" className="btn btn-primary contact-submit-btn">Submit <i className="fas fa-arrow-right"></i></button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes iconGlow {
          0% { text-shadow: 0 0 5px rgba(0, 123, 255, 0.5); transform: scale(1); }
          50% { text-shadow: 0 0 15px rgba(0, 123, 255, 0.8), 0 0 25px rgba(0, 123, 255, 0.5); transform: scale(1.1); }
          100% { text-shadow: 0 0 5px rgba(0, 123, 255, 0.5); transform: scale(1); }
        }
        @keyframes cardBorderGlow {
          0% { border-color: rgba(0, 123, 255, 0.3); box-shadow: 0 0 10px rgba(0, 123, 255, 0.3); }
          50% { border-color: rgba(0, 123, 255, 0.8); box-shadow: 0 0 20px rgba(0, 123, 255, 0.6); }
          100% { border-color: rgba(0, 123, 255, 0.3); box-shadow: 0 0 10px rgba(0, 123, 255, 0.3); }
        }
        @keyframes buttonSweep {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .contact-icon-wrapper {
          position: relative;
          transition: transform 0.3s ease;
        }
        .contact-icon-wrapper:hover {
          transform: translateY(-5px);
        }
        .contact-icon {
          animation: iconGlow 2s ease-in-out infinite;
          transition: transform 0.3s ease, text-shadow 0.3s ease;
        }
        .contact-icon-wrapper:hover .contact-icon {
          transform: scale(1.2) rotate(5deg);
          text-shadow: 0 0 15px rgba(0, 123, 255, 1),
                       0 0 30px rgba(0, 123, 255, 0.7),
                       0 0 45px rgba(0, 123, 255, 0.5);
        }
        .contact-form-card {
          border: 1px solid rgba(0, 123, 255, 0.3);
          animation: cardBorderGlow 2.5s ease-in-out infinite;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
        }
        .contact-form-card:hover {
          transform: scale(1.02);
          border-color: rgba(0, 123, 255, 0.9);
          box-shadow: 0 0 25px rgba(0, 123, 255, 0.8),
                      0 0 50px rgba(0, 123, 255, 0.5);
        }
        .contact-submit-btn {
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background: linear-gradient(90deg, #0d6efd, #00c6ff, #0d6efd);
          background-size: 200% 200%;
        }
        .contact-submit-btn:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 0 15px rgba(0, 123, 255, 0.9),
                      0 0 30px rgba(0, 123, 255, 0.6);
          animation: buttonSweep 3s ease-in-out infinite;
        }
        .contact-submit-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 123, 255, 0.4), transparent);
          transition: left 0.5s ease;
        }
        .contact-submit-btn:hover::before {
          left: 100%;
        }
        @media (max-width: 768px) {
          .contact-icon {
            font-size: 1.5rem;
          }
          .contact-icon-wrapper:hover .contact-icon {
            text-shadow: 0 0 10px rgba(0, 123, 255, 0.8),
                         0 0 20px rgba(0, 123, 255, 0.5);
          }
          .contact-form-card {
            padding: 1rem;
          }
          .contact-form-card:hover {
            box-shadow: 0 0 15px rgba(0, 123, 255, 0.7),
                        0 0 30px rgba(0, 123, 255, 0.4);
          }
          .contact-submit-btn {
            font-size: 0.9rem;
            padding: 0.5rem 1.5rem;
          }
          .contact-submit-btn:hover {
            box-shadow: 0 0 10px rgba(0, 123, 255, 0.7),
                        0 0 20px rgba(0, 123, 255, 0.4);
          }
        }
        @media (max-width: 576px) {
          .contact-icon {
            font-size: 1.25rem;
          }
          .contact-icon-wrapper:hover .contact-icon {
            text-shadow: 0 0 8px rgba(0, 123, 255, 0.7),
                         0 0 16px rgba(0, 123, 255, 0.4);
          }
          .contact-form-card {
            padding: 0.75rem;
          }
          .contact-form-card:hover {
            box-shadow: 0 0 12px rgba(0, 123, 255, 0.6),
                        0 0 24px rgba(0, 123, 255, 0.3);
          }
          .contact-submit-btn {
            font-size: 0.8rem;
            padding: 0.4rem 1.2rem;
          }
          .contact-submit-btn:hover {
            box-shadow: 0 0 8px rgba(0, 123, 255, 0.6),
                        0 0 16px rgba(0, 123, 255, 0.3);
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;