import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto background">
      <div
        className={`${styles.paddingX} absolute insert-0 top-[120px] 
        max-w-7xl mx-auto flex flex-row 
        items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5  h-5 rounded-full bg-[#A92417]" />
          <div className="w-1 sm:h-80 h-40 red-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadTextBlack} text-black`}>
            Hi, We're <span className="text-[#A92417]">GrowMore</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-black-100`}>
            At Growmore, we create stunning, functional websites that drive
            growth and elevate your online presence. Trust us for innovative IT
            solutions tailored to your business needs.
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs: bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div
            className="w-[35px] h-[64px] 
          rounded-3xl 
          border-4 
          border-secondary 
          flex justify-center 
          items-start p-2"
          >
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
