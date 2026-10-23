export const profile = {
  name: "Muhammad Haris",
  role: "Computer Vision & Machine Learning",
  roleDetail: "Python · PyTorch · OpenCV · YOLO",
  location: "Mardan, Khyber Pakhtunkhwa, Pakistan",
  university: "University of Engineering and Technology (UET), Mardan",
  degree: "BS Computer Science (Artificial Intelligence)",
  cgpa: "3.83 / 4.00",
  availability:
    "Open to paid CV/ML internships, junior engineering roles, and paid project work",
  summary:
    "AI undergraduate at UET Mardan focused on computer vision and machine learning. I build practical vision systems — object detection, image classification, visual search, segmentation, and depth estimation — and I have completed a structured Deep Learning internship at AlgoHub, where I shipped weekly projects and a smart agriculture capstone.",
} as const

export const socialLinks = {
  github: "https://github.com/Muhammad-Haris-coding",
  linkedin: "https://www.linkedin.com/in/muhammad-haris35",
  portfolioRepo: "https://github.com/Muhammad-Haris-coding/portfolio",
  cvPath: "/Muhammad-Haris-CV.txt",
} as const

export const navLinks = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const

export const experience = [
  {
    title: "Deep Learning Intern",
    org: "AlgoHub SMC Pvt. Ltd.",
    type: "Internship",
    period: "Jun 2026 – Aug 2026",
    points: [
      "Completed a structured, weekly Deep Learning and Computer Vision internship programme.",
      "Built projects in image classification with CNNs, face mask detection, plant and crop disease prediction, and face recognition / verification.",
      "Implemented YOLOv8 object detection on a vehicle dataset (12 classes).",
      "Delivered a Smart Agriculture Monitoring System as the Week 8 capstone project.",
    ],
  },
] as const

export const certifications = [
  {
    title: "Deep Learning",
    org: "AlgoHub SMC Pvt. Ltd.",
    period: "Issued Sep 2026",
    detail:
      "Certification awarded on completion of the Deep Learning internship programme at AlgoHub.",
  },
] as const

export const education = [
  {
    title: "BS Computer Science (Artificial Intelligence)",
    org: "University of Engineering and Technology (UET), Mardan, Pakistan",
    period: "Sep 2023 – Sep 2027 (expected)",
    detail:
      "Undergraduate degree specialising in Artificial Intelligence, with a CGPA of 3.83 / 4.00. Coursework and project work centred on machine learning, deep learning, and computer vision.",
  },
] as const

export const educationFocus = [
  "Computer Vision",
  "Deep Learning",
  "Machine Learning",
  "Algorithms & Data Structures",
  "Data Analysis",
  "Software Engineering",
] as const

export const skillGroups = [
  {
    title: "Computer Vision",
    skills: [
      "OpenCV",
      "Object Detection (YOLOv8 / Ultralytics)",
      "Image Classification",
      "Image Segmentation (SAM)",
      "Depth Estimation (Depth Anything V2)",
      "Face Recognition & Verification",
      "Visual Search (CLIP + FAISS)",
      "Image & Video Processing",
    ],
  },
  {
    title: "Machine Learning & Deep Learning",
    skills: [
      "PyTorch",
      "TensorFlow / Keras",
      "CNNs (ResNet, MobileNetV3)",
      "Model Training, Evaluation & Inference",
      "Transfer Learning",
      "Detection Transformers (DETR)",
    ],
  },
  {
    title: "Programming & Data",
    skills: [
      "Python",
      "C / C++",
      "NumPy",
      "Pandas",
      "Data Preprocessing & Analysis",
      "Jupyter Notebooks",
    ],
  },
  {
    title: "Tools & Delivery",
    skills: [
      "Git & GitHub",
      "FastAPI",
      "Streamlit",
      "Gradio",
      "Docker",
      "Hugging Face",
      "Roboflow",
      "pytest",
    ],
  },
] as const

export type Project = {
  title: string
  category: string
  description: string
  highlights: readonly string[]
  stack: readonly string[]
  github: string
  live?: string
}

