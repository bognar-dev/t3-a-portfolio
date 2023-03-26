import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import SliderPortfolio from '~/components/SliderPortfolio';
import classes from '../styles/Portfolio.module.scss';
import HeroSection from '~/components/HeroSection';
import { AnimatePresence, motion } from "framer-motion"
import { rgbDataURL } from '~/utils/utils';

const images = [
  { src: "/Fashion Styling&Art Direction_Adela_Novakova_page-0002.jpg" },
  { src: "/Fashion Styling&Art Direction_Adela_Novakova_page-0003.jpg" },
  { src: "/Fashion Styling&Art Direction_Adela_Novakova_page-0004.jpg" },
  { src: "/Fashion Styling&Art Direction_Adela_Novakova_page-0005.jpg" },
  { src: "/Fashion Styling&Art Direction_Adela_Novakova_page-0006.jpg" },
  { src: "/Fashion Styling&Art Direction_Adela_Novakova_page-0007.jpg" },
  { src: "/Fashion Styling&Art Direction_Adela_Novakova_page-0008.jpg" },
  { src: "/Fashion Styling&Art Direction_Adela_Novakova_page-0009.jpg" },
  { src: "/Fashion Styling&Art Direction_Adela_Novakova_page-0010.jpg" },
  { src: "/Fashion Styling&Art Direction_Adela_Novakova_page-0011.jpg" },
]
export default function Portfolio(): JSX.Element {
  useEffect(() => {
    const track: any = document.querySelector(`.${classes.imageTrack}`);

    const handleOnDown = (e: any) => (track.dataset.mouseDownAt = e.clientX);

    const handleOnUp = (e:any) => {
      track.dataset.mouseDownAt = "0";
      track.dataset.prevPercentage = track.dataset.percentage;
    };

    const handleOnMove = (e: any) => {
      if (track.dataset.mouseDownAt === "0") return;

      const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;

      const percentage =
        (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained =
          parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

      track.dataset.percentage = nextPercentage;

      track?.animate(
        {
          transform: `translate(${nextPercentage}%, -50%)`,
        },
        { duration: 1200, fill: "forwards" }
      );

      for (const image of track?.getElementsByClassName("image")) {
        image.animate(
          {
            objectPosition: `${100 + nextPercentage}% center`,
          },
          { duration: 1200, fill: "forwards" }
        );
      }
    };

    track?.addEventListener("mousedown", handleOnDown);
    track?.addEventListener("mouseup", handleOnUp);
    track?.addEventListener("mouseleave", handleOnUp);
    track?.addEventListener("mousemove", handleOnMove);
    window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);

    return () => {
      // remove the event listeners for both mouse and touch events
      window.removeEventListener("mousedown", handleOnDown);
      //window.removeEventListener("touchstart", handleOnDown);

      window.removeEventListener("mouseup", handleOnUp);
      window.removeEventListener("touchend", handleOnUp);

      window.removeEventListener("mousemove", handleOnMove);
      //window.removeEventListener("touchmove", handleOnMove);

      // add back the event listeners for mouse events
      track?.addEventListener("mousedown", handleOnDown);
      track?.addEventListener("mouseup", handleOnUp);
      track?.addEventListener("mouseleave", handleOnUp);
      track?.addEventListener("mousemove", handleOnMove);
    };
  }, []);
  const sliderRef = useRef<any>();
  useEffect(() => {
    setTimeout(()=>{
      sliderRef.current.scrollIntoView({ behaviour: "smooth" })
    },1000)
  })
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const handleImageHover = (image: any) => {
    setSelectedImage(image);
    console.log(image)
  };
  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const imageRef = useRef();

  return (
    <>
      <HeroSection>
        <h1 ref={sliderRef}>FASHION STYLING &
          ART DIRECTION PORTFOLIO
        </h1>
        <p>Adela Novakova</p>
      </HeroSection>
      <div className={classes.SliderContainer}>
        <div className={classes.imageTrack} data-mouse-down-at="0" data-prev-percentage="0">
          {images.map((image, index) => (
            <Image
              placeholder='blur'
              blurDataURL={rgbDataURL(60, 128, 103)}
              className={classes.image}
              key={index}
              src={image.src}
              alt={image.src}
              draggable="false"
              width={400}
              height={400}
              onMouseEnter={() => handleImageHover(image)}
              onMouseLeave={() => handleImageHover(image)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

