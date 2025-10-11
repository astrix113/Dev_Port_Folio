import { Icons } from '@/components/icons'
import { Education, NavLink, Project, Skill } from './types'

export const navLinks: NavLink[] = [
  {
    name: 'Home',
    href: '#home',
  },
  {
    name: 'About',
    href: '#about',
  },
  {
    name: 'Experience',
    href: '#experience',
  },
  {
    name: 'Projects',
    href: '#projects',
  },
  {
    name: 'Contact',
    href: '#contact',
  },
]

export const projectsData: Project[] = [
  {
    video: "assets/videos/hirrd-demo.mp4",
    title: "Hirrd",
    description:
      "a modern job portal built with React, Supabase, and shadcn/ui, designed to streamline the recruitment and application process. It allows recruiters to post and manage jobs, create companies, and track applicant statuses, while applicants can browse, filter, and apply to jobs in a seamless, responsive UI.",
    technologies: [
      "React",
      "Supabase",
      "shadcn/ui",
      "TailwindCSS",
      "Vite",
      "React Hook Form",
      "Zod",
      "React Router v6",
    ],
    links: {
      preview: "https://hirrd-amber.vercel.app/",
      github: "https://github.com/astrix113/Job_Portal",
      githubApi: "#",
    },
  },
  {
    video: "assets/videos/quickchat-demo.mp4",
    title: "QuickChat",
    description:
      "A real-time chat application built with the MERN stack (MongoDB, Express.js, React, Node.js) using Socket.io for real-time messaging, authentication with login/logout, and Cloudinary for profile picture uploads. The UI is enhanced with 30+ themes to provide a customizable experience.",
    technologies: [
      "React",
      "Zustand",
      "MongoDB",
      "Express",
      "Socket.io",
      "JWT",
      "Cloudinary",
    ],
    links: {
      preview: "https://mern-chat-application-6f32.onrender.com/",
      github: "https://github.com/astrix113/MERN-Chat-App",
      githubApi: "#",
    },
  },
  {
    video: "assets/videos/youtify_demo.mp4",
    title: "Youtify",
    description:
      "real-time music streaming web application inspired by modern platforms like Spotify. It allows users to stream music, chat in real time, and gives admins control through a powerful dashboard",
    technologies: [
      "React",
      "Zustand",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "Cloudinary",
      "shadcn/ui",
      "Clerk",
    ],
    links: {
      preview: "https://github.com/astrix113/Youtify",
      github: "https://github.com/astrix113/Youtify",
      githubApi: "#",
    },
  },
  {
    video: "assets/videos/iphone15pro-demo.mp4", // or a gif if no video
    title: "iPhone 15 Pro Website UI Clone",
    description:
      "A high-fidelity replica of Apple’s iPhone 15 Pro product page, crafted using React, Tailwind CSS, Three.js, and GSAP to demonstrate cutting-edge frontend development, immersive animations, and production-ready deployment.",
    technologies: ["React", "Three.js", "GSAP"],
    links: {
      preview: "https://apple-website-fawn-ten.vercel.app/",
      github: "https://github.com/astrix113/Apple_Website", 
      githubApi: "#",
    },
  },
] as const;


export const experiencesData: Education[] = [
  {
    title: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
    institution: "Indian Institute of Information Technology, Kota (IIIT Kota)",
    description:
      "Built a strong foundation in software engineering, algorithms, and full-stack web development. Completed multiple academic projects including real-time chat, event management, and donation platforms.",
    period: "2022 – 2026 (Expected)",
    technologies: [
      
      "MERN",
      "Database Management System",
      "Operating System",
      "Data Structures and Algorithms",
      "Computer Networks",
      "Computer Organization and Architecture",
      "Computer Graphics",
      "Software Engineering",
      "Artificial Intelligence",
      "TypeScript",
      "Tailwind CSS",
      "Git",
    ],
  },
  {
    title: "Senior Secondary (12th Grade – PCM)",
    institution: "NavJeevan Mission School, Deoria,(Uttar Pradesh)",
    description:
      "Focused on Physics, Chemistry, and Mathematics. Built strong analytical and logical reasoning skills. Began exploring programming fundamentals and problem-solving.",
    period: "Completed 2021",
    technologies: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "Analytical Thinking",
      "Problem Solving",
    ],
  },
  {
    title: "Secondary (10th Grade)",
    institution: "NavJeevan Mission School, Deoria,(Uttar Pradesh)",
    description:
      "Developed a curiosity for technology and computers. Gained early exposure to computer science fundamentals and teamwork through school-level projects.",
    period: "Completed 2019",
    technologies: [
      "Basic Computing",
      "Teamwork",
      "Communication",
    ],
  },
];

export const skillsData: Skill[] = [
  { name: 'Sass', icon: <Icons.sass className="size-12" /> },
  { name: 'Tailwind', icon: <Icons.tailwind className="size-12" /> },
  { name: 'JavaScript', icon: <Icons.javascript className="size-12" /> },
  { name: 'TypeScript', icon: <Icons.typescript className="size-12" /> },
  { name: 'React', icon: <Icons.react className="size-12" /> },
  { name: 'NextJS', icon: <Icons.nextjs className="size-12" /> },
  { name: 'NestJS', icon: <Icons.nestjs className="size-12" /> },
  { name: 'Prisma', icon: <Icons.prisma className="size-12" /> },
  { name: 'Docker', icon: <Icons.docker className="size-12" /> },
]
