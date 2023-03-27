import Slider from '~/components/Slider';
import classes from '../styles/Home.module.scss';
import { Pictures } from '~/utils/types';
import HeroSection from '~/components/HeroSection';
import { api } from '~/utils/api';
import Image from 'next/image';

export default function Homepage(): JSX.Element {
  const pictures: Pictures = api.instagram.getAll.useQuery().data;

  
  return (
    <div>
      <HeroSection>
        <h1>Hey! I am Adel</h1>
        <p>Check out my profile</p>
        <a className={classes.btn} href="https://www.instagram.com/adell_n/">
          <img src="/instagram-logo.png" height={50} width={50} alt="Instagram" />
        </a>
      </HeroSection>
      <div className={classes.SliderContainer}>
        <Slider pictures={pictures} />
      </div>
    </div>
  );
}