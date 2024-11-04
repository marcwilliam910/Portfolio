import React, {useRef} from "react";
import {IoMdCheckmark} from "react-icons/io";
import {RiLoader2Line} from "react-icons/ri";
import {BiErrorAlt} from "react-icons/bi";
import useEmailJs from "../custom/useEmailJs";

export default function Contact() {
  const form = useRef();

  const {error, loading, sendEmail, success} = useEmailJs(form);

  return (
    <section id="Contact" className="flex flex-col gap-5 sm:gap-7 lg:hidden">
      <h2 className=" relative pb-1 text-xl font-bold text-light-primaryText after:content-[''] after:absolute after:bg-light-primary/30 after:bottom-0 after:left-0 after:w-16 after:h-1 sm:text-2xl md:text-3xl md:self-center md:after:w-24">
        Get in touch
      </h2>
      <div>
        <form
          className="flex flex-col gap-2 px-1 text-xs sm:text-sm sm:px-3 md:px-28 md:gap-3 lg:px-20 xl:px-28"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="pl-1">
              Name <span className="text-xs">(optional)</span>
            </label>
            <input
              type="text"
              placeholder="Juan Dela Cruz"
              id="name"
              name="from_name"
              className="px-2 py-2.5 border-2 rounded-md bg-light-card/80 outline-light-primary/80"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="pl-1">
              Email
            </label>
            <input
              type="email"
              placeholder="juandelacruz@gmail.com"
              id="email"
              name="from_email"
              className="px-2 py-2.5 border-2 rounded-md bg-light-card/80 outline-light-primary/80"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="messahe" className="pl-1">
              Message
            </label>

            <textarea
              placeholder="Hi, I'm interested in your work!"
              id="message"
              className="px-2 py-2.5 border-2 rounded-md outline-light-primary/80 bg-light-card/80 h-[150px]"
              required
              name="message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="flex items-center self-center justify-center w-full py-2 text-base text-white rounded-md bg-light-primary sm:w-4/5 md:w-full"
          >
            {loading ? (
              <RiLoader2Line className="size-6 animate-spin" />
            ) : (
              <p>Send</p>
            )}
          </button>
        </form>
        {success && (
          <div className="flex items-center justify-center gap-1 mt-3 text-xs text-green-600">
            <IoMdCheckmark />
            <p>Message sent successfully!</p>
          </div>
        )}
        {error && (
          <div className="flex items-center justify-center gap-1 mt-3 text-xs text-red-600">
            <BiErrorAlt />
            <p>Something went wrong, please try again!</p>
          </div>
        )}
      </div>
    </section>
  );
}
