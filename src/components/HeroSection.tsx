import type { ReactNode } from "react";
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
