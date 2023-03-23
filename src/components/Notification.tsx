import { useEffect, useState } from 'react';
import classes from '../styles/Notification.module.scss';
interface NotificationProps {
  product:any
  duration: any 
  show: any 
}

function Notification({ product, duration, show  }:NotificationProps) {
  const [showN, setShow] = useState(false);

  useEffect(() => {
    if (product && show) {
      const timeoutId = setTimeout(() => {
        setShow(false);
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
