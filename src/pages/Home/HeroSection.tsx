import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import macBook from "@/assets/macbook-exposed.png";
import { motion } from "framer-motion";

const intro = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.25,
      delayChildren: 1,
    },
  },
};
const introChildren = {
  hidden: {
    opacity: 0,
    y: -200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      bounch: 0.5,
    },
  },
};

const heroImage = {
  initial: {
    y: 0,
    rotate: 0,
    scale: 5,
  },
  animate: {
    y: 20,
    rotate: -35,
    scale: 1,
    transition: {
      duration: 0.75,
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  },
};
const HeroSection = () => {
  return (
    <div className="overflow-hidden">
    <Container className="h-[110vh] pt-16 grid grid-cols-1 lg:grid-cols-2 
    place-content-center"
    >
      <motion.div variants={intro} initial="hidden" animate="show">
        <motion.h1
          variants={introChildren}
          className="text-5xl lg:text-8xl font-bold text-nowrap"
        >
          <span className="text-gray">Don't worry,</span>
          <br />
          <span>we'll fix it.</span>
        </motion.h1>
        <motion.p
          variants={introChildren}
          className="text-dark-gray max-w-[50ch] mt-10 mb-5 text-lg"
        >
          welcome to{" "}
          <span className="text-primary-foreground font-semibold">iRepair</span>
          , your one-stop solution for all kind of{" "}
          <span className="text-primary-foreground font-semibold">
            Macbook repairs
          </span>{" "}
          and diagnostics.
        </motion.p>
        <motion.div variants={introChildren}>
          <Button>Book a Service</Button>
        </motion.div>
      </motion.div>
      <motion.div
        variants={heroImage}
        initial="initial"
        animate="animate"
        className="lg:w-full  w-3/5 mx-auto"
      >
        <img
          className=" w-full h-[90%] object-contain"
          src={macBook}
          alt=""
        />
      </motion.div>
    </Container>

    </div>
  );
};

export default HeroSection;
