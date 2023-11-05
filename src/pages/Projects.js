import React from "react";
import pastor from "../assets/projects/pastor.jpeg";
import daniel from "../assets/projects/daniel2.jpeg";
import pastora from "../assets/projects/pastora.jpeg";
import monica from "../assets/projects/monica.jpeg";

const Contact = () => {
  return (
    <div
      className="min-h-[85vh] lg:min-h-[100vh] flex items-center "
      id="projects"
    >
      <div className="container mx-auto">
        <div className="flex flex-col  ">
          <div className="mb-6 text-3xl lg:text-5xl font-thin text-blue-300  w-full text-center mt-20">
            <p>About us</p>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center w-full ">
            <div className=" group relative overflow-hidden border-2 border-white/50 rounded-xl mx-4 my-4 ">
              <div className="group-hover:bg-white/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500 w-[300px] h-48 md:w-92 md:h-60 lg:w-[500px] lg:h-72 object-cover"
                src={pastor}
                width={500}
                alt="RCC Construction Inc Web"
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 text-stone-600 font-bold">
                Pedro Chavez - Bishop - Founder Life for Life
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center w-full ">
            <div className=" group relative overflow-hidden border-2 border-white/50 rounded-xl mx-4 my-4 ">
              <div className="group-hover:bg-white/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500 w-[300px] h-48 md:w-92 md:h-60 lg:w-[500px] lg:h-72 object-cover"
                src={pastora}
                width={500}
                alt=" "
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 text-stone-600 font-bold">
                Esperanza Zamora - Founder Life for Life
              </div>
            </div>

            <div className=" group relative overflow-hidden border-2 border-white/50 rounded-xl mx-4 my-4">
              <div className="group-hover:bg-white/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500 w-[300px] h-48 md:w-92 md:h-60 lg:w-[500px] lg:h-72 object-cover"
                src={daniel}
                width={500}
                alt=" "
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 text-stone-600  font-bold">
                Daniel Castillo - Shepherd
              </div>
            </div>
            <div className=" group relative overflow-hidden border-2 border-white/50 rounded-xl mx-4 my-4">
              <div className="group-hover:bg-white/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500 w-[300px] h-48 md:w-92 md:h-60 lg:w-[500px] lg:h-72 object-cover"
                src={monica}
                width={500}
                alt=" "
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 text-stone-600  font-bold">
                Monica Uriz - Salmista
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
