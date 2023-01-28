
import styles from '../styles/Navbar.module.css'
import Link from 'next/link';

function Navbar() {

  return (
    <div className={styles.container}>
      <div className={styles.boxL}>
        <Link href="/"><img className={styles.logo} src="img/logo.png" alt="" /></Link>
        <Link href="/"><h1 className={styles.title}>Mellow</h1></Link>
      </div>
      <div className={styles.boxR}>
        <ul className={styles.navbar}>
          <div className={styles.navitemBox}>
          <Link href="/buy"><li className={styles.navItems}>Buy</li></Link>
            <div className={styles.underline}></div>
            <div className={styles.menu}>
                <div className={styles.menuTitleBox}>
                <h1 className={styles.menuTitle}>Buy</h1>
                </div>
                <div className={styles.menuCategoryBox}>
                  <ul className={styles.menuCategory}>
                    <li className={styles.menuItem}>Homes For Sale</li>
                    <li className={styles.menuItem}>For Sale by Owner</li>
                    <li className={styles.menuItem}>Open Houses</li>
                    <li className={styles.menuItem}>Recent Sales</li>
                  </ul>
                  <ul className={styles.menuCategory}>
                    <li className={styles.menuItem}>New Construction</li>
                    <li className={styles.menuItem}>Coming Soon</li>
                    <li className={styles.menuItem}>Foreclosures</li>
                    <Link href="/buy"><li className={styles.menuItem}>All Homes</li></Link>
                  </ul>
                </div>
            </div>
          </div>
          <div className={styles.navitemBox}>
          <Link href="/sell"><li className={styles.navItems}>Sell</li></Link>
            <div className={styles.underline}></div>
            <div className={styles.menu}>
                <div className={styles.menuTitleBox}>
                  <h1 className={styles.menuTitle}>Sell</h1>
                </div>
                <div className={styles.menuCategoryBox}>
                  <ul className={styles.menuCategory}>
                    <li className={styles.menuItem}>Explore Options</li>
                    <li className={styles.menuItem}>Get Estimate</li>
                    <li className={styles.menuItem}>Home Values</li>
                    <li className={styles.menuItem}>Sellers Guide</li>
                  </ul>
                  <ul className={styles.menuCategory}>
                    <li className={styles.menuItem}>Find a Seller's Agent</li>
                    <li className={styles.menuItem}>For Sale by Owner</li>
                  </ul>
                </div>
            </div>
          </div>
          <div className={styles.navitemBox}>
          <Link href="/rent"><li className={styles.navItems}>Rent</li></Link>
            <div className={styles.underline}></div>
            <div className={styles.menu}>
                <div className={styles.menuTitleBox}>
                  <h1 className={styles.menuTitle}>Rent</h1>
                </div>
                <div className={styles.menuCategoryBox}>
                  <ul className={styles.menuCategory}>
                    <li className={styles.menuItem}>Rental Buildings</li>
                    <li className={styles.menuItem}>Apartments For Rent</li>
                    <li className={styles.menuItem}>Houses For Rent</li>
                    <li className={styles.menuItem}>All Rental Listings</li>
                  </ul>
                  <ul className={styles.menuCategory}>
                    <li className={styles.menuItem}>Contacted Rentals</li>
                    <li className={styles.menuItem}>Saved Rentals</li>
                    <li className={styles.menuItem}>Renters Guide</li>
                    <li className={styles.menuItem}>Your Rental</li>
                  </ul>
                </div>
            </div>
          </div>
          <div className={styles.navitemBox}>
          <Link href="/agent"><li className={styles.navItems}>Find An Agent</li></Link>
            <div className={styles.underline}></div>
            <div className={styles.menu}>
                <div className={styles.menuTitleBox}>
                  <h1 className={styles.menuTitle}>Find An Agent</h1>
                </div>
                <div className={styles.menuCategoryBox}>
                  <ul className={styles.menuCategory}>
                  <Link href="/agent"><li className={styles.menuItem}>Real Estate Agents</li></Link>
                    <li className={styles.menuItem}>Property Managers</li>
                    <li className={styles.menuItem}>Home Inspectors</li>
                    <li className={styles.menuItem}>Home Builders</li>
                  </ul>
                  <ul className={styles.menuCategory}>
                    <li className={styles.menuItem}>Create Agent Account</li>
                    <li className={styles.menuItem}>Agent Advertising</li>
                    <li className={styles.menuItem}>Agent Resources</li>
                    <li className={styles.menuItem}>Create Agent Listing</li>
                  </ul>
                </div>
            </div>
          </div>
          <div className={styles.navitemBox}>
            <li className={styles.navItems}>Help</li>
            <div className={styles.underline}></div>
          </div>
          <div className={styles.navitemBox}>
          <Link href="/contact"><li className={styles.navItems}>Contact Us</li></Link>
            <div className={styles.underline}></div>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar