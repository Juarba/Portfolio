const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-black text-white pt-20"
    >
      <img
        src="https://avatars.githubusercontent.com/u/1?v=4"
        alt="Juan Martin Masqueda"
        className="w-32 h-32 rounded-full border-4 border-purple-500 mb-6"
      />

      <h1 className="text-4xl sm:text-5xl font-bold mb-4">
        Juan Martín Masqueda
      </h1>

      <h2 className="text-xl sm:text-2xl text-purple-400 mb-2">
        Técnico Universitario en Programación
      </h2>

      <p className="max-w-xl mb-6 text-gray-300">
        
        Apasionado por el desarrollo web, me especializo como desarrollador Full Stack. 
        Me destaco por mi compromiso, creatividad y ganas de aprender en entornos desafiantes.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="#contact"
          className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-6 rounded-full transition"
        >
          Contactame
        </a>
        <a
          href="/cv.pdf"
          download
          className="border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white py-2 px-6 rounded-full transition"
        >
          Descargar CV
        </a>
      </div>
    </section>
  );
};

export default Hero;