export const projects: readonly Project[] = [
  {
    title: "CLIP Visual Search with FAISS",
    category: "Visual Search · Embeddings",
    description:
      "Natural-language image retrieval system. Images are embedded with CLIP and indexed in FAISS so a text query returns the most semantically similar images, served through a Gradio interface.",
    highlights: [
      "Evaluated on 1,000 images across 50 classes",
      "69.7% zero-shot accuracy, improving to 74.1% with prompt engineering",
      "Evaluation scripts and modular source code included in the repository",
    ],
    stack: ["Python", "CLIP", "FAISS", "Gradio", "PyTorch"],
    github: "https://github.com/Muhammad-Haris-coding/clip-visual-search_local",
  },
  {
    title: "Smart Agriculture Monitoring System",
    category: "Computer Vision · Application",
    description:
      "End-to-end monitoring system for crop health. A MobileNetV3 classifier identifies plant diseases across 38 PlantVillage classes, exposed through a FastAPI backend with a Streamlit interface and Docker packaging.",
    highlights: [
      "38-class plant disease classification (PlantVillage)",
      "FastAPI API layer with a Streamlit front end",
      "Automated test suite covering the API, schemas, and vision pipeline",
    ],
    stack: ["Python", "MobileNetV3", "FastAPI", "Streamlit", "Docker"],
    github:
      "https://github.com/Muhammad-Haris-coding/Smart-Agriculture-Monitoring-System",
  },
  {
    title: "3D-Aware Visual Spatial Analysis",
    category: "Detection · Segmentation · Depth",
    description:
      "Multi-model vision pipeline that combines object detection, segmentation, and monocular depth estimation to build a 3D-aware understanding of a scene, with visualisations of the combined output.",
    highlights: [
      "Combines YOLO detection, SAM segmentation, and Depth Anything V2",
      "Produces 3D visualisations from ordinary images and video",
      "Documented pipeline with a recorded demonstration output",
    ],
    stack: ["Python", "YOLO", "SAM", "Depth Anything V2", "OpenCV"],
    github:
      "https://github.com/Muhammad-Haris-coding/3d-aware-visual-spatial-analysis",
  },
  {
    title: "Depth Anything V2 Inference",
    category: "Depth Estimation",
    description:
      "PyTorch implementation of Depth Anything V2 for monocular depth estimation from a single RGB image, using a DINOv2-based feature extractor and a DPT-style dense prediction head.",
    highlights: [
      "Single-image depth estimation pipeline in PyTorch",
      "DINOv2 backbone with DPT-style dense depth prediction",
      "Structured as a clean, reusable inference implementation",
    ],
    stack: ["Python", "PyTorch", "DINOv2", "Depth Anything V2"],
    github:
      "https://github.com/Muhammad-Haris-coding/depth-anything-v2-inference",
  },
  {
    title: "Deep Learning Internship Projects — AlgoHub",
    category: "Internship Portfolio",
    description:
      "The weekly project collection from my Deep Learning internship at AlgoHub: CNN image classification, face mask detection, plant and crop disease prediction, face recognition and verification, and YOLOv8 vehicle detection.",
    highlights: [
      "Eight weeks of structured, reviewed project work",
      "YOLOv8 vehicle detection across 12 classes",
      "Includes the Smart Agriculture capstone build",
    ],
    stack: ["Python", "PyTorch", "YOLOv8", "OpenCV", "CNNs"],
    github:
      "https://github.com/Muhammad-Haris-coding/deepLearning-internship-AlgoHub",
  },
  {
    title: "DETR Object Detection",
    category: "Detection Transformers",
    description:
      "Study and implementation of Detection Transformers (DETR): the theoretical foundations of end-to-end, set-based object detection alongside practical inference implementations.",
    highlights: [
      "End-to-end transformer-based object detection",
      "Covers both the theory and runnable inference code",
      "Contrasts DETR with conventional detector pipelines",
    ],
    stack: ["Python", "PyTorch", "Transformers", "Jupyter"],
    github: "https://github.com/Muhammad-Haris-coding/DETR_Object_Detection",
  },
]
