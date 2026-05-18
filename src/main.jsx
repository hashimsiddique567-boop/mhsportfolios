import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

const projects = [
  {
    title: "Adjustable Lamp CAD Design",
    image: "/lamp/lamp-render.webp",
    images: [
      "/lamp/lamp-render.webp",
      "/lamp/2.avif",
      "/lamp/3.avif",
      "/lamp/4.avif",
      "/lamp/5.avif",
      "/lamp/6.avif",
      "/lamp/7.avif",
      "/lamp/8.avif",
      "/lamp/9.avif",
    ],
    tag: "SolidWorks • Assembly • Technical Drawings",
    desc: "Adjustable desk lamp CAD project including 3D modelling, assembly design, technical drawings and manufacturability.",
  },
  {
    title: "Adjustable Phone Stand",
    image: "/phone-stand/phone-render.avif",
    images: [
      "/phone-stand/phone-render.avif",
      "/phone-stand/2.avif",
      "/phone-stand/3.avif",
      "/phone-stand/4.avif",
      "/phone-stand/5.avif",
      "/phone-stand/6.avif",
      "/phone-stand/7.avif",
      "/phone-stand/8.avif",
    ],
    tag: "CAD Design • Mechanism • PLA Parts",
    desc: "Adjustable phone stand with component modelling, assembly development and engineering drawings.",
  },
  {
    title: "Piano Stool & Hinge CAD Design",
    image: "/piano-stool/stool-render.avif",
    images: [
      "/piano-stool/stool-render.avif",
      "/piano-stool/2.avif",
      "/piano-stool/3.avif",
      "/piano-stool/4.avif",
      "/piano-stool/5.avif",
      "/piano-stool/6.avif",
      "/piano-stool/7.avif",
      "/piano-stool/8.avif",
      "/piano-stool/9.avif",
    ],
    tag: "Hinge Mechanism • Product Design",
    desc: "Foldable piano stool and hinge mechanism with detailed CAD development and manufacturing considerations.",
  },
  {
    title: "Engineering Design Problem Solutions",
    image: "/design-problems/problem-overview.avif",
    images: [
      "/design-problems/problem-overview.avif",
      "/design-problems/2.avif",
      "/design-problems/3.avif",
      "/design-problems/4.avif",
      "/design-problems/5.avif",
      "/design-problems/6.avif",
      "/design-problems/7.avif",
      "/design-problems/8.avif",
    ],
    tag: "Problem Solving • Optimisation • Testing",
    desc: "Engineering design challenge work involving concept sketches, CAD modelling, redesign, optimisation and validation.",
  },
];

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formSent, setFormSent] = useState(false);
  const [sending, setSending] = useState(false);

  const currentIndex = selectedProject?.images?.indexOf(selectedImage) ?? -1;

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const formData = new FormData(e.target);

    try {
      await fetch("https://formspree.io/f/xojbarjq", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      setFormSent(true);
      e.target.reset();
      window.location.hash = "contact";
    } catch {
      alert("Message could not send. Please email me directly.");
    }

    setSending(false);
  };

  const showPrevImage = () => {
    if (!selectedProject || currentIndex === -1) return;
    const prevIndex =
      currentIndex === 0 ? selectedProject.images.length - 1 : currentIndex - 1;
    setSelectedImage(selectedProject.images[prevIndex]);
  };

  const showNextImage = () => {
    if (!selectedProject || currentIndex === -1) return;
    const nextIndex =
      currentIndex === selectedProject.images.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(selectedProject.images[nextIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;

      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowLeft") showPrevImage();
      if (e.key === "ArrowRight") showNextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, selectedProject, currentIndex]);

  if (loading) {
    return (
      <div className="loaderScreen">
        <style>{`
          .loaderScreen{
            position:fixed;
            inset:0;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            background:radial-gradient(circle,#00152e,#020016,#000);
            font-family:Arial, Helvetica, sans-serif;
          }

          .loaderLogo{
            font-size:95px;
            font-weight:900;
            background:linear-gradient(90deg,#00e5ff,#ff00cc,#ff9900);
            -webkit-background-clip:text;
            color:transparent;
            animation:pulse 1.2s infinite;
          }

          .loaderText{
            margin-top:20px;
            font-size:22px;
            color:white;
            letter-spacing:2px;
          }

          .loaderBar{
            width:320px;
            height:10px;
            margin-top:35px;
            border-radius:999px;
            overflow:hidden;
            background:rgba(255,255,255,.1);
          }

          .loaderFill{
            height:100%;
            background:linear-gradient(90deg,#00e5ff,#ff00cc,#ff9900);
            animation:load 1.6s linear;
          }

          @keyframes load{
            from{width:0}
            to{width:100%}
          }

          @keyframes pulse{
            50%{transform:scale(1.06)}
          }
        `}</style>

        <div className="loaderLogo">MHS</div>
        <div className="loaderText">Mohammad Hashim Siddique</div>
        <div className="loaderBar">
          <div className="loaderFill"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="site">
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Arial, Helvetica, sans-serif;
        }

        html{
          scroll-behavior:smooth;
        }

        body{
          background:#020016;
          color:white;
        }

        .scrollProgress{
          position:fixed;
          top:0;
          left:0;
          height:5px;
          width:100%;
          background:linear-gradient(90deg,#00e5ff,#ff00cc,#ff9900);
          transform-origin:left;
          animation:scrollProgress linear;
          animation-timeline:scroll();
          z-index:99999;
        }

        @keyframes scrollProgress{
          from{transform:scaleX(0)}
          to{transform:scaleX(1)}
        }

        .site{
          min-height:100vh;
          background:
            radial-gradient(circle at 12% 18%, rgba(0,229,255,.42), transparent 30%),
            radial-gradient(circle at 88% 12%, rgba(255,0,204,.38), transparent 30%),
            radial-gradient(circle at 55% 95%, rgba(255,153,0,.2), transparent 38%),
            linear-gradient(135deg,#020016,#090026,#001f3f,#29003f);
          overflow-x:hidden;
        }

        .container{
          width:90%;
          max-width:1400px;
          margin:auto;
        }

        nav{
          margin-top:25px;
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding:24px 40px;
          border-radius:999px;
          background:rgba(255,255,255,.07);
          border:1px solid rgba(255,255,255,.15);
          backdrop-filter:blur(22px);
          box-shadow:0 0 35px rgba(0,229,255,.22),0 0 55px rgba(255,0,204,.22);
          position:sticky;
          top:20px;
          z-index:10;
        }

        .logo{
          font-size:40px;
          font-weight:900;
          background:linear-gradient(90deg,#00e5ff,#ff00cc,#ff9900);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        nav a{
          color:white;
          text-decoration:none;
          margin-left:34px;
          font-weight:900;
          font-size:13px;
          letter-spacing:2px;
        }

        .hero{
          min-height:90vh;
          display:grid;
          grid-template-columns:1fr 1fr;
          align-items:center;
          gap:70px;
          padding:70px 0;
        }

        .small,.sectionLabel{
          color:#ff4fd8;
          letter-spacing:5px;
          font-weight:900;
          margin-bottom:18px;
          text-transform:uppercase;
          font-size:13px;
        }

        h1{
          font-size:clamp(60px,8vw,112px);
          line-height:.9;
          margin-bottom:25px;
          font-weight:900;
        }

        h2{
          font-size:clamp(44px,5vw,70px);
          margin-bottom:30px;
        }

        .gradient{
          background:linear-gradient(90deg,#00e5ff,#635bff,#ff00cc,#ff9900);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .text,.aboutText{
          color:#d4d4e2;
          line-height:1.85;
          font-size:20px;
        }

        .buttons{
          display:flex;
          gap:20px;
          margin-top:35px;
          flex-wrap:wrap;
        }

        .btn,.sendEmail{
          display:inline-block;
          padding:18px 35px;
          border-radius:16px;
          text-decoration:none;
          font-weight:900;
          transition:.3s;
          text-align:center;
        }

        .one,.sendEmail{
          background:linear-gradient(90deg,#00e5ff,#8b5cf6,#ff00cc,#ff9900);
          color:white;
          border:none;
          cursor:pointer;
          box-shadow:0 0 45px rgba(255,0,204,.5);
        }

        .two{
          border:1px solid rgba(255,255,255,.25);
          color:white;
          background:rgba(255,255,255,.06);
        }

        .btn:hover,.sendEmail:hover{
          transform:translateY(-5px);
          box-shadow:0 0 45px #00e5ff,0 0 70px #ff00cc;
        }

        .photoBox{
          padding:8px;
          border-radius:42px;
          background:linear-gradient(45deg,#00e5ff,#ff00cc,#ff9900,#00e5ff);
          background-size:300% 300%;
          animation:move 6s ease infinite;
          box-shadow:0 0 50px #00e5ff,0 0 90px #ff00cc;
        }

        .photoInner{
          overflow:hidden;
          border-radius:35px;
          background:#050021;
        }

        .photoInner img{
          width:100%;
          display:block;
        }

        section{
          padding:95px 0;
        }

        .glass{
          background:rgba(255,255,255,.07);
          border:1px solid rgba(255,255,255,.14);
          backdrop-filter:blur(20px);
          border-radius:32px;
          padding:40px;
          box-shadow:0 0 35px rgba(0,229,255,.16),0 0 55px rgba(255,0,204,.14);
        }

        .skillsWrap{
          display:flex;
          flex-wrap:wrap;
          gap:16px;
          margin-top:30px;
        }

        .skillChip{
          padding:16px 24px;
          border-radius:999px;
          background:rgba(255,255,255,.07);
          border:1px solid rgba(255,255,255,.12);
          backdrop-filter:blur(20px);
          font-weight:900;
          transition:.3s;
        }

        .skillChip:hover{
          
          box-shadow:0 0 30px rgba(0,229,255,.3),0 0 45px rgba(255,0,204,.25);
        }

        .projectGrid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
          gap:26px;
        }

        .projectCard{
          overflow:hidden;
          border-radius:30px;
          background:rgba(255,255,255,.07);
          border:1px solid rgba(255,255,255,.15);
          cursor:pointer;
          display:flex;
          flex-direction:column;
          animation:projectGlow 3s ease-in-out infinite;
          transition:.25s ease;
        }

        .projectCard:hover{
          
          box-shadow:0 0 45px #00e5ff,0 0 85px #ff00cc;
        }

        .projectCard img{
          width:100%;
          height:240px;
          object-fit:cover;
          display:block;
        }

        .projectText{
          padding:24px;
          display:flex;
          flex-direction:column;
          flex:1;
        }

        .tag{
          color:#00e5ff;
          font-size:12px;
          font-weight:900;
          margin-bottom:12px;
        }

        .projectText h3{
          font-size:22px;
          margin-bottom:12px;
        }

        .projectText p{
          color:#d4d4e2;
          line-height:1.65;
        }

        .clickText{
          margin-top:auto;
          color:#ff4fd8;
          font-weight:900;
          font-size:13px;
        }

        .contact{
          display:grid;
          grid-template-columns:1fr 1.25fr;
          gap:40px;
        }

        input,textarea{
          width:100%;
          padding:18px;
          margin-bottom:16px;
          background:rgba(255,255,255,.07);
          border:1px solid rgba(255,255,255,.16);
          border-radius:16px;
          color:white;
          font-size:16px;
        }

        textarea{
          height:170px;
          resize:none;
        }

        .sendEmail{
          width:100%;
        }

        footer{
          text-align:center;
          padding:40px 0;
          color:#9b9bb0;
        }

        .modalOverlay,.bigImageOverlay{
          position:fixed;
          inset:0;
          background:rgba(0,0,0,.86);
          backdrop-filter:blur(12px);
          display:flex;
          align-items:center;
          justify-content:center;
          z-index:999;
          padding:24px;
        }

        .modal{
          width:min(1250px,95vw);
          max-height:92vh;
          overflow-y:auto;
          border-radius:34px;
          background:radial-gradient(circle at top left,rgba(0,229,255,.25),transparent 35%),radial-gradient(circle at top right,rgba(255,0,204,.25),transparent 35%),#08001f;
          border:1px solid rgba(255,255,255,.18);
          box-shadow:0 0 60px #00e5ff,0 0 120px rgba(255,0,204,.5);
          padding:30px;
        }

        .modalHeader{
          display:flex;
          justify-content:space-between;
          gap:20px;
          align-items:flex-start;
          margin-bottom:28px;
        }

        .modal h2{
          font-size:clamp(42px,6vw,86px);
          line-height:.95;
        }

        .closeBtn,.bigImageClose{
          padding:14px 22px;
          border-radius:16px;
          background:linear-gradient(90deg,#00e5ff,#ff00cc,#ff9900);
          color:white;
          border:none;
          font-weight:900;
          cursor:pointer;
        }

        .modalGallery{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
          gap:22px;
          margin-top:20px;
        }

        .modalGallery img{
          width:100%;
          height:320px;
          object-fit:contain;
          border-radius:22px;
          background:white;
          padding:12px;
          cursor:pointer;
          transition:.25s;
        }

        .modalGallery img:hover{
          transform:scale(1.04);
          box-shadow:0 0 35px #00e5ff;
        }

        .bigImageOverlay{
          z-index:1000;
        }

        .bigImageBox{
          width:96vw;
          height:95vh;
          display:flex;
          align-items:center;
          justify-content:center;
          position:relative;
        }

        .bigImageBox img{
          max-width:95vw;
          max-height:88vh;
          object-fit:contain;
          border-radius:20px;
          padding:10px;
          background:white;
          box-shadow:0 0 80px #00e5ff,0 0 160px #ff00cc;
        }

        .imageTopBar{
          position:absolute;
          top:20px;
          left:50%;
          transform:translateX(-50%);
          display:flex;
          align-items:center;
          gap:18px;
          z-index:1001;
        }

        .imageCounter{
          padding:14px 22px;
          border-radius:16px;
          background:rgba(255,255,255,.12);
          border:1px solid rgba(255,255,255,.25);
          color:white;
          font-weight:900;
        }

        .imageArrow{
          position:absolute;
          top:50%;
          transform:translateY(-50%);
          width:70px;
          height:70px;
          border-radius:50%;
          border:none;
          font-size:55px;
          color:white;
          cursor:pointer;
          z-index:1001;
          background:linear-gradient(135deg,#00e5ff,#ff00cc,#ff9900);
          box-shadow:0 0 40px #00e5ff,0 0 80px #ff00cc;
        }

        .leftArrow{left:35px;}
        .rightArrow{right:35px;}

        @keyframes move{
          0%{background-position:0% 50%}
          50%{background-position:100% 50%}
          100%{background-position:0% 50%}
        }

        @keyframes projectGlow{
          0%{box-shadow:0 0 20px rgba(0,229,255,.15)}
          50%{box-shadow:0 0 35px #00e5ff,0 0 70px #ff00cc}
          100%{box-shadow:0 0 20px rgba(0,229,255,.15)}
        }

        @media(max-width:900px){
  .container{
    width:92%;
  }

  nav{
    position:relative;
    top:0;
    flex-direction:column;
    gap:18px;
    border-radius:28px;
    padding:20px;
  }

  nav div:last-child{
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap:14px;
  }

  nav a{
    margin:0;
    font-size:12px;
  }

  .hero{
    grid-template-columns:1fr;
    min-height:auto;
    padding:45px 0;
    gap:35px;
  }

  h1{
    font-size:48px;
    line-height:1;
  }

  h2{
    font-size:42px;
  }

  .text,
  .aboutText{
    font-size:17px;
  }

  .photoBox{
    max-width:420px;
    margin:auto;
  }

  section{
    padding:60px 0;
  }

  .glass{
    padding:25px;
    border-radius:24px;
  }

  .skillsWrap{
    gap:10px;
  }

  .skillChip{
    padding:12px 16px;
    font-size:14px;
  }

  .projectGrid{
    grid-template-columns:1fr;
  }

  .projectCard img{
    height:230px;
  }

  .contact{
    grid-template-columns:1fr;
  }

  .modal{
    width:96vw;
    padding:20px;
  }

  .modalHeader{
    flex-direction:column;
  }

  .modalGallery{
    grid-template-columns:1fr;
  }

  .modalGallery img{
    height:auto;
    max-height:70vh;
  }

  .bigImageBox img{
    max-width:92vw;
    max-height:75vh;
  }

  .imageArrow{
    width:48px;
    height:48px;
    font-size:38px;
  }

  .leftArrow{
    left:10px;
  }

  .rightArrow{
    right:10px;
  }

  .imageTopBar{
    top:10px;
    gap:8px;
  }

  .bigImageClose,
  .imageCounter{
    padding:10px 14px;
    font-size:12px;
  }
}
          .hero,.contact{
            grid-template-columns:1fr;
          }

          h1{
            font-size:58px;
          }

          nav{
            flex-direction:column;
            gap:20px;
          }

          nav a{
            margin:0 10px;
          }
        }
      `}</style>

      <div className="scrollProgress"></div>

      <div className="container">
        <nav>
          <div className="logo">MHS</div>
          <div>
            <a href="#home">HOME</a>
            <a href="#seeking">SEEKING</a>
            <a href="#about">ABOUT</a>
            <a href="#projects">PROJECTS</a>
            <a href="#contact">CONTACT</a>
          </div>
        </nav>

        <section id="home" className="hero">
          <div>
            <div className="small">Mechanical Engineering Student</div>
            <h1>
              Mohammad <span className="gradient">Hashim</span> Siddique
            </h1>

            <p className="text">
              Passionate about CAD design, product development and solving practical engineering problems through creativity, precision and innovation.
            </p>

            <div className="buttons">
              <a className="btn one" href="/cv.pdf" download>
                DOWNLOAD CV
              </a>

              <a className="btn two" href="#projects">
                VIEW PROJECTS
              </a>
            </div>
          </div>

          <div className="photoBox">
            <div className="photoInner">
              <img src="/profile/photo.png" alt="Mohammad Hashim Siddique portrait" />
            </div>
          </div>
        </section>

        <section id="seeking">
          <div className="glass">
            <div className="sectionLabel">Currently Seeking</div>
            <h2>Mechanical Engineering Apprenticeship</h2>

            <p className="aboutText">
              I am currently looking for a Mechanical Engineering Apprenticeship where I can develop practical skills, work alongside experienced engineers and continue improving my CAD, workshop and problem-solving experience.
            </p>

            <div className="skillsWrap">
              <div className="skillChip">CAD Projects: 4</div>
              <div className="skillChip">SolidWorks</div>
              <div className="skillChip">Technical Drawings</div>
              <div className="skillChip">Workshop Skills</div>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="sectionLabel">About Me</div>
          <h2>About</h2>

          <div className="glass">
            <p className="aboutText">
              I am a motivated Mechanical Engineering student with a strong interest in CAD design, product development and practical engineering problem solving. I enjoy transforming ideas from early concepts into detailed engineering solutions through 3D modelling, technical drawings and design development.
            </p>

            <p className="aboutText">
              Throughout my projects I have developed experience creating assemblies, analysing movement mechanisms and producing engineering drawings with attention to detail and real-world functionality.
            </p>

            <p className="aboutText">
              Projects including an adjustable lamp, phone stand mechanism, piano stool design and engineering redesign challenges have strengthened my confidence in CAD software, workshop processes and engineering communication.
            </p>
          </div>
        </section>

        <section id="skills">
          <div className="sectionLabel">Skills</div>
          <h2>Technical Skills</h2>

          <div className="skillsWrap">
            <div className="skillChip">SolidWorks</div>
            <div className="skillChip">CAD Design</div>
            <div className="skillChip">Technical Drawings</div>
            <div className="skillChip">Mechanism Design</div>
            <div className="skillChip">3D Modelling</div>
            <div className="skillChip">Engineering Design</div>
            <div className="skillChip">Workshop Skills</div>
            <div className="skillChip">Problem Solving</div>
          </div>
        </section>

        <section id="projects">
          <div className="sectionLabel">My Work</div>
          <h2>Featured Engineering Projects</h2>

          <div className="projectGrid">
            {projects.map((project, index) => (
              <div
                className="projectCard"
                key={index}
                onClick={() => setSelectedProject(project)}
              >
                <img src={project.image} alt={project.title} />

                <div className="projectText">
                  <div className="tag">{project.tag}</div>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="clickText">CLICK TO VIEW FULL PROJECT →</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="journey">
          <div className="sectionLabel">Journey</div>
          <h2>Engineering Pathway</h2>

          <div className="glass">
            <p className="aboutText">
              <strong>2023 – Present:</strong> Studying Level 3 Engineering at Runshaw College.
            </p>

            <p className="aboutText">
              <strong>CAD Portfolio:</strong> Building projects including an adjustable lamp, phone stand, piano stool and design problem solutions.
            </p>

            <p className="aboutText">
              <strong>Next Step:</strong> Seeking a Mechanical Engineering Apprenticeship to develop practical industry experience.
            </p>
          </div>
        </section>

        <section id="contact">
          <div className="sectionLabel">Get In Touch</div>
          <h2>Contact</h2>

          <div className="glass contact">
            <div>
              <p className="aboutText">
                Have a CAD project, engineering idea or opportunity? I’d be happy to hear from you.
              </p>

              <p className="aboutText">
                <strong>Email:</strong><br />
                hashimsiddique567@gmail.com<br /><br />
                <strong>Location:</strong><br />
                Chorley, Lancashire — UK
              </p>
            </div>

            {formSent ? (
              <div className="glass" style={{ textAlign: "center" }}>
                <div className="sectionLabel">Message Sent</div>
                <h2>Thank You</h2>

                <p className="aboutText">
                  Thank you for getting in touch. I have received your message and will reply as soon as possible.
                </p>

                <a className="btn one" href="#home">
                  BACK TO HOME
                </a>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit}>
                <input name="name" placeholder="Your Name" required />
                <input name="email" type="email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Message" required />

                <button className="sendEmail" type="submit">
                  {sending ? "SENDING..." : "SEND MESSAGE"}
                </button>
              </form>
            )}
          </div>
        </section>

        <footer>
          © 2026 Mohammad Hashim Siddique. All rights reserved.
        </footer>
      </div>

      {selectedProject && (
        <div className="modalOverlay" onClick={() => setSelectedProject(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modalHeader">
              <div>
                <div className="tag">{selectedProject.tag}</div>
                <h2>{selectedProject.title}</h2>
              </div>

              <button className="closeBtn" onClick={() => setSelectedProject(null)}>
                X
              </button>
            </div>

            <div className="modalGallery">
              {selectedProject.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={selectedProject.title}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>

            <p className="aboutText" style={{ marginTop: "30px" }}>
              {selectedProject.desc}
            </p>
          </div>
        </div>
      )}

      {selectedImage && (
        <div className="bigImageOverlay" onClick={() => setSelectedImage(null)}>
          <div className="bigImageBox" onClick={(e) => e.stopPropagation()}>
            <div className="imageTopBar">
              <button className="bigImageClose" onClick={() => setSelectedImage(null)}>
                CLOSE IMAGE
              </button>

              <div className="imageCounter">
                {currentIndex + 1} / {selectedProject.images.length}
              </div>
            </div>

            <button className="imageArrow leftArrow" onClick={showPrevImage}>
              ‹
            </button>

            <img src={selectedImage} alt="Full project view" />

            <button className="imageArrow rightArrow" onClick={showNextImage}>
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Portfolio />);
