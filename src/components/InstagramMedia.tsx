import classes from '../styles/Slider.module.scss';
import {MediaType, ChildrenData, PictureData } from '~/utils/types';

interface InstagramMediaProps {
  picture: PictureData;
}

export default function InstagramMedia({ picture }: InstagramMediaProps): JSX.Element {
    switch (picture.media_type) {
        case 'IMAGE':
    return (
        <img 
        className={classes.image}
        src={picture.media_url}
        alt={picture.caption}
        draggable="false" 
      />
    );
   case 'CAROUSEL_ALBUM':
    return (
      <>
        {picture.children?.data.map((child:ChildrenData) => (
          <img
            className={classes.image}
            key={child.id}
            src={child.media_url}
            draggable="false" 
          />
        ))}
        </>
    );
  case 'VIDEO':
  return (
    <video 
    className={classes.video}
     autoPlay
      muted 
      loop
     draggable="false" >
      <source src={picture.media_url}/>
      Sorry, your browser doesn't support embedded videos.
    </video>
  );
  default:
      return <></>;
  }
}
