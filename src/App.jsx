import React, {useEffect, useRef, useState} from "react";
import {MdMailOutline, MdMail, MdOutlineFileDownload} from "react-icons/md";
import {GoHome, GoHomeFill} from "react-icons/go";
import {RiUser3Line, RiUser3Fill} from "react-icons/ri";
import {FaRegFolderOpen, FaFolderOpen, FaCode} from "react-icons/fa";
import {FaCode as FaCodeOutline} from "react-icons/fa6";
import {LuGithub, LuFacebook, LuLinkedin, LuInstagram} from "react-icons/lu";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import {Link as ScrollLink} from "react-scroll";
import Contact from "./components/Contact";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import Footer from "./components/Footer";
import useEmailJs from "./custom/useEmailJs";
import {IoMdCheckmark} from "react-icons/io";
import {RiLoader2Line} from "react-icons/ri";
import {BiErrorAlt} from "react-icons/bi";
import Modal from "./components/Modal";

const socialsStyle = "sm:size-5 lg:size-6";

const navItems = [
  {
    id: "Home",
    name: "Home",
    outlined: <GoHome />,
    filled: <GoHomeFill />,
  },
  {
    id: "About",
    name: "About",
    outlined: <RiUser3Line />,
    filled: <RiUser3Fill />,
  },
  {
    id: "Technologies",
    name: "Technologies",
    outlined: <FaCodeOutline />,
    filled: <FaCode />,
  },
  {
    id: "Projects",
    name: "Projects",
    outlined: <FaRegFolderOpen />,
    filled: <FaFolderOpen />,
  },
  {
    id: "Contact",
    name: "Contact",
    outlined: <MdMailOutline />,
    filled: <MdMail />,
  },
];
const socials = [
  {
    icon: <LuGithub className={`${socialsStyle}`} />,
    link: "https://github.com/marcwilliam910",
  },
  {
    icon: <LuLinkedin className={`${socialsStyle}`} />,
    link: "https://www.linkedin.com/in/marc-william-valiente-a72705316/",
  },
  {
    icon: <LuFacebook className={`${socialsStyle}`} />,
    link: "https://www.facebook.com/2THLESSSSS",
  },
  {
    icon: <LuInstagram className={`${socialsStyle}`} />,
    link: "https://www.instagram.com/marcsuuu_/",
  },
];

