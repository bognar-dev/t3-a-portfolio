import classes from "../styles/Navbar.module.scss";

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className={classes.navMenu}>
      <Link className={classes.navLink} href="/">
        Home
      </Link>
      <Link className={classes.navLink} href="/Portfolio">
        Portfolio
      </Link>
      <Link className={classes.navLink} href="/Products">
        Products
      </Link>
      <Link className={classes.navLink} href="/About">
        About
      </Link>
      <div className={classes.cartLinkContainer}>
        <Link data-notification-count={1} className={classes.navLink} href="/Cart">
          Cart
        </Link>
        
      </div>
      <div className={classes.dot}></div>
    </nav>
  );
}
