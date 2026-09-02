// Tech Logos from Simple Icons CDN (https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/)
// CDN URL format: https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/{iconname}.svg

// Education Section Logo's
const adgipsLogo =
  "https://static.boostmytalent.com/img/univ/akhilesh-das-gupta-college-delhi-campus-admission.webp";
const lpsLogo =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1FpvgWYjNtdxMv3o9ni3niKlz2bnEsFYzXIGv6XY4-Q&s=10";

// Project Section Logo's
const githubdetLogo =
  "https://cdn.prod.website-files.com/609ec9154a0cbc7233d06a48/630628b7b6ec2d579773f02e_twitter_hkPXu5Vq_400x400.jpg";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
      {
        name: "React JS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node JS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express JS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      },
      {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      },
    ],
  },
  {
    title: "Languages",
    skills: [
      {
        name: "C",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
      },
      {
        name: "C++",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
      },
      {
        name: "Java",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      },
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
    ],
  },
  {
    title: "Tools",
    skills: [
      {
        name: "Git",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      },
      {
        name: "Vercel",
        logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/vercel.svg",
      },
    ],
  },
];

export const education = [
  {
    id: 1,
    img: adgipsLogo,
    school: "Dr Akhilesh Das Gupta Institute of Professional Studies, Delhi",
    university: "GGSIPU, Delhi",
    date: " 2024- 2028",
    CGPA: "7.46",
    desc: "I am currently pursuing my B.Tech in Computer Science from Dr Akhilesh Das Gupta Institute of Professional Studies, Delhi, affiliated with Guru Gobind Singh Indraprastha University (GGSIPU).",
    degree: "Btech in Computer Science",
  },
  {
    id: 2,
    img: lpsLogo,
    school: "Lovely Public Sr Sec School New Layal Pur, Delhi",
    date: "Apr 2023 - March 2024",
    grade: "80%",
    desc: "I completed my class 12 education from Lovely Public Sr Sec School, New Layalpur, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "CBSE(XII) - PCM with Computer Science",
  },
  {
    id: 3,
    img: lpsLogo,
    school: "Lovely Public Sr Sec School",
    date: "Apr 2021 - March 2022",
    grade: "86.5%",
    desc: "I completed my class 10 education from Lovely Public Sr Sec School, New Layalpur, under the CBSE board.",
    degree: "CBSE(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Portfolio Website",
    description:
      "A powerful and user-friendly React.js application designed to uncover and showcase detailed profile information. ",
    image: githubdetLogo,
    tags: ["HTML", "Tailwind CSS", "JavaScript", "React JS", "API"],
    github: "https://github.com/ithapar5122005-art/Portfolio-Website",
    webapp: "https://portfolio-website-lemon-mu-34.vercel.app/",
  },
  // {
  //   id: 1,
  //   title: "CS Prep",
  //   description:
  //     "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
  //   image: csprepLogo,
  //   tags: [
  //     "React JS",
  //     "Node.js",
  //     "MongoDB",
  //     "Express",
  //     "HTML",
  //     "CSS",
  //     "JavaScript",
  //   ],
  //   github: "https://github.com/codingmastr/CSPrep",
  //   webapp: "https://csprep.netlify.app/",
  // },
  // {
  //   id: 2,
  //   title: "Movie Recommendation App",
  //   description:
  //     "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
  //   image: movierecLogo,
  //   tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
  //   github: "https://github.com/codingmastr/Movie-Recommendation-App",
  //   webapp: "https://movie-recommendation-app-jet.vercel.app/",
  // },
  // {
  //   id: 3,
  //   title: "Email Validator NPM Package",
  //   description:
  //     "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
  //   image: npmLogo,
  //   tags: ["React JS", "Node.js", "NPM", "Validation"],
  //   github: "https://github.com/codingmastr/cmtk-email-validator",
  //   webapp: "https://www.npmjs.com/package/cmtk-email-validator",
  // },
  // {
  //   id: 4,
  //   title: "Task Reminder Chrome Extension Tool",
  //   description:
  //     "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
  //   image: taskremLogo,
  //   tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
  //   github: "https://github.com/codingmastr/Task-Reminder-Tool",
  //   webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
  // },
  // {
  //   id: 5,
  //   title: "Webverse Digital",
  //   description:
  //     "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
  //   image: webverLogo,
  //   tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
  //   github: "https://github.com/codingmastr/Webverse-Digital",
  //   webapp: "https://webversedigital.com/",
  // },
  // {
  //   id: 6,
  //   title: "Coding Master",
  //   description:
  //     "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
  //   image: cmLogo,
  //   tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
  //   github: "https://codingmasterweb.in/",
  //   webapp: "https://codingmasterweb.in/",
  // },
  // {
  //   id: 7,
  //   title: "Image Search App",
  //   description:
  //     "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
  //   image: imagesearchLogo,
  //   tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
  //   github: "https://github.com/codingmastr/Image-Search-App",
  //   webapp: "https://imagsearch.netlify.app/",
  // },
  // {
  //   id: 8,
  //   title: "Image Background Remover",
  //   description:
  //     "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
  //   image: removebgLogo,
  //   tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
  //   github: "https://github.com/codingmastr/Image-Background-Remover",
  //   webapp: "https://removeyourbg.netlify.app/",
  // },
];
