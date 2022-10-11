import { useState } from "react";
import emailjs from "emailjs-com";
import Image from "next/image";
import { FiInstagram, FiMail } from "react-icons/fi";

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
      className="relative bg-transparent w-screen flex flex-col justify-center items-start px-5 md:px-10 lg:px-48 py-20"
    >
      {/*
      <div className="absolute -top-24 -left-48 rotate-90 md:-top-96 md:-left-44 lg:-top-96 lg:-left-40 w-[512px] h-[512px] md:w-[800px] md:h-[800px] opacity-40 blur-2xl">
        <Image
          src="/assets/img/faq-gradient-left.svg"
          alt="gradient"
          layout="fill"
          objectFit="contain"
          quality={100}
          priority
        />
      </div>
      <div className="absolute bottom-0 -right-48 md:bottom-32 md:right-32 lg:-bottom-20 lg:right-48 w-[512px] h-[512px] md:w-[700px] md:h-[700px] opacity-40 blur-2xl">
        <Image
          src="/assets/img/contact-gradient.svg"
          alt="gradient"
          layout="fill"
          objectFit="contain"
          quality={100}
          priority
        />
  </div>*/}
      <div className="w-full h-full z-20 ">
        <h2 className="text-4xl font-semibold text-slate-50 mb-5 font-helvetica">
          Contact
        </h2>
        <h3 className="mb-4 text-lg font-normal text-slate-50">
          Get In Touch!
        </h3>
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
              className="p-3 mb-3 w-full text-slate-50 placeholder:text-slate-50/50 text-sm duration-300 transition-all ease-in-out border-[1px] hover:border-slate-50/40 border-slate-50/10 bg-transparent bg-gradient-to-br from-slate-50/[0.03] to-transparent rounded-md backdrop-blur-lg focus:ring-2 focus:ring-offset-1 focus:ring-offset-purple-500/50 focus:ring-purple-600/70"
              placeholder="Full Name"
              required
              onChange={handleChange}
            />
            <input
              type="text"
              id="email"
              name="email"
              className="p-3 mb-3 w-full text-slate-50 placeholder:text-slate-50/50 text-sm duration-300 transition-all ease-in-out border-[1px] hover:border-slate-50/40 border-slate-50/10 bg-transparent bg-gradient-to-br from-slate-50/[0.03] to-transparent rounded-md backdrop-blur-lg focus:ring-2 focus:ring-offset-1 focus:ring-offset-purple-500/50 focus:ring-purple-600/70"
              placeholder="Email"
              required
              onChange={handleChange}
            />
            <textarea
              name="message"
              id="message"
              className="p-3 mb-3 w-full text-slate-50 placeholder:text-slate-50/50 text-sm duration-300 transition-all ease-in-out border-[1px] hover:border-slate-50/40 border-slate-50/10 bg-transparent bg-gradient-to-br from-slate-50/[0.03] to-transparent rounded-md backdrop-blur-lg resize-y min-h-[80px] h-40 max-h-96 focus:ring-2 focus:ring-offset-1 focus:ring-offset-purple-500/50 focus:ring-purple-600/70"
              rows={6}
              placeholder="Message"
              required
              onChange={handleChange}
            />
            <button
              type="submit"
              className="w-full text-gray-400 text-sm duration-300 transition-all ease-in-out border-[1px] hover:border-purple-600/40 hover:shadow-[0_0_25px_-5px] hover:shadow-purple-600/10 border-slate-50/10 bg-transparent bg-gradient-to-br from-slate-50/[0.08] via-slate-50/[0.03] to-slate-50/[0.01] rounded-md backdrop-blur-lg focus:ring-2 focus:ring-offset-1 focus:ring-offset-purple-500/50 focus:ring-purple-600/70"
              disabled={submitted}
            >
              <p className="h-full w-full px-6 py-3 duration-300 transition-all ease-in-out text-slate-50 !bg-clip-text hover:text-transparent gradient-purple font-bold cursor-pointer">
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
                className="text-slate-50 ml-2 text-sm md:text-lg flex items-center duration-300 ease-in-out transition-all group hover:text-transparent gradient-purple !bg-clip-text"
              >
                <FiInstagram className="text-slate-50 group-hover:text-indigo-600 duration-300 text-lg md:text-2xl mr-3" />
                @yrhacks
              </a>
            </div>
            <div className="flex flex-row justify-start items-center">
              <a
                href="mailto:yorkregionhacks@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-50 ml-2 text-sm md:text-lg flex items-center duration-300 ease-in-out transition-all group hover:text-transparent gradient-purple !bg-clip-text"
              >
                <FiMail className="text-slate-50 group-hover:text-indigo-600 duration-300 text-lg md:text-2xl mr-3" />
                yorkregionhacks@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
