import { useState, useEffect } from 'react';
import classes from '../styles/Portfolio.module.scss';

import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';


const images = [
 { src : "/VogueCutouts.png"},
 { src : "/VogueCutouts.png"},
 { src : "/VogueCutouts.png"},
 { src : "/VogueCutouts.png"},
 { src : "/VogueCutouts.png"},
 { src : "/VogueCutouts.png"},
]

function handleOnDown(track: any, e: { clientX: any; }) {
  track.dataset.mouseDownAt = e.clientX;
}

function handleOnUp(track: any) {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
}

function handleOnMove(track: any, e: { clientX: number; }) {
  if (track.dataset.mouseDownAt === "0") return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
    maxDelta = window.innerWidth / 2;

  const percentage =
    (mouseDelta / maxDelta) * -100,
    nextPercentageUnconstrained =
      parseFloat(track.dataset.prevPercentage) + percentage,
    nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

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
}

function checkIntersection(element: { getBoundingClientRect: () => any; }, crosshair: { getBoundingClientRect: () => any; }) {
  const elementRect = element.getBoundingClientRect();
  const crosshairRect = crosshair.getBoundingClientRect();
  return !(
    crosshairRect.right < elementRect.left ||
    crosshairRect.left > elementRect.right ||
    crosshairRect.bottom < elementRect.top ||
    crosshairRect.top > elementRect.bottom
  );
}


export default function Slider(): JSX.Element {


  useEffect(() => {
    const track = document.querySelector(`.${classes.imageTrack}`);

    const handleMouseDown = (e: any) => handleOnDown(track, e);
    const handleMouseUp = () => handleOnUp(track);
    const handleMouseMove = (e: any) => handleOnMove(track, e);

    // Add event listeners for mouse events
    track?.addEventListener("mousedown", handleMouseDown);
    track?.addEventListener("mouseup", handleMouseUp);
    track?.addEventListener("mouseleave", handleMouseUp);
    track?.addEventListener("mousemove", handleMouseMove);

    return () => {
      // Remove event listeners for mouse events
      track?.removeEventListener("mousedown", handleMouseDown);
      track?.removeEventListener("mouseup", handleMouseUp);
      track?.removeEventListener("mouseleave", handleMouseUp);
      track?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

 
  return (
    <>
    <svg className={classes.svg} viewBox="0 0 22 22"><polygon points="22 11.751 0 11.751 0 10.249 22 10.249 22 11"></polygon><polygon points="11.751 0 11.751 22 10.249 22 10.249 0 11 0"></polygon></svg>
    <div className={classes.imageTrack} data-mouse-down-at="0" data-prev-percentage="0">
    {images.map((image, index) => (
        <img className={classes.image} key={index} src={image.src} alt="" draggable="false" />
      ))}
      {/* <img 
        className={classes.image}
        src="/VogueCutouts.png"
        draggable="false" 
      /> */}
      
    </div>
    </>
  );
}