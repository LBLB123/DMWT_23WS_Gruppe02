import styles from 'Header.module.css';
import Image from "next/image";
import Logo from "app/img/Logo.png";
import Link from "next/link";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className="logoContainer">
                <Image
                    src={Logo}
                    alt="Logo"
                    width={70}
                    height={70}
                />
            </div>
            <h1>Hardware Recycler</h1>


        </header>
    );
}

export default Header;
