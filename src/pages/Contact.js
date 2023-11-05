import React from "react";
import gif1 from "../assets/shape4.gif";

const Contact = () => {
  return (
    <div
      className="min-h-[85vh] lg:min-h-[100vh] flex items-center mb-52 "
      id="contact"
    >
      <dic className="container mx-auto ">
        <div className="">
          <div className=" flex justify-center items-center mb-20">
            <img className="w-[100px] lg:w-[300px]" src={gif1} alt=" " />
          </div>

          <div className="text-white text-center ">
            <div className="mb-6 text-3xl lg:text-5xl font-thin text-blue-300">
              <h1>Contact us</h1>
            </div>
            <div className="px-12  w-full flex justify-center mt-10 ">
              <div className="group relative overflow-hidden  w-[100px] h-[100px] flex flex-col justify-center items-center border-2 border-white/50 rounded-xl mx-3">
                <a
                  href="https://www.tiktok.com/@lifeforlife_argentina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group-hover:bg-cyan-300/50 w-full h-[100%] absolute z-40 transition-all duration-300 flex flex-col justify-center items-center "
                >
                  <span className=" ">
                    <img
                      color="#ffffff"
                      width={30}
                      className="group-hover:scale-125 transition-all duration-500 invert"
                      src="/tik-tok.svg"
                      alt=" Tik-Tok "
                    />
                  </span>

                  <p className={`text-sm opacity-50 my-2`}>TikTok</p>
                </a>
              </div>
              <div className="group relative overflow-hidden  w-[100px] h-[100px] flex flex-col justify-center items-center border-2 border-white/50 rounded-xl mx-3">
                <a
                  href="https://www.facebook.com/daniel.castillo.144734"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group-hover:bg-cyan-300/50 w-full h-[100%] absolute z-40 transition-all duration-300 flex flex-col justify-center items-center "
                >
                  <span className=" ">
                    <img
                      color="#ffffff"
                      width={30}
                      className="group-hover:scale-125 transition-all duration-500 invert"
                      src="/facebook.svg"
                      alt=" Facebbok "
                    />
                  </span>

                  <p className={`text-sm opacity-50 my-2`}>Facebook</p>
                </a>
              </div>
              <div className="group relative overflow-hidden  w-[100px] h-[100px] flex flex-col justify-center items-center border-2 border-white/50 rounded-xl mx-3">
                <a
                  href="https://www.instagram.com/life_for_life_argentina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group-hover:bg-cyan-300/50 w-full h-[100%] absolute z-40 transition-all duration-300 flex flex-col justify-center items-center "
                >
                  <span className=" ">
                    <img
                      color="#ffffff"
                      width={30}
                      className="group-hover:scale-125 transition-all duration-500 invert"
                      src="/instagram.svg"
                      alt=" Instagram "
                    />
                  </span>

                  <p className={`text-sm opacity-50 my-2`}>Instagram</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </dic>
    </div>
  );
};

export default Contact;
