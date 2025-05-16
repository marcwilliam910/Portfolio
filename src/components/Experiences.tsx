import React from "react";
import {MdWorkOutline} from "react-icons/md";
import {BsCalendar2Week} from "react-icons/bs";
import {FaBuilding} from "react-icons/fa";

const experiences = [
  {
    company: "Comptrolla Technologies, Inc.",
    position: "Software Developer Intern",
    duration: "Feb 2025 - May 2025",
    description:
      "Assisted in building the Outsourcee onboarding portal using  Next.js, TypeScript, and Tailwind CSS, focusing on company, branch, and expert registration features. Implemented Zod for dynamic form validation, cutting data-entry errors by 40%+. Integrated Express.js APIs for CRUD operations, secured workflows with Supabase Auth and role-based access, and improved performance by managing UI state with MobX.",
  },
];

export default function Experiences() {
  return (
    <section id="Experiences" className="px-2 space-y-6">
      <h2 className="text-xl font-bold text-light-primaryText sm:text-2xl">
        Experiences
      </h2>
      <div className="flex flex-col gap-8">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="relative pl-6 border-l-2 md:pl-8 border-light-primary/30"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-light-primary" />
            <div className="space-y-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-start">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MdWorkOutline className="text-light-primary" />
                    <h3 className="text-base font-medium text-light-primaryText">
                      {experience.position}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaBuilding className="text-light-primary" />
                    <p className="text-[.85rem] sm:text-sm text-light-text/90">
                      {experience.company}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <BsCalendar2Week className="text-light-primary" />
                  <p className="text-[.70rem] text-light-text/70">
                    {experience.duration}
                  </p>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-justify md:text-sm text-light-text/90">
                {experience.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
