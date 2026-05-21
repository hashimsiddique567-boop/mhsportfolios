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
    stats: ["18+ Hours", "9 CAD Images", "Assembly Design", "Technical Drawing"],
    problem:
      "The challenge was to design an adjustable lamp that could move smoothly while remaining stable and practical for everyday use.",
    process:
      "I created parts in CAD, built the assembly, checked the movement, refined the structure and produced technical drawings.",
    learned:
      "This improved my understanding of assemblies, movement mechanisms, component relationships and designing for real-world use.",
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
    stats: ["Adjustable Mechanism", "8 CAD Images", "PLA Concept", "Product Design"],
    problem:
      "The aim was to create a stable phone stand that could support a phone at different angles.",
    process:
      "I designed the individual parts, tested the shape, developed the assembly and considered how the phone would be supported.",
    learned:
      "This project helped improve my CAD modelling, mechanism design and practical product development skills.",
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
    stats: ["Hinge Design", "9 CAD Images", "Folding Mechanism", "Assembly Work"],
    problem:
      "The challenge was to design a folding stool mechanism that could move correctly, support weight and remain practical.",
    process:
      "I focused on the hinge, movement path, component positioning and the structure of the stool.",
    learned:
      "This improved my understanding of hinges, mechanical movement, assemblies and functional product design.",
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
    stats: ["Problem Solving", "8 CAD Images", "Redesign", "Testing Ideas"],
    problem:
      "This work focused on solving engineering design problems by identifying weaknesses and improving the design.",
    process:
      "I used sketches, CAD modelling, redesign, testing ideas and optimisation to create better solutions.",
    learned:
      "This strengthened my problem-solving, creative thinking and ability to improve designs based on practical requirements.",
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
    const timer = setTimeout(() => setLoading(false), 1400);
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
            animation:load 1.4s linear;
          }
          @keyframes load{from{width:0}to{width:100%}}
          @keyframes pulse{50%{transform:scale(1.06)}}
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
