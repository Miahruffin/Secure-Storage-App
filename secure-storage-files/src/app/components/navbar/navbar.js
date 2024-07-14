'use client';
import Link from 'next/link';
import styles from './Navbar.module.css'; // Import CSS module

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">Your Logo</Link> {/* Replace with your logo or brand name */}
            </div>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link href="/">Home</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/pages/profile">Profile</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/pages/vault">Vault</Link>
                </li>
                {/* Add more navigation items as needed */}
            </ul>
        </nav>
    );
};

export default Navbar;
