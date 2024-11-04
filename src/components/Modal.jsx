import React from "react";
import {IoCloseSharp} from "react-icons/io5";

export default function Modal({project, setShowDescription}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-7 bg-black/80 sm:px-10 md:p-32">
      <div className="relative bg-white rounded-xl">
        <IoCloseSharp
          className="absolute text-red-600 size-6 right-1 top-1 sm:top-2 sm:right-2 sm:size-7"
          onClick={() => setShowDescription(false)}
        />
        <img src={project.image} alt={project.title} className="w-full" />
        <div className="p-4 space-y-3 sm:p-8 md:px-12">
          <h1 className="text-xs font-bold text-center sm:text-base">
            {project.title}
          </h1>
          <p className="text-justify indent-6 text-[.65rem] sm:text-sm">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
}
