import { useState } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { FiInstagram, FiMail } from "react-icons/fi";
import ReactGA from "react-ga4";

const handleInstagramClick = () => {
  ReactGA.event({
    category: "Social",
    action: "Opened Instagram Account",
  });
};
const handleContactSend = () => {
  ReactGA.event({
    category: "Social",
    action: "Sent Contact Mail",
  });
};
const handleMailClick = () => {
  ReactGA.event({
    category: "Social",
    action: "Opened Email",
  });
};
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

    const params = {
      content: "New message from website <@&1118302616120725695> <@&1118302477343793242>!",
      embeds: [
        {
          color: 8076741,
          author: {
            name: `From: ${name}`,
          },
          title: email,
          description: "```" + message + "```",
          timestamp: new Date().toISOString(),
        },
      ],
    };

    fetch("https://discord.com/api/webhooks/1198831713774735400/nBTKFFGA6vZaV994bjbnUd9U2sRcCCZ7BHIqPFdV3yf4wAE04Nc8mKaBxgfRybAO5zvp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((res) => {
        if (res.status === 204) {
          clearState();
          setFailed(false);
          setSubmitLabel("Sent!");
          {
            handleContactSend;
          }
        } else {
          throw new Error("Something went wrong");
        }
      })
      .catch((err) => {
        setFailed(true);
        setSubmitLabel("Send");
      });

    // fetch("/api/contact", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     name,
    //     email,
    //     message,
    //   }),
    // })
    //   .then((res) => {
    //     if (res.status === 200) {
    //       clearState();
    //       setFailed(false);
    //       setSubmitLabel("Sent!");
    //       {handleContactSend}
    //     } else {
    //       throw new Error("Something went wrong");
    //     }
    //   })
    //   .catch((err) => {
    //     setFailed(true);
    //     setSubmitLabel("Send");
    //   });
  };

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  };

  return (
    <main
      id="contact"
      className="relative bg-transparent w-screen flex flex-col justify-center items-start px-5 md:px-10 lg:px-48 pt-28"
    >
      <div data-aos="fade-up" className="w-full h-full z-20">
        <h2 className="text-4xl font-semibold text-violet-100/80 mb-5 font-helvetica">
          Contact
        </h2>
        <h3 className="mb-4 text-lg font-normal text-violet-100/80">
          Get In Touch!
        </h3>
        <div className="w-full flex flex-col lg:flex-row justify-between lg:items-stretch items-center">
          <form
            onSubmit={handleSubmit}
            className="w-full lg:w-3/5 flex flex-col justify-between items-start md:mb-10"
            name="form"
            autoComplete="off"
          >
            <input
              type="text"
              id="name"
              name="name"
              className="p-3 mb-3 w-full text-violet-100/80 placeholder:text-slate-50/50 text-sm duration-300 transition-all ease-in-out border-[1px] hover:border-purple-300/60 border-slate-50/10 bg-transparent bg-gradient-to-br from-slate-50/[0.03] to-transparent rounded-md backdrop-blur-lg focus:ring-1 focus:ring-offset-1 focus:ring-offset-purple-500/30 focus:ring-purple-600/50"
              placeholder="Full Name"
              required
              onChange={handleChange}
            />
            <input
              type="email"
              id="email"
              name="email"
              className="p-3 mb-3 w-full text-violet-100/80 placeholder:text-slate-50/50 text-sm duration-300 transition-all ease-in-out border-[1px] hover:border-purple-300/60 border-slate-50/10 bg-transparent bg-gradient-to-br from-slate-50/[0.03] to-transparent rounded-md backdrop-blur-lg focus:ring-1 focus:ring-offset-1 focus:ring-offset-purple-500/30 focus:ring-purple-600/50"
              placeholder="Email"
              required
              onChange={handleChange}
            />
            <textarea
              name="message"
              id="message"
              className="p-3 mb-3 w-full text-violet-100/80 placeholder:text-slate-50/50 text-sm duration-300 transition-all ease-in-out border-[1px] hover:border-purple-300/60 border-slate-50/10 bg-transparent bg-gradient-to-br from-slate-50/[0.03] to-transparent rounded-md backdrop-blur-lg resize-y min-h-[80px] h-40 max-h-96 focus:ring-2 focus:ring-offset-1 focus:ring-offset-purple-500/30 focus:ring-purple-600/50"
              rows={6}
              placeholder="Message"
              required
              onChange={handleChange}
            />
            <button
              type="submit"
              className={
                "w-full duration-300 transition-all ease-in-out border-[1px] enabled:hover:border-purple-600/40 enabled:hover:shadow-[0_0_25px_-5px] enabled:hover:shadow-purple-600/10 border-slate-50/10 enabled:bg-transparent enabled:bg-gradient-to-br enabled:from-slate-50/[0.08] enabled:via-slate-50/[0.03] enabled:to-slate-50/[0.01] rounded-md backdrop-blur-lg enabled:focus:ring-2 enabled:focus:ring-offset-1 enabled:focus:ring-offset-purple-500/50 enabled:focus:ring-purple-600/70 " +
                (submitLabel === "Sent!"
                  ? "send-success"
                  : submitLabel === "Sending..."
                  ? "sending"
                  : "")
              }
              disabled={submitLabel != "Send"}
            >
              <p
                className={
                  "px-6 py-3 duration-300 transition-all ease-in-out text-violet-100/80 !bg-clip-text gradient-yrhacks font-bold " +
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
          <div className="w-full lg:w-2/5 pt-8 md:pt-0 md:px-8 flex flex-col h-full justify-between items-start">
            <div className="flex flex-row justify-start items-center mb-5">
              <a
                href="https://www.instagram.com/yrhacks/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-100/80 ml-2 text-sm md:text-lg flex items-center duration-300 ease-in-out transition-all group hover:text-transparent gradient-yrhacks !bg-clip-text"
                onClick={handleInstagramClick}
              >
                <FiInstagram className="text-violet-100/80 group-hover:text-indigo-600 duration-300 text-lg md:text-2xl mr-3" />
                @yrhacks
              </a>
            </div>
            <div className="flex flex-row justify-start items-center">
              <a
                href="mailto:yorkregionhacks@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-100/80 ml-2 text-sm md:text-lg flex items-center duration-300 ease-in-out transition-all group hover:text-transparent gradient-yrhacks !bg-clip-text"
                onClick={handleMailClick}
              >
                <FiMail className="text-violet-100/80 group-hover:text-indigo-600 duration-300 text-lg md:text-2xl mr-3" />
                yorkregionhacks@gmail.com
              </a>
            </div>
            <div className="pt-7 mx-1 w-full">
              <p className="text-violet-100/80 text-lg font-bold leading-6 pb-3">
                Follow our Instagram to stay updated!
              </p>
              <a
                href="https://instagram.com/yrhacks"
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center justify-center mt-5 px-6 py-3 w-full text-base duration-300 transition-all ease-in-out border-[1px] hover:border-purple-600/40 hover:shadow-[0_0_25px_-5px] hover:shadow-purple-600/10 border-slate-50/10 bg-gradient-to-br from-slate-50/[0.08] via-slate-50/[0.03] to-slate-50/[0.01] rounded-md backdrop-blur-lg focus:ring-2 focus:ring-offset-1 focus:ring-offset-purple-500/50 focus:ring-purple-600/70 text-violet-100/80 hover:text-purple-500 font-bold"
                onClick={handleInstagramClick}
              >
                Follow us! <AiOutlineLink className="ml-1 inline" />
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
export const config = { runtime: 'experimental-edge' };
