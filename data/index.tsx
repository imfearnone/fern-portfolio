import { FaFacebook, FaWhatsapp, FaViber, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";

import vMEME from "@/public/vMEME.png";
import CC from "@/public/community-crave.png";
import chrono from "@/public/chronoclash.png";
import queuebyWeb from "@/public/queuebyWeb.png";
import queuebyAndroid from "@/public/queuebyAndroid.png";
import mangadeck from "@/public/mangadeck.jpg";
import foodhub from "@/public/614foodhub.png";
import eTech from "@/public/eTech.png";

import html from "@/public/html.svg";
import php from "@/public/php.png";
import css from "@/public/css.svg";
import javascript from "@/public/javascript.svg";
import c from "@/public/c.png";
import cplusplus from "@/public/Cplusplus.png";
import csharp from "@/public/csharp.png";
import java from "@/public/java.svg";
import reactjs from "@/public/reactjs.svg";
import nodejs from "@/public/nodejs.svg";
import git from "@/public/git.svg";
import nextjs from "@/public/nextjs.png";
import tailwind from "@/public/tailwind.svg";
import bootstrap from "@/public/bootstrap.png";
import mysql from "@/public/mysql.png";
import firebase from "@/public/firebase.svg";
import mongodb from "@/public/mongodb.png";


export const words = [
    { text: "Bridging" },
    { text: "Ideas " },
    { text: "and " },
    { text: "Technology " },
    { text: "to" },
    { text: "Transform " },
    { text: "Visions  " },
    { text: "into  " },
    { text: "Digital  ", className: "dark:text-secondarybg" },
    { text: "Reality. ", className: "dark:text-secondarybg" },
  ];
  
  export const items = [
    { title: "Facebook", icon: <FaFacebook className="h-5 w-5" />, href: "https://www.facebook.com/imfearnone/" },
    { title: "WhatsApp", icon: <FaWhatsapp className="h-5 w-5" />, href: "https://wa.me/639770564163" },
    { title: "Viber", icon: <FaViber className="h-5 w-5" />, href: "viber://chat?number=639770564163" },
    { title: "GitHub", icon: <FaGithub className="h-5 w-5" />, href: "https://github.com/imfearnone" },
    { title: "LinkedIn", icon: <FaLinkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/fernan-retardo-6529372ba/" },
    { title: "Upwork", icon: <FaSquareUpwork className="h-5 w-5" />, href: "https://www.upwork.com/freelancers/~011b39e9be1c052362" },
  ];

  export const projectlists = [
    {
      title: "vMEME",
      image: vMEME,
      description: "vMeme is an e-commerce platform that showcases and sells unique paintings from local artists. Built with Next.js and Tailwind CSS, it offers a user-friendly experience for art enthusiasts to explore and purchase one-of-a-kind artworks, supporting local talent and fostering a vibrant community of creativity.",
      technologies: ["Next.js", "React", "Vercel", "Node.js", "Vercel", "TypeScript", "Tailwind CSS", "Firebase", "MongoDB"],
      github: "https://github.com/iamflorenz08/VMeme-Client",
      demo: "https://vmeme.vercel.app/",
    },
    {
      title: "Community Crave",
      image: CC,
      description: "Community Crave is an e-commerce website that highlights local shops in West Rembo, Taguig City. Built with Next.js and Tailwind CSS, it provides a platform for users to explore and support neighborhood businesses, offering a convenient way to shop locally and discover unique products.",
      technologies: ["Next.js", "React", "Vercel", "Node.js", "Vercel", "TypeScript", "Tailwind CSS", "Firebase", "MongoDB"],
      github: "https://github.com/iamflorenz08/Community-Crave-Client",
      demo: "https://community-crave.vercel.app/",
    },
    {
      title: "Development of Chrono Clash: A Strategic Board Game Utilizing K-Nearest Neighbors and Minimax Algorithm for Possible Game Players Movement",
      image: chrono,
      description: "Chrono Clash is a modern twist on classic chess, incorporating power-ups and unique abilities for chess pieces. Developed using Unity and Firebase, the game employs the Minimax algorithm for suggesting optimal moves during gameplay and the K-Nearest Neighbors (KNN) algorithm for analyzing player movements post-game. This innovative approach enhances strategic depth and provides players with insights into their gameplay decisions.",
      technologies: ["Unity", "C#", "Firebase", "KNN Algorithm", "Minimax Algorithm"],
    },
    {
      title: "Barangay Comembo Mobile Application (Admin)",
      image: queuebyWeb,
      description: "Barangay Comembo Mobile Application is a convenient app for residents of Comembo, Taguig City, allowing them to request various documents online instead of visiting the barangay office. Users can submit requests and receive notifications when their documents are ready for pickup, streamlining the process. The admin website facilitates the management of these requests, enabling administrators to accept or reject submissions and oversee document processing, ensuring efficient service delivery. Developed with Laravel, Tailwind CSS, and Firebase, this application enhances accessibility and efficiency for local governance.",
      technologies: ["Laravel", "Blade", "React", "Composer", "Tailwind CSS", "Firebase"],
    },
    {
      title: "Barangay Comembo Mobile Application (User)",
      image: queuebyAndroid,
      description: "Barangay Comembo Mobile Application is an innovative app for residents of Comembo, Taguig City, enabling them to conveniently request various documents without visiting the barangay office. Users can submit requests, receive notifications when their documents are ready for pickup, and track their requests within the app. Additionally, the application provides updates on local barangay activities. Developed using Android Studio, Java, and Firebase, this user-friendly mobile app enhances accessibility and streamlines document requests for the community.",
      technologies: ["Android Studio", "Java", "Kotlin", "Android SDK", "Gradle", "Firebase"],
    },
    {
      title: "Mangadeck (Android)",
      image: mangadeck,
      description: "Mangadeck is a dedicated app for otaku to read their favorite manga and manhwa. The application features a user-friendly interface with frontend components designed for an enjoyable reading experience. Backend functionality is developed using Java, and Firebase is integrated for efficient database management, ensuring seamless access to a vast library of manga and manhwa titles.",
      technologies: ["Android Studio", "Java", "Kotlin", "Android SDK", "Gradle", "Firebase"],
    },
    {
      title: "6.14 FoodHub",
      image: foodhub,
      description: "6.14 FoodHub is an e-commerce platform for a local shop in Pinagsama Phase 2, Taguig, showcasing its diverse range of products. Built using HTML, PHP, JavaScript, Bootstrap, and MySQL, the website provides a seamless shopping experience for customers, allowing them to browse and purchase local goods with ease.",
      technologies: ["HTML", "PHP", "JavaScript", "Bootstrap", "MySQL"],
    },
    {
      title: "e-Tech Workplace",
      image: eTech,
      description: "e-Tech Workplace is an e-commerce website dedicated to showcasing a wide range of electronic devices, including motherboards, cases, keyboards, headsets, and CPUs. Built using HTML, JavaScript, PHP, and MySQL, the platform provides an easy-to-navigate shopping experience for tech enthusiasts looking to purchase the latest electronic products.",
      technologies: ["HTML", "PHP", "JavaScript", "MySQL"],
    },
  ];

  export const images = [
    "/3Dman.png",
    "/3Dman2.png",
    "/3Dman3.png",
    "/3Dman4.png",
  ];

  export const techImages = [
    { src: html, alt: 'HTML' },
    { src: php, alt: 'PHP' },
    { src: css, alt: 'CSS' },
    { src: javascript, alt: 'JavaScript' },
    { src: c, alt: 'C' },
    { src: cplusplus, alt: 'C++' },
    { src: csharp, alt: 'C#' },
    { src: java, alt: 'Java' },
    { src: reactjs, alt: 'React' },
    { src: nodejs, alt: 'Node.js' },
    { src: git, alt: 'Git' },
    { src: nextjs, alt: 'Next.js' },
    { src: tailwind, alt: 'Tailwind CSS' },
    { src: bootstrap, alt: 'Bootstrap' },
    { src: mysql, alt: 'MySQL' },
    { src: firebase, alt: 'Firebase' },
    { src: mongodb, alt: 'MongoDB' },
  ];

 

 