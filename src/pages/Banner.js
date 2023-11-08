import React from "react";

import gif1 from "../assets/shape.gif";

const Banner = () => {
  return (
    <div className="min-h-[75vh] lg:min-h-[100vh] flex items-center " id="home">
      <dic className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row justify-center lg:items-center  mx-10 lg:mx-2">
          <div className="text-center lg:text-left lg:ml-9 text-white px-2 lg:w-[50%] ">
            <h2 className="mb-2 text-3xl lg:text-5xl font-thin ">Hello!</h2>
            <h1 className="mb-1 text-3xl lg:text-7xl font-semibold gradient-text h-[78px]">
              We are the ministry Life for Life.
            </h1>

            <p className="lg:text-2xl  ">
              Welcome to our online community! Discover a space of love, faith,
              and community in our Baptist Church. Explore inspiring teachings,
              exciting events, and connect with people who share your spiritual
              journey. We invite you to be part of our virtual family and
              together grow in the grace and knowledge of our Lord Jesus Christ.
            </p>
          </div>
          <div className=" flex justify-center items-center ">
            <img className="w-[200px] lg:w-[600px]" src={gif1} alt=" " />
          </div>
        </div>
      </dic>
    </div>
  );
};

export default Banner;
