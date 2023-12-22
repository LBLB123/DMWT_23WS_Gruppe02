import styles from 'Header.module.css';
import Link from "next/link";

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>Hardware Recycler</h1>
            <nav className={styles.nav}>
                <Link href="/">Green IiT</Link>
                <Link href="#">Über uns</Link>
                <Link href="#">Service</Link>
                <Link href="#">Support</Link>
                <Link href="#">Registrierung</Link>
            </nav>
        </header>
    );
}

export default Header;
