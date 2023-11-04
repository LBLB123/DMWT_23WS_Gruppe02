import styles from 'Header.module.css';
import Link from "next/link";

const Header = () => {
    return (
        <header className={styles.header}>
            <ul>
                <li><Link href="/">Green IT</Link></li>
                <li><Link href="#">Über uns</Link></li>
                <li><Link href="#">Service</Link></li>
                <li><Link href="#">Support</Link></li>
                <li><Link href="#">Registrierung</Link></li>
            </ul>
        </header>
    );
}

export default Header;
