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
  return (
    <main className={classes.main}>
      <section className={classes.section}>
      <HeroSection>
        <h1>FASHION STYLING &
          ART DIRECTION PORTFOLIO
        </h1>
        <p>Adela Novakova</p>
      </HeroSection>
      </section>
          {images.map((image, index) => (
             <section className={classes.section}>
            <Image
              placeholder='blur'
              blurDataURL={rgbDataURL(60, 128, 103)}
              className={classes.image}
              key={index}
              src={image.src}
              alt={image.src}
              draggable="false"
              width={1920}
              height={1080}
            />
            </section>
          ))}
    </main>
  );
}