export default function App() {
  const [active, setActive] = useState("");
  const [showDescription, setShowDescription] = useState(false);
  const [projectInfo, setProjectInfo] = useState({});
  const socialsRef = useRef(null);
  const mainRef = useRef(null);
  const navRef = useRef(null);
  const mainContentRef = useRef(null);
  const form = useRef(null);

  const {error, loading, sendEmail, success} = useEmailJs(form);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px", // Creates a narrow band in the middle
        threshold: 0,
      }
    );

    navItems.forEach(({id}) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      navItems.forEach(({id}) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  useGSAP(() => {
    const main = mainRef.current;
    const socialIcons = socialsRef.current.children;
    const nav = navRef.current.children;
    const mainContent = mainContentRef.current.children;

    gsap.set([main.children, socialIcons, nav], {autoAlpha: 0, y: 50});
    gsap.set(mainContent, {
      x: 100,
      opacity: 0,
    });

    const tl = gsap.timeline({defaults: {ease: "power3.out"}});

    tl.to(main.children, {
      autoAlpha: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      delay: 1,
    })
      .to(
        socialIcons,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
        },
        "-=0.5"
      )
      .from("button", {
        scale: 0.8,
        duration: 0.5,
        ease: "back.out(1.7)",
      })
      .to(
        nav,
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "bounce",
        },
        "-=0.3"
      )
      .to(mainContent, {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: {
          amount: 0.5,
          ease: "power2.out",
        },
      });
  }, []);

  function showProjectDescription(project) {
    setShowDescription(true);
    setProjectInfo(project);
  }

  return (
    <>
      {showDescription && (
        <Modal project={projectInfo} setShowDescription={setShowDescription} />
      )}
      <div className="px-3 lg:relative bg-light-bodyBg lg:grid lg:grid-cols-large lg:px-14 xl:px-20">
        <main
          ref={mainRef}
          className="flex flex-col items-center justify-center h-screen gap-1 pb-10 text-light-text lg:justify-start lg:items-start lg:pt-16 lg:sticky lg:left-0 lg:top-0 lg:gap-1.5 lg:overflow-y-auto lg:pb-0"
          id="Home"
        >
          <p className="sm:text-lg lg:text-base xl:text-lg">
            Hello, I'm
            <span className="font-medium"> Marc William Valiente</span>
          </p>
          <h1 className="text-2xl font-extrabold tracking-wider text-center sm:text-4xl text-light-primaryText font-title lg:text-3xl xl:text-4xl">
            A Front-End Developer
          </h1>
          <div
            className="flex items-center justify-around gap-2 my-3"
            ref={socialsRef}
          >
            {socials.map((social) => (
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                key={social.link}
                className="p-3 duration-150 rounded-full hover:bg-zinc-300"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <button className="flex items-center gap-2 px-3 py-1.5 transition duration-300 ease-in-out border rounded-md border-light-primary hover:bg-light-primary sm:px-3.5 sm:text-lg">
            <MdOutlineFileDownload />
            <p>Resume</p>
          </button>

          <form
            className="hidden gap-2 mt-12 text-xs xl:w-96 lg:w-80 lg:flex-col lg:flex lg:justify-self-end"
            ref={form}
            onSubmit={sendEmail}
          >
            <h2 className=" relative pb-2 text-[1.3rem] font-bold text-light-primaryText after:content-[''] after:absolute after:bg-light-primary/30 after:bottom-0 after:left-0 after:w-16 after:h-1 self-center mb-3">
              Get in touch
            </h2>
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
                className="px-2 py-2.5 border-2 rounded-md bg-light-card/80 outline-light-primary/80"
                name="from_email"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="pl-1">
                Message
              </label>

              <textarea
                placeholder="Hi, I'm interested in your work!"
                id="message"
                name="message"
                className="px-2 py-2.5 border-2 rounded-md outline-light-primary/80 bg-light-card/80 h-[90px] resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center self-center justify-center w-full py-2 mt-3 text-base text-white rounded-md bg-light-primary"
            >
              {loading ? (
                <RiLoader2Line className="size-6 animate-spin" />
              ) : (
                <p>Send</p>
              )}
            </button>
            {success && (
              <div className="flex items-center justify-center gap-1 mt-3 text-xs text-green-600">
                <p>Message sent successfully!</p>
                <IoMdCheckmark />
              </div>
            )}
            {error && (
              <div className="flex items-center justify-center gap-1 mt-3 text-xs text-red-600">
                <BiErrorAlt />
                <p>Something went wrong, please try again!</p>
              </div>
            )}
          </form>
        </main>

        <div
          className="flex flex-col gap-16 px-1 pb-20 overflow-hidden text-light-text md:gap-24 lg:mt-14 lg:gap-28 lg:pb-0"
          ref={mainContentRef}
        >
          <About />
          <Skills />
          <Projects setShowDescription={showProjectDescription} />
          <Contact />
          <Footer />
        </div>

        <nav
          className="fixed left-0 right-0 flex items-center justify-center px-3 bottom-5 lg:hidden"
          ref={navRef}
        >
          <ul className="flex items-center py-1.5 text-sm rounded-lg shadow-md justify-evenly w-full bg-light-card sm:w-5/6">
            {navItems.map((navItem) => (
              <ScrollLink
                offset={navItem.id === "Technologies" ? -120 : -70}
                smooth={true}
                duration={500}
                to={navItem.id}
                key={navItem.name}
                className={`p-2.5 text-xl rounded-full cursor-pointer text-light-primary ${
                  active === navItem.id ? "bg-light-primary/20" : ""
                }`}
              >
                {active === navItem.id ? navItem.filled : navItem.outlined}
              </ScrollLink>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
