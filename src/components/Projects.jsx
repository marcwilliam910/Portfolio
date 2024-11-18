import React from "react";
import pos from "../assets/POS/POS.png";
import appleSphere1 from "../assets/AppleSphere/pic1.png";
import ecoSort1 from "../assets/EcoSort/pic1.png";
import hotel from "../assets/Hotel/hotel-management.png";
import insecured from "../assets/inseCURED/insecured.png";
import {FiArrowUpRight} from "react-icons/fi";

const projects = [
  {
    title: "Iba NHS - EcoSort",
    description:
      "A web-based platform for a high school, integrated with a custom waste segregation device to monitor real-time waste levels (Paper, Metal, Bottle) across different locations like the canteen and faculty. It includes a secure admin login, a dashboard for viewing waste levels, a Record Keeping page for tracking waste sales with data visualization, and PDF report generation for submission to DEPED. The platform also features a notification system with push notifications for admins and SMS alerts for selected staff via the Semaphore API, along with light and dark mode support for accessibility.",
    image: ecoSort1,
    link: "https://drive.google.com/file/d/1aT3K_gO3lTS0i1nTGIZgOGJVBj9meMh9/view?usp=sharing",
    github: "",
    tech: ["React", "TypeScript", "Tailwind", "Firebase"],
  },
  {
    title: "AppleSphere",
    description:
      "Developed the front-end UI for a school project e-commerce website, featuring a dynamic shopping cart that allows users to easily add, remove, and update products. The interface includes an intuitive product listing with search functionality, secure user authentication for login and logout, and a custom CAPTCHA-protected signup process. Users can change their password, access profiles to view personal information and purchase history, leave product reviews and ratings, and communicate with customer support or sellers through integrated messaging.",
    image: appleSphere1,
    link: "https://drive.google.com/file/d/1efDALpJTbR-xV8t2a3AHsPfYXOlDyg8q/view?usp=sharing",
    github: "https://github.com/marcwilliam910/AppleSphere",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "inseCURED",
    description:
      "Designed a full-stack e-commerce website as a school project, specializing in skincare products such as face wash, toner, moisturizer, sunscreen, and serum, in partnership with five skincare brands (e.g., CeraVe, Olay). The platform allows users to register and log in to their accounts, add items to their cart and wishlist, and view product details. The admin dashboard features CRUD functionalities and provides insights into total sales per partnered company (e.g., CeraVe - 2000 pesos) and product category (e.g., toner - 1500 pesos).",
    image: insecured,
    link: "https://drive.google.com/file/d/1_DV3Or_8hZ_B6Lm6Sn2EbzDaks472eAo/view?usp=sharing",
    github: "",
    tech: ["HTML", "CSS", "JQuery", "Ajax", "PHP", "MySQL"],
  },
  {
    title: "Pharmacy POS and Inventory System",
    description:
      "Created a comprehensive pharmacy POS and inventory management system tailored to meet specific client needs, featuring a multi-tab dashboard for streamlined management of POS, expenses, inventory, and income. Integrated a MySQL database for reliable data storage and retrieval, along with graphical and chart-based reports for daily, weekly, and monthly income tracking. The system also includes customized functionalities designed to align with the unique workflows of the client’s pharmacy.",
    image: pos,
    link: "https://drive.google.com/file/d/1c8L_7RXQZmkpLr9AFR3CqU-YFCzMHbcs/view?usp=sharing",
    github: "https://github.com/marcwilliam910/Java-GUI-Pharmacy-POS-Inventory",
    tech: ["Java Swing", "MySQL"],
  },
  {
    title: "Hotel Management System",
    description:
      "Developed a command-line hotel management system that demonstrates practical implementation of data structures including linked lists, stacks, queues, and arrays. The system enables efficient room management through unique room codes (SR1, DX1, etc.), featuring functionalities such as availability checking, booking processing, and room searching across different categories (Standard, Deluxe, Suite, Presidential). Through strategic use of search and sort algorithms, the system provides optimized performance for hotel operations while showcasing practical applications of fundamental programming concepts.",
    image: hotel,
    link: "",
    github: "https://github.com/marcwilliam910/Hotel-Management-System",
    tech: ["Data Structure and Algorithm", "C++", "Command Line"],
  },
];

export default function Projects({setShowDescription}) {
  return (
    <section id="Projects" className="space-y-4 sm:space-y-6 lg:space-y-0">
      <h2 className="text-xl font-bold text-light-primaryText sm:text-2xl ">
        Projects
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-5 lg:divide-y-2 lg:divide-zinc-400/60">
        {projects.map((project) => (
          <div
            className="flex flex-col w-64 gap-3 h-[20rem] bg-light-card/70 lg:grid lg:grid-cols-large lg:w-full lg:bg-transparent lg:pt-5 md:w-[18rem] md:h-[22rem] lg:h-fit"
            key={project.title}
          >
            <div className="flex justify-center flex-1 lg:h-32 lg:w-full xl:h-36">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full lg:w-56 xl:w-64"
              />
            </div>
            <div className="flex flex-col justify-between flex-1 gap-2 px-2 py-2 lg:gap-7 lg:py-0 ">
              <div className="space-y-4 lg:space-y-2">
                <h3 className="pl-1 text-sm font-semibold lg:text-lg md:text-base">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 text-[.60rem] sm:text-[.65rem] text-zinc-200">
                  {project.tech.map((t) => (
                    <p
                      className="px-3.5 py-1.5 bg-light-primary/85 text-dark-text "
                      key={t}
                    >
                      {t}
                    </p>
                  ))}
                </div>
              </div>
              <div className="hidden lg:block lg:w-full">
                <p className="text-xs text-justify indent-5">
                  {project.description}
                </p>
              </div>
              <div className="flex items-center justify-between text-[.65rem] md:text-xs xl:text-[.80rem] px-1.5 lg:justify-end">
                <button
                  onClick={() => setShowDescription(project)}
                  className="lg:hidden"
                >
                  Description
                </button>
                <div className="flex self-end gap-2 ">
                  <button className="hover:underline">
                    <a href={project.github} target="_blank">
                      Github
                    </a>
                  </button>
                  <button className="flex items-center underline ">
                    <a href={project.link} target="_blank">
                      Link
                    </a>
                    <FiArrowUpRight className="size-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
