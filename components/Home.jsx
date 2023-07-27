import React from "react";
import heroImg from "../assets/nilesh.png";

const Home = () => {

  return (
    <div className=" px-7 md:px-10 my-14 md:h-screen bg-[#1a1a29]" id="home">
      <div>
        <div className="w-full flex  flex-col md:flex-row  items-center justify-between">
          {/* text */}

          <div className="text-white">
            <h6 className="text-3xl mt-32">Hello,I'm</h6>
            <h1 className="font-semibold text-3xl md:text-5xl my-4">
              Nilesh Prajapati
            </h1>
            <p className="md:w-96">
              I'm a Web Designer/UI Designer,Youtuber created website design or
              frontend design
            </p>

            <div className="mt-5">
              <button
                className="btn bg-primary py-2 px-2 text-white rounded hover:bg-white hover:text-primary
            transition-all duration-500"
              >
                About Me
              </button>
              <button className="btn outline px-6 py-1.5 border-none text-white ml-5 rounded">
                Projects
              </button>
            </div>
          </div>
          <div className="order-first md:order-last  relative">
            <img src={heroImg} className=" " alt="" />
          </div>
        </div>

        {/* divider */}
        <div className=" w-full h-24 bg-[#181824] mx-auto absolute left-0 hidden md:block">
       
        </div>
      </div>
    </div>
  );
};

export default Home;
