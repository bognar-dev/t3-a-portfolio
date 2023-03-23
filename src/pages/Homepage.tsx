import Slider from '~/components/Slider';
import classes from '../styles/Home.module.scss';
import { Pictures } from '~/utils/types';
import HeroSection from '~/components/HeroSection';
import { api } from '~/utils/api';

export default function Homepage(): JSX.Element {
  const pictures :Pictures  = api.instagram.getAll.useQuery().data;
  console.log(pictures)


  return (
      <div>
      <HeroSection></HeroSection>
      <div className={classes.SliderContainer}>
        <Slider pictures={pictures}/>
      </div>
      </div>
  );
}