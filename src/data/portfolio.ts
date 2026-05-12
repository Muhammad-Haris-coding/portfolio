export const navLinks = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "ai-lab", label: "AI Lab" },
  { id: "contact", label: "Contact" },
] as const

export const education = [
  {
    title: "Bachelor in Computer Science",
    detail: "Core CS foundations, algorithms, and software engineering.",
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    detail: "Models, training pipelines, and intelligent automation.",
  },
  {
    title: "Computer Vision & CNN",
    detail: "Convolutional networks, feature learning, and visual AI.",
  },
  {
    title: "Flutter Development",
    detail: "Cross-platform mobile apps with polished UI and state management.",
  },
  {
    title: "Web Development",
    detail: "Modern frontends, responsive design, and interactive experiences.",
  },
] as const

export const aiSkills = [
  { name: "Artificial Intelligence", level: 92 },
  { name: "Machine Learning", level: 90 },
  { name: "Computer Vision", level: 88 },
  { name: "CNN", level: 87 },
  { name: "OpenCV", level: 85 },
  { name: "Python", level: 94 },
  { name: "Data Processing", level: 89 },
] as const

export const devSkills = [
  { name: "Flutter", level: 88 },
  { name: "Firebase", level: 82 },
  { name: "HTML", level: 95 },
  { name: "CSS", level: 92 },
  { name: "JavaScript", level: 88 },
  { name: "Tailwind CSS", level: 90 },
] as const

export const projects = [
  {
    title: "AI Market Research Tool",
    description:
      "Intelligent research assistant that aggregates signals, summarizes trends, and surfaces actionable market insights.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80&auto=format&fit=crop",
    stack: ["Python", "LLMs", "APIs", "Analytics"],
    github: "https://github.com",
    live: "https://github.com",
  },
  {
    title: "CNN Image Classifier",
    description:
      "Deep learning pipeline for image classification with trained CNNs, evaluation metrics, and clean inference UX.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&q=80&auto=format&fit=crop",
    stack: ["TensorFlow/Keras", "Python", "OpenCV", "CNN"],
    github: "https://github.com",
    live: "https://github.com",
  },
  {
    title: "Champion Trophy Website",
    description:
      "Premium promotional site with motion design, responsive layout, and high-impact visuals for a trophy brand.",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c62306601b7?w=900&q=80&auto=format&fit=crop",
    stack: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com",
    live: "https://github.com",
  },
  {
    title: "Flutter Mobile Apps",
    description:
      "Production-ready mobile experiences with Firebase backends, offline-aware flows, and refined component systems.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=80&auto=format&fit=crop",
    stack: ["Flutter", "Firebase", "Dart"],
    github: "https://github.com",
    live: "https://github.com",
  },
  {
    title: "Smart Analytics Dashboard",
    description:
      "Futuristic SaaS-style dashboard with live charts, anomaly highlights, and AI-assisted summaries.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format&fit=crop",
    stack: ["React", "D3-style SVG", "Tailwind"],
    github: "https://github.com",
    live: "https://github.com",
  },
] as const

export const socialLinks = {
  email: "mailto:muhammad.haris@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
}
