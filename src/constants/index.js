import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    ssoc,
    codsoft,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    jobseek,
    wether,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Open Source Contributor",
      icon: mobile,
    },
    {
      title: "Proficient in C and Java Language",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Open Source Contributor",
      company_name: "SSOC",
      icon: ssoc,
      iconBg: "#383E56",
      date: "Jun 2023 - Jul 2023",
      points: [
        "SSOC is a 2 Month Open Source Program Organized By Social",
        "Worked as a contributor in SSOC‘23 and contributed in many GitHub repositories.The main repository that I contributed to was Algorithms repository",
        "Main languages that I used to contribute was C , Java , C++, Python.",
      ],
    },
    {
      title: "Intern",
      company_name: "Codsoft",
      icon: codsoft,
      iconBg: "#E6DEDD",
      date: "Oct 2023 - Nov 2023",
      points: [
        "Completed my internship in Codsoft where I mainly worked on completing the task using Java.",
        "Completed all the tasks that were given to me within the time period.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Job Seeking Website-WorkWise",
      description:
        "WorkWise is an innovative webpp designed to explore the candidates seeking jobs throughout the world.Additionally,it outlines future prospects aimed at enhancing user experiences.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "postman",
          color: "pink-text-gradient",
        },
      ],
      image: jobseek,
      source_code_link: "https://github.com/Night-Read/Job--Seeking-Website/tree/main",
    },
    {
      name: "Advanced Weather Checking Website",
      description:
        "This is an advanced weather checking website built using HTML, CSS, and JavaScript. It leverages a weather API to provide accurate and up-to-date weather information to users.",
      tags: [
        {
          name: "HTML/CSS",
          color: "blue-text-gradient",
        },
        {
          name: "weatherapi",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image:wether,
      source_code_link: "https://github.com/Shankhadweep/Advanced-Website-Checker-Using-Weather_API",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };