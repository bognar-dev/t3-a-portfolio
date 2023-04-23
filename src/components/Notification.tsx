import { useEffect, useState } from 'react';
import classes from '../styles/Notification.module.scss';
import type { Product } from 'prisma/prisma-client';
interface NotificationProps {
  product:Product
  duration: number
  show: boolean
}

function Notification({ product, duration, show  }:NotificationProps) {

  useEffect(() => {
    if (product && show) {
      const timeoutId = setTimeout(() => {

      }, duration);
      return () => clearTimeout(timeoutId);
    }
  }, [duration, product, show]);

  if (!product || !show) {
    return null;
  }

  return (
    <div className={classes.notification}>
      <p>{`Added ${product.name} to cart!`}</p>
    </div>
  );
}

export default Notification;
