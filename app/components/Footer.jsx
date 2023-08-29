import Link from 'next/link';
import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import styles from '../styles/footer.module.css'

const Footer = () => {
    return ( 
        <footer className={styles.footer}>
            <Link href="/">
                <h1 className={styles.logo}>Dala Afrika</h1>
            </Link>
            
            <div>
                <FaTwitterSquare className={styles.icon}/>
                <FaInstagramSquare className={styles.icon}/>
                <FaLinkedin className={styles.icon}/>
                <FaFacebookSquare className={styles.icon}/>
            </div>
        </footer>
     );
}
 
export default Footer;
