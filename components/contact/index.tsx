import { useState } from "react";
import emailjs from "emailjs-com";
import { BsInstagram } from "react-icons/bs";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .sendForm(
        "service_ol3x7zp",
        "template_nj7ov2k",
        e.target,
        "SHVnnO8qR9eEzsaN4"
      )
      .then(
        (result) => {
          console.log(result.text);
          clearState();
          setSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <main
      id="contact"
      className="w-full h-screen flex flex-col justify-center items-start px-5 md:px-10 lg:px-48"
    >
      <h2 className="text-4xl font-semibold text-white mb-8">Contact</h2>
      <h4 className="mb-3 text-md">Get In Touch</h4>
      <div>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col justify-start items-start"
          name="form"
          autoComplete="off"
        >
          <input
            type="text"
            id="name"
            name="name"
            className="border-slate-400 border-2 p-3 bg-zinc-800 w-full mb-3 text-sm"
            placeholder="Full Name"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            id="email"
            name="email"
            className="border-slate-400 border-2 p-3 bg-zinc-800 w-full mb-3 text-sm"
            placeholder="Email"
            required
            onChange={handleChange}
          />
          <textarea
            name="message"
            id="message"
            className="border-slate-400 border-2 p-3 bg-zinc-800 w-full mb-3 text-sm"
            rows={4}
            placeholder="Message"
            required
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="bg-slate-400 p-3 text-white font-semibold"
            disabled={submitted}
          >
            {submitted ? "Sent!" : "Send"}
          </button>
        </form>
        <div>
          <div className="flex flex-row justify-start items-center">
            <BsInstagram />
            <a
              href="https://www.instagram.com/yrhacks/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white ml-2"
            >
              @yrhacks
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
