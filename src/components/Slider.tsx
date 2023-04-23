import {useEffect } from 'react';
import classes from '../styles/Slider.module.scss';
import InstagramMedia from './InstagramMedia';
import type { PictureData, Pictures } from '~/utils/types';


interface SliderProps {
  pictures: PictureData[];
}

export default function Slider({ pictures }: SliderProps): JSX.Element {
  useEffect(() => {
    const track= document.querySelector(`.${classes.imageTrack}`);
    if(track instanceof HTMLElement){

    const handleOnDown = (e: MouseEvent) => (track.dataset.mouseDownAt = e.clientX.toString());

    const handleOnUp = (e:MouseEvent) => {
      track.dataset.mouseDownAt = "0";
      track.dataset.prevPercentage = track.dataset.percentage;
    };

    const handleOnMove = (e: MouseEvent) => {
      if (track.dataset.mouseDownAt === "0") return;

      const mouseDelta = parseFloat(track.dataset.mouseDownAt!) - e.clientX,
        maxDelta = window.innerWidth / 2;

      const percentage =
        (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained =
          parseFloat(track.dataset.prevPercentage!) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100).toString();

      track.dataset.percentage = nextPercentage;

      track?.animate(
        {
          transform: `translate(${nextPercentage}%, -50%)`,
        },
        { duration: 1200, fill: "forwards" }
      );

      for (const image of track?.getElementsByClassName("image")) {
        image.animate(
          {
            objectPosition: `${100 + nextPercentage}% center`,
          },
          { duration: 1200, fill: "forwards" }
        );
      }
    };

    track?.addEventListener("mousedown", handleOnDown);
    track?.addEventListener("mouseup", handleOnUp);
    track?.addEventListener("mouseleave", handleOnUp);
    track?.addEventListener("mousemove", handleOnMove);
    window.onmousedown = e => handleOnDown(e);

//window.ontouchstart = e => handleOnDown(e.touches[0]);

//window.onmouseup = e => handleOnUp(e);

//window.ontouchend = e => handleOnUp(e.touches[0]);

//window.onmousemove = e => handleOnMove(e);

//window.ontouchmove = e => handleOnMove(e.touches[0]);

    return () => {
      // remove the event listeners for both mouse and touch events
      window.removeEventListener("mousedown", handleOnDown);
      //window.removeEventListener("touchstart", handleOnDown);

      window.removeEventListener("mouseup", handleOnUp);
      //window.removeEventListener("touchend", handleOnUp);

      window.removeEventListener("mousemove", handleOnMove);
      //window.removeEventListener("touchmove", handleOnMove);

      // add back the event listeners for mouse events
      track?.addEventListener("mousedown", handleOnDown);
      track?.addEventListener("mouseup", handleOnUp);
      track?.addEventListener("mouseleave", handleOnUp);
      track?.addEventListener("mousemove", handleOnMove);
    };}
  }, []);
  return (
    <div className={classes.imageTrack} data-mouse-down-at="0" data-prev-percentage="0">
      {pictures?.map((picture:PictureData,index:number) => (
        <InstagramMedia key={index} picture={picture}/>
      ))}
    </div>
  );
}