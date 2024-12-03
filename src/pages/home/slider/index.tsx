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
    <section className="slider h-[380px] md:h-[600px]">
      <Carousel
        height={"100%"}
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
        <SingleSlider imgUrl={ImgSlide1} />

        <SingleSlider imgUrl={ImgSlide2} />

        <SingleSlider imgUrl={ImgSlide3} />
      </Carousel>
    </section>
  );
}

const SingleSlider = ({ imgUrl }: { imgUrl: string }) => {
  return (
    <Carousel.Slide pos={"relative"}>
      <div className="absolute h-full w-full">
        <Container size="lg">
          <div className="w-full md:w-7/12">
            <motion.h1
              className="text-2xl font-bold text-slate-800 md:text-4xl"
              variants={fadeUp(100, 50)}
              initial="hidden"
              whileInView="show"
            >
              We Provide <span className="text-sky-600">Medical</span> Services
              That You Can <span className="text-sky-600">Trust!</span>
            </motion.h1>

            <motion.p
              variants={fadeUp(110, 55, 0.7)}
              initial="hidden"
              whileInView="show"
              className="text-slate-700"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sed nisl pellentesque, faucibus libero eu, gravida quam.
            </motion.p>

            <motion.div
              variants={fadeUp(100, 80, 0.8)}
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

      <Image src={imgUrl} h={{ base: 380, md: 600 }} />
    </Carousel.Slide>
  );
};
