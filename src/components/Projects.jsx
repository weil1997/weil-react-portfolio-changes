import React from "react";

import spotify from "../assets/spotify-bild.jpg";
import kanban from "../assets/kanban-bild.jpg";
import klarna from "../assets/klarna-bild2.jpg";

const Projects = () => {
  const Portfolios = [
    {
      id: 1,
      src: kanban,
    },
    {
      id: 2,
      src: spotify,
    },
    {
      id: 3,
      src: klarna,
    },
  ];

 
  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black to bg-gray-800 w-full text-white py-8"
    >
      <div className="max-w-screen lg p-4 mc-auto flex flex-col justify-center w-full h-full  ">
        <div className="pb-8">
          <p className="flex flex-col items-center justify-center text-4xl font-bold p-2 inline">
            Portfolio
          </p>
          <p className="py-6 text-center font-bold">
            Check out some of my work right here
          </p>
        </div>
        <div className="flex flex-col items-center">
          {Portfolios.map(({ id, src }) => (
            <div key={id} className="rounded-lg mb-4">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 max-w-64 max-h-64"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
