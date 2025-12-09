import ScheduleImage from "../images/ScheduleImage.png";
import PacManImage from "../images/PacManImage.png";
import SoundSpaceImage from "../images/SoundSpaceImage.png";
import clifyScreenshot from "../images/clifyScreenshot.png";

const projectsData = [
      {
      id: 5,
      title: "LSM-Tree Key-Value Store",
      description:
        "High-performance key-value store built from scratch using C++. Uses an LSM-tree architecture, bloom filters, B-tree SSTs, and a buffer pool to optimize disk I/O and storage efficiency.",
      image: clifyScreenshot,
      repoLink: "https://clify-omega.vercel.app/",
      skills: ["C++", "GoogleTest"],
    },
    {
      id: 1,
      title: "CLI-fy",
      description: "Spotify statistics visualizer, view your top artists and songs in a terminal theme.",
      image: clifyScreenshot,
      repoLink: "https://clify-omega.vercel.app/",
      skills: ['Next.js', 'React', 'JavaScript'],
    },
    {
      id: 2,
      title: "Interactive Scheduling System",
      description: "Interactive scheduling system for one-on-one meetings. Includes email reminders, setting meeting priority, and a calendar to track meetings.",
      image: ScheduleImage, 
      repoLink: "https://github.com/mistryrohan/Scheduling-System-UI",
      skills: ['React', 'JavaScript', 'Django', 'Python', 'SQLite'],
    },
    {
      id: 3,
      title: "Image AI PacMan",
      description: "The original Pac-Man game reimagined using Cohere's APIs to add a story layer. Made at UofTHacks 11.",
      image: PacManImage,
      repoLink: "https://github.com/mistryrohan/Image-AI-Pac-Man",
      skills: ['Python', 'PyGame'],
    },
    {
      id: 4,
      title: "UofT SoundSpace | Quiet Study Spaces Locator",
      description: "Mobile application for UofT students to discover quiet study spaces on campus. Made at UofTHacks 10.",
      image: SoundSpaceImage,
      repoLink: "https://github.com/mistryrohan/Soundspace",
      skills: ['JavaScript', 'React Native'],
    },
  ];
  
  export default projectsData;