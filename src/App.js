import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactSection from './component/contact';
import SkillsTechnologies from './component/SkillsSecti';
import "@fortawesome/fontawesome-free/css/all.min.css";
import ServicesSection from './component/OurServices';
import Journey from './component/experience';
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import './App.css';

function AnimatedText({ text, startDelay = 0 }) {
  const words = text.split(' ');
  return words.map((word, index) => (
    <span
      key={`${word}-${index}`}
      className="animate-fadeInLeft d-inline-block me-2"
      style={{ animationDelay: `${startDelay + index * 0.15}s` }}
    >
      {word}
    </span>
  ));
}

function App() {
  const roles = [
    "React.js Frontend Developer",
    "UI/UX Designer",
    "Influencer"
  ];
  const [currentRole, setCurrentRole] = React.useState(0);
  const [isBlinking, setIsBlinking] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsBlinking(false);
      }, 400); // Blink duration
    }, 3000); // Role change interval
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      {/* Background Video */}
      <video
        src="/assets/background.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="bg-video"
      />

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow custom-navbar">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center fw-bold" href="#">
            <img
              src="/assets/portfolio.jpeg"
              alt="Profile"
              className="rounded-circle me-2 profile-logo"
            />
            Mohib Ali
          </a>
          <button
            className={`navbar-toggler border-0 ${menuOpen ? 'active' : ''}`}
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarNav"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <span className="toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse justify-content-end ${menuOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav text-center">
              <li className="nav-item">
                <a className="nav-link" href="#about">About Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Experience">Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero text-white text-center d-flex flex-column justify-content-center align-items-center py-5 mt-5">
        <h1 className="display-4 animate-fadeInDown fw-bold">
          <AnimatedText text="Hello, I'm" />
          <span className="text-info ms-2">
            <AnimatedText text="Mohib Ali" startDelay={0.3} />
          </span>
        </h1>
        <p className={`lead mt-3 ${isBlinking ? 'animate-blink' : ''}`}>
          <AnimatedText text={roles[currentRole]} startDelay={0.5} />
        </p>
        <a
          href="#contact"
          className="btn btn-info fw-bold px-4 py-2 mt-3 animate__animated animate__fadeIn hero-btn"
        >
          Get In Touch
        </a>
        <div className="d-flex justify-content-center gap-4 mt-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="bi bi-whatsapp"></i>
          </a>
        </div>
        <style jsx>{`
          @keyframes fadeInLeft {
            from { opacity: 0; transform: translateX(-15px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-15px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.2; }
          }
          .animate-fadeInLeft {
            animation: fadeInLeft 0.6s ease-out forwards;
            opacity: 0;
          }
          .animate-fadeInDown {
            animation: fadeInDown 0.8s ease-out forwards;
          }
          .animate-blink {
            animation: blink 0.4s ease-in-out;
          }
          .hero-btn {
            border-radius: 50px;
            transition: all 0.3s ease-in-out;
            box-shadow: 0 0 10px rgba(0, 198, 255, 0.6);
          }
          .hero-btn:hover {
            box-shadow: 0 0 20px rgba(0, 198, 255, 0.9),
                        0 0 40px rgba(13, 110, 253, 0.6);
            transform: translateY(-3px) scale(1.05);
          }
          .social-icon {
            color: #fff;
            font-size: 1.6rem;
            transition: all 0.3s ease-in-out;
            position: relative;
          }
          .social-icon:hover {
            color: #0dcaf0;
            text-shadow: 0 0 10px #0dcaf0, 0 0 20px #0dcaf0;
            transform: scale(1.2) rotate(5deg);
          }
          .social-icon i {
            display: inline-block;
            animation: pulseIcon 3s infinite ease-in-out;
          }
          @keyframes pulseIcon {
            0%, 100% { transform: scale(1); opacity: 0.9; }
            50% { transform: scale(1.15); opacity: 1; }
          }
          .profile-logo {
            width: 35px;
            height: 35px;
            object-fit: cover;
            border: 2px solid #0dcaf0;
            box-shadow: 0 0 10px rgba(13, 202, 240, 0.7);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .profile-logo:hover {
            transform: scale(1.1);
            box-shadow: 0 0 20px rgba(13, 202, 240, 1);
          }
          .custom-navbar {
            backdrop-filter: blur(10px);
            background: #2C2C2C !important;
          }
          .navbar-nav .nav-link {
            color: #fff !important;
            font-weight: 500;
            margin: 0 8px;
            position: relative;
            transition: all 0.3s ease;
          }
          .navbar-nav .nav-link:hover {
            color: #0dcaf0 !important;
            text-shadow: 0 0 8px #0dcaf0, 0 0 15px #0dcaf0;
          }
          .navbar-toggler {
            outline: none !important;
          }
          .toggler-icon {
            display: inline-block;
            width: 25px;
            height: 2px;
            background: #fff;
            position: relative;
            transition: all 0.3s ease;
          }
          .toggler-icon::before,
          .toggler-icon::after {
            content: "";
            position: absolute;
            width: 25px;
            height: 2px;
            background: #fff;
            left: 0;
            transition: all 0.3s ease;
          }
          .toggler-icon::before {
            top: -8px;
          }
          .toggler-icon::after {
            top: 8px;
          }
          .navbar-toggler.active .toggler-icon {
            background: transparent;
          }
          .navbar-toggler.active .toggler-icon::before {
            transform: rotate(45deg);
            top: 0;
          }
          .navbar-toggler.active .toggler-icon::after {
            transform: rotate(-45deg);
            top: 0;
          }
          @media (max-width: 768px) {
            .display-4 {
              font-size: 2.5rem;
            }
            .lead {
              font-size: 1.25rem;
            }
            .navbar-nav {
              padding: 1rem 0;
            }
            .navbar-nav .nav-link {
              padding: 0.5rem 1rem;
            }
          }
          @media (max-width: 576px) {
            .display-4 {
              font-size: 1.75rem;
            }
            .lead {
              font-size: 1rem;
            }
            .hero-btn {
              font-size: 0.9rem;
              padding: 0.5rem 1.5rem;
            }
            .social-icon {
              font-size: 1.4rem;
            }
          }
        `}</style>
      </header>

      <section className="about pb-5 text-light" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 mb-4 animate__animated animate__fadeInLeft">
              <h2 className="fw-bold mb-3 text-info">Problem solver &lt;coder&gt;</h2>
              <h5 className="text-light-50 mb-4">
                Frontend Developer with over 3 years of experience.
              </h5>
              <ul className="list-unstyled about-highlights">
                <li>
                  <i className="bi bi-check2-circle text-info me-2"></i>
                  <strong>Master of Science in IT.</strong> Graduated with a Master
                  of Information Systems & Technologies.
                </li>
                <li>
                  <i className="bi bi-check2-circle text-info me-2"></i>
                  <strong>Specializing in React & Next.js.</strong> Always learning
                  and following latest trends.
                </li>
                <li>
                  <i className="bi bi-check2-circle text-info me-2"></i>
                  <strong>Love working in team.</strong> I thrive in collaborative
                  environments, but also excel independently.
                </li>
              </ul>
            </div>
            <div className="col-lg-5 text-center animate__animated animate__fadeInRight">
              <div className="profile-wrapper">
                <img
                  src="/assets/portfolio.jpeg"
                  alt="Profile"
                  className="img-fluid rounded-circle shadow-lg profile-img"
                  style={{ width: "260px", height: "260px", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
          <div className="row text-center mt-5 g-4">
            <div className="col-6 col-md-3 about-item" style={{ animationDelay: '0.2s' }}>
              <div className="social-icon-wrapper">
                <i className="fab fa-js fa-2x text-warning mb-2"></i>
                <h6>JavaScript</h6>
                <p className="small text-primary">Strong JS knowledge</p>
              </div>
            </div>
            <div className="col-6 col-md-3 about-item" style={{ animationDelay: '0.4s' }}>
              <div className="social-icon-wrapper">
                <i className="fab fa-react fa-2x text-info mb-2"></i>
                <h6>React.js</h6>
                <p className="small text-primary">Building fast UIs</p>
              </div>
            </div>
            <div className="col-6 col-md-3 about-item" style={{ animationDelay: '0.6s' }}>
              <div className="social-icon-wrapper">
                <i className="fab fa-node-js fa-2x text-success mb-2"></i>
                <h6>Next.js</h6>
                <p className="small text-primary">SSR & Dynamic Routing</p>
              </div>
            </div>
            <div className="col-6 col-md-3 about-item" style={{ animationDelay: '0.8s' }}>
  <div className="social-icon-wrapper text-center">
    <i className="fas fa-server fa-2x text-success mb-2"></i>
    <h6>Express.js</h6>
    <p className="small text-primary">Single Page Apps</p>
  </div>
</div>
            <div className="col-6 col-md-3 about-item" style={{ animationDelay: '1.0s' }}>
              <div className="social-icon-wrapper">
                <i className="fas fa-database fa-2x text-success mb-2"></i>
                <h6>MongoDB</h6>
                <p className="small text-primary">Scalable Databases</p>
              </div>
            </div>
            <div className="col-6 col-md-3 about-item" style={{ animationDelay: '1.2s' }}>
              <div className="social-icon-wrapper">
                <i className="fab fa-git-alt fa-2x text-danger mb-2"></i>
                <h6>Git</h6>
                <p className="small text-primary">Version Control</p>
              </div>
            </div>
            <div className="col-6 col-md-3 about-item" style={{ animationDelay: '1.4s' }}>
              <div className="social-icon-wrapper">
                <i className="fab fa-bootstrap fa-2x text-purple mb-2"></i>
                <h6>Bootstrap</h6>
                <p className="small text-primary">Front-end Framework</p>
              </div>
            </div>
            <div className="col-6 col-md-3 about-item" style={{ animationDelay: '1.6s' }}>
  <div className="social-icon-wrapper text-center">
    <i className="fas fa-wind fa-2x text-info mb-2"></i>
    <h6>Tailwind CSS</h6>
    <p className="small text-primary">Utility-First CSS</p>
  </div>
</div>

          </div>
        </div>
        <style jsx>{`
          @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-20px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes cardGlow {
            0% { box-shadow: 0 0 8px rgba(0, 198, 255, 0.5), 0 0 16px rgba(13, 110, 253, 0.3); }
            50% { box-shadow: 0 0 12px rgba(0, 198, 255, 0.7), 0 0 24px rgba(13, 110, 253, 0.5); }
            100% { box-shadow: 0 0 8px rgba(0, 198, 255, 0.5), 0 0 16px rgba(13, 110, 253, 0.3); }
          }
          @keyframes sweepGlow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .about-item {
            opacity: 0;
            animation: slideInLeft 0.6s ease-out forwards;
          }
          .social-icon-wrapper {
            padding: 1rem;
            border-radius: 12px;
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(13, 202, 240, 0.1));
            background-size: 200% 200%;
            animation: sweepGlow 4s ease-in-out infinite;
            border: 1px solid rgba(13, 202, 240, 0.2);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            position: relative;
            overflow: hidden;
          }
          .social-icon-wrapper::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(0, 198, 255, 0.4), transparent);
            transition: left 0.5s ease;
          }
          .social-icon-wrapper:hover::before {
            left: 100%;
          }
          .social-icon-wrapper:hover {
            transform: scale(1.1) translateY(-5px);
            box-shadow: 0 0 20px rgba(0, 198, 255, 0.9),
                        0 0 40px rgba(13, 110, 253, 0.6);
            animation: cardGlow 1.5s ease-in-out infinite;
          }
          .social-icon-wrapper i {
            transition: transform 0.3s ease, text-shadow 0.3s ease;
          }
          .social-icon-wrapper:hover i {
            transform: scale(1.2);
            text-shadow: 0 0 12px currentColor;
          }
          .profile-wrapper {
            width: 280px;
            height: 280px;
            border-radius: 50%;
            padding: 10px;
            background: linear-gradient(135deg, #0d6efd, #00c6ff, #0d6efd);
            background-size: 200% 200%;
            animation: gradientFlow 5s ease-in-out infinite;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.5s ease, box-shadow 0.5s ease;
            position: relative;
            overflow: hidden;
          }
          .profile-wrapper::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(13, 202, 240, 0.3) 10%, transparent 40%);
            animation: pulseGlow 3s ease-in-out infinite;
          }
          .profile-wrapper:hover {
            transform: scale(1.05) rotate(3deg);
            box-shadow: 0 0 30px rgba(0, 198, 255, 0.8),
                        0 0 60px rgba(13, 110, 253, 0.5);
          }
          .profile-img {
            transition: transform 0.4s ease, box-shadow 0.4s ease;
          }
          .profile-wrapper:hover .profile-img {
            transform: scale(1.08);
            box-shadow: 0 0 20px rgba(0, 198, 255, 0.6);
          }
          .about-highlights li {
            margin-bottom: 12px;
            font-size: 1rem;
            line-height: 1.6;
            transition: transform 0.3s ease;
          }
          .about-highlights li:hover {
            transform: translateX(5px);
            color: #0dcaf0;
          }
          @keyframes gradientFlow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes pulseGlow {
            0% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.2); opacity: 0.4; }
            100% { transform: scale(1); opacity: 0.8; }
          }
          @media (max-width: 768px) {
            .profile-wrapper {
              width: 220px;
              height: 220px;
              padding: 8px;
            }
            .profile-img {
              width: 200px;
              height: 200px;
            }
            .social-icon-wrapper {
              padding: 0.75rem;
            }
            .social-icon-wrapper i {
              font-size: 1.5rem;
            }
            .social-icon-wrapper h6 {
              font-size: 0.9rem;
            }
            .social-icon-wrapper p {
              font-size: 0.75rem;
            }
            .social-icon-wrapper:hover {
              box-shadow: 0 0 15px rgba(0, 198, 255, 0.7),
                          0 0 30px rgba(13, 110, 253, 0.4);
            }
          }
          @media (max-width: 576px) {
            .profile-wrapper {
              width: 180px;
              height: 180px;
              padding: 6px;
            }
            .profile-img {
              width: 160px;
              height: 160px;
            }
            .social-icon-wrapper {
              padding: 0.5rem;
            }
            .social-icon-wrapper i {
              font-size: 1.25rem;
            }
            .social-icon-wrapper h6 {
              font-size: 0.8rem;
            }
            .social-icon-wrapper p {
              font-size: 0.65rem;
            }
            .social-icon-wrapper:hover {
              box-shadow: 0 0 12px rgba(0, 198, 255, 0.6),
                          0 0 24px rgba(13, 110, 253, 0.3);
            }
          }
        `}</style>
      </section>
<section id="Skills">
      <SkillsTechnologies id="skills" />
</section>
<section id="Experience">
<Journey  />

</section>
<section id="services">
<ServicesSection  />

</section>

      <section className="projects py-5 bg-dark" id="projects">
        <div className="container text-center">
          <h2 className="text-primary fw-bold mb-5 animate__animated animate__fadeInDown">
            Projects
          </h2>
          <div className="row g-4">
            <div className="col-md-4 col-sm-6 project-fold" style={{ animationDelay: '0.2s' }}>
              <div className="card shadow-lg border-0 h-100 project-card overflow-hidden">
                <div className="project-img">
                  <img
                    src="assets/portfoli.png"
                    className="card-img-top"
                    alt="Portfolio Website"
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold text-white mb-2">
                    Portfolio Website
                  </h5>
                  <p className="card-text text-white">
                    A modern personal portfolio built with React and Bootstrap to
                    showcase projects and skills.
                  </p>
                  <a href="#" className="btn btn-primary mt-auto project-btn">
                    View Project
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 project-fold" style={{ animationDelay: '0.4s' }}>
              <div className="card shadow-lg border-0 h-100 project-card overflow-hidden">
                <div className="project-img">
                  <img
                    src="assets/my project.png"
                    className="card-img-top"
                    alt="Task Manager App"
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold text-white mb-2">
                    Personal Paid Task
                  </h5>
                  <p className="card-text text-white">
                    A productivity app to manage tasks and goals with progress
                    tracking and reminders.
                  </p>
                  <a href="#" className="btn btn-primary mt-auto project-btn">
                    View Project
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 project-fold" style={{ animationDelay: '0.6s' }}>
              <div className="card shadow-lg border-0 h-100 project-card overflow-hidden">
                <div className="project-img">
                  <img
                    src="https://images.pexels.com/photos/3288104/pexels-photo-3288104.png"
                    className="card-img-top"
                    alt="Analytics Dashboard"
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold text-white mb-2">
                    Final year project
                  </h5>
                  <p className="card-text text-white">
                    A responsive dashboard with charts and data visualization
                    built using React & Chart.js.
                  </p>
                  <a href="#" className="btn btn-primary mt-auto project-btn">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          @keyframes foldIn {
            0% {
              opacity: 0;
              transform: rotateY(-90deg) translateY(20px) scale(0.8);
            }
            60% {
              opacity: 0.7;
              transform: rotateY(10deg) translateY(0) scale(1.05);
            }
            100% {
              opacity: 1;
              transform: rotateY(0deg) translateY(0) scale(1);
            }
          }
          @keyframes cardGlow {
            0% {
              box-shadow: 0 0 8px rgba(0, 123, 255, 0.5),
                          0 0 16px rgba(0, 123, 255, 0.3);
            }
            50% {
              box-shadow: 0 0 12px rgba(0, 123, 255, 0.7),
                          0 0 24px rgba(0, 123, 255, 0.5);
            }
            100% {
              box-shadow: 0 0 8px rgba(0, 123, 255, 0.5),
                          0 0 16px rgba(0, 123, 255, 0.3);
            }
          }
          @keyframes sweepGlow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes buttonGlow {
            0% { box-shadow: 0 0 8px rgba(0, 123, 255, 0.6); }
            50% { box-shadow: 0 0 12px rgba(0, 123, 255, 0.9); }
            100% { box-shadow: 0 0 8px rgba(0, 123, 255, 0.6); }
          }
          .project-fold {
            animation: foldIn 0.8s ease-out forwards;
            opacity: 0;
            perspective: 1000px;
          }
          .project-card {
            border-radius: 1rem;
            background: linear-gradient(135deg, #3A374FFF, #00344d);
            background-size: 200% 200%;
            animation: sweepGlow 4s ease-in-out infinite;
            border: 1px solid rgba(0, 110, 230, 0.2);
            transition: transform 0.4s ease, box-shadow 0.4s ease, border 0.4s ease;
            position: relative;
            overflow: hidden;
            transform-origin: left;
          }
          .project-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(0, 123, 255, 0.4), transparent);
            transition: left 0.5s ease;
          }
          .project-card:hover::before {
            left: 100%;
          }
          .project-card:hover {
            transform: translateY(-10px) scale(1.03) rotateX(5deg) rotateY(5deg);
            box-shadow: 0 0 20px rgba(0, 123, 255, 0.9),
                        0 0 40px rgba(0, 123, 255, 0.6),
                        0 0 60px rgba(0, 123, 255, 0.4);
            animation: cardGlow 1.5s ease-in-out infinite;
            border: 1px solid rgba(0, 123, 255, 0.9);
          }
          .project-img {
            overflow: hidden;
            border-top-left-radius: 1rem;
            border-top-right-radius: 1rem;
            position: relative;
          }
          .project-img img {
            transition: transform 0.5s ease;
          }
          .project-card:hover .project-img img {
            transform: scale(1.1) rotate(1deg);
          }
          .project-btn {
            transition: all 0.3s ease-in-out;
            border-radius: 50px;
            background: linear-gradient(90deg, #0d6efd, #00c6ff, #0d6efd);
            background-size: 200% 200%;
            position: relative;
            overflow: hidden;
          }
          .project-btn:hover {
            box-shadow: 0 0 15px rgba(0, 123, 255, 0.8),
                        0 0 25px rgba(0, 123, 255, 0.6);
            transform: scale(1.05);
            animation: buttonGlow 1.5s ease-in-out infinite;
          }
          .project-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(0, 123, 255, 0.4), transparent);
            transition: left 0.5s ease;
          }
          .project-btn:hover::before {
            left: 100%;
          }
          @media (max-width: 768px) {
            .project-card {
              padding: 0.75rem;
            }
            .project-card:hover {
              box-shadow: 0 0 15px rgba(0, 123, 255, 0.7),
                          0 0 30px rgba(0, 123, 255, 0.4);
            }
            .project-btn {
              font-size: 0.9rem;
              padding: 0.5rem 1.5rem;
            }
            .project-btn:hover {
              box-shadow: 0 0 10px rgba(0, 123, 255, 0.7),
                          0 0 20px rgba(0, 123, 255, 0.4);
            }
          }
          @media (max-width: 576px) {
            .project-card {
              padding: 0.5rem;
            }
            .project-card:hover {
              box-shadow: 0 0 12px rgba(0, 123, 255, 0.6),
                          0 0 24px rgba(0, 123, 255, 0.3);
            }
            .project-btn {
              font-size: 0.8rem;
              padding: 0.4rem 1.2rem;
            }
            .project-btn:hover {
              box-shadow: 0 0 8px rgba(0, 123, 255, 0.6),
                          0 0 16px rgba(0, 123, 255, 0.3);
            }
          }
        `}</style>
      </section>
      <ContactSection />

      <footer className="bg-dark text-white pt-4">
        <div className="container text-center">
          <h5 className="fw-bold mb-3">Mohib Ali</h5>
          <p className="small text-muted">
            Passionate React Developer | UI/UX Enthusiast | Frontend Lover
          </p>
          <div className="d-flex justify-content-center gap-3 my-3 fs-5">
            <a href="#" className="text-white social-icon"><FaFacebookF /></a>
            <a href="#" className="text-white social-icon"><FaTwitter /></a>
            <a href="#" className="text-white social-icon"><FaInstagram /></a>
            <a href="#" className="text-white social-icon"><FaGithub /></a>
            <a href="#" className="text-white social-icon"><FaLinkedinIn /></a>
          </div>
          <div className="col-md-50 mb-4">
            <div className="p-3 working-hours">
              <i className="fas fa-clock fa-2x mb-3 text-info"></i>
              <h4 className="fw-bold">Working Hours</h4>
              <p>Monday to Saturday</p>
              <p>09:00 AM to 06:00 PM</p>
            </div>
          </div>
          <ul className="nav justify-content-center mb-3">
            <li className="nav-item">
              <a className="nav-link text-white footer-link px-2" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white footer-link px-2" href="#">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white footer-link px-2" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white footer-link px-2" href="#">Contact</a>
            </li>
          </ul>
          <style jsx>{`
            .social-icon {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 45px;
              height: 45px;
              border-radius: 50%;
              background: rgba(255, 255, 255, 0.08);
              transition: all 0.4s ease;
              box-shadow: 0 0 6px rgba(13, 202, 240, 0.4);
            }
            .social-icon:hover {
              color: #0dcaf0;
              background: rgba(13, 202, 240, 0.15);
              box-shadow: 0 0 12px #0dcaf0, 0 0 28px #0dcaf0;
              transform: translateY(-4px);
            }
            .working-hours {
              background: rgba(255, 255, 255, 0.05);
              border: 1px solid rgba(255, 255, 255, 0.1);
              border-radius: 12px;
              transition: all 0.3s ease;
            }
            .working-hours:hover {
              box-shadow: 0 0 15px rgba(13, 202, 240, 0.7);
              transform: scale(1.05);
            }
            .footer-link {
              position: relative;
              transition: all 0.3s ease;
            }
            .footer-link:hover {
              color: #0dcaf0 !important;
              text-shadow: 0 0 6px #0dcaf0;
            }
            .footer-link::after {
              content: '';
              display: block;
              width: 0;
              height: 2px;
              background: #0dcaf0;
              transition: width 0.3s ease;
              margin-top: 4px;
              border-radius: 2px;
            }
            .footer-link:hover::after {
              width: 100%;
            }
          `}</style>
          <p className="small text-secondary mb-0 pb-3">
            © 2025 <span className="text-info">Mohib Ali</span>. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
