import React from "react";
import sImg from "../assets/meditation.png";
import sleep from "../assets/sleep.png";
import stess from "../assets/stess.png";
import mindf from "../assets/mindf.png";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <section>
        <div className="container-fluid mx-auto px-[5%] lg:px-[15%] py-16">
          <div>
            <div
              className="pt-[75px] service-item grid lg:grid-cols-2 gap-10 mx-auto items-center justify-center"
              id="Meditation"
            >
              <div className="service-info">
                <h1 className="text-3xl lg:text-6xl font-bold mb-3">
                  Meditation
                </h1>
                <p>
                  Mindfulness training isn’t limited to meditation, but it’s a
                  great place to start. Meditation is both a skill and an
                  experience that can positively impact your overall health and
                  happiness.
                </p>
                <div className="primary-btn mt-8">
                  <Link
                    to={`/Soft`}
                    className="py-3 px-12 hover:opacity-80 rounded-full text-md font-medium"
                  >
                    Start your journey
                  </Link>
                </div>
              </div>
              <div className="service-img text-center">
                <img src={sImg} alt="" className="w-full h-auto" />
              </div>
            </div>
            <div
              className="pt-[75px] service-item grid lg:grid-cols-2 gap-10 mx-auto items-center justify-center"
              id="Sleep"
            >
              <div className="service-img text-center order-1 lg:order-[0]">
                <img src={sleep} alt="" className="w-full h-auto" />
              </div>
              <div className="service-info">
                <h1 className="text-3xl lg:text-6xl hover:opacity-80 font-bold mb-3">
                  Sleep
                </h1>
                <p>
                  Mindfulness training isn’t limited to meditation, but it’s a
                  great place to start. Meditation is both a skill and an
                  experience that can positively impact your overall health and
                  happiness.
                </p>
                <div className="primary-btn mt-8">
                  <Link
                    to={`/Sleep`}
                    className="py-3 px-12 rounded-full text-md font-medium"
                  >
                    Start your journey
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="pt-[75px] service-item grid lg:grid-cols-2 gap-10 mx-auto items-center justify-center"
              id="Stress"
            >
              <div className="service-info">
                <h1 className="text-3xl lg:text-6xl font-bold mb-3">Stress</h1>
                <p>
                  Mindfulness training isn’t limited to meditation, but it’s a
                  great place to start. Meditation is both a skill and an
                  experience that can positively impact your overall health and
                  happiness.
                </p>
                <div className="primary-btn mt-8">
                  <Link
                    to={`/Stress`}
                    className="py-3 px-12 hover:opacity-80 rounded-full text-md font-medium"
                  >
                    Start your journey
                  </Link>
                </div>
              </div>
              <div className="service-img text-center">
                <img src={stess} alt="" className="w-full h-auto" />
              </div>
            </div>
            <div
              className="pt-[75px] service-item grid lg:grid-cols-2 gap-10 mx-auto items-center justify-center"
              id="Mindfullness"
            >
              <div className="service-img text-center order-1 lg:order-[0]">
                <img src={mindf} alt="" className="w-full h-auto" />
              </div>
              <div className="service-info">
                <h1 className="text-3xl lg:text-6xl font-bold mb-3">
                  Mindfulnes
                </h1>
                <p>
                  Mindfulness training isn’t limited to meditation, but it’s a
                  great place to start. Meditation is both a skill and an
                  experience that can positively impact your overall health and
                  happiness.
                </p>
                <div className="primary-btn mt-8">
                  <Link
                    to={`/Mindfullness`}
                    className="py-3 px-12 hover:opacity-80 rounded-full text-md font-medium"
                  >
                    Start your journey
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
