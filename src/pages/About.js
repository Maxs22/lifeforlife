import React from "react";
import image1 from "../assets/lifeforlife.jpeg";

const About = () => {
  return (
    <div
      className="min-h-[85vh] lg:min-h-[100vh] flex items-center "
      id="about"
    >
      <dic className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-center gap-y-8 lg:items-center lg:gap-x-12 ">
          <div className="w-full flex justify-center ">
            <img className="w-[200px] lg:w-[1000px] " src={image1} alt=" " />
          </div>

          <div className="text-center lg:text-left lg:ml-9 text-white mx-10 lg:mx-2">
            <div className="mb-6 text-3xl lg:text-5xl font-thin text-blue-300">
              <h1>Our goal</h1>
            </div>
            <div className="mb-8 text-4xl lg:text-5xl font-semibold">
              <span>Life for Life</span>
            </div>

            <p className="my-4">
              At <strong> Life </strong> for <strong> Life </strong> Ministry,
              we believe in the transformative power of love and faith. Our
              commitment is to guide each individual towards a fulfilling and
              meaningful life, strengthening their relationship with God and
              their community. Together, we forge a path of hope and purpose,
              making a lasting impact on lives. Join us on this journey of
              spiritual growth and service to others.
            </p>
          </div>
        </div>
      </dic>
    </div>
  );
};

export default About;
