import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ sending: false, ok: null, msg: "" });

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const validate = (form) => {
    const name = form.user_name.value.trim();
    const email = form.user_email.value.trim();
    const message = form.message.value.trim();
    const honeypot = form.company?.value; // honeypot

    if (honeypot) return { ok: false, msg: "Spam detectado." };
    if (name.length < 2) return { ok: false, msg: "El nombre es muy corto." };
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return { ok: false, msg: "Email inválido." };
    if (message.length < 10)
      return { ok: false, msg: "El mensaje debe tener al menos 10 caracteres." };
    return { ok: true };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    const v = validate(form);
    if (!v.ok) {
      setStatus({ sending: false, ok: false, msg: v.msg });
      return;
    }

    try {
      setStatus({ sending: true, ok: null, msg: "" });

      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, {
        publicKey: PUBLIC_KEY,
      });

      setStatus({ sending: false, ok: true, msg: "¡Mensaje enviado con éxito!" });
      form.reset();
    } catch (err) {
      setStatus({
        sending: false,
        ok: false,
        msg: "Ocurrió un error al enviar. Intentá nuevamente.",
      });
      console.error(err);
    }
  };
  console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-black text-white pt-20"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-purple-400">
        Contacto
      </h2>

      <p className="max-w-lg mb-8 text-gray-300">
        Si querés ponerte en contacto conmigo, completá el formulario y te respondo a la brevedad.
      </p>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-900 p-6 rounded-lg shadow-lg border border-purple-500"
      >
        {/* Honeypot (invisible para humanos) */}
        <input
          type="text"
          name="company"
          tabIndex="-1"
          autoComplete="off"
          className="hidden"
        />

        <div className="mb-4 text-left">
          <label className="block text-gray-300 mb-2" htmlFor="user_name">
            Nombre
          </label>
          <input
            id="user_name"
            name="user_name"
            type="text"
            placeholder="Tu nombre"
            required
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-purple-500"
          />
        </div>

        <div className="mb-4 text-left">
          <label className="block text-gray-300 mb-2" htmlFor="user_email">
            Email
          </label>
          <input
            id="user_email"
            name="user_email"
            type="email"
            placeholder="tuemail@ejemplo.com"
            required
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-purple-500"
          />
        </div>

        <div className="mb-6 text-left">
          <label className="block text-gray-300 mb-2" htmlFor="message">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Escribí tu mensaje..."
            required
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-purple-500"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status.sending}
          className={`bg-purple-500 hover:bg-purple-600 disabled:opacity-60 disabled:cursor-not-allowed text-white py-2 px-6 rounded-full transition ${
            status.sending ? "animate-pulse" : ""
          }`}
        >
          {status.sending ? "Enviando..." : "Enviar"}
        </button>

        {/* Mensaje de estado */}
        {status.ok === true && (
          <p className="mt-4 text-green-400">{status.msg}</p>
        )}
        {status.ok === false && (
          <p className="mt-4 text-red-400">{status.msg}</p>
        )}
      </form>

     
    </section>
  );
};

export default Contact;
