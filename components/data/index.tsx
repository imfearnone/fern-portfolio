import { FaFacebook, FaWhatsapp, FaViber, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";

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
      image: "/vMEME.png",
      description: "vMeme is an e-commerce platform that showcases and sells unique paintings from local artists. Built with Next.js and Tailwind CSS, it offers a user-friendly experience for art enthusiasts to explore and purchase one-of-a-kind artworks, supporting local talent and fostering a vibrant community of creativity.",
      technologies: ["Next.js", "React", "Vercel", "Node.js", "Vercel", "TypeScript", "Tailwind CSS", "Firebase", "MongoDB"],
      github: "https://github.com/iamflorenz08/VMeme-Client",
      demo: "https://vmeme.vercel.app/",
    },
    {
      title: "Community Crave",
      image: "/community-crave.png",
      description: "Community Crave is an e-commerce website that highlights local shops in West Rembo, Taguig City. Built with Next.js and Tailwind CSS, it provides a platform for users to explore and support neighborhood businesses, offering a convenient way to shop locally and discover unique products.",
      technologies: ["Next.js", "React", "Vercel", "Node.js", "Vercel", "TypeScript", "Tailwind CSS", "Firebase", "MongoDB"],
      github: "https://github.com/iamflorenz08/Community-Crave-Client",
      demo: "https://community-crave.vercel.app/",
    },
    {
      title: "Development of Chrono Clash: A Strategic Board Game Utilizing K-Nearest Neighbors and Minimax Algorithm for Possible Game Players Movement",
      image: "/chronoclash.png",
      description: "Chrono Clash is a modern twist on classic chess, incorporating power-ups and unique abilities for chess pieces. Developed using Unity and Firebase, the game employs the Minimax algorithm for suggesting optimal moves during gameplay and the K-Nearest Neighbors (KNN) algorithm for analyzing player movements post-game. This innovative approach enhances strategic depth and provides players with insights into their gameplay decisions.",
      technologies: ["Unity", "C#", "Firebase", "KNN Algorithm", "Minimax Algorithm"],
    },
    {
      title: "Barangay Comembo Mobile Application (Admin)",
      image: "/queuebyWeb.png",
      description: "Barangay Comembo Mobile Application is a convenient app for residents of Comembo, Taguig City, allowing them to request various documents online instead of visiting the barangay office. Users can submit requests and receive notifications when their documents are ready for pickup, streamlining the process. The admin website facilitates the management of these requests, enabling administrators to accept or reject submissions and oversee document processing, ensuring efficient service delivery. Developed with Laravel, Tailwind CSS, and Firebase, this application enhances accessibility and efficiency for local governance.",
      technologies: ["Laravel", "Blade", "React", "Composer", "Tailwind CSS", "Firebase"],
    },
    {
      title: "Barangay Comembo Mobile Application (User)",
      image: "/queuebyAndroid.png",
      description: "Barangay Comembo Mobile Application is an innovative app for residents of Comembo, Taguig City, enabling them to conveniently request various documents without visiting the barangay office. Users can submit requests, receive notifications when their documents are ready for pickup, and track their requests within the app. Additionally, the application provides updates on local barangay activities. Developed using Android Studio, Java, and Firebase, this user-friendly mobile app enhances accessibility and streamlines document requests for the community.",
      technologies: ["Android Studio", "Java", "Kotlin", "Android SDK", "Gradle", "Firebase"],
    },
    {
      title: "Mangadeck (Android)",
      image: "/mangadeck.jpg",
      description: "Mangadeck is a dedicated app for otaku to read their favorite manga and manhwa. The application features a user-friendly interface with frontend components designed for an enjoyable reading experience. Backend functionality is developed using Java, and Firebase is integrated for efficient database management, ensuring seamless access to a vast library of manga and manhwa titles.",
      technologies: ["Android Studio", "Java", "Kotlin", "Android SDK", "Gradle", "Firebase"],
    },
    {
      title: "6.14 FoodHub",
      image: "/614foodhub.png",
      description: "6.14 FoodHub is an e-commerce platform for a local shop in Pinagsama Phase 2, Taguig, showcasing its diverse range of products. Built using HTML, PHP, JavaScript, Bootstrap, and MySQL, the website provides a seamless shopping experience for customers, allowing them to browse and purchase local goods with ease.",
      technologies: ["HTML", "PHP", "JavaScript", "Bootstrap", "MySQL"],
    },
    {
      title: "e-Tech Workplace",
      image: "/eTech.png",
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
    { src: '/html.svg', alt: 'HTML' },
    { src: '/php.png', alt: 'PHP' },
    { src: '/css.svg', alt: 'CSS' },
    { src: '/javascript.svg', alt: 'JavaScript' },
    { src: '/c.png', alt: 'C' },
    { src: '/cplusplus.png', alt: 'C++' },
    { src: '/csharp.png', alt: 'C#' },
    { src: '/java.svg', alt: 'Java' },
    { src: '/reactjs.svg', alt: 'React' },
    { src: '/nodejs.svg', alt: 'Node.js' },
    { src: '/git.svg', alt: 'Git' },
    { src: '/nextjs.png', alt: 'Next.js' },
    { src: '/tailwind.svg', alt: 'Tailwind CSS' },
    { src: '/bootstrap.png', alt: 'Bootstrap' },
    { src: '/mysql.png', alt: 'MySQL' },
    { src: '/firebase.svg', alt: 'Firebase' },
    { src: '/mongodb.png', alt: 'MongoDB' },
  ];

 

 