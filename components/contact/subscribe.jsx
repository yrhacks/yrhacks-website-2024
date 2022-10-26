import React, { useRef, useState } from "react";

const Subscribe = () => {
  const inputEl = useRef(null);
  const [message, setMessage] = useState("");
  const [sendSuccess, setSendSuccess] = useState(false);

  const subscribe = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      setMessage(error);
      return;
    }
    inputEl.current.value = "";
    setMessage("Success! You are now subscribed to our newsletter.");
    setSendSuccess(true);
  };

  return (
    <form onSubmit={subscribe} className="pt-7 mx-1">
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
        placeholder="Email"
        required
        ref={inputEl}
      />
      <p className="text-slate-50/90 text-base font-normal mb-3">
        {message
          ? message
          : `We'll send you important reminders and information about YRHacks 2023.`}
      </p>
      <button
        type="submit"
        className={
          "w-full text-gray-400 text-sm duration-300 transition-all ease-in-out border-[1px] enabled:hover:border-purple-600/40 enabled:hover:shadow-[0_0_25px_-5px] enabled:hover:shadow-purple-600/10 border-slate-50/10 enabled:bg-transparent enabled:bg-gradient-to-br enabled:from-slate-50/[0.08] enabled:via-slate-50/[0.03] enabled:to-slate-50/[0.01] rounded-md backdrop-blur-lg enabled:focus:ring-2 enabled:focus:ring-offset-1 enabled:focus:ring-offset-purple-500/50 enabled:focus:ring-purple-600/70 " +
          (sendSuccess ? "send-success" : "sending")
        }
        disabled={sendSuccess}
      >
        <p
          className={
            "h-full w-full px-6 py-3 duration-300 transition-all ease-in-out text-slate-50/90 !bg-clip-text gradient-purple font-bold " +
            (!sendSuccess && "hover:text-transparent cursor-pointer")
          }
        >
          Subscribe!
        </p>
      </button>
    </form>
  );
};

export default Subscribe;
