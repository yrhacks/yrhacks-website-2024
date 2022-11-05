import React, { useRef, useState } from "react";

const Subscribe = () => {
  const inputEl = useRef(null);
  const [message, setMessage] = useState(
    "We'll send you important reminders and information about YRHacks 2023."
  );
  const [sendSuccess, setSendSuccess] = useState(false);

  const testEmail = (email) => {
    const re = /\d\d\d\d\d\d\d\d\d@gapps\.yrdsb\.ca/g;
    return re.test(email);
  };

  const parseDetails = (details) => {
    let parsedDetails = "";
    for (let i = 0; i <= details.indexOf("}".charCodeAt(0)); i++) {
      parsedDetails += String.fromCharCode(details[i]);
    }
    return JSON.parse(parsedDetails).detail;
  };

  const subscribe = async (e) => {
    e.preventDefault();
    if (!testEmail(inputEl.current.value)) {
      setMessage(
        "Please enter a valid YRDSB email, e.g. 341030799@gapps.yrdsb.ca"
      );
      return;
    }
    setMessage("Subscribing...");
    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });

    const { error, response } = await res.json();
    if (error) {
      setMessage(
        "Error: " +
          parseDetails(response._outBuffer.data) +
          " Email yorkregionhacks@gmail.com for help."
      );
      return;
    }
    setMessage("Success! You are now subscribed to our newsletter.");
    setSendSuccess(true);
  };

  return (
    <form onSubmit={subscribe} className="pt-7 mx-1 w-full">
      <p className="text-slate-50/90 text-lg font-bold leading-6 pb-3">
        Sign up for our{" "}
        <span className="text-transparent !bg-clip-text gradient-purple">
          newsletter
        </span>{" "}
        to stay updated!
      </p>
      <input
        type="email"
        id="email-input"
        name="email"
        className="p-3 mb-3 w-full text-slate-50/90 placeholder:text-slate-50/50 text-sm duration-300 transition-all ease-in-out border-[1px] hover:border-purple-300/60 border-slate-50/10 bg-transparent bg-gradient-to-br from-slate-50/[0.03] to-transparent rounded-md backdrop-blur-lg focus:ring-1 focus:ring-offset-1 focus:ring-offset-purple-500/30 focus:ring-purple-600/50"
        placeholder="YRDSB Email"
        autoCapitalize="off"
        autoCorrect="off"
        autoComplete="off"
        required
        ref={inputEl}
      />
      <p
        className={
          "text-base font-normal mb-3 " +
          (message.includes("YRDSB") ? "text-red-500/90" : "text-slate-50/90")
        }
      >
        {message}
      </p>
      <button
        type="submit"
        className={
          "w-full text-sm duration-300 transition-all ease-in-out border-[1px] enabled:hover:border-purple-600/40 enabled:hover:shadow-[0_0_25px_-5px] enabled:hover:shadow-purple-600/10 border-slate-50/10 enabled:bg-transparent enabled:bg-gradient-to-br enabled:from-slate-50/[0.08] enabled:via-slate-50/[0.03] enabled:to-slate-50/[0.01] rounded-md backdrop-blur-lg enabled:focus:ring-2 enabled:focus:ring-offset-1 enabled:focus:ring-offset-purple-500/50 enabled:focus:ring-purple-600/70 " +
          (sendSuccess ? "send-success" : "sending")
        }
        disabled={sendSuccess}
      >
        <p
          className={
            "h-full w-full px-6 py-3 duration-300 transition-all ease-in-out !bg-clip-text gradient-purple font-bold " +
            (!sendSuccess
              ? "hover:text-transparent cursor-pointer text-slate-50/90"
              : "text-slate-600/90")
          }
        >
          {sendSuccess ? "Subscribed!" : "Subscribe!"}
        </p>
      </button>
    </form>
  );
};

export default Subscribe;
