export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
  embedUrl: string;
  description: string;
  role: string;
  deliverables: string[];
  year: string;
  badge?: string;
  views?: string;
  aspectRatio?: "9:16" | "16:9";
  isVertical?: boolean;
  expertise?: string[];
  openExternally?: boolean;
}

export const CATEGORIES = [
  "All Projects",
  "Brand Films",
  "Digital Commercials",
  "Advertisements",
  "Corporate Films",
  "Colour Grading",
] as const;

export const FEATURED_SHOWCASE_VIDEOS = [
  {
    id: "showcase-channel",
    title: "Explore My YouTube Channel",
    client: "Kunal",
    category: "YouTube Channel",
    badge: "Creator Channel",
    aspectRatio: "9:16",
    rotation: -3,
    thumbnail: "https://img.youtube.com/vi/j7R27wLLBr0/hqdefault.jpg",
    videoUrl: "https://youtube.com/@ksnamli?si=Xhzz7JyeufiHqJYS",
    embedUrl: "",
    channelUrl: "https://youtube.com/@ksnamli?si=Xhzz7JyeufiHqJYS",
    description: "Visit my YouTube channel to explore my video editing and storytelling work.",
    role: "Video Editor & Colourist",
    deliverables: ["Video Editing", "Colour Grading", "Visual Storytelling"],
    year: "2026",
    views: "Visit Channel"
  },
  {
    id: "showcase-video",
    title: "Watch My Showreel",
    client: "Kunal",
    category: "Showreel",
    badge: "Featured Video",
    aspectRatio: "9:16",
    rotation: 0,
    thumbnail: "https://img.youtube.com/vi/j7R27wLLBr0/hqdefault.jpg",
    videoUrl: "https://youtu.be/j7R27wLLBr0?si=hSxR9EgovqUy3UoC",
    embedUrl: "https://www.youtube-nocookie.com/embed/j7R27wLLBr0?autoplay=1",
    description: "A showcase of cinematic editing, colour grading, and visual storytelling.",
    role: "Video Editor & Colourist",
    deliverables: ["Cinematic Editing", "Colour Grading", "Visual Storytelling"],
    year: "2026",
    views: "Watch Video"
  },
  {
    id: "showcase-short",
    title: "Watch My YouTube Short",
    client: "Kunal",
    category: "Short-Form Video",
    badge: "YouTube Short",
    aspectRatio: "9:16",
    rotation: 3,
    thumbnail: "https://img.youtube.com/vi/dFTLjkvk6oU/hqdefault.jpg",
    videoUrl: "https://youtube.com/shorts/dFTLjkvk6oU?si=QM1dm5Ojrmyzht-q",
    embedUrl: "https://www.youtube-nocookie.com/embed/dFTLjkvk6oU?autoplay=1",
    description: "A short-form edit showcasing creative pacing and polished visuals.",
    role: "Video Editor & Colourist",
    deliverables: ["Short-Form Editing", "Creative Pacing", "Visual Polish"],
    year: "2026",
    views: "Watch Short"
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "adani-mundra",
    title: "Adani Mundra",
    client: "Adani Group",
    category: "Brand Films",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=900&q=80",
    videoUrl: "https://youtube.com/@ksnamli?si=Xhzz7JyeufiHqJYS",
    embedUrl: "",
    openExternally: true,
    description:
      "Worked on the Adani Mundra project, contributing to cinematic brand films through professional video editing, colour correction, cinematic grading, and post-production. Focused on creating visually consistent sequences, maintaining narrative flow, and delivering polished content aligned with the project's communication objectives.",
    role: "Video Editor & Colourist",
    deliverables: ["Cinematic Editing", "Colour Grading", "Visual Storytelling"],
    expertise: ["Cinematic Editing", "Colour Grading", "Visual Storytelling"],
    year: "2026",
    badge: "Brand Film / Corporate Film",
    views: "Official Master",
    aspectRatio: "9:16",
    isVertical: true
  },
  {
    id: "swati-group",
    title: "Swati Group",
    client: "Swati Group",
    category: "Digital Commercials",
    thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    videoUrl: "https://youtu.be/j7R27wLLBr0?si=hSxR9EgovqUy3UoC",
    embedUrl: "https://www.youtube-nocookie.com/embed/j7R27wLLBr0?autoplay=1",
    description:
      "Created engaging digital advertising content through cinematic editing, visual enhancement, professional colour grading, and dynamic storytelling. Focused on presenting the brand through impactful visuals, seamless transitions, and refined post-production.",
    role: "Video Editor & Colourist",
    deliverables: ["Commercial Editing", "Cinematic B-Roll", "Colour Grading"],
    expertise: ["Commercial Editing", "Cinematic B-Roll", "Colour Grading"],
    year: "2026",
    badge: "Digital Video Commercial",
    views: "High Impact",
    aspectRatio: "9:16",
    isVertical: true
  },
  {
    id: "mpokket-ad",
    title: "mPokket",
    client: "mPokket",
    category: "Digital Commercials",
    thumbnail: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
    videoUrl: "https://youtube.com/shorts/dFTLjkvk6oU?si=QM1dm5Ojrmyzht-q",
    embedUrl: "https://www.youtube-nocookie.com/embed/dFTLjkvk6oU?autoplay=1",
    description:
      "Contributed to the post-production of a digital commercial, focusing on creative editing, visual consistency, professional colour correction, and engaging storytelling.",
    role: "Video Editor & Colourist",
    deliverables: ["Advertisement Editing", "Colour Correction", "Post-Production"],
    expertise: ["Advertisement Editing", "Colour Correction", "Post-Production"],
    year: "2026",
    badge: "Digital Advertisement",
    views: "Social Campaign",
    aspectRatio: "9:16",
    isVertical: true
  },
  {
    id: "troth-insurance",
    title: "Troth Insurance",
    client: "Troth Insurance",
    category: "Advertisements",
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    videoUrl: "https://youtu.be/j7R27wLLBr0",
    embedUrl: "https://www.youtube-nocookie.com/embed/j7R27wLLBr0?autoplay=1",
    description:
      "Worked on advertisement post-production, transforming footage into polished promotional content through professional editing, visual enhancement, and colour grading.",
    role: "Video Editor & Colourist",
    deliverables: ["Commercial Editing", "Colour Grading", "Visual Enhancement"],
    expertise: ["Commercial Editing", "Colour Grading", "Visual Enhancement"],
    year: "2025",
    badge: "Advertisement",
    views: "Promotional",
    aspectRatio: "9:16",
    isVertical: true
  },
  {
    id: "ab-jewels",
    title: "AB Jewels",
    client: "AB Jewels",
    category: "Advertisements",
    thumbnail: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
    videoUrl: "https://youtube.com/shorts/dFTLjkvk6oU",
    embedUrl: "https://www.youtube-nocookie.com/embed/dFTLjkvk6oU?autoplay=1",
    description:
      "Contributed to an advertisement project, emphasizing elegant visuals, cinematic pacing, professional colour grading, and refined visual presentation.",
    role: "Video Editor & Colourist",
    deliverables: ["Cinematic Editing", "Colour Grading", "Advertisement"],
    expertise: ["Cinematic Editing", "Colour Grading", "Advertisement"],
    year: "2025",
    badge: "Advertisement",
    views: "Refined Cut",
    aspectRatio: "9:16",
    isVertical: true
  }
];

export const STORY_VIDEO = {
  title: "Kunal — Creative Journey & Showreel 2026",
  thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&q=85",
  videoUrl: "https://youtu.be/j7R27wLLBr0",
  embedUrl: "https://www.youtube-nocookie.com/embed/j7R27wLLBr0?autoplay=1",
  duration: "03:42",
};

export const BRAND_CLIENTS = [
  { name: "Adani", category: "Corporate", logoText: "ADANI" },
  { name: "Swati Group", category: "Real Estate", logoText: "SWATI" },
  { name: "mPokket", category: "Fintech", logoText: "mPOKKET" },
  { name: "Troth", category: "Insurance", logoText: "TROTH" },
  { name: "AB Jewels", category: "Luxury", logoText: "AB JEWELS" },
  { name: "Red Bull Media", category: "Lifestyle", logoText: "RED BULL" },
  { name: "Sony Music", category: "Entertainment", logoText: "SONY MUSIC" },
  { name: "Spotify Studios", category: "Audio", logoText: "SPOTIFY" },
];
