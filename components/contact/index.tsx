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
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [messageInvalid, setMessageInvalid] = useState(false);
  const [failed, setFailed] = useState(false);
  const [submitLabel, setSubmitLabel] = useState("Send");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailInvalid(true);
      return;
    }
    setEmailInvalid(false);
    if (message.trim().length === 0) {
      setMessageInvalid(true);
      return;
    }
    setMessageInvalid(false);
    setSubmitLabel("Sending...");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      )
      .then((result) => {
        clearState();
        setFailed(false);
        setSubmitLabel("Sent!");
      })
      .catch((error) => {
        setFailed(true);
        setSubmitLabel("Send");
      });
  };

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  };

  return (
    <main
      id="contact"
      className="relative bg-transparent w-screen flex flex-col justify-center items-start px-5 md:px-10 lg:px-48 py-20"
    >
      <div className="absolute -top-24 -left-48 rotate-90 md:-top-96 md:-left-44 lg:-top-96 lg:-left-40 w-[512px] h-[512px] md:w-[800px] md:h-[800px] opacity-40 blur-2xl faq-gradient-left" />
      <div className="absolute bottom-0 -right-48 md:bottom-32 md:right-32 lg:-bottom-20 lg:right-48 w-[512px] h-[512px] md:w-[700px] md:h-[700px] opacity-40 blur-2xl contact-gradient" />
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
              className="p-3 mb-3 w-full text-slate-50 placeholder:text-slate-50/50 text-sm duration-300 transition-all ease-in-out border-[1px] hover:border-purple-300/60 border-slate-50/10 bg-transparent bg-gradient-to-br from-slate-50/[0.03] to-transparent rounded-md backdrop-blur-lg focus:ring-1 focus:ring-offset-1 focus:ring-offset-purple-500/30 focus:ring-purple-600/50"
              placeholder="Full Name"
              required
              onChange={handleChange}
            />
            <input
              type="text"
              id="email"
              name="email"
              className="p-3 mb-3 w-full text-slate-50 placeholder:text-slate-50/50 text-sm duration-300 transition-all ease-in-out border-[1px] hover:border-purple-300/60 border-slate-50/10 bg-transparent bg-gradient-to-br from-slate-50/[0.03] to-transparent rounded-md backdrop-blur-lg focus:ring-1 focus:ring-offset-1 focus:ring-offset-purple-500/30 focus:ring-purple-600/50"
              placeholder="Email"
              required
              onChange={handleChange}
            />
            <textarea
              name="message"
              id="message"
              className="p-3 mb-3 w-full text-slate-50 placeholder:text-slate-50/50 text-sm duration-300 transition-all ease-in-out border-[1px] hover:border-purple-300/60 border-slate-50/10 bg-transparent bg-gradient-to-br from-slate-50/[0.03] to-transparent rounded-md backdrop-blur-lg resize-y min-h-[80px] h-40 max-h-96 focus:ring-2 focus:ring-offset-1 focus:ring-offset-purple-500/30 focus:ring-purple-600/50"
              rows={6}
              placeholder="Message"
              required
              onChange={handleChange}
            />
            <button
              type="submit"
              className="w-full text-gray-400 text-sm duration-300 transition-all ease-in-out border-[1px] enabled:hover:border-purple-600/40 enabled:hover:shadow-[0_0_25px_-5px] enabled:hover:shadow-purple-600/10 border-slate-50/10 bg-transparent bg-gradient-to-br from-slate-50/[0.08] via-slate-50/[0.03] to-slate-50/[0.01] rounded-md backdrop-blur-lg enabled:focus:ring-2 enabled:focus:ring-offset-1 enabled:focus:ring-offset-purple-500/50 enabled:focus:ring-purple-600/70 disabled:from-slate-100/10 disabled:to-slate-100/30"
              disabled={submitLabel != "Send"}
            >
              <p
                className={
                  "h-full w-full px-6 py-3 duration-300 transition-all ease-in-out text-slate-50 !bg-clip-text gradient-purple font-bold " +
                  (!(submitLabel != "Send") &&
                    "hover:text-transparent cursor-pointer")
                }
              >
                {submitLabel}
              </p>
            </button>
            <div className="h-8">
              {emailInvalid && (
                <p className="text-red-500 text-sm font-semibold mt-3">
                  Please enter a valid email address.
                </p>
              )}
              {messageInvalid && (
                <p className="text-red-500 text-sm font-semibold mt-3">
                  Please enter a message.
                </p>
              )}
              {failed && (
                <p className="text-red-500 text-sm font-semibold mt-3">
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
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
