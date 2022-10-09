import { useState } from "react";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div
      id="contact"
      className="w-full h-screen flex flex-col justify-center items-start px-5"
    >
      <h2 className="text-4xl font-semibold text-white mb-8">Contact</h2>
      <h4 className="mb-3 text-md">Get In Touch</h4>
      <form>
        <input
          value={name}
          placeholder="Full Name"
          className="border-slate-400 border-2 p-3 bg-zinc-800 w-full mb-3 text-sm"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value={email}
          placeholder="Email"
          className="border-slate-400 border-2 p-3 bg-zinc-800 w-full mb-3 text-sm"
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          value={message}
          placeholder="Message"
          className="border-slate-400 border-2 p-3 bg-zinc-800 w-full mb-3 text-sm"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="bg-slate-400 p-3 text-white font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
