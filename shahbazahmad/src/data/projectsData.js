import codegram from "../assets/projects/codegram.png";
import pixelui from "../assets/projects/pixelui.png";
import tastio from "../assets/projects/tastio.png";
import eastside from "../assets/projects/eastside.png";
import orbix from "../assets/projects/orbix.png";
import authly from "../assets/projects/authly.png";
import gympro from "../assets/projects/gympro.png";
import growcash from "../assets/projects/growcash.png";
import tripix from "../assets/projects/tripix.png";
import scholify from "../assets/projects/scholify.png";
import medicare from "../assets/projects/medicare.png";
import recroot from "../assets/projects/recroot.png";
import inventri from "../assets/projects/inventri.png";
import lumos from "../assets/projects/lumos.png";
import dwelo from "../assets/projects/dwelo.png";

/* Project Format
{
    title: "",
    description: "",
    img: "",
    vid: "",
    date: {
      month: "",
      year: "",
    },
    tech: [],
    source: "",
    live: "",
    tags: [],
},
*/

export const projects = [
  {
    title: "Lumos AI",
    description:
      "SaaS AI Platform for content creation that can generate real-time content like code, image, video, and much more using the power of AI.",
    img: lumos,
    vid: "",
    date: {
      month: "December",
      year: 2023,
    },
    tech: [
      "Open\xa0AI",
      "Next.js",
      "TypeScript",
      "Shadcn/ui",
      "Tailwind\xa0CSS",
      "Prisma",
    ],
    source: "https://github.com/shahbazcse/Lumos",
    live: "https://getlumos.vercel.app/",
    tags: ["ai", "fullstack"],
  },
  {
    title: "Codegram",
    description:
      "A unique social media app for coders, fostering connection, knowledge sharing, and updates on coding trends.",
    img: codegram,
    vid: "",
    date: {
      month: "June",
      year: 2023,
    },
    tech: [
      "React.js",
      "Tailwind\xa0CSS",
      "Context\xa0API",
      "JavaScript",
      "Git",
    ],
    source: "https://github.com/shahbazcse/Codegram",
    live: "https://codegramapp.netlify.app/",
    tags: ["frontend"],
  },
  {
    title: "PixelUI",
    description:
      "A toolkit to empower devs and designers for seamless, stunning user interfaces. Offers meticulously crafted CSS component.",
    img: pixelui,
    vid: "",
    date: {
      month: "November",
      year: 2023,
    },
    tech: ["CSS", "React.js", "Context\xa0API", "JavaScript", "Git"],
    source: "https://github.com/shahbazcse/PixelUI",
    live: "https://pixelui.vercel.app/",
    tags: ["frontend", "design"],
  },
  {
    title: "Dwelo",
    description:
      "Simplifying hotel bookings with a user-friendly app, offering convenience and personalized experiences for travelers.",
    img: dwelo,
    vid: "",
    date: {
      month: "March",
      year: 2024,
    },
    tech: ["React.js", "Node.js", "Redux", "MongoDB", "Shadcn/ui", "Tailwind\xa0CSS"],
    source: "https://github.com/shahbazcse/dwelo",
    live: "https://dwelo.vercel.app",
    tags: ["frontend", "fullstack"],
  },
  {
    title: "Tastio | Restaurant Management",
    description:
      "A robust and versatile set of endpoints that empower developers to create feature-rich restaurant-centric applications.",
    img: tastio,
    vid: "",
    date: {
      month: "October",
      year: 2023,
    },
    tech: ["Node.js", "Express.js", "MongoDB", "Postman", "Git"],
    source: "https://github.com/shahbazcse/TastioBackend",
    live: "https://documenter.getpostman.com/view/29803209/2s9YJdV2AA",
    tags: ["backend"],
  },
  // {
  //   title: "EastSide",
  //   description:
  //     "An online clothing e-commerce store that aims to provide users with a seamless shopping experience for fashion clothing.",
  //   img: eastside,
  //   vid: "",
  //   date: {
  //     month: "May",
  //     year: 2023,
  //   },
  //   tech: [
  //     "React.js",
  //     "Tailwind\xa0CSS",
  //     "Context\xa0API",
  //     "Git",
  //     "JavaScript",
  //   ],
  //   source: "https://github.com/shahbazcse/EastSide",
  //   live: "https://eastsidestore.netlify.app/",
  //   tags: ["frontend"],
  // },
  {
    title: "Orbix",
    description:
      "Space exploration data specifically tailored to provide a comprehensive catalog of the rockets and capsules used by SpaceX.",
    img: orbix,
    vid: "",
    date: {
      month: "August",
      year: 2023,
    },
    tech: [
      "React.js",
      "Tailwind\xa0CSS",
      "Context\xa0API",
      "Rest\xa0API",
      "Git",
      "JavaScript",
    ],
    source: "https://github.com/shahbazcse/Orbix",
    live: "https://orbix.vercel.app/",
    tags: ["frontend"],
  },
  {
    title: "Authly | Authentication Management",
    description:
      "Authentication API designed to seamlessly integrate authentication and user management features into your application.",
    img: authly,
    vid: "",
    date: {
      month: "November",
      year: 2023,
    },
    tech: ["Node.js", "Express.js", "MongoDB", "Postman", "Git"],
    source: "https://github.com/shahbazcse/AuthlyBackend",
    live: "https://documenter.getpostman.com/view/29803209/2s9YJc23KV",
    tags: ["backend"],
  },
  // {
  //   title: "GymPro",
  //   description:
  //     "Feature-rich fitness app designed to help you achieve your health goals with features like exercise, goal tracking, etc.",
  //   img: gympro,
  //   vid: "",
  //   date: {
  //     month: "October",
  //     year: 2023,
  //   },
  //   tech: [
  //     "React.js",
  //     "Redux",
  //     "Node.js",
  //     "Express.js",
  //     "MongoDB",
  //     "Tailwind\xa0CSS",
  //   ],
  //   source: "https://github.com/shahbazcse/GymPro",
  //   live: "https://thegympro.vercel.app/",
  //   tags: ["frontend", "fullstack"],
  // },
  // {
  //   title: "GrowCash",
  //   description:
  //     "All-in-one financial companion, offers powerful tools for Income Management, Expense Tracking, Savings, and Detailed Reports.",
  //   img: growcash,
  //   vid: "",
  //   date: {
  //     month: "October",
  //     year: 2023,
  //   },
  //   tech: [
  //     "React.js",
  //     "Redux",
  //     "Node.js",
  //     "Express.js",
  //     "MongoDB",
  //     "Tailwind\xa0CSS",
  //   ],
  //   source: "https://github.com/shahbazcse/GrowCash",
  //   live: "https://growcash.vercel.app/",
  //   tags: ["frontend", "fullstack"],
  // },
  {
    title: "Tripix | Travel Management",
    description:
      "API endpoints to provide users with seamless travel recommendations and destination management.",
    img: tripix,
    vid: "",
    date: {
      month: "November",
      year: 2023,
    },
    tech: ["Node.js", "Express.js", "MongoDB", "Postman", "Git"],
    source: "https://github.com/shahbazcse/TripixBackend",
    live: "https://documenter.getpostman.com/view/29803209/2s9YJaZQM1",
    tags: ["backend"],
  },
  // {
  //   title: "Scholify",
  //   description:
  //     "Efficiently manage student and teacher records, view class-specific data, and access school-wide statistics.",
  //   img: scholify,
  //   vid: "",
  //   date: {
  //     month: "October",
  //     year: 2023,
  //   },
  //   tech: [
  //     "React.js",
  //     "Redux",
  //     "Node.js",
  //     "Express.js",
  //     "MongoDB",
  //     "Tailwind\xa0CSS",
  //   ],
  //   source: "https://github.com/shahbazcse/Scholify",
  //   live: "https://thescholify.vercel.app/",
  //   tags: ["frontend", "fullstack"],
  // },
  // {
  //   title: "Medicare",
  //   description:
  //     "Streamline the management of patient information in a healthcare facility. Offers tools like patient records, view ward-specific data, etc.",
  //   img: medicare,
  //   vid: "",
  //   date: {
  //     month: "October",
  //     year: 2023,
  //   },
  //   tech: [
  //     "React.js",
  //     "Redux",
  //     "Node.js",
  //     "Express.js",
  //     "MongoDB",
  //     "Tailwind\xa0CSS",
  //   ],
  //   source: "https://github.com/shahbazcse/Medicare",
  //   live: "https://medicareapp.vercel.app/",
  //   tags: ["frontend", "fullstack"],
  // },
  // {
  //   title: "Recroot",
  //   description:
  //     "Simplify the process of recruiting, tracking, and engaging volunteers for various events using powerful management tools.",
  //   img: recroot,
  //   vid: "",
  //   date: {
  //     month: "October",
  //     year: 2023,
  //   },
  //   tech: [
  //     "React.js",
  //     "Redux",
  //     "Node.js",
  //     "Express.js",
  //     "MongoDB",
  //     "Tailwind\xa0CSS",
  //   ],
  //   source: "https://github.com/shahbazcse/Recroot",
  //   live: "https://recroot.vercel.app/",
  //   tags: ["frontend", "fullstack"],
  // },
  // {
  //   title: "Inventri",
  //   description:
  //     "Business-centric app to efficiently manage the inventories, track sales, and generate reports for informed decision-making.",
  //   img: inventri,
  //   vid: "",
  //   date: {
  //     month: "October",
  //     year: 2023,
  //   },
  //   tech: [
  //     "React.js",
  //     "Redux",
  //     "Node.js",
  //     "Express.js",
  //     "MongoDB",
  //     "Tailwind\xa0CSS",
  //   ],
  //   source: "https://github.com/shahbazcse/Inventri",
  //   live: "https://inventri.vercel.app/",
  //   tags: ["frontend", "fullstack"],
  // },
];
