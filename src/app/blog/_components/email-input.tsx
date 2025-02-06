"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { IoMdMail } from "react-icons/io";

export default function EmailInput() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  function checkIsValidEmail(email: string) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleChange = (e: any) => {
    setEmail(e.target.value);

    if (checkIsValidEmail(e.target.value)) {
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        layout
        className={cn(
          "box-border rounded-lg py-2 px-4 mt-4 border min-w-[40%] border-zinc-200 dark:border-zinc-700",
          submitted && "bg-green-500 dark:bg-green-800 text-white text-center",
          error && "border-red-500"
        )}
      >
        {submitted ? (
          <motion.div
            initial={{ y: -10, opacity: 0.6 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              damping: 5,
              //   stiffness: 100,
              duration: 0.1,
            }}
            exit={{ opacity: 0 }}
          >
            <p className="text-center">Thank you for subscribing!</p>
          </motion.div>
        ) : (
          <input
            type="text"
            className="outline-none w-full"
            placeholder="Enter your email"
            onChange={handleChange}
            value={email}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                setSubmitted(true);
                setTimeout(() => {
                  setSubmitted(false);
                }, 20000);
              }
            }}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
}

export const EmailDialogInput = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -10 },
  };

  const transition = {
    type: "spring",
    stiffness: 500,
    damping: 50,
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return <motion.div></motion.div>;
};
