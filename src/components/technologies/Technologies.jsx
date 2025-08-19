import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaJs,
  FaPython,
  FaCloud,
  FaCode,
  FaDatabase,
  FaProjectDiagram,
  FaFigma,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiTailwindcss, SiDotnet } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

const allTechs = [
  { icon: <FaReact />, name: "React" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3Alt />, name: "CSS" },
  { icon: <FaBootstrap />, name: "Bootstrap" },
  { icon: <SiTailwindcss />, name: "TaildwindCSS" },
  {
    icon: <div className="text-7xl font-bold text-purple-500">C#</div>,
    name: "C#",
  },
  { icon: <SiDotnet />, name: ".NET" },
  { icon: <FaDatabase />, name: "SQL" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <VscAzure />, name: "Azure" },
  { icon: <FaFigma />, name: "Figma" },
];

const Technologies = () => {
  const [index, setIndex] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(
        (prev) => (prev + 1) % Math.ceil(allTechs.length / itemsPerPage)
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const visibleTechs = allTechs.slice(
    index * itemsPerPage,
    index * itemsPerPage + itemsPerPage
  );

  return (
    <section id="technologies" className="bg-black text-white py-16 px-5">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Tecnologías que domino</h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center"
          >
            {visibleTechs.map((tech, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="text-7xl text-purple-500 mb-2">{tech.icon}</div>
                <p className="text-purple-500 font-bold">{tech.name}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Technologies;
