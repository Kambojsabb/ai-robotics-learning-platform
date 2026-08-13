import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const [activeNode, setActiveNode] = useState("AI");

  const nodes = [
    {
      id: "AI",
      icon: "🧠",
      title: "AI WORLD",
      text: "Artificial Intelligence & Machine Learning",
      position: "ai",
    },
    {
      id: "ROBOTICS",
      icon: "🤖",
      title: "ROBOTICS",
      text: "Build, control and program robots",
      position: "robotics",
    },
    {
      id: "LEARNING",
      icon: "📚",
      title: "LEARNING",
      text: "Videos, resources and study materials",
      position: "learning",
    },
    {
      id: "CIRCUITS",
      icon: "⚡",
      title: "CIRCUITS",
      text: "Electronics and circuit technology",
      position: "circuits",
    },
    {
      id: "DIGITAL",
      icon: "💻",
      title: "DIGITAL WORLD",
      text: "Coding, programming and digital skills",
      position: "digital",
    },
    {
      id: "TEST",
      icon: "🧪",
      title: "TEST & QUIZ",
      text: "Test your knowledge and progress",
      position: "test",
    },
  ];

  return (
    <div className="robot-home">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="space-bg">
        <div className="stars stars-one" />
        <div className="stars stars-two" />

        <div className="bg-glow glow-cyan" />
        <div className="bg-glow glow-purple" />

        <div className="tech-grid" />
      </div>

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="robot-navbar">

        <Link to="/" className="robot-logo">
          <div className="logo-robot">
            🤖
          </div>

          <div>
            <div className="logo-title">
              IMATRIX EDUVERSITY
            </div>

            <div className="logo-subtitle">
              AI/ROBOTICS
            </div>
          </div>
        </Link>

        <nav className="robot-nav">

  <a href="#home" className="nav-tech nav-home nav-active">
    <span className="nav-text">HOME</span>
    <span className="nav-texture" />
  </a>

  <a href="#technology" className="nav-tech nav-technology">
    <span className="nav-text">TECHNOLOGY</span>
    <span className="nav-texture" />
  </a>

  <a href="#learning" className="nav-tech nav-learning">
    <span className="nav-text">LEARNING</span>
    <span className="nav-texture" />
  </a>

  <a href="#future" className="nav-tech nav-future">
    <span className="nav-text">FUTURE</span>
    <span className="nav-texture" />
  </a>

</nav>

        <Link to="/login" className="login-button">
          <span className="login-scan" />
          LOGIN / SIGN IN
        </Link>

      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <main id="home" className="robot-hero">

        <div className="hero-heading">

          <div className="system-status">
            <span className="status-dot" />
            AI SYSTEM ONLINE
          </div>

          <h1>
            EMPOWERING MINDS
            <span>BUILDING THE FUTURE</span>
          </h1>

          <p>
            AI <b>•</b> Robotics <b>•</b> Circuits <b>•</b> Digital World
          </p>

        </div>

        {/* =================================================
            ROBOT INTERFACE
        ================================================= */}

        <section className="robot-interface">

          {/* Connection SVG */}

          <svg
            className="connection-lines"
            viewBox="0 0 1200 700"
            preserveAspectRatio="none"
          >

            <Connection
              active={activeNode === "AI"}
              d="M600 360 C500 290 400 210 180 170"
            />

            <Connection
              active={activeNode === "ROBOTICS"}
              d="M570 400 C470 400 350 400 170 370"
            />

            <Connection
              active={activeNode === "LEARNING"}
              d="M560 450 C450 510 350 570 190 560"
            />

            <Connection
              active={activeNode === "CIRCUITS"}
              d="M600 360 C700 290 800 210 1020 170"
            />

            <Connection
              active={activeNode === "DIGITAL"}
              d="M630 400 C740 400 850 400 1030 370"
            />

            <Connection
              active={activeNode === "TEST"}
              d="M640 450 C750 510 850 570 1010 560"
            />

          </svg>

          {/* =================================================
              LEFT NODES
          ================================================= */}

          <Node
            data={nodes[0]}
            active={activeNode === "AI"}
            onHover={() => setActiveNode("AI")}
          />

          <Node
            data={nodes[1]}
            active={activeNode === "ROBOTICS"}
            onHover={() => setActiveNode("ROBOTICS")}
          />

          <Node
            data={nodes[2]}
            active={activeNode === "LEARNING"}
            onHover={() => setActiveNode("LEARNING")}
          />

          {/* =================================================
              RIGHT NODES
          ================================================= */}

          <Node
            data={nodes[3]}
            active={activeNode === "CIRCUITS"}
            onHover={() => setActiveNode("CIRCUITS")}
          />

          <Node
            data={nodes[4]}
            active={activeNode === "DIGITAL"}
            onHover={() => setActiveNode("DIGITAL")}
          />

          <Node
            data={nodes[5]}
            active={activeNode === "TEST"}
            onHover={() => setActiveNode("TEST")}
          />

          {/* =================================================
              CENTRAL ROBOT
          ================================================= */}

          <div className={`robot-core ${activeNode !== "AI" ? "reacting" : ""}`}>

            {/* Robot antenna */}
            <div className="robot-antenna">
              <span />
            </div>

            {/* Head */}
            <div className="robot-head">

              <div className="robot-ear left-ear" />
              <div className="robot-ear right-ear" />

              <div className="robot-face">

                <div className="robot-eyes">
                  <span />
                  <span />
                </div>

                <div className="robot-mouth" />

              </div>

            </div>

            {/* Neck */}
            <div className="robot-neck">
              <span />
              <span />
              <span />
            </div>

            {/* Body */}
            <div className="robot-body">

              {/* shoulders */}
              <div className="robot-shoulder left-shoulder" />
              <div className="robot-shoulder right-shoulder" />

              {/* Chest */}
              <div className="robot-chest">

                <div className="ai-core">

                  <div className="core-ring ring-one" />
                  <div className="core-ring ring-two" />

                  <div className="core-text">
                    <strong>AI</strong>
                    <span>CORE</span>
                  </div>

                </div>

                <div className="chest-circuit circuit-one" />
                <div className="chest-circuit circuit-two" />

              </div>

            </div>

            {/* Left arm */}
            <div className="robot-arm left-arm">
              <div className="arm-upper" />
              <div className="arm-lower" />
              <div className="robot-hand">
                <span />
                <span />
                <span />
              </div>
            </div>

            {/* Right arm */}
            <div className="robot-arm right-arm">
              <div className="arm-upper" />
              <div className="arm-lower" />
              <div className="robot-hand">
                <span />
                <span />
                <span />
              </div>
            </div>

            {/* Robot platform */}
            <div className="robot-platform">

              <div className="platform-ring ring-a" />
              <div className="platform-ring ring-b" />
              <div className="platform-ring ring-c" />

              <div className="platform-light" />

            </div>

          </div>

          {/* Floating particles */}

          <div className="particle particle-1" />
          <div className="particle particle-2" />
          <div className="particle particle-3" />
          <div className="particle particle-4" />
          <div className="particle particle-5" />
          <div className="particle particle-6" />

        </section>

        {/* =================================================
            BOTTOM CTA
        ================================================= */}

        <div className="hero-cta">

          <Link to="/login" className="revolution-button">
            <span className="button-glow" />
            JOIN THE AI REVOLUTION
          </Link>

          <div className="cta-subtitle">
            LEARN&nbsp;&nbsp; • &nbsp;&nbsp;INNOVATE&nbsp;&nbsp; • &nbsp;&nbsp;CREATE
          </div>

        </div>

      </main>

      {/* =====================================================
          TECHNOLOGY SECTION
      ===================================================== */}

      <section id="technology" className="technology-section">

        <div className="section-label">
          TECHNOLOGY
        </div>

        <h2>
          EXPLORE THE
          <span> DIGITAL WORLD</span>
        </h2>

        <p>
          Discover the technologies behind intelligent machines,
          connected systems and tomorrow's innovation.
        </p>

        <div className="technology-cards">

          <TechCard icon="🧠" title="Artificial Intelligence" />
          <TechCard icon="🤖" title="Robotics" />
          <TechCard icon="⚡" title="Electronics" />
          <TechCard icon="💻" title="Programming" />

        </div>

      </section>

      {/* =====================================================
          LEARNING SECTION
      ===================================================== */}

      <section id="learning" className="learning-section">

        <div className="section-label">
          LEARNING COMMAND CENTER
        </div>

        <h2>
          LEARN.
          <span> BUILD.</span>
          <br />
          INNOVATE.
        </h2>

        <p>
          Enter the learning system and explore AI, robotics,
          electronics, programming and practical technology.
        </p>

        <Link to="/login" className="learning-button">
          ENTER LEARNING PLATFORM →
        </Link>

      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="robot-footer">

        <div>
          © 2026 AI & Robotics Learning Platform
        </div>

        <div>
          AI • ROBOTICS • ELECTRONICS • DIGITAL TECHNOLOGY
        </div>

      </footer>

      {/* =====================================================
          PAGE CSS
      ===================================================== */}

      <style>{`

        /* ================================================
           GLOBAL
        ================================================ */

        /* =========================================================
   GLOBAL FUTURISTIC TECH BACKGROUND
   ========================================================= */

.home-page {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background:
    radial-gradient(
      circle at 50% 45%,
      rgba(34, 211, 238, 0.08),
      transparent 35%
    ),
    radial-gradient(
      circle at 15% 20%,
      rgba(99, 102, 241, 0.08),
      transparent 30%
    ),
    #020617;
}


/* Technical grid */

.home-page::before {
  content: "";
  position: absolute;
  inset: 0;

  background-image:
    linear-gradient(
      rgba(34, 211, 238, 0.035) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(34, 211, 238, 0.035) 1px,
      transparent 1px
    );

  background-size: 45px 45px;

  animation: globalGridMove 20s linear infinite;

  pointer-events: none;
}


@keyframes globalGridMove {
  from {
    background-position: 0 0;
  }

  to {
    background-position: 45px 45px;
  }
}


/* Floating glow */

.home-page::after {
  content: "";

  position: absolute;

  width: 500px;
  height: 500px;

  left: 50%;
  top: 45%;

  transform: translate(-50%, -50%);

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(34, 211, 238, 0.08),
      transparent 65%
    );

  filter: blur(30px);

  pointer-events: none;

  animation: centralGlow 5s ease-in-out infinite;
}


@keyframes centralGlow {
  0%,
  100% {
    opacity: .5;
    transform: translate(-50%, -50%) scale(.9);
  }

  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.15);
  }
}


/* =========================================================
   ROBOT NAVIGATION
   ========================================================= */

.robot-nav {
  position: relative;

  z-index: 20;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 12px;

  padding: 20px;
}


/* =========================================================
   NAV BUTTON
   ========================================================= */

.nav-tech {
  position: relative;

  width: 125px;
  height: 52px;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  text-decoration: none;

  border: 1px solid rgba(34, 211, 238, .16);

  background:
    linear-gradient(
      135deg,
      rgba(15, 23, 42, .85),
      rgba(2, 6, 23, .75)
    );

  backdrop-filter: blur(12px);

  clip-path: polygon(
    8px 0,
    calc(100% - 8px) 0,
    100% 8px,
    100% calc(100% - 8px),
    calc(100% - 8px) 100%,
    8px 100%,
    0 calc(100% - 8px),
    0 8px
  );

  transition:
    transform .35s ease,
    box-shadow .35s ease,
    border-color .35s ease;
}


/* hover lift */

.nav-tech:hover {
  transform: translateY(-6px) scale(1.03);

  border-color: rgba(34, 211, 238, .6);

  box-shadow:
    0 0 15px rgba(34, 211, 238, .2),
    0 0 45px rgba(34, 211, 238, .08),
    inset 0 0 25px rgba(34, 211, 238, .04);
}


/* =========================================================
   BUTTON TEXT
   ========================================================= */

.nav-text {
  position: relative;

  z-index: 10;

  color: #94a3b8;

  font-size: 11px;

  font-weight: 800;

  letter-spacing: 2px;

  transition: .3s;
}


.nav-tech:hover .nav-text {
  color: #67e8f9;

  text-shadow:
    0 0 8px rgba(34, 211, 238, .8),
    0 0 20px rgba(34, 211, 238, .5);
}


/* =========================================================
   TECH TEXTURE
   ========================================================= */

.nav-texture {
  position: absolute;

  inset: 0;

  opacity: .4;

  pointer-events: none;
}


/* =========================================================
   HOME — NEURAL NETWORK
   ========================================================= */

.nav-home .nav-texture {
  background-image:
    radial-gradient(
      circle at 20% 25%,
      rgba(34, 211, 238, .7) 0 2px,
      transparent 3px
    ),
    radial-gradient(
      circle at 75% 30%,
      rgba(34, 211, 238, .7) 0 2px,
      transparent 3px
    ),
    radial-gradient(
      circle at 45% 75%,
      rgba(34, 211, 238, .7) 0 2px,
      transparent 3px
    ),
    linear-gradient(
      30deg,
      transparent 48%,
      rgba(34, 211, 238, .15) 49%,
      transparent 51%
    );

  background-size:
    45px 45px,
    55px 55px,
    50px 50px,
    30px 30px;

  animation: neuralMove 8s linear infinite;
}


@keyframes neuralMove {
  from {
    background-position: 0 0;
  }

  to {
    background-position: 60px 40px;
  }
}


/* =========================================================
   TECHNOLOGY — CIRCUIT BOARD
   ========================================================= */

.nav-technology .nav-texture {
  background-image:
    linear-gradient(
      90deg,
      transparent 46%,
      rgba(34, 211, 238, .35) 47%,
      rgba(34, 211, 238, .35) 49%,
      transparent 50%
    ),
    linear-gradient(
      0deg,
      transparent 46%,
      rgba(34, 211, 238, .35) 47%,
      rgba(34, 211, 238, .35) 49%,
      transparent 50%
    ),
    radial-gradient(
      circle,
      rgba(34, 211, 238, .7) 0 2px,
      transparent 3px
    );

  background-size:
    26px 26px,
    26px 26px,
    26px 26px;

  animation: circuitMove 5s linear infinite;
}


@keyframes circuitMove {
  from {
    background-position: 0 0;
  }

  to {
    background-position: 26px 26px;
  }
}


/* =========================================================
   LEARNING — DIGITAL DATA
   ========================================================= */

.nav-learning .nav-texture {
  background-image:
    repeating-linear-gradient(
      90deg,
      transparent 0,
      transparent 7px,
      rgba(139, 92, 246, .18) 8px,
      transparent 9px
    );

  animation: dataStream 3s linear infinite;
}


@keyframes dataStream {
  from {
    background-position: 0 0;
  }

  to {
    background-position: 40px 0;
  }
}


/* =========================================================
   FUTURE — DIGITAL WORLD
   ========================================================= */

.nav-future .nav-texture {
  background-image:
    linear-gradient(
      rgba(34, 211, 238, .18) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(34, 211, 238, .18) 1px,
      transparent 1px
    );

  background-size: 14px 14px;

  transform: perspective(80px) rotateX(20deg);

  animation: futureGrid 5s linear infinite;
}


@keyframes futureGrid {
  from {
    background-position: 0 0;
  }

  to {
    background-position: 28px 28px;
  }
}


/* =========================================================
   SCANNING EFFECT
   ========================================================= */

.nav-tech::after {
  content: "";

  position: absolute;

  left: 0;
  right: 0;

  height: 1px;

  top: -2px;

  background: #22d3ee;

  box-shadow:
    0 0 8px #22d3ee,
    0 0 20px #22d3ee;

  opacity: 0;

  pointer-events: none;
}


.nav-tech:hover::after {
  opacity: 1;

  animation: scanButton 1.5s linear infinite;
}


@keyframes scanButton {
  from {
    top: 0;
  }

  to {
    top: 100%;
  }
}


/* =========================================================
   CIRCUIT CORNERS
   ========================================================= */

.nav-tech::before {
  content: "";

  position: absolute;

  inset: 5px;

  border-top: 1px solid rgba(34, 211, 238, .12);
  border-left: 1px solid rgba(34, 211, 238, .12);

  pointer-events: none;
}


.nav-tech:hover::before {
  border-color: rgba(34, 211, 238, .5);

  box-shadow:
    -3px -3px 8px rgba(34, 211, 238, .1);
}


/* =========================================================
   ROBOT CONNECTION LINES
   ========================================================= */

.robot-nav::before {
  content: "";

  position: absolute;

  left: 10%;
  right: 10%;

  top: 50%;

  height: 1px;

  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(34, 211, 238, .15),
      rgba(34, 211, 238, .4),
      rgba(34, 211, 238, .15),
      transparent
    );

  z-index: -1;
}


/* =========================================================
   FLOATING PARTICLES
   ========================================================= */

.robot-nav::after {
  content: "•   ·      •        ·   •       ·";

  position: absolute;

  inset: -40px 0;

  color: rgba(34, 211, 238, .35);

  font-size: 12px;

  letter-spacing: 20px;

  pointer-events: none;

  animation: particlesFloat 7s linear infinite;
}


@keyframes particlesFloat {
  from {
    transform: translateY(25px);
    opacity: .2;
  }

  50% {
    opacity: .8;
  }

  to {
    transform: translateY(-25px);
    opacity: .2;
  }
}


/* =========================================================
   ACTIVE BUTTON
   ========================================================= */

.nav-active {
  border-color: rgba(34, 211, 238, .55);

  box-shadow:
    0 0 15px rgba(34, 211, 238, .15),
    inset 0 0 20px rgba(34, 211, 238, .04);
}


.nav-active .nav-text {
  color: #67e8f9;

  text-shadow:
    0 0 10px rgba(34, 211, 238, .8);
}


/* =========================================================
   MOBILE
   ========================================================= */

@media (max-width: 768px) {

  .robot-nav {
    gap: 6px;

    flex-wrap: wrap;
  }

  .nav-tech {
    width: 105px;
    height: 45px;
  }

  .nav-text {
    font-size: 9px;
    letter-spacing: 1.5px;
  }

}

        .robot-home {
          min-height: 100vh;
          overflow-x: hidden;
          position: relative;
          background:
            radial-gradient(circle at 50% 35%, #071a35 0%, #030712 45%, #01030a 100%);
          color: white;
          font-family: Inter, system-ui, sans-serif;
        }

        .space-bg {
          position: fixed;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
          z-index: 0;
        }

        .tech-grid {
          position: absolute;
          inset: 0;
          opacity: .22;

          background-image:
            linear-gradient(rgba(0,220,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,220,255,.08) 1px, transparent 1px);

          background-size: 45px 45px;

          mask-image: linear-gradient(
            to bottom,
            black,
            transparent 90%
          );
        }

        .bg-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          filter: blur(130px);
          opacity: .13;
        }

        .glow-cyan {
          background: #00d9ff;
          top: 5%;
          left: 20%;
        }

        .glow-purple {
          background: #7c3aed;
          top: 30%;
          right: 10%;
        }

        /* ================================================
           STARS
        ================================================ */

        .stars {
          position: absolute;
          inset: 0;

          background-image:
            radial-gradient(circle, rgba(255,255,255,.8) 1px, transparent 1px);

          background-size: 120px 120px;
          opacity: .2;
        }

        .stars-two {
          background-size: 190px 190px;
          opacity: .1;
          animation: starMove 25s linear infinite;
        }

        @keyframes starMove {
          from {
            transform: translateY(0);
          }

          to {
            transform: translateY(-190px);
          }
        }

        /* ================================================
           NAVBAR
        ================================================ */

        .robot-navbar {
          position: relative;
          z-index: 50;

          height: 86px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          padding: 0 4vw;

          border-bottom: 1px solid rgba(0,220,255,.12);

          background: rgba(1,5,15,.72);

          backdrop-filter: blur(18px);
        }

        .robot-logo {
          display: flex;
          align-items: center;
          gap: 12px;

          color: white;
          text-decoration: none;
        }

        .logo-robot {
          width: 44px;
          height: 44px;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid rgba(0,220,255,.5);

          border-radius: 12px;

          background: rgba(0,220,255,.08);

          box-shadow:
            0 0 25px rgba(0,220,255,.18);
        }

        .logo-title {
          font-size: 20px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .logo-subtitle {
          font-size: 9px;
          color: #6ee7ff;
          letter-spacing: 2px;
        }

        .robot-nav {
          display: flex;
          align-items: center;
          gap: 35px;
        }

        .robot-nav a {
          position: relative;

          color: #9ca3af;
          text-decoration: none;

          font-size: 14px;

          transition: .3s;
        }

        .robot-nav a:hover,
        .robot-nav .nav-active {
          color: #22d3ee;
          text-shadow: 0 0 15px rgba(34,211,238,.7);
        }

        .robot-nav .nav-active::after {
          content: "";

          position: absolute;

          left: 50%;
          bottom: -13px;

          width: 5px;
          height: 5px;

          border-radius: 50%;

          background: #22d3ee;

          box-shadow:
            0 0 12px #22d3ee;

          transform: translateX(-50%);
        }

        /* ================================================
           LOGIN BUTTON
        ================================================ */

        .login-button {
          position: relative;

          padding: 13px 23px;

          border: 1px solid rgba(34,211,238,.6);

          color: #dffbff;

          text-decoration: none;

          font-size: 12px;
          font-weight: 700;

          letter-spacing: 1px;

          background: rgba(34,211,238,.04);

          clip-path: polygon(
            10px 0,
            calc(100% - 10px) 0,
            100% 10px,
            100% calc(100% - 10px),
            calc(100% - 10px) 100%,
            10px 100%,
            0 calc(100% - 10px),
            0 10px
          );

          box-shadow:
            0 0 20px rgba(34,211,238,.08);

          overflow: hidden;

          transition: .3s;
        }

        .login-button:hover {
          background: rgba(34,211,238,.13);

          box-shadow:
            0 0 30px rgba(34,211,238,.3);

          transform: translateY(-2px);
        }

        .login-scan {
          position: absolute;

          top: 0;
          left: -100%;

          width: 100%;
          height: 100%;

          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,.4),
            transparent
          );

          animation: loginScan 3s infinite;
        }

        @keyframes loginScan {
          0% {
            left: -100%;
          }

          45%,100% {
            left: 100%;
          }
        }

        /* ================================================
           HERO
        ================================================ */

        .robot-hero {
          position: relative;
          z-index: 5;

          min-height: calc(100vh - 86px);

          padding: 40px 20px 80px;
        }

        .hero-heading {
          text-align: center;
        }

        .system-status {
          display: inline-flex;
          align-items: center;
          gap: 8px;

          padding: 7px 15px;

          border: 1px solid rgba(34,211,238,.18);

          border-radius: 999px;

          background: rgba(34,211,238,.04);

          color: #67e8f9;

          font-size: 10px;
          font-weight: 700;

          letter-spacing: 2px;
        }

        .status-dot {
          width: 7px;
          height: 7px;

          border-radius: 50%;

          background: #22d3ee;

          box-shadow:
            0 0 10px #22d3ee;

          animation: statusPulse 1.5s infinite;
        }

        @keyframes statusPulse {
          50% {
            opacity: .3;
            transform: scale(.6);
          }
        }

        .hero-heading h1 {
          margin: 18px 0 0;

          font-size: clamp(32px, 5vw, 62px);

          line-height: 1;

          font-weight: 900;

          letter-spacing: 2px;

          text-shadow:
            0 0 40px rgba(255,255,255,.05);
        }

        .hero-heading h1 span {
          display: block;

          margin-top: 8px;

          color: #22d3ee;

          text-shadow:
            0 0 30px rgba(34,211,238,.45);
        }

        .hero-heading p {
          margin-top: 15px;

          color: #94a3b8;

          font-size: 15px;

          letter-spacing: 2px;
        }

        .hero-heading p b {
          color: #22d3ee;
        }

        /* ================================================
           ROBOT INTERFACE
        ================================================ */

        .robot-interface {
          position: relative;

          width: min(1200px, 100%);

          height: 680px;

          margin: 0 auto;
        }

        .connection-lines {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          pointer-events: none;

          z-index: 1;
        }

        .connection-line {
          fill: none;

          stroke: rgba(34,211,238,.3);

          stroke-width: 2;

          stroke-dasharray: 10 8;

          animation: circuitFlow 2s linear infinite;

          transition: .3s;
        }

        .connection-line.active {
          stroke: #22d3ee;

          stroke-width: 3;

          filter:
            drop-shadow(0 0 5px #22d3ee)
            drop-shadow(0 0 15px rgba(34,211,238,.7));

          stroke-dasharray: 15 7;
        }

        @keyframes circuitFlow {
          to {
            stroke-dashoffset: -34;
          }
        }

        /* ================================================
           NODES
        ================================================ */

        .tech-node {
          position: absolute;

          width: 270px;

          padding: 18px;

          z-index: 10;

          border: 1px solid rgba(34,211,238,.25);

          background:
            linear-gradient(
              135deg,
              rgba(9,25,48,.94),
              rgba(4,10,25,.94)
            );

          backdrop-filter: blur(14px);

          clip-path: polygon(
            14px 0,
            calc(100% - 14px) 0,
            100% 14px,
            100% calc(100% - 14px),
            calc(100% - 14px) 100%,
            14px 100%,
            0 calc(100% - 14px),
            0 14px
          );

          box-shadow:
            inset 0 0 20px rgba(34,211,238,.025),
            0 0 25px rgba(0,0,0,.3);

          cursor: pointer;

          transition:
            transform .35s,
            border .35s,
            box-shadow .35s;
        }

        .tech-node:hover,
        .tech-node.active {
          transform: scale(1.06);

          border-color: #22d3ee;

          box-shadow:
            0 0 25px rgba(34,211,238,.18),
            inset 0 0 30px rgba(34,211,238,.06);
        }

        .node-ai {
          left: 2%;
          top: 70px;
        }

        .node-robotics {
          left: 1%;
          top: 270px;
        }

        .node-learning {
          left: 4%;
          top: 480px;
        }

        .node-circuits {
          right: 2%;
          top: 70px;
        }

        .node-digital {
          right: 1%;
          top: 270px;
        }

        .node-test {
          right: 4%;
          top: 480px;
        }

        .node-content {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .node-icon {
          width: 54px;
          height: 54px;

          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid rgba(34,211,238,.2);

          border-radius: 12px;

          background: rgba(34,211,238,.05);

          font-size: 27px;

          transition: .3s;
        }

        .tech-node:hover .node-icon {
          transform: rotate(-8deg) scale(1.12);

          box-shadow:
            0 0 20px rgba(34,211,238,.2);
        }

        .node-title {
          color: #67e8f9;

          font-size: 14px;
          font-weight: 800;

          letter-spacing: 1px;
        }

        .node-text {
          margin-top: 5px;

          color: #64748b;

          font-size: 11px;

          line-height: 1.5;
        }

        .node-explore {
          display: inline-block;

          margin-top: 12px;

          padding: 5px 11px;

          border: 1px solid rgba(34,211,238,.2);

          color: #67e8f9;

          font-size: 9px;

          letter-spacing: 1px;

          transition: .3s;
        }

        .tech-node:hover .node-explore {
          background: rgba(34,211,238,.1);

          box-shadow:
            0 0 15px rgba(34,211,238,.15);
        }

        /* ================================================
           CENTRAL ROBOT
        ================================================ */

        .robot-core {
          position: absolute;

          left: 50%;
          top: 48%;

          width: 310px;
          height: 440px;

          transform: translate(-50%, -50%);

          z-index: 5;

          transition: .4s;
        }

        .robot-core.reacting {
          filter:
            drop-shadow(0 0 15px rgba(34,211,238,.15));
        }

        /* antenna */

        .robot-antenna {
          position: absolute;

          top: -18px;
          left: 50%;

          width: 3px;
          height: 22px;

          background: #22d3ee;

          transform: translateX(-50%);

          box-shadow:
            0 0 10px #22d3ee;
        }

        .robot-antenna span {
          position: absolute;

          top: -7px;
          left: 50%;

          width: 12px;
          height: 12px;

          transform: translateX(-50%);

          border-radius: 50%;

          background: #22d3ee;

          box-shadow:
            0 0 12px #22d3ee,
            0 0 30px #22d3ee;

          animation: antennaPulse 1.2s infinite;
        }

        @keyframes antennaPulse {
          50% {
            transform: translateX(-50%) scale(1.4);
            opacity: .5;
          }
        }

        /* head */

        .robot-head {
          position: absolute;

          left: 50%;
          top: 20px;

          width: 150px;
          height: 130px;

          transform: translateX(-50%);

          border: 2px solid rgba(130,220,255,.6);

          border-radius: 45px 45px 38px 38px;

          background:
            linear-gradient(
              145deg,
              #dceeff,
              #7f9bb2 45%,
              #172638
            );

          box-shadow:
            inset -10px -10px 20px rgba(0,0,0,.35),
            0 0 40px rgba(34,211,238,.15);
        }

        .robot-face {
          position: absolute;

          left: 15px;
          right: 15px;
          top: 25px;
          bottom: 15px;

          border-radius: 32px;

          background:
            linear-gradient(
              145deg,
              #07111f,
              #02050b
            );

          border: 1px solid rgba(34,211,238,.3);
        }

        .robot-eyes {
          position: absolute;

          top: 43px;
          left: 35px;
          right: 35px;

          display: flex;
          justify-content: space-between;
        }

        .robot-eyes span {
          width: 32px;
          height: 9px;

          border-radius: 999px;

          background: #67e8f9;

          box-shadow:
            0 0 8px #22d3ee,
            0 0 25px #22d3ee;

          animation: eyePulse 2s infinite;
        }

        @keyframes eyePulse {
          50% {
            opacity: .65;
          }
        }

        .robot-mouth {
          position: absolute;

          left: 50%;
          bottom: 27px;

          width: 34px;
          height: 3px;

          transform: translateX(-50%);

          background: #22d3ee;

          box-shadow:
            0 0 8px #22d3ee;
        }

        .robot-ear {
          position: absolute;

          top: 42px;

          width: 13px;
          height: 45px;

          border: 2px solid #67e8f9;

          background: #102337;

          box-shadow:
            0 0 10px rgba(34,211,238,.3);
        }

        .left-ear {
          left: -12px;
          border-radius: 10px 0 0 10px;
        }

        .right-ear {
          right: -12px;
          border-radius: 0 10px 10px 0;
        }

        /* neck */

        .robot-neck {
          position: absolute;

          top: 145px;
          left: 50%;

          width: 60px;
          height: 30px;

          transform: translateX(-50%);

          display: flex;
          justify-content: center;
          gap: 7px;
        }

        .robot-neck span {
          width: 9px;
          height: 25px;

          border-radius: 5px;

          background: #334b61;

          border: 1px solid #6d8ba2;
        }

        /* body */

        .robot-body {
          position: absolute;

          left: 50%;
          top: 170px;

          width: 190px;
          height: 200px;

          transform: translateX(-50%);

          border: 2px solid rgba(130,220,255,.5);

          border-radius: 35px 35px 50px 50px;

          background:
            linear-gradient(
              145deg,
              #cfe7f7,
              #688398 40%,
              #182a3b 100%
            );

          box-shadow:
            inset -18px -18px 25px rgba(0,0,0,.35),
            0 0 30px rgba(34,211,238,.1);
        }

        .robot-chest {
          position: absolute;

          left: 50%;
          top: 28px;

          width: 125px;
          height: 130px;

          transform: translateX(-50%);

          border-radius: 25px;

          background:
            linear-gradient(
              145deg,
              #263e53,
              #07111d
            );

          border: 1px solid rgba(34,211,238,.25);
        }

        /* AI CORE */

        .ai-core {
          position: absolute;

          left: 50%;
          top: 50%;

          width: 75px;
          height: 75px;

          transform: translate(-50%, -50%);

          border-radius: 50%;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #03101b;

          border: 2px solid #22d3ee;

          box-shadow:
            0 0 15px #22d3ee,
            0 0 45px rgba(34,211,238,.45);
        }

        .core-ring {
          position: absolute;

          border-radius: 50%;

          border: 1px dashed rgba(34,211,238,.6);
        }

        .ring-one {
          inset: -9px;

          animation: coreRotate 5s linear infinite;
        }

        .ring-two {
          inset: -16px;

          border-color: rgba(139,92,246,.4);

          animation: coreRotateReverse 7s linear infinite;
        }

        @keyframes coreRotate {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes coreRotateReverse {
          to {
            transform: rotate(-360deg);
          }
        }

        .core-text {
          text-align: center;

          display: flex;
          flex-direction: column;
        }

        .core-text strong {
          color: #67e8f9;

          font-size: 19px;

          text-shadow:
            0 0 10px #22d3ee;
        }

        .core-text span {
          color: #64748b;

          font-size: 7px;

          letter-spacing: 2px;
        }

        /* arms */

        .robot-arm {
          position: absolute;

          top: 190px;

          width: 50px;
          height: 175px;

          z-index: -1;
        }

        .left-arm {
          left: -10px;

          transform: rotate(28deg);
        }

        .right-arm {
          right: -10px;

          transform: rotate(-28deg);
        }

        .arm-upper,
        .arm-lower {
          position: absolute;

          width: 42px;

          border-radius: 22px;

          background:
            linear-gradient(
              90deg,
              #17293b,
              #a6c3d5,
              #3d566b
            );

          border: 1px solid #6d8ba2;
        }

        .arm-upper {
          height: 80px;
          top: 0;
        }

        .arm-lower {
          height: 75px;
          top: 72px;
          transform: rotate(-10deg);
        }

        .robot-hand {
          position: absolute;

          bottom: -25px;

          left: -3px;

          width: 55px;
          height: 35px;

          border-radius: 50%;

          background: #6e8798;

          border: 1px solid #9cc6db;

          display: flex;
          justify-content: space-around;
          align-items: flex-end;

          padding: 5px;
        }

        .robot-hand span {
          width: 6px;
          height: 17px;

          border-radius: 5px;

          background: #9bb8c8;

          border: 1px solid #bfe7f7;
        }

        /* platform */

        .robot-platform {
          position: absolute;

          left: 50%;
          bottom: -30px;

          width: 330px;
          height: 90px;

          transform: translateX(-50%);

          border-radius: 50%;

          background:
            radial-gradient(
              ellipse,
              rgba(34,211,238,.18),
              rgba(2,10,20,.9) 55%,
              transparent 70%
            );
        }

        .platform-ring {
          position: absolute;

          left: 50%;
          top: 50%;

          transform: translate(-50%, -50%);

          border: 2px solid rgba(34,211,238,.5);

          border-radius: 50%;

          animation: platformSpin 8s linear infinite;
        }

        .ring-a {
          width: 260px;
          height: 70px;
        }

        .ring-b {
          width: 210px;
          height: 55px;

          border-color: rgba(139,92,246,.4);

          animation-direction: reverse;
        }

        .ring-c {
          width: 150px;
          height: 38px;
        }

        @keyframes platformSpin {
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        .platform-light {
          position: absolute;

          left: 50%;
          top: 50%;

          width: 100px;
          height: 8px;

          transform: translate(-50%, -50%);

          border-radius: 50%;

          background: #22d3ee;

          filter: blur(7px);

          animation: platformPulse 2s infinite;
        }

        @keyframes platformPulse {
          50% {
            opacity: .4;
            transform: translate(-50%, -50%) scale(.7);
          }
        }

        /* ================================================
           PARTICLES
        ================================================ */

        .particle {
          position: absolute;

          width: 4px;
          height: 4px;

          border-radius: 50%;

          background: #22d3ee;

          box-shadow:
            0 0 10px #22d3ee;

          animation: particleFloat 4s infinite;
        }

        .particle-1 {
          left: 42%;
          top: 20%;
        }

        .particle-2 {
          left: 56%;
          top: 30%;
          animation-delay: 1s;
        }

        .particle-3 {
          left: 44%;
          top: 70%;
          animation-delay: 2s;
        }

        .particle-4 {
          left: 62%;
          top: 68%;
          animation-delay: 1.5s;
        }

        .particle-5 {
          left: 30%;
          top: 42%;
          animation-delay: .5s;
        }

        .particle-6 {
          left: 70%;
          top: 44%;
          animation-delay: 2.5s;
        }

        @keyframes particleFloat {
          0%,100% {
            transform: translateY(0);
            opacity: .3;
          }

          50% {
            transform: translateY(-25px);
            opacity: 1;
          }
        }

        /* ================================================
           CTA
        ================================================ */

        .hero-cta {
          position: relative;

          z-index: 20;

          text-align: center;

          margin-top: -5px;
        }

        .revolution-button {
          position: relative;

          display: inline-flex;

          padding: 15px 35px;

          color: white;

          text-decoration: none;

          font-size: 13px;
          font-weight: 800;

          letter-spacing: 2px;

          border: 1px solid rgba(34,211,238,.7);

          background: rgba(34,211,238,.06);

          clip-path: polygon(
            12px 0,
            calc(100% - 12px) 0,
            100% 12px,
            100% calc(100% - 12px),
            calc(100% - 12px) 100%,
            12px 100%,
            0 calc(100% - 12px),
            0 12px
          );

          overflow: hidden;

          transition: .3s;
        }

        .revolution-button:hover {
          transform: translateY(-3px);

          background: rgba(34,211,238,.12);

          box-shadow:
            0 0 35px rgba(34,211,238,.25);
        }

        .button-glow {
          position: absolute;

          top: 0;
          left: -100%;

          width: 80%;
          height: 100%;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(255,255,255,.5),
              transparent
            );

          animation: buttonScan 3s infinite;
        }

        @keyframes buttonScan {
          0% {
            left: -100%;
          }

          40%,100% {
            left: 120%;
          }
        }

        .cta-subtitle {
          margin-top: 13px;

          color: #475569;

          font-size: 9px;

          letter-spacing: 4px;
        }

        /* ================================================
           TECHNOLOGY
        ================================================ */

        .technology-section,
        .learning-section {
          position: relative;

          z-index: 5;

          padding: 120px 7vw;

          border-top: 1px solid rgba(255,255,255,.05);

          text-align: center;
        }

        .section-label {
          color: #22d3ee;

          font-size: 10px;
          font-weight: 800;

          letter-spacing: 4px;
        }

        .technology-section h2,
        .learning-section h2 {
          margin-top: 14px;

          font-size: clamp(35px, 5vw, 58px);

          font-weight: 900;

          line-height: 1;
        }

        .technology-section h2 span,
        .learning-section h2 span {
          color: #22d3ee;
        }

        .technology-section > p,
        .learning-section > p {
          max-width: 650px;

          margin: 20px auto 50px;

          color: #64748b;

          line-height: 1.8;
        }

        .technology-cards {
          max-width: 1100px;

          margin: auto;

          display: grid;

          grid-template-columns:
            repeat(4, 1fr);

          gap: 18px;
        }

        .tech-card {
          padding: 30px 20px;

          border: 1px solid rgba(34,211,238,.1);

          background: rgba(255,255,255,.02);

          transition: .3s;
        }

        .tech-card:hover {
          transform: translateY(-8px);

          border-color: rgba(34,211,238,.4);

          background: rgba(34,211,238,.04);

          box-shadow:
            0 0 30px rgba(34,211,238,.08);
        }

        .tech-card-icon {
          font-size: 38px;

          margin-bottom: 15px;
        }

        .tech-card-title {
          color: #cbd5e1;

          font-size: 14px;

          font-weight: 700;
        }

        /* ================================================
           LEARNING
        ================================================ */

        .learning-section {
          padding-bottom: 150px;
        }

        .learning-section h2 span {
          color: #a78bfa;
        }

        .learning-button {
          display: inline-block;

          padding: 14px 25px;

          color: #c4b5fd;

          text-decoration: none;

          border: 1px solid rgba(167,139,250,.35);

          background: rgba(167,139,250,.05);

          transition: .3s;
        }

        .learning-button:hover {
          background: rgba(167,139,250,.12);

          box-shadow:
            0 0 30px rgba(167,139,250,.15);

          transform: translateY(-3px);
        }

        /* ================================================
           FOOTER
        ================================================ */

        .robot-footer {
          position: relative;

          z-index: 5;

          padding: 30px 7vw;

          display: flex;

          justify-content: space-between;

          gap: 20px;

          color: #475569;

          font-size: 10px;

          letter-spacing: 1px;

          border-top: 1px solid rgba(255,255,255,.05);
        }

        /* ================================================
           MOBILE
        ================================================ */

        @media (max-width: 900px) {

          .robot-nav {
            display: none;
          }

          .robot-interface {
            height: 900px;
          }

          .robot-core {
            top: 50%;
          }

          .tech-node {
            width: 210px;
          }

          .node-ai {
            left: 0;
            top: 40px;
          }

          .node-robotics {
            left: 0;
            top: 250px;
          }

          .node-learning {
            left: 0;
            top: 700px;
          }

          .node-circuits {
            right: 0;
            top: 40px;
          }

          .node-digital {
            right: 0;
            top: 250px;
          }

          .node-test {
            right: 0;
            top: 700px;
          }

          .connection-lines {
            display: none;
          }

          .technology-cards {
            grid-template-columns: repeat(2, 1fr);
          }

        }

        @media (max-width: 640px) {

          .robot-navbar {
            padding: 0 15px;
          }

          .logo-title {
            font-size: 16px;
          }

          .login-button {
            padding: 10px 12px;
            font-size: 9px;
          }

          .robot-hero {
            padding-top: 30px;
          }

          .hero-heading h1 {
            font-size: 31px;
          }

          .hero-heading p {
            font-size: 11px;
          }

          .robot-interface {
            height: 1050px;
          }

          .robot-core {
            transform:
              translate(-50%, -50%)
              scale(.72);
          }

          .tech-node {
            width: 180px;
            padding: 12px;
          }

          .node-ai,
          .node-circuits {
            top: 30px;
          }

          .node-robotics,
          .node-digital {
            top: 250px;
          }

          .node-learning,
          .node-test {
            top: 820px;
          }

          .node-icon {
            width: 40px;
            height: 40px;
            font-size: 20px;
          }

          .node-title {
            font-size: 10px;
          }

          .node-text {
            font-size: 8px;
          }

          .technology-cards {
            grid-template-columns: 1fr;
          }

          .robot-footer {
            flex-direction: column;
            text-align: center;
          }

        }

      `}</style>

    </div>
  );
}

