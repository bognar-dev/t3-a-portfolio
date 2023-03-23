import { useState, useEffect } from 'react';
import Image from 'next/image';
import SliderPortfolio from '~/components/SliderPortfolio';
import classes from '../styles/Portfolio.module.scss';
import { Convert, Pictures, Picture } from '~/utils/types';
import HeroSection from '~/components/HeroSection';
import { AnimatePresence, motion } from "framer-motion"

const images = [
  { src : "/VogueCutouts.png"},
  { src : "/VogueCutouts.png"},
  { src : "/VogueCutouts.png"},
  { src : "/VogueCutouts.png"},
  { src : "/VogueCutouts.png"},
  { src : "/VogueCutouts.png"},
 ]
export default function Portfolio(): JSX.Element {
  const [selectedImage, setSelectedImage] = useState(null);
    const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  const handleCloseModal = () => {
    setSelectedImage(null);
  };
  
  return (
  <>
      <div className={classes.gallery}>
      {images.map((image, index) => (
        <img
        className={classes.image}
         key={index}
          src={image.src}
           alt="" 
           draggable="false"
           onClick={() => handleImageClick(image)}
          />
      ))}
      </div>
      <div>
        <AnimatePresence>
        {selectedImage && (
          <motion.div
            className={classes.modal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
            className={classes.selectedImage}
              src={selectedImage.src}
              alt=""
              onClick={handleCloseModal}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      </div>
      </>
  );
}