import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '~/styles/Card.module.scss'
import { getImageUrl } from '~/utils/utils';
import { useCart } from '~/context/CartProvider';
import Notification from '~/components/Notification';
import type { Product } from '@prisma/client';

interface CardProps {
  product: Product;
}
function Card({product}: CardProps) {
  const {addToCart} = useCart();
  const [showNotification, setShowNotification] = useState(false);
  const onCickaddToCart = (product: Product)=>{
    addToCart(product);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 1000); // Hide notification after 1 second
  }
  return (
    <div className={styles.card}>
      <div className={styles.fittedImage}>
        <Image
        src={getImageUrl(product)}
        alt="My Image"
        width={500}
        height={500}
        />
      </div>
      <div className={styles.information}>
        <p className={styles.subHeader}>PERFUME</p>
          <Link href={product.name} className={styles.header}>{product.name}</Link>
        <p>{product.description}</p>
        <div className={styles.priceContainer}>
          <div className={styles.mainPrice}>{`${product.price} ${product.currency}`}</div>
          <div className={styles.originalPrice}>{`${product.pricePrevious} ${product.currency}`}</div>
        </div>


        <button className={styles.addButton} onClick={() => onCickaddToCart(product)}>Add to Cart</button>
      </div>
      <Notification
        product={product}
        duration={1000}
        show={showNotification}
      />
    </div>
  )
}

export default Card 