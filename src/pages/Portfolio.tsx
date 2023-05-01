import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import SliderPortfolio from '~/components/SliderPortfolio';
import classes from '../styles/Portfolio.module.scss';
import HeroSection from '~/components/HeroSection';
import { AnimatePresence, motion } from "framer-motion"
import { getRandomInt, rgbDataURL } from '~/utils/utils';

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
    <div>
     
      <section className={classes.grid}>
          {images.map((image, index) => (
            <div className={classes.item}>
               
            <Image
              placeholder='blur'
              className={classes.image}
              blurDataURL={rgbDataURL(242,235,227)}
              key={index}
              src={image.src}
              alt={image.src}
              draggable="false"
              fill={true}
              style={{objectFit:"cover"}}
            />
             <div className={classes.item__details}>
              Detail
             </div>
             </div>
          ))}
          </section>
</div>
  );
}

