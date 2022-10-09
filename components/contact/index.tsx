import { useState } from "react";
import emailjs from "emailjs-com";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

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
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
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
      className="bg-slate-950 w-screen h-screen flex flex-col justify-center items-start px-5 md:px-10 lg:px-48"
    >
      <h2 className="text-4xl font-semibold text-white mb-5 font-helvetica">
        Contact
      </h2>
      <h4 className="mb-4 text-lg font-normal">Get In Touch!</h4>
      <div className="w-full flex flex-row justify-between items-start">
        <form
          onSubmit={handleSubmit}
          className="w-3/5 flex flex-col justify-start items-start"
          name="form"
          autoComplete="off"
        >
          <input
            type="text"
            id="name"
            name="name"
            className="border-slate-50 border-2 p-3 bg-transparent w-full mb-3 text-sm duration-500  hover:bg-zinc-800/80 focus:bg-zinc-700/80"
            placeholder="Full Name"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            id="email"
            name="email"
            className="border-slate-50 border-2 p-3 bg-transparent w-full mb-3 text-sm duration-500  hover:bg-zinc-800/80 focus:bg-zinc-700/80"
            placeholder="Email"
            required
            onChange={handleChange}
          />
          <textarea
            name="message"
            id="message"
            className="border-slate-50 border-2 p-3 bg-transparent w-full mb-3 text-sm duration-500 hover:bg-zinc-800/80 focus:bg-zinc-700/80"
            rows={4}
            placeholder="Message"
            required
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="border-2 border-slate-50 duration-700 transition-all ease-in-out hover:bg-slate-50 "
            disabled={submitted}
          >
            <p className="px-6 py-3 duration-700 transition-all ease-in-out text-white !bg-clip-text hover:text-transparent gradient-purple font-semibold cursor-pointer">
              {submitted ? "Sent!" : "Send"}
            </p>
          </button>
        </form>
        <div className="w-2/5 px-8">
          <div className="flex flex-row justify-start items-center mb-5">
            <a
              href="https://www.instagram.com/yrhacks/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white ml-2 text-lg flex duration-300 ease-in-out transition-all hover:text-transparent gradient-purple !bg-clip-text"
            >
              <FaInstagram className="text-white text-3xl mr-3" />
              @yrhacks
            </a>
          </div>
          <div className="flex flex-row justify-start items-center">
            <a
              href="mailto:yorkregionhacks@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white ml-2 text-lg flex duration-300 ease-in-out transition-all hover:text-transparent gradient-purple !bg-clip-text"
            >
              <AiOutlineMail className="text-white text-3xl mr-3" />
              yorkregionhacks@gmail.com
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
