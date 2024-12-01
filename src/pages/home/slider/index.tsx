import { Carousel } from "@mantine/carousel";
import { Button, Container, Image } from "@mantine/core";
import ImgSlide1 from "assets/img/slider2.jpg";
import ImgSlide2 from "assets/img/slider.jpg";
import ImgSlide3 from "assets/img/slider3.jpg";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "motion/react";

const fadeUp = (startPoint: number, endPoint: number, delay = 0) => {
  return {
    hidden: {
      y: startPoint,
      opacity: 0,
    },
    show: {
      y: endPoint,
      opacity: 1,
      transition: {
        duration: 1,
        delay: delay,
      },
    },
  };
};

export default function Slider() {
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnMouseEnter: true }));

  return (
    <section className="slider">
      <Carousel
        height={600}
        loop={true}
        plugins={[autoplay.current]}
        controlSize={50}
        nextControlProps={{
          style: {
            backgroundColor: "#1A76D1",
            color: "#fff",
          },
        }}
        previousControlProps={{
          style: {
            backgroundColor: "#1A76D1",
            color: "#fff",
          },
        }}
      >
        <Carousel.Slide pos={"relative"}>
          <div className="absolute w-full">
            <Container size="lg">
              <div className="w-7/12">
                <motion.h1
                  className="text-4xl font-bold text-slate-800"
                  variants={fadeUp(200, 100)}
                  initial="hidden"
                  whileInView="show"
                >
                  We Provide <span className="text-sky-600">Medical</span>{" "}
                  Services That You Can{" "}
                  <span className="text-sky-600">Trust!</span>
                </motion.h1>

                <motion.p
                  variants={fadeUp(200, 110, 0.7)}
                  initial="hidden"
                  whileInView="show"
                  className="text-slate-700"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris sed nisl pellentesque, faucibus libero eu, gravida
                  quam.
                </motion.p>

                <motion.div
                  variants={fadeUp(100, 150, 0.8)}
                  initial="hidden"
                  whileInView="show"
                  className="flex gap-3"
                >
                  <Button className="group relative" size="lg">
                    <span className="absolute left-0 h-full w-0 bg-gray-800 transition-all duration-300 ease-in-out group-hover:w-[50%]" />
                    <span className="z-10">Get Appointment</span>
                    <span className="absolute right-0 h-full w-0 bg-gray-800 transition-all duration-300 ease-in-out group-hover:w-[50%]" />
                  </Button>
                  <Button size="lg" bg="black">
                    Learn More
                  </Button>
                </motion.div>
              </div>
            </Container>
          </div>

          <Image src={ImgSlide1} />
        </Carousel.Slide>

        <Carousel.Slide pos={"relative"}>
          <div className="absolute w-full">
            <Container size="lg">
              <div className="w-7/12">
                <motion.h1
                  className="text-4xl font-bold text-slate-800"
                  variants={fadeUp(200, 100)}
                  initial="hidden"
                  whileInView="show"
                >
                  We Provide <span className="text-sky-600">Medical</span>{" "}
                  Services That You Can{" "}
                  <span className="text-sky-600">Trust!</span>
                </motion.h1>

                <motion.p
                  variants={fadeUp(200, 110, 0.7)}
                  initial="hidden"
                  whileInView="show"
                  className="text-slate-700"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris sed nisl pellentesque, faucibus libero eu, gravida
                  quam.
                </motion.p>

                <motion.div
                  variants={fadeUp(100, 150, 0.8)}
                  initial="hidden"
                  whileInView="show"
                  className="flex gap-3"
                >
                  <Button className="group relative" size="lg">
                    <span className="absolute left-0 h-full w-0 bg-gray-800 transition-all duration-300 ease-in-out group-hover:w-[50%]" />
                    <span className="z-10">Get Appointment</span>
                    <span className="absolute right-0 h-full w-0 bg-gray-800 transition-all duration-300 ease-in-out group-hover:w-[50%]" />
                  </Button>
                  <Button size="lg" bg="black">
                    Learn More
                  </Button>
                </motion.div>
              </div>
            </Container>
          </div>
          <Image src={ImgSlide2} />
        </Carousel.Slide>

        <Carousel.Slide pos={"relative"}>
          <div className="absolute w-full">
            <Container size="lg">
              <div className="w-7/12">
                <motion.h1
                  className="text-4xl font-bold text-slate-800"
                  variants={fadeUp(200, 100)}
                  initial="hidden"
                  whileInView="show"
                >
                  We Provide <span className="text-sky-600">Medical</span>{" "}
                  Services That You Can{" "}
                  <span className="text-sky-600">Trust!</span>
                </motion.h1>

                <motion.p
                  variants={fadeUp(200, 110, 0.7)}
                  initial="hidden"
                  whileInView="show"
                  className="text-slate-700"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris sed nisl pellentesque, faucibus libero eu, gravida
                  quam.
                </motion.p>

                <motion.div
                  variants={fadeUp(100, 150, 0.8)}
                  initial="hidden"
                  whileInView="show"
                  className="flex gap-3"
                >
                  <Button className="group relative" size=" lg">
                    <span className="absolute left-0 h-full w-0 bg-gray-800 transition-all duration-300 ease-in-out group-hover:w-[50%]" />
                    <span className="z-10">Get Appointment</span>
                    <span className="absolute right-0 h-full w-0 bg-gray-800 transition-all duration-300 ease-in-out group-hover:w-[50%]" />
                  </Button>
                  <Button size="lg" bg="black">
                    Learn More
                  </Button>
                </motion.div>
              </div>
            </Container>
          </div>
          <Image src={ImgSlide3} />
        </Carousel.Slide>
      </Carousel>
    </section>
  );
}