/* =========================================================
   CONNECTION
   ========================================================= */

function Connection({ active, d }) {
  return (
    <>
      <path
        d={d}
        className={`connection-line ${active ? "active" : ""}`}
      />

      <circle
        cx="600"
        cy="360"
        r={active ? "6" : "3"}
        fill="#22d3ee"
        opacity={active ? "1" : ".4"}
        style={{
          filter: "drop-shadow(0 0 6px #22d3ee)",
        }}
      />
    </>
  );
}

/* =========================================================
   NODE
   ========================================================= */

function Node({ data, active, onHover }) {
  return (
    <Link
      to="/login"
      className={`tech-node node-${data.position} ${
        active ? "active" : ""
      }`}
      onMouseEnter={onHover}
    >
      <div className="node-content">

        <div className="node-icon">
          {data.icon}
        </div>

        <div>

          <div className="node-title">
            {data.title}
          </div>

          <div className="node-text">
            {data.text}
          </div>

        </div>

      </div>

      <div className="node-explore">
        EXPLORE →
      </div>

    </Link>
  );
}

/* =========================================================
   TECHNOLOGY CARD
   ========================================================= */

function TechCard({ icon, title }) {
  return (
    <div className="tech-card">

      <div className="tech-card-icon">
        {icon}
      </div>

      <div className="tech-card-title">
        {title}
      </div>

    </div>
  );
}