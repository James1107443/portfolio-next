import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with James Coulter's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm James Coulter.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        as a Senior Freelance Web Developer, with over
        10 years of experience building scalable web applications and leading cross-functional teams.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my spare time,   I enjoy contributing to  <strong className="text-stone-100">open-source</strong> projects,
        exploring emerging technologies like <strong className="text-stone-100">AI</strong> and
        {" "}<strong className="text-stone-100">blockchain</strong>,
        and writing technical articles.
      </p>
    </>
  ),
  actions: [
    {
      href: '../images/portfolio/portfolio-1.jpg',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
   },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
   },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I specialize in building scalable, high-performance web applications and enjoy working across
   the stack—from intuitive frontend interfaces to robust backend systems. I'm most comfortable with technologies like React, Node.js, 
  TypeScript, and AWS. I'm passionate about clean architecture, performance optimization, and mentoring teams.`,
  aboutItems: [
    {label: 'Location', text: 'Abilene, Texas', Icon: MapIcon},
    {label: 'Age', text: '33', Icon: CalendarIcon},
    {label: 'Nationality', text: 'American', Icon: FlagIcon},
    {label: 'Interests', text: 'football,  mentoring', Icon: SparklesIcon},
    {label: 'Study', text: 'Hardin–Simmons University (HSU)', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
     },
      {
        name: 'French',
        level: 8,
     },
      {
        name: 'Spainish',
        level: 4,
     },
    ],
 },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
     },
      {
        name: 'Typescript',
        level: 7,
     },
      {
        name: 'GraphQL',
        level: 6,
     },
    ],
 },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
     },
      {
        name: 'Rust',
        level: 5,
     },
      {
        name: 'Golang',
        level: 4,
     },
    ],
 },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
     },
      {
        name: 'Flutter',
        level: 4,
     },
      {
        name: 'Swift',
        level: 3,
     },
    ],
 },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'ShopSmart (E-commerce Platform)',
    description: 'Developed a fully responsive e-commerce web application using Laravel (backend) and Vue.js (frontend). Integrated Stripe for secure payments, dynamic product filtering, a real-time inventory system, and admin dashboard with role-based access. Fixed over 100+ reported bugs during launch and implemented logging and analytics for continuous monitoring.',
    url: 'https://shopsmart.example.com',
    image: porfolioImage1,
 },
  {
    title: 'InsightTrack (Business Dashboard App)',
    description: 'Built a custom analytics dashboard for a mid-sized logistics company. Used React, Chart.js, and Node.js to create interactive data visualizations and real-time metrics tracking. Focused on performance optimization and handled critical bug fixes post-deployment that improved load speed by 45%.',
    url: 'https://insighttrack.example.com',
    image: porfolioImage2,
 },
  {
    title: ' FormGuard (Secure Form System)',
    description: 'Designed a form submission platform for HR departments to securely collect employee data. Developed with Node.js, Express, and MongoDB, with built-in validation, CAPTCHA, and file upload support.Applied strong input sanitization to prevent XSS and injection attacks.',
    url: 'https://learnpro.example.com',
    image: porfolioImage3,
 },
  {
    title: 'LearnPro (Online Learning Platform)',
    description: 'Developed a custom e-learning platform where students could enroll in courses, watch videos, and complete quizzes. Built using Django and PostgreSQL on the backend, and React on the frontend. Integrated authentication, progress tracking, and a dashboard for instructors. Debugged numerous UI inconsistencies and optimized database queries for faster performance.',
    url: 'https://learnpro.com',
    image: porfolioImage4,
 },
  {
    title: 'ChatBridge (Real-Time Messaging App)',
    description: 'Created a real-time messaging platform for internal company use using Node.js, Socket.io, and Redis. Features included group chats, read receipts, typing indicators, and encrypted message storage. Diagnosed and resolved WebSocket connection drops in production under load.',
    url: 'https://chatbridge.example.com',
    image: porfolioImage5,
 },

];


export const education: TimelineItem[] = [
  {
    date: 'April 2014',
    location: 'Abilene Texas',
    title: 'Bachelor of Science (B.S.) in Computer Science',
    content: <p>During my time at Hardin–Simmons University (HSU), I focused on
      computer science and web development, gaining a solid foundation in both theory and hands-on practice. I learned key programming concepts such as data structures,
      algorithms, object-oriented programming, and database design.</p>,
 },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2023 - Present',
    location: 'Tolar Systems',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Implementing CI/CD pipelines
        with GitHub Actions and Docker to speed up deployment processes.
      </p>
    ),
 },
  {
    date: 'September 2021 - March 2023',
    location: 'Visual Edge IT',
    title: 'Senior bug fixer',
    content: (
      <p>
        I use tools like logging, error tracking (e.g., Sentry), and version control to pinpoint and fix bugs fast and clean.
      </p>
    ),
 },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Michael',
      text: 'James Coulter helped us design and launch a fully responsive e-commerce platform that increased our online sales by over 40%. They were clear in communication, delivered on time, and made smart technical decisions that kept us under budget. I’ve worked with many developers — few are as professional, skilled, and easy to work with as them.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
   },
    {
      name: 'Adrian Madrid',
      text: "James Coulter is one of the most dependable and skilled web developers I’ve worked with in my career. Their 10+ years of experience really shows — whether it's building responsive UIs, optimizing performance, or solving tricky backend issues, they get it done right and on time.",
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
   },
    {
      name: 'Marketing Director, E-commerce Brand',
      text: 'James Coulter helped us redesign our entire site from the ground up. Their mix of frontend design sensitivity and backend logic was exactly what we needed. The project launched early and exceeded expectations — we saw a 35% increase in engagement within the first month.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
   },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'jc1107443@gmail.com',
      // href: 'mailto:reachout@timbaker.me',
   },
    {
      type: ContactType.Location,
      text: ' Abilene Texax, US',
      // href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
   },
    // {
    //   type: ContactType.Instagram,
    //   text: '@tbakerx',
    //   href: 'https://www.instagram.com/tbakerx/',
    //},
    {
      type: ContactType.Github,
      text: 'James1107443',
      href: 'https://github.com/James1107443',
   },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/James1107443'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/James1107443'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/James1107443/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/James1107443/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/James1107443'},
];
