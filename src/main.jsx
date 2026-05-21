
 import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const projects = [
  {
    title: "Adjustable Lamp",
    image: "/lamp/lamp-render.webp",
    tag: "CAD",
    hours: "18 Hours",
    type: "Individual",
    desc: "Design and assembly of an adjustable lamp with moving components.",
    points: ["Improved assembly skills", "Created technical drawings", "Functional adjustable design"],
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
  },
  {
    title: "Phone Stand",
    image: "/phone-stand/phone-render.avif",
    tag: "CAD",
    hours: "12 Hours",
    type: "Individual",
    desc: "Ergonomic phone stand designed for stability and manufacturability.",
    points: ["Strengthened CAD skills", "Optimised for stability", "Practical everyday use"],
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
  },
  {
    title: "Piano Stool",
    image: "/piano-stool/stool-render.avif",
    tag: "CAD",
    hours: "15 Hours",
    type: "Individual",
    desc: "Piano stool with scissor mechanism for adjustable height.",
    points: ["Mechanism design", "Smooth movement", "Strong stable structure"],
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
  },
];

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [formSent, setFormSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
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
    } catch {
      alert("Message could not send. Please email me directly.");
    }

    setSending(false);
  };

  return (
    <div className="app" id="top">
      <style>{`
        *{margin:0;padding:0;box-sizing:border-box;font-family:Inter,Arial,Helvetica,sans-serif}
        html{scroll-behavior:smooth;overflow-x:hidden}
        body{background:#050b18;color:#fff;overflow-x:hidden}
        .app{
          min-height:100vh;
          background:
            radial-gradient(circle at 30% 10%,rgba(168,85,247,.18),transparent 28%),
            radial-gradient(circle at 90% 40%,rgba(0,212,255,.16),transparent 30%),
            linear-gradient(135deg,#050b18,#071426 45%,#10081f);
          position:relative;
        }
        .app:before{
          content:"";position:fixed;inset:0;pointer-events:none;opacity:.42;
          background-image:radial-gradient(circle,rgba(168,85,247,.75) 1px,transparent 1px),radial-gradient(circle,rgba(0,212,255,.45) 1px,transparent 1px);
          background-size:92px 92px,130px 130px;z-index:0
        }
        .wrap{width:96%;max-width:1780px;margin:auto;position:relative;z-index:1}
        header{height:68px;border-bottom:1px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:space-between;padding:0 34px;background:rgba(4,10,22,.78);backdrop-filter:blur(18px);position:sticky;top:0;z-index:20}
        .brand{display:flex;align-items:center;gap:12px;font-weight:900}
        .badgeLogo{width:42px;height:42px;border-radius:50%;display:grid;place-items:center;background:linear-gradient(135deg,#fff,#a855f7);color:#08101f;font-weight:1000;box-shadow:0 0 22px rgba(168,85,247,.7)}
        .brand span{display:block;font-size:12px;color:#a855f7;letter-spacing:.6px}
        nav{display:flex;gap:46px;align-items:center}
        nav a{color:white;text-decoration:none;font-weight:800;font-size:14px;opacity:.92}
        nav a:first-child{color:#bf5cff;border-bottom:3px solid #bf5cff;padding-bottom:18px}
        .download{padding:12px 21px;border-radius:8px;border:1px solid #b94cff;color:white;text-decoration:none;font-weight:900;background:rgba(168,85,247,.08)}
        .mainGrid{display:grid;grid-template-columns:330px 1fr 390px;gap:24px;padding:18px 0 22px}
        .card{background:rgba(7,18,35,.72);border:1px solid rgba(168,85,247,.45);border-radius:12px;box-shadow:0 0 22px rgba(0,212,255,.08),inset 0 0 40px rgba(168,85,247,.03)}
        .sideProfile{padding:24px;text-align:center;min-height:560px}
        .avatar{width:150px;height:150px;border-radius:50%;object-fit:cover;border:4px solid #a855f7;box-shadow:0 0 40px rgba(168,85,247,.9),0 0 35px rgba(0,212,255,.55);margin:0 auto 14px;background:#111}
        .sideProfile h1{font-size:28px;line-height:1;margin-bottom:10px}
        .purple{color:#b44dff}.blue{color:#00b7ff}.muted{color:#c7d0dd}.small{font-size:13px;line-height:1.6}
        .linkedIcon{width:34px;height:34px;border-radius:7px;background:#0a66c2;display:grid;place-items:center;margin:18px auto 18px;font-weight:900;font-size:22px}
        .sideBtns{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:18px 0}
        .outlineBtn{border:1px solid rgba(255,255,255,.2);border-radius:8px;padding:11px;color:white;text-decoration:none;font-weight:900;background:rgba(255,255,255,.04)}
        .sideList{border-top:1px solid rgba(255,255,255,.1);padding-top:18px;text-align:left;display:grid;gap:12px;color:#d9e3ee;font-size:13px}
        .hero{min-height:310px;padding:22px 14px 0}
        .pill{display:inline-flex;align-items:center;gap:9px;padding:8px 17px;border:1px solid #a855f7;border-radius:999px;color:#c15cff;font-weight:900;font-size:13px;margin-bottom:22px;background:rgba(168,85,247,.08)}
        .dot{width:10px;height:10px;border-radius:50%;background:#b44dff;box-shadow:0 0 18px #b44dff}
        .hero h2{font-size:56px;line-height:1.05;margin-bottom:18px;letter-spacing:-1px}
        .hero h2 span{color:#b44dff}
        .hero p{font-size:18px;line-height:1.6;color:#d9e3ee;max-width:680px}
        .heroBtns{display:flex;gap:24px;margin-top:28px}
        .primary{padding:16px 35px;border-radius:8px;background:linear-gradient(90deg,#d52dff,#7c3aed);color:white;text-decoration:none;font-weight:900;box-shadow:0 0 25px rgba(168,85,247,.35)}
        .secondary{padding:16px 35px;border-radius:8px;border:1px solid rgba(255,255,255,.35);color:white;text-decoration:none;font-weight:900;background:rgba(255,255,255,.03)}
        .infoStrip{display:grid;grid-template-columns:repeat(4,1fr);gap:0;margin-top:26px;overflow:hidden}
        .infoItem{padding:20px 28px;border-right:1px solid rgba(255,255,255,.16)}
        .infoItem:last-child{border-right:0}.infoItem strong{display:block;margin-bottom:9px}.infoItem p{color:#d9e3ee;line-height:1.5}
        .topCards{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:22px}.miniCard{padding:24px}.miniCard h3{font-size:20px;margin-bottom:18px}.miniCard p,.miniCard li{color:#d9e3ee;line-height:1.7}.miniCard ul{list-style:none;display:grid;gap:12px}.miniCard li:before{content:"✦";color:#b44dff;margin-right:10px}
        .profileRight{display:grid;grid-template-columns:1fr 95px;gap:22px;align-items:center}.profileRight img{width:94px;height:94px;border-radius:50%;object-fit:cover;border:3px solid #a855f7;box-shadow:0 0 28px rgba(168,85,247,.8)}
        .linkedinRow{display:flex;justify-content:space-between;align-items:end;margin-top:12px}.linkedinLower{margin-top:24px;display:inline-grid;place-items:center}.linkedinBtn{padding:12px 26px;border-radius:8px;background:linear-gradient(90deg,#d52dff,#7c3aed);color:white;text-decoration:none;font-weight:900}
        .tools{display:grid;grid-template-columns:1.1fr 1.5fr;gap:24px;margin-top:18px}.toolIcons{display:flex;justify-content:space-between;gap:12px;margin-top:18px}.tool{text-align:center;color:#d9e3ee;font-size:12px}.tool span{font-size:34px;display:block;margin-bottom:8px}.chips{display:flex;flex-wrap:wrap;gap:12px;margin-top:18px}.chip{padding:9px 14px;border:1px solid rgba(255,255,255,.18);border-radius:8px;color:#d9e3ee;font-weight:800;font-size:12px;background:rgba(255,255,255,.04)}
        .sectionTitle{font-size:24px;border-left:5px solid #b44dff;padding-left:12px;margin-bottom:14px}.filters{display:flex;gap:15px;margin-bottom:14px}.filter{padding:11px 26px;border-radius:8px;border:1px solid rgba(255,255,255,.24);background:rgba(255,255,255,.04);color:white;font-weight:900}.filter:first-child{background:linear-gradient(90deg,#d52dff,#7c3aed)}
        .projects{grid-column:1/3;padding:12px}.projectGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px}.project{display:grid;grid-template-columns:160px 1fr;gap:18px;padding:14px;min-height:240px}.project img{width:160px;height:190px;object-fit:cover;border-radius:12px;background:white}.project h3{font-size:20px;margin:8px 0}.project p{color:#d9e3ee;line-height:1.5;font-size:14px}.project ul{list-style:none;margin:12px 0;display:grid;gap:6px}.project li{font-size:13px;color:#d9e3ee}.project li:before{content:"✓";color:#3dff7a;margin-right:8px}.tag{display:inline-block;padding:4px 8px;border-radius:6px;background:#a855f7;font-size:11px;font-weight:900;margin-left:8px}.projectFooter{display:flex;justify-content:space-between;align-items:center;margin-top:14px;color:#c7d0dd;font-size:12px}.sheet{padding:10px 16px;border-radius:7px;border:1px solid #b44dff;color:#eecbff;text-decoration:none;font-weight:900}
        .bottomGrid{display:grid;grid-template-columns:1.2fr 1.1fr 1.2fr 1fr 1.2fr;gap:14px;margin:14px 0}.bottomBox{padding:18px}.bottomBox h3{font-size:18px;margin-bottom:12px}.bottomBox p,.bottomBox li{font-size:14px;color:#d9e3ee;line-height:1.7}.bottomBox ul{list-style:none}.bottomBox li:before{content:"⊙";color:#b44dff;margin-right:9px}.quote{text-align:center;padding:9px;border-radius:8px;border:1px solid rgba(168,85,247,.45);font-size:22px;font-weight:900;font-style:italic;color:#f2eaff}.footer{display:flex;justify-content:space-between;color:#c7d0dd;font-size:13px;padding:12px 0 22px}
        .modalOverlay,.imageOverlay{position:fixed;inset:0;background:rgba(0,0,0,.86);z-index:100;display:flex;align-items:center;justify-content:center;padding:24px;backdrop-filter:blur(12px)}.modal{width:min(1100px,94vw);max-height:88vh;overflow:auto;padding:26px}.close{position:absolute;top:22px;right:22px;width:46px;height:46px;border-radius:50%;border:0;background:#b44dff;color:white;font-size:26px;font-weight:900;cursor:pointer}.gallery{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:18px;margin-top:22px}.gallery img{width:100%;height:230px;object-fit:contain;background:white;border-radius:12px;padding:10px;cursor:pointer}.imageBox{position:relative}.imageBox img{max-width:92vw;max-height:86vh;background:white;padding:12px;border-radius:12px}.imageClose{position:fixed;top:24px;right:24px;width:55px;height:55px;border:0;border-radius:50%;background:#b44dff;color:white;font-size:30px;font-weight:900;z-index:200;cursor:pointer}
        @media(max-width:1100px){.mainGrid{grid-template-columns:1fr}.projects{grid-column:auto}.projectGrid,.infoStrip,.tools,.bottomGrid,.topCards{grid-template-columns:1fr}.sideProfile{min-height:auto}nav{display:none}.hero h2{font-size:42px}.project{grid-template-columns:1fr}.project img{width:100%;height:220px}.profileRight{grid-template-columns:1fr}.footer{flex-direction:column;gap:10px}.wrap{width:92%}header{padding:0 16px}.download{display:none}}
      `}</style>

      <header>
        <div className="brand"><div className="badgeLogo">MHS</div><div>MHS ENGINEERING<span>PORTFOLIO</span></div></div>
        <nav><a href="#top">Home</a><a href="#about">About</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#timeline">Timeline</a><a href="#apprenticeship">Apprenticeship</a><a href="#contact">Contact</a></nav>
        <a className="download" href="/cv.pdf" download>⌄ Download CV</a>
      </header>

      <main className="wrap mainGrid">
        <aside className="card sideProfile">
          <img className="avatar" src="/profile/photo.png" alt="Mohammad Hashim Siddique" />
          <h1>Mohammad Hashim Siddique</h1>
          <strong className="purple">Mechanical Engineering Student</strong>
          <p className="small muted" style={{marginTop:16}}>Passionate about CAD design, product development and problem-solving. Building practical solutions and preparing for a career in engineering.</p>
          <a className="linkedIcon" href="https://www.linkedin.com" target="_blank" rel="noreferrer">in</a>
          <div className="sideBtns"><a className="outlineBtn" href="https://github.com/hashimsiddique567-boop" target="_blank" rel="noreferrer">GitHub</a><a className="outlineBtn" href="mailto:hashimsiddique567@gmail.com">Email</a></div>
          <div className="sideList"><div>⌖ Lancashire, UK</div><div>⌘ Runshaw College Student</div><div>✚ Seeking Apprenticeship</div></div>
        </aside>

        <section className="hero">
          <div className="pill"><span className="dot"></span>Mechanical Engineering Portfolio</div>
          <h2>Designing Today,<br /><span>Building</span> Tomorrow.</h2>
          <p>I design and develop practical engineering projects using CAD, turning ideas into real-world solutions.</p>
          <div className="heroBtns"><a className="primary" href="#projects">View My Projects →</a><a className="secondary" href="#contact">✉ Contact Me</a></div>
          <div className="infoStrip card"><div className="infoItem"><strong>Currently Studying</strong><p>Level 3 Engineering<br />Runshaw College</p></div><div className="infoItem"><strong>Seeking</strong><p>Mechanical Engineering<br />Apprenticeship</p></div><div className="infoItem"><strong>Location</strong><p>Lancashire<br />United Kingdom</p></div><div className="infoItem"><strong>Goal</strong><p>Build skills, gain experience<br />and make an impact.</p></div></div>
          <div className="tools" id="skills"><div className="card miniCard"><h3>CAD & Engineering Tools</h3><div className="toolIcons"><div className="tool"><span>3D</span>SolidWorks</div><div className="tool"><span>📐</span>Technical<br/>Drawings</div><div className="tool"><span>▣</span>Assemblies</div><div className="tool"><span>🛠</span>Workshop<br/>Skills</div></div></div><div className="card miniCard"><h3>Core Skills</h3><div className="chips"><span className="chip">CAD Design</span><span className="chip">Product Development</span><span className="chip">Technical Drawings</span><span className="chip">Problem Solving</span><span className="chip">Creativity</span><span className="chip">Attention to Detail</span><span className="chip">Teamwork</span><span className="chip">Time Management</span></div></div></div>
        </section>

        <aside className="rightCol">
          <div className="topCards"><div className="card miniCard"><h3>Availability</h3><p><strong>Seeking Mechanical Engineering Apprenticeship</strong></p><p>Start Date: September 2025</p><p>Location: Lancashire, UK</p></div><div className="card miniCard"><h3>At a Glance</h3><ul><li>3+ Major Projects Completed</li><li>100+ CAD Hours Logged</li><li>Strong Problem Solver</li></ul></div></div>
          <div className="card miniCard" style={{marginTop:24}}><div className="profileRight"><div><h3>Profile</h3><p><strong>Name:</strong><br/>Mohammad Hashim Siddique</p><p><strong>Role:</strong><br/>Mechanical Engineering Student</p><p><strong>College:</strong><br/>Runshaw College</p><div className="linkedinRow"><a className="linkedIcon linkedinLower" href="https://www.linkedin.com" target="_blank" rel="noreferrer">in</a><a className="linkedinBtn" href="https://www.linkedin.com" target="_blank" rel="noreferrer">View LinkedIn Profile →</a></div></div><img src="/profile/photo.png" alt="profile" /></div></div>
          <div className="card miniCard" id="about" style={{marginTop:18}}><h3>Why Mechanical Engineering?</h3><p>I enjoy turning ideas into practical solutions and seeing designs develop from concept to finished products. Engineering challenges me to think creatively and solve real-world problems.</p></div>
          <div className="card miniCard" id="apprenticeship" style={{marginTop:18}}><h3>Apprenticeship Goals</h3><ul><li>Gain hands-on industry experience</li><li>Learn from skilled engineers</li><li>Develop CAD and workshop skills</li><li>Build a strong engineering career</li></ul></div>
        </aside>

        <section className="card projects" id="projects"><h2 className="sectionTitle">Featured Projects</h2><div className="filters"><button className="filter">All</button><button className="filter">CAD</button><button className="filter">Mechanisms</button><button className="filter">Product Design</button></div><div className="projectGrid">{projects.map((p)=><article className="card project" key={p.title} onClick={()=>setSelectedProject(p)}><img src={p.image} alt={p.title}/><div><h3>{p.title}<span className="tag">{p.tag}</span></h3><p>{p.desc}</p><ul>{p.points.map(point=><li key={point}>{point}</li>)}</ul><div className="projectFooter"><span>◷ {p.hours}</span><span>{p.type}</span><a className="sheet">Project Sheet ⇩</a></div></div></article>)}</div></section>

        <section className="bottomGrid"><div className="card bottomBox"><h3>Qualifications / Certifications</h3><ul><li>Level 3 Engineering In Progress</li><li>GCSE Maths</li><li>GCSE Science</li><li>Workshop Safety Training</li></ul></div><div className="card bottomBox"><h3>Currently Learning</h3><ul><li>Advanced CAD Assemblies</li><li>Manufacturing Processes</li><li>Mechanical Systems</li><li>Engineering Mathematics</li></ul></div><div className="card bottomBox" id="timeline"><h3>Engineering Timeline</h3><p><strong>2023</strong> Started Level 3 Engineering</p><p><strong>2024</strong> First CAD Projects</p><p><strong>2025</strong> Built Lamp, Phone Stand & Piano Stool</p><p><strong>Now</strong> Seeking Apprenticeship</p></div><div className="card bottomBox" id="contact"><h3>Response Time</h3><p>I aim to respond to all enquiries within <strong className="purple">24 - 48 hours.</strong></p></div><div className="card bottomBox"><h3>Project Sheets</h3><p>Download detailed PDF sheets for each project including process, drawings and outcomes.</p></div></section>
        <div className="quote">“ Engineering is turning ideas into practical solutions. ”</div>
        <div className="footer"><span>© 2025 MHS Engineering Portfolio. All rights reserved.</span><span>Designed & Built with 💜 by Mohammad Hashim Siddique</span><a href="#top" className="muted">Back to Top ↑</a></div>
      </main>

      {selectedProject && <div className="modalOverlay" onClick={()=>setSelectedProject(null)}><div className="card modal" onClick={(e)=>e.stopPropagation()}><button className="close" onClick={()=>setSelectedProject(null)}>×</button><h2>{selectedProject.title}</h2><p className="muted" style={{marginTop:12}}>{selectedProject.desc}</p><div className="gallery">{selectedProject.images.map(img=><img key={img} src={img} alt="project" onClick={()=>setSelectedImage(img)}/>)}</div></div></div>}
      {selectedImage && <div className="imageOverlay" onClick={()=>setSelectedImage(null)}><button className="imageClose" onClick={()=>setSelectedImage(null)}>×</button><div className="imageBox" onClick={(e)=>e.stopPropagation()}><img src={selectedImage} alt="Full project" /></div></div>}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Portfolio />);
