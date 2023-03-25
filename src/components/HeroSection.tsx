import Image from "next/image";
import { ReactNode } from "react";
import img from "../../instagram-logo.png"
import classes from '../styles/Home.module.scss';

interface HeroProps {
  children: ReactNode;
}

const HeroSection: React.FC<HeroProps> = ({children})=> {
  return (
    <section className={classes.hero}>
      <div className={classes.hero__content}>
        {children}
      </div>
    </section>
  );
}

export default HeroSection;
