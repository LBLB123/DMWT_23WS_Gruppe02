import styles from 'Footer.comments.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>
                Hardware Recycler GmbH<br />
                Musterstraße 123, 12345 Musterstadt<br />
                Email: hardwarerecyclerkontakt@gmail.com
            </p>
        </footer>
    );
}

export default Footer;
