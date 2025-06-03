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
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
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
  title: 'Personal portfolio',
  description: "This is a personal front-end website built with JavaScript and Next.js. It provides more detailed information about me."

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
      href: 'resume.pdf',
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
    {label: 'Location', text: 'Singapore', Icon: MapIcon},
    {label: 'Age', text: '33', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Singaporean', Icon: FlagIcon},
    {label: 'Interests', text: 'football,  mentoring', Icon: SparklesIcon},
    {label: 'Study', text: 'Singapore Institute of Technology (SIT)', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Self-Employed', Icon: BuildingOffice2Icon},
  ],
};


export const skills: SkillGroup[] = [

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
    name: 'DataBase',
    skills: [
      {
        name: 'MySQL',
        level: 10,
   },
      {
        name: 'MongoDB',
        level: 10,
   },
      {
        name: 'PostgreSQL',
        level: 9,
   },
    ],
},
];


export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Tolar Systems – IT Solutions & Managed Services',
    description: 'Reliable IT solutions and managed services for businesses and government.',
    url: ' https://tolarsystems.com/case-studies',
    image: porfolioImage1,
},
  {
    title: 'Managed IT Services',
    description: 'Visual Edge IT provides full-service IT management, cybersecurity, cloud, and print services tailored to businesses of all sizes across the U.S.',
    url: 'https://visualedgeit.com',
    image: porfolioImage2,
},
  {
    title: 'ByteWave Technologies',
    description: 'Bytewave Technologies specializes in custom software development and IT consultancy, providing tailored solutions to enhance your business operations. ',
    url: 'https://bytewavetechnologiesllc.com',
    image: porfolioImage3,
}
];


export const education: TimelineItem[] = [
  {
    date: 'Jan 2015',
    location: 'Singapore',
    title: 'Singapore Institute of Technology (SIT)',
    content: <p>During my time at Singapore Institute of Technology (SIT), I focused on
      computer science and web development, gaining a solid foundation in both theory and hands-on practice. I learned key programming concepts such as data structures,
      algorithms, object-oriented programming, and database design.</p>,
},
];

export const experience: TimelineItem[] = [
  {
    date: 'May 2022 – Apr 2025',
    location: 'Tolar Systems',
    title: 'Senior Full-stack Developer',
    content: (
      <p>
        Built scalable, production-ready applications using Next.js, Node.js, and PostgreSQL.
      </p>
    ),
},
  {
    date: 'Mar 2020 – Apr 2022 ',
    location: 'ClearCode Solutions',
    title: 'Full-stack Developer',
    content: (
      <p>
        Delivered client-facing SPA apps using Vue.js and Nuxt.js.
      </p>
    ),
},
  {
    date: 'Jun 2016 – Jan 2020',
    location: 'Bytewave Technology LLC',
    title: 'Full-stack Developer',
    content: (
      <p>
        Collaborated with a small Singapore-based IT firm on multiple web projects for SME clients in logistics and healthcare.
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
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/James1107443'},
];
