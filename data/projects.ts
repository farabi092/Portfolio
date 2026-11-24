// Project content for the Selected Projects section.
//
// Facts here come from each repository's README or the live app.
// Fields left empty are not verified yet. Fill them in when you can:
//   - technologies: [] shows no technology tags
//   - image missing shows a plain typographic panel instead of a picture
//   - demo missing shows no "Live Demo" link

export type ProjectImage = {
  src: string; // file inside public/projects, e.g. "/projects/formchat.png"
  alt: string; // describes the picture for screen readers
  fit?: "cover" | "contain"; // "contain" shows the whole picture, uncropped
};

export type Project = {
  number: string;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
  image?: ProjectImage;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Neural Network Project",
    description:
      "A Variational Autoencoder that clusters hybrid-language music, with t-SNE and UMAP visualizations and a PCA baseline.",
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "scikit-learn",
      "Google Colab",
    ],
    github: "https://github.com/farabi092/CSE425-Neural-Network-Project",
    image: {
      src: "/projects/neural_network_project.jpeg",
      alt: "t-SNE plot of the Conditional VAE latent space, with points coloured by cluster",
      fit: "contain",
    },
  },
  {
    number: "02",
    title: "Zero-Knowledge Platform",
    description:
      "A secure messaging and social platform built for a cryptography course, with encrypted posts and messages, email OTP and JWT authentication.",
    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "PyCryptodome",
      "Bootstrap",
    ],
    github: "https://github.com/farabi092/CSE447-Project---Zero-Knowledge",
    image: {
      src: "/projects/ZK_image.jpeg",
      alt: "ZK Network interface with an encrypt data panel and a feed of encrypted messages",
    },
  },
  {
    number: "03",
    title: "ASCII Image Generator",
    description:
      "Turns PNG, JPG and WEBP images into colored ASCII art, with adjustable detail and color options, and export as text or PNG.",
    technologies: ["Python", "Flask", "Pillow (PIL)", "HTML5", "Tailwind CSS", "JavaScript"], // not verified yet
    github: "https://github.com/farabi092/Ascii-Image-Generator-",
    demo: "https://ascii-image-generator-gxo.vercel.app/",
    image: {
      src: "/projects/ascii_studio.png",
      alt: "ASCII Studio interface showing a colored ASCII art preview next to detail and color controls",
    },
  },
  {
    number: "04",
    title: "AI Research Assistant",
    description:
      "A research tool for organizing academic papers, generating AI summaries, comparing studies in a literature matrix and working with supervisors.",
    technologies: [
      "Flask",
      "FastAPI",
      "PostgreSQL",
      "Tailwind CSS",
      "Gemini API",
    ],
    github: "https://github.com/rafitboo/ai-research-assistant",
    demo: "https://ai-research-assistant-theta-nine.vercel.app/login",
    image: {
      src: "/projects/ai_research_assistant_.jpeg",
      alt: "AI Research Assistant dashboard showing paper and project counts, recent papers and projects",
    },
  },
  {
    number: "05",
    title: "FormChat",
    description:
      "A form builder that collects responses through a chatbot-style widget, shared by link or embedded on any website with one script tag.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Zod"],
    github: "https://github.com/farabi092/FormChat",
    demo: "https://formchat-pi.vercel.app/",
    image: {
      src: "/projects/Formchat.png",
      alt: "FormChat landing page with the headline Collect responses with a chatbot, not a boring form",
    },
  },
  {
    number: "06",
    title: "Machine Learning Projects",
    description: "A collection of machine learning projects covering classification, regression, customer churn prediction, and NLP sentiment analysis.", // not verified yet
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Jupyter Notebook"], // not verified yet
    github: "https://github.com/farabi092/Machine_Learning_Projects",
    image: {
        src: "/projects/ml_project.png",
        alt: "Machine Learning Projects landing page with the headline A collection of machine learning projects.",
    },
  },
];
