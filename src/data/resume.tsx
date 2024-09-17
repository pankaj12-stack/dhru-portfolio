import { Icons } from "@/components/icons";
import { Certificate } from "crypto";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Dhruvika Solanki",
  initials: "DS",
  url: "https://dhruvika.io",
  location: "Alberta, Canada",
  locationLink: "https://www.google.com/maps/place/alberta",
  description: "Software Engineer | I love building things and helping people.",
  summary:
    "Hi, I'm Dhruvika Solanki, a Software Developer with a Bachelor of Science in Computer Science from [Memorial University of Newfoundland](https://mun.ca/) (Class of 2023). Skilled in crafting efficient software solutions, I'm eager to contribute to impactful projects and continue my growth in the field. Let's connect and explore potential collaborations! [Download my Resume](https://mun.ca/)",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "dhruvika1252@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dhruvikasol/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/",
        icon: Icons.x,

        navbar: false,
      },

      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Immigration, Refugees and Citizenship Canada",
      href: "https://ircc.canada.ca/",
      badges: [],
      location: "Canada",
      title: "Client support center agent",
      logoUrl: "/ircc.png",
      start: "Apr 2023",
      end: "Present",
      description:
        "Managed a high volume of client inquiries, averaging over 150+ per month, with a remarkable resolution rate of 95%, showcasing exceptional problem-solving skills and efficiency in addressing client needs promptly and effectively. \r\n Conducted thorough analysis of client feedback to identify recurring issues and pain points, leading to the implementation of targeted improvements in service protocols, resulting in a tangible enhancement in overall service quality and client experience.",
    },
    {
      company: "Memorial University, Newfoundland and Labrador",
      href: "https://mun.ca",
      badges: [],
      location: "Canada",
      title: "Student Assistant",
      logoUrl: "/mun.jpg",
      start: "Sep 2022",
      end: "Apr 2023",
      description:
        "Conducted orientation sessions, enhancing new student onboarding experiences. Managed data entry and administrative tasks with 100% precision and timeliness.Facilitated student workshops, increasing attendance and engagement by 20%.",
    },
  ],
  education: [
    {
      school: "Memorial University, Newfoundland and Labrador",
      href: "https://mun.ca",
      degree: "Bachelor’s of science, Computer Science",
      logoUrl: "/mun.jpg",
      start: "2019",
      end: "2023",
    },
  ],

  certifications: [
    {
      certificate: "Social Media Simternship",
      href: "https://apif.stukent.com/certifications/v1/efc24452-e800-4b2e-8195-4012446b516b/be35d972-7331-4fe8-9102-36527141d2a7",
      desc: "Social Media Simternship™",
      logoUrl: "/stukent_logo.jpeg",
      year: "2023",
    },
    {
      certificate:
        "Agile Principles and MethodologiesAgile Principles and Methodologies",
      href: "https://drive.google.com/file/d/1IbF3o34Bw70Ju5BNItt9iNVh_idG9Uy7/view",
      desc: "Canada School of Public Service | École de la fonction publique du Canada",
      logoUrl: "/canada_school_of_public_service_logo.jpeg",
      year: "2023",
    },
    {
      certificate: "Embracing the Cloud for Business Efficiency",
      href: "https://drive.google.com/file/d/1FwPFFlk8jdkrGPL46tMN9PMfKTyeDL8-/view",
      desc: "Canada School of Public Service | École de la fonction publique du Canada",
      logoUrl: "/canada_school_of_public_service_logo.jpeg",
      year: "2023",
    },
  ],
  projects: [
    {
      title: "Average Irish Rent Prices",
      href: "https://public.tableau.com/app/profile/dhruvika.solanki/viz/AverageIrishRentPrices/OverviewDash",
      dates: "Jul 2024",
      active: true,
      description:
        "The project visualizes average rent prices in Ireland from 2008 to 2021, highlighting trends and changes over time.",
      technologies: ["Tableau"],
      links: [
        {
          type: "Website",
          href: "https://public.tableau.com/app/profile/dhruvika.solanki/viz/AverageIrishRentPrices/OverviewDash",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project-ds-1.png",
      video: "",
    },
    {
      title: "Call Center Dashboard",
      href: "https://public.tableau.com/app/profile/dhruvika.solanki/viz/CallCenterDashboardwithRWFDData/Dashboard",
      dates: "Aug 2024",
      active: true,
      description:
        "Insightful and interactive Call Center Dashboard designed in Tableau.",
      technologies: ["Tableau"],
      links: [
        {
          type: "Website",
          href: "https://public.tableau.com/app/profile/dhruvika.solanki/viz/CallCenterDashboardwithRWFDData/Dashboard",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project-ds-2.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hacking Health St. John's Hackathon 2019",
      dates: "March 1st - 3rd, 2019",
      location: "Faculty of Medicine, Memorial University, St. John's",
      description:
        "Worked on a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      image: "/logo-hh.png",
      mlh: "",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Worked on the front end for a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed DermiDoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "",
        },
      ],
    },
  ],
} as const;
