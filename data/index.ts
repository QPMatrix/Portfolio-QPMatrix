export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];
export const navItems2 = [
  { name: "Home", link: "/" },
  { name: "Projects", link: "/projects" },
];
export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Aora",
    des: "Aora is a platform where users can upload their generated videos from AI and share them with everyone.",
    img: "/aora.png",
    iconLists: ["/re.svg", "/tail.svg", "/expo.png", "/ts.svg"],
    link: "/github/qpmatrix/aora",
    github: "https://github.com/QPMatrix/Aora",
  },

  {
    id: 2,
    title: "Al Waled Center",
    des: "Its a website for a center that provides services for people with special needs.",
    img: "/p2.svg",
    iconLists: ["/wordpress.png"],
    link: "https://al-waled.net/",
    github: "",
  },
];

export const testimonials = [
  {
    quote:
      "Hasan's innovative solutions have revolutionized the way we approach our digital strategy. His dedication to crafting seamless user experiences is truly remarkable.",
    name: "Yousef Al-Abd",
    title: "Technology Director",
  },
  {
    quote:
      "The level of detail and efficiency Hasan brought to our project was outstanding. His technical expertise and creative vision are a rare combination that any company would treasure.",
    name: "Ali Hamdi",
    title: "Development Team Lead",
  },
  {
    quote:
      "Hasan's approach to web development is both artistic and analytical. He has a unique ability to balance user-centric design with cutting-edge technology.",
    name: "Samira Khaled",
    title: "Project Manager",
  },
  {
    quote:
      "Working with Hasan is a guarantee of quality and innovation. His problem-solving skills and technical knowledge are assets that have greatly benefited our projects.",
    name: "Fatima Zahra",
    title: "Product Manager",
  },
  {
    quote:
      "Hasan  's strategic thinking and technical skills were instrumental in bringing our vision to life. His commitment to excellence is evident in every project he undertakes.",
    name: "Mahmoud Abbas",
    title: "Development Director",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "FullStack Engineer Intern",
    desc: "Assisted in the development of a web-based platform using Next.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - QPMatrix",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/QPMatrix",
  },
  {
    id: 2,
    img: "/insta.svg",
    link: "https://www.instagram.com/hasan.ty02/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/hasantayar",
  },
  {
    id: 4,
    img: "/wha.svg",
    link: "https://wa.link/zco2t3",
  },
];
export const techStacks = [
  {
    id: 1,
    name: "React",
    img: "/re.svg",
  },
  {
    id: 2,
    name: "Next.js",
    img: "/next.svg",
  },
  {
    id: 3,
    name: "TailwindCSS",
    img: "/tail.svg",
  },
  {
    id: 4,
    name: "Framer Motion",
    img: "/fm.svg",
  },
  {
    id: 5,
    name: "Typescript",
    img: "/ts.svg",
  },
  {
    id: 6,
    name: "Node.js",
    img: "/node.svg",
  },
  {
    id: 7,
    name: "Express.js",
    img: "/express.svg",
  },
  {
    id: 8,
    name: "MongoDB",
    img: "/mongo.svg",
  },
  {
    id: 9,
    name: "Firebase",
    img: "/firebase.svg",
  },
  {
    id: 10,
    name: "Docker",
    img: "/dock.svg",
  },
  {
    id: 11,
    name: "Appwrite",
    img: "/app.svg",
  },
  {
    id: 12,
    name: "Cloudinary",
    img: "/cloud.svg",
  },
  {
    id: 13,
    name: "Stream",
    img: "/s.svg",
  },
  {
    id: 14,
    name: "Hostinger",
    img: "/host.svg",
  },
  {
    id: 15,
    name: "Expo",
    img: "/expo.png",
  },
  {
    id: 16,
    name: "Bun",
    img: "/Bun.svg",
  },
  {
    id: 16,
    name: "Java",
    img: "/Java.svg",
  },
  {
    id: 17,
    name: "SQL",
    img: "/SQL.svg",
  },
  {
    id: 18,
    name: "Redux",
    img: "/Redux.svg",
  },
  {
    id: 19,
    name: "Azure",
    img: "/Azure.svg",
  },
  {
    id: 20,
    name: "Python",
    img: "/Python.svg",
  },
];
