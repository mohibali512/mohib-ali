import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'animate.css'; // Assuming animate.css is installed for animations

const SkillsTechnologies = (skills) => {
  return (
    <section className="bg-dark text-light py-5" id="skills">
      <div className="container">
        <h1 className="text-center mb-3 animate__animated animate__fadeIn">Skills & Technologies</h1>
        <p className="text-center mb-5 animate__animated animate__fadeIn animate__delay-1s">
          A comprehensive overview of my technical expertise and proficiency levels across various technologies and frameworks.
        </p>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="bg-primary bg-opacity-10 p-4 rounded skill-card animate-slideRight" style={{ animationDelay: '0.2s' }}>
              <h4 className="mb-4">Frontend Technologies</h4>
              <div className="mb-3 skill-item">
                <div className="d-flex justify-content-between">
                  <span>React</span>
                  <span>4+ years</span>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-info" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="mb-3 skill-item">
                <div className="d-flex justify-content-between">
                  <span>TypeScript</span>
                  <span>3+ years</span>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-info" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="mb-3 skill-item">
                <div className="d-flex justify-content-between">
                  <span>Next.js</span>
                  <span>2+ years</span>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-info" role="progressbar" style={{ width: '40%' }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="mb-3 skill-item">
                <div className="d-flex justify-content-between">
                  <span>Vue.js</span>
                  <span>2+ years</span>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-info" role="progressbar" style={{ width: '40%' }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="mb-3 skill-item">
                <div className="d-flex justify-content-between">
                  <span>Tailwind CSS</span>
                  <span>3+ years</span>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-info" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="mb-3 skill-item">
                <div className="d-flex justify-content-between">
                  <span>SASS/SCSS</span>
                  <span>1+ years</span>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-info" role="progressbar" style={{ width: '20%' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="bg-primary bg-opacity-10 p-4 rounded skill-card animate-slideRight" style={{ animationDelay: '0.4s' }}>
              <h4 className="mb-4">Backend Technologies</h4>
              <div className="mb-3 skill-item">
                <div className="d-flex justify-content-between">
                  <span>Node.js</span>
                  <span>4+ years</span>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-info" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="mb-3 skill-item">
                <div className="d-flex justify-content-between">
                  <span>Python</span>
                  <span>3+ years</span>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-info" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="mb-3 skill-item">
                <div className="d-flex justify-content-between">
                  <span>Express.js</span>
                  <span>4+ years</span>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-info" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="mb-3 skill-item">
                <div className="d-flex justify-content-between">
                  <span>PostgreSQL</span>
                  <span>3+ years</span>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-info" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="mb-3 skill-item">
                <div className="d-flex justify-content-between">
                  <span>MongoDB</span>
                  <span>3+ years</span>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-info" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="mb-3 skill-item">
                <div className="d-flex justify-content-between">
                  <span>GraphQL</span>
                  <span>2+ years</span>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-info" role="progressbar" style={{ width: '40%' }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="bg-primary bg-opacity-10 p-4 rounded skill-card animate-slideRight" style={{ animationDelay: '0.6s' }}>
              <h4 className="mb-4">Infuencer & UI/UX Designer</h4>
              <div className="mb-3 skill-item">
                <div className="d-flex justify-content-between">
                  <span>Strong Personal Brand</span>
                  <span>3+ years</span>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-info" role="progressbar" style={{ width: '40%' }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="mb-3 skill-item">
                <div className="d-flex justify-content-between">
                  <span>Content Creation Skills</span>
                  <span>5+ years</span>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-info" role="progressbar" style={{ width: '40%' }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="mb-3 skill-item">
                <div className="d-flex justify-content-between">
                  <span>Collaboration Skills</span>
                  <span>5+ years</span>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-info" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="mb-3 skill-item">
                <div className="d-flex justify-content-between">
                  <span>Professionalism</span>
                  <span>2+ years</span>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-info" role="progressbar" style={{ width: '40%' }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="mb-3 skill-item">
                <div className="d-flex justify-content-between">
                  <span>Research Skills</span>
                  <span>4+ years</span>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-info" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="mb-3 skill-item">
                <div className="d-flex justify-content-between">
                  <span>Visual Design Skills</span>
                  <span>1+ years</span>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-info" role="progressbar" style={{ width: '20%' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h4 className="text-center mt-5 mb-4 animate__animated animate__fadeIn">Certifications & Achievements</h4>
        <div className="d-flex flex-wrap justify-content-center">
          <button className="btn btn-outline-info m-2 animate__animated animate__zoomIn animate__delay-1s">Web Developer Certified</button>
          <button className="btn btn-outline-info m-2 animate__animated animate__zoomIn animate__delay-1s">Flutter Developer Certified</button>
          <button className="btn btn-outline-info m-2 animate__animated animate__zoomIn animate__delay-1s">React Developer Certification</button>
          <button className="btn btn-outline-info m-2 animate__animated animate__zoomIn animate__delay-1s">InFluencer</button>
          <button className="btn btn-outline-info m-2 animate__animated animate__zoomIn animate__delay-1s">Mern Stack Developer Certified</button>
        </div>
        <style jsx>{`
          @keyframes slideRight {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .animate-slideRight {
            animation: slideRight 0.8s ease-out forwards;
            opacity: 0;
          }
          .skill-card {
            transition: transform 0.4s ease, box-shadow 0.4s ease;
            border: 1px solid rgba(13, 202, 240, 0.2);
            border-radius: 12px;
            position: relative;
            overflow: hidden;
          }
          .skill-card:hover {
            transform: translateY(-10px) scale(1.03);
            box-shadow: 0 0 25px rgba(0, 198, 255, 0.7),
                        0 0 50px rgba(13, 110, 253, 0.4);
          }
          .skill-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(13, 202, 240, 0.3), transparent);
            transition: left 0.5s ease;
          }
          .skill-card:hover::before {
            left: 100%;
          }
          .skill-item {
            transition: transform 0.3s ease;
          }
          .skill-item:hover {
            transform: translateX(5px);
          }
          .progress {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            overflow: hidden;
            height: 10px;
          }
          .progress-bar {
            position: relative;
            overflow: hidden;
            transition: box-shadow 0.3s ease;
            background: linear-gradient(90deg, #0dcaf0, #00b4d8);
          }
          .progress-bar::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(13, 202, 240, 0.7), transparent);
            animation: glow 1.5s infinite ease-in-out;
          }
          .skill-item:hover .progress-bar {
            box-shadow: 0 0 20px rgba(0, 198, 255, 0.9),
                        0 0 40px rgba(13, 110, 253, 0.6);
          }
          @keyframes glow {
            0% { left: -100%; }
            50% { left: 100%; }
            100% { left: 100%; }
          }
          .btn-outline-info {
            transition: all 0.3s ease;
            border-radius: 8px;
          }
          .btn-outline-info:hover {
            box-shadow: 0 0 15px rgba(0, 198, 255, 0.6);
            transform: scale(1.05);
            background: rgba(13, 202, 240, 0.1);
          }
          @media (max-width: 768px) {
            .skill-card {
              padding: 1.5rem;
            }
            .skill-card h4 {
              font-size: 1.25rem;
            }
            .progress {
              height: 8px;
            }
            .skill-item span {
              font-size: 0.9rem;
            }
          }
          @media (max-width: 576px) {
            .skill-card {
              padding: 1rem;
            }
            .skill-card h4 {
              font-size: 1.1rem;
            }
            .progress {
              height: 6px;
            }
            .skill-item span {
              font-size: 0.85rem;
            }
            .btn-outline-info {
              font-size: 0.8rem;
              padding: 0.5rem 1rem;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default SkillsTechnologies;