import Slider from '~/components/Slider';
import classes from '../styles/Home.module.scss';
import type { Pictures } from '~/utils/types';
import HeroSection from '~/components/HeroSection';
import { api } from '~/utils/api';

export default function Homepage(): JSX.Element {
  const pictures = api.instagram.getAll.useQuery();

  
  return (
    <div>
      <HeroSection>
        <h1>Hey! I am Adel</h1>
        <p>Check out my profile</p>
        <a className={classes.btn} href="https://www.instagram.com/adell_n/">
          <img src="/instagram-logo.png" height={50} width={50} alt="Instagram" />
        </a>
      </HeroSection>
        <Slider pictures={pictures.data} />
    </div>
  );
}