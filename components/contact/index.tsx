import { useState } from "react";
import emailjs from "emailjs-com";
import Image from "next/image";
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
      className="relative bg-transparent w-screen h-screen flex flex-col justify-center items-start px-5 md:px-10 lg:px-48"
    >
      <div className="absolute bottom-0 -right-48 md:bottom-32 md:right-32 lg:-bottom-20 lg:right-48 w-[512px] h-[512px] md:w-[700px] md:h-[700px] opacity-40">
        <Image
          src="/assets/img/contact-gradient.svg"
          alt="gradient"
          layout="fill"
          objectFit="contain"
          quality={100}
        />
      </div>
      <h2 className="text-4xl font-semibold text-slate-50 mb-5 font-helvetica">
        Contact
      </h2>
      <h4 className="mb-4 text-lg font-normal text-slate-50">Get In Touch!</h4>
      <div className="w-full flex flex-col lg:flex-row justify-between items-start">
        <form
          onSubmit={handleSubmit}
          className="w-full lg:w-3/5 flex flex-col justify-start items-start md:mb-10"
          name="form"
          autoComplete="off"
        >
          <input
            type="text"
            id="name"
            name="name"
            className="border-slate-50 text-gray-700 border-2 rounded-none p-3 bg-transparent w-full mb-3 text-sm duration-500  hover:bg-zinc-800/80 focus:bg-zinc-700/80"
            placeholder="Full Name"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            id="email"
            name="email"
            className="border-slate-50 text-gray-700 border-2 rounded-none p-3 bg-transparent w-full mb-3 text-sm duration-500  hover:bg-zinc-800/80 focus:bg-zinc-700/80"
            placeholder="Email"
            required
            onChange={handleChange}
          />
          <textarea
            name="message"
            id="message"
            className="border-slate-50 text-gray-700 border-2 rounded-none p-3 bg-transparent w-full mb-3 text-sm duration-500 hover:bg-zinc-800/80 focus:bg-zinc-700/80"
            rows={4}
            placeholder="Message"
            required
            onChange={handleChange}
          />
          <button
            type="submit"
            className="border-2 border-slate-50 duration-700 transition-all ease-in-out hover:bg-slate-50 "
            disabled={submitted}
          >
            <p className="px-6 py-3 duration-700 transition-all ease-in-out text-slate-50 !bg-clip-text hover:text-transparent gradient-purple font-semibold cursor-pointer">
              {submitted ? "Sent!" : "Send"}
            </p>
          </button>
        </form>
        <div className="w-full lg:w-2/5 pt-8 md:pt-0 md:px-8">
          <div className="flex flex-row justify-start items-center mb-5">
            <a
              href="https://www.instagram.com/yrhacks/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-50 ml-2 text-sm md:text-lg flex duration-300 ease-in-out transition-all hover:text-transparent gradient-purple !bg-clip-text"
            >
              <FaInstagram className="text-slate-50 text-xl md:text-3xl mr-3" />
              @yrhacks
            </a>
          </div>
          <div className="flex flex-row justify-start items-center">
            <a
              href="mailto:yorkregionhacks@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-50 ml-2 text-sm md:text-lg flex duration-300 ease-in-out transition-all hover:text-transparent gradient-purple !bg-clip-text"
            >
              <AiOutlineMail className="text-slate-50 text-xl md:text-3xl mr-3" />
              yorkregionhacks@gmail.com
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
