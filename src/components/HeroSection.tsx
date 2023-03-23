import Image from "next/image";
import img from "../../instagram-logo.png"
import classes from '../styles/Home.module.scss';

function HeroSection() {
  return (
    <section className={classes.hero}>
      <div className={classes.hero__content}>
        <h1>Hey! I am Adel</h1>
        <p>Check out my profile</p>
        <a className={classes.btn} href="https://www.instagram.com/adell_n/"> <Image src="/instagram-logo.png" height={50} width={50}></Image></a>
      </div>
    </section>
  );
}

export default HeroSection;
