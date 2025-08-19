import { FaGithub } from "react-icons/fa";
const projects = [
  {
    title: "Front EndGestión de Club",
    description:
      "Sistema para administracion reservas, usuarios y pagos en un club deportivo.",
    image: "https://i.ibb.co/fV5771kM/Logo-Sin-Fondo.png",
    github: "https://github.com/Juarba/Front-end-GestionClub",
  },
  {
    title: "Back End para casa de comidas",
    description:
      "Sistema para administracion de un bar, con control de delivery, cocina y pedidos",
    image: "https://i.ibb.co/84T5wRcg/Laviejabck.png",
    github: "https://github.com/Juarba/CruzBack",
  },
  {
    title: "Front End para casa de comidas",
    description:
      "Sistema para administracion de un bar, con control de delivery, cocina y pedidos",
    image: "https://i.ibb.co/99KP90s4/LaVieja.png",
    github: "https://github.com/Juarba/FrontEnd-Cruz",
  },

];

const Projects = () => {
  return (
    <section id="projects" className="bg-black text-white py-16 px-5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Mis Proyectos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl border border-purple-500 shadow-md hover:scale-105 transition-transform duration-300 overflow-hidden"
            >
              <div className="bg-white w-full h-40 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-h-32"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-3xl font-bold text-center mb-10">
          <h5 className="mb-4">Para conocer más sobre mis trabajos</h5>
          <div className="flex justify-center">
            <a
              href="https://github.com/Juarba"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-purple-500 hover:text-purple-600 transform hover:scale-110 transition-transform duration-300"
            >
              <FaGithub size={50} />
            </a>
            
          </div>
          <h6 className="flex justify-center text-purple-500 mt-2">Github</h6>
        </div>
      </div>
    </section>
  );
};

export default Projects;
