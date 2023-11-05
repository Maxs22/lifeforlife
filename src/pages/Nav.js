import React from "react";

import { Link } from "react-scroll";

const Nav = () => {
  return (
    <>
      <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50 ba lg:hidden">
        <div className="container mx-auto">
          <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex items-center justify-between text-white/50">
            <Link
              to="home"
              smooth={true}
              spy={true}
              activeClass="active"
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center "
            >
              <p>Home</p>
            </Link>
            <Link
              to="about"
              smooth={true}
              spy={true}
              activeClass="active"
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center "
            >
              <p>Our goal</p>
            </Link>
            <Link
              to="projects"
              smooth={true}
              spy={true}
              activeClass="active"
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center "
            >
              <p>About us</p>
            </Link>
            <Link
              to="contact"
              smooth={true}
              spy={true}
              activeClass="active"
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center "
            >
              <p>Contact us</p>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
