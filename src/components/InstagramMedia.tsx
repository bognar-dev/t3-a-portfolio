import classes from "../styles/Slider.module.scss";
import Image from "next/image";
import type {InstagramChildren, InstagramMedia} from "@prisma/client"
import { rgbDataURL } from "~/utils/utils";

interface InstagramMediaProps {
  picture: InstagramMedia;
}

export default function InstagramCard({
  picture,
}: InstagramMediaProps): JSX.Element {
  switch (picture.media_type) {
    case "IMAGE":
      return (
        <Image
          placeholder="blur"
          blurDataURL={rgbDataURL(60, 128, 103)}
          className={classes.image}
          src={picture.media_url}
          width={400}
          height={400}
          alt={"hah"}
          draggable="false"
        />
      );
    case "CAROUSEL_ALBUM":
      return (
        <>
          {picture.children?.data.map((child: InstagramChildren ,key: number) => {
            switch (child.media_type) {
              case "IMAGE":
                return (
                  <Image
                    placeholder="blur"
                    blurDataURL={rgbDataURL(60, 128, 103)}
                    width={400}
                    height={400}
                    alt={"hah"}
                    className={classes.image}
                    key={key}
                    src={child.media_url}
                    draggable="false"
                  />
                );
              case "VIDEO":
                return (
                  <video
                    placeholder="blur"
                    width={400}
                    height={400}
                    className={classes.video}
                    autoPlay
                    muted
                    loop
                    draggable="false"
                  >
                    <source src={child.media_url} />
                    Sorry, your browser does not support embedded videos.
                  </video>
                );
            }
          })}
        </>
      );
    case "VIDEO":
      return (
        <video
          placeholder="blur"
          width={400}
          height={400}
          className={classes.video}
          autoPlay
          muted
          loop
          draggable="false"
        >
          <source src={picture.media_url} />
          Sorry, your browser does not support embedded videos.
        </video>
      );
    default:
      return <></>;
  }
}
