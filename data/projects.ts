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
    id: "kunal-youtube-channel",
    title: "Explore My YouTube Channel",
    client: "Kunal Singh",
    category: "Brand Films",
    thumbnail: "https://img.youtube.com/vi/j7R27wLLBr0/hqdefault.jpg",
    videoUrl: "https://youtube.com/@ksnamli?si=Xhzz7JyeufiHqJYS",
    embedUrl: "",
    openExternally: true,
    description:
      "Explore Kunal Singh's YouTube channel for more video editing, colour grading, and visual storytelling work.",
    role: "Video Editor & Colourist",
    deliverables: ["Video Editing", "Colour Grading", "Visual Storytelling"],
    expertise: ["Video Editing", "Colour Grading", "Visual Storytelling"],
    year: "2026",
    badge: "YouTube Channel",
    views: "Visit Channel",
    aspectRatio: "9:16",
    isVertical: true
  },
  {
    id: "blackmagic-quest-2",
    title: "Blackmagic | Quest 2 | Aevy Cohort 14",
    client: "Kunal Singh",
    category: "Digital Commercials",
    thumbnail: "https://img.youtube.com/vi/j7R27wLLBr0/maxresdefault.jpg",
    videoUrl: "https://youtu.be/j7R27wLLBr0?si=hSxR9EgovqUy3UoC",
    embedUrl: "https://www.youtube-nocookie.com/embed/j7R27wLLBr0?autoplay=1",
    description:
      "A polished commercial edit featuring cinematic pacing, refined visuals, and professional post-production.",
    role: "Video Editor & Colourist",
    deliverables: ["Commercial Editing", "Colour Grading", "Post-Production"],
    expertise: ["Commercial Editing", "Colour Grading", "Post-Production"],
    year: "2026",
    badge: "Featured Video",
    views: "YouTube Video",
    aspectRatio: "16:9",
    isVertical: false
  },
  {
    id: "assignment-5-short",
    title: "Assignment 5",
    client: "Kunal Singh",
    category: "Advertisements",
    thumbnail: "https://img.youtube.com/vi/nTKDbf9v5a4/hqdefault.jpg",
    videoUrl: "https://youtube.com/shorts/nTKDbf9v5a4?si=bX30U9WRzER-lnJ5",
    embedUrl: "https://www.youtube-nocookie.com/embed/nTKDbf9v5a4?autoplay=1",
    description:
      "A vertical short-form edit with focused framing, energetic transitions, and engaging visual pacing.",
    role: "Video Editor & Colourist",
    deliverables: ["Short-Form Editing", "Vertical Video", "Post-Production"],
    expertise: ["Short-Form Editing", "Vertical Video", "Post-Production"],
    year: "2026",
    badge: "YouTube Short",
    views: "Short-Form",
    aspectRatio: "9:16",
    isVertical: true
  },
  {
    id: "namo-bharat-quest-3",
    title: "Namo Bharat | Quest 3 | Aevy Cohort 14",
    client: "Kunal Singh",
    category: "Advertisements",
    thumbnail: "https://img.youtube.com/vi/dFTLjkvk6oU/hqdefault.jpg",
    videoUrl: "https://youtube.com/shorts/dFTLjkvk6oU?si=QM1dm5Ojrmyzht-q",
    embedUrl: "https://www.youtube-nocookie.com/embed/dFTLjkvk6oU?autoplay=1",
    description:
      "A fast-paced vertical edit featuring dynamic motion, visual rhythm, and polished social-media storytelling.",
    role: "Video Editor & Colourist",
    deliverables: ["Short-Form Editing", "Creative Pacing", "Colour Grading"],
    expertise: ["Short-Form Editing", "Creative Pacing", "Colour Grading"],
    year: "2026",
    badge: "YouTube Short",
    views: "Short-Form",
    aspectRatio: "9:16",
    isVertical: true
  },
  {
    id: "aevy-cohort-14",
    title: "Long Form Edit | Quest 5 | Aevy Cohort 14",
    client: "Kunal Singh",
    category: "Corporate Films",
    thumbnail: "https://img.youtube.com/vi/J-hbusdEW3A/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=J-hbusdEW3A",
    embedUrl: "https://www.youtube-nocookie.com/embed/J-hbusdEW3A?autoplay=1",
    description:
      "A long-form editing project focused on structured storytelling, polished pacing, and engaging visual flow.",
    role: "Video Editor & Colourist",
    deliverables: ["Long-Form Editing", "Visual Storytelling", "Post-Production"],
    expertise: ["Long-Form Editing", "Visual Storytelling", "Post-Production"],
    year: "2026",
    badge: "Long-Form Edit",
    views: "YouTube Video",
    aspectRatio: "16:9",
    isVertical: false
  },
  {
    id: "assignment-7-short",
    title: "Assignment 7",
    client: "Kunal Singh",
    category: "Advertisements",
    thumbnail: "https://img.youtube.com/vi/PC3Bs1N8a1I/hqdefault.jpg",
    videoUrl: "https://youtube.com/shorts/PC3Bs1N8a1I?feature=share",
    embedUrl: "https://www.youtube-nocookie.com/embed/PC3Bs1N8a1I?autoplay=1",
    description:
      "A short-form vertical edit featuring dynamic pacing, focused framing, and polished social-media presentation.",
    role: "Video Editor & Colourist",
    deliverables: ["Short-Form Editing", "Vertical Video", "Post-Production"],
    expertise: ["Short-Form Editing", "Vertical Video", "Post-Production"],
    year: "2026",
    badge: "YouTube Short",
    views: "Short-Form",
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
