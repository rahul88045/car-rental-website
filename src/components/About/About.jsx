// eslint-disable-next-line no-unused-vars
import React from "react";
import CarPng from "../../assets/car11-gPlAmcRy.png";

const About = () => {
  return (
    <div className="dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={CarPng}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                About us
              </h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
              At CGO, we go beyond the ordinary to deliver exceptional travel experiences. 
              Specializing in outstation rides and carpool services, we understand that long journeys require more than just a driver; 
              they require a travel companion who is skilled, reliable, and well-versed in the routes they traverse. 
              That's why every CGO driver is meticulously selected to ensure they meet the highest standards of proficiency and customer service.
              </p>
              {/* <p data-aos="fade-up">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                tempora.
              </p> */}
              <button data-aos="fade-up" className="button-outline">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
