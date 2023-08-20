import Footer from './footer';
import Header from './header';
import styles from '@/styles/layout.module.css';

export default function Layout({ children }) {
  return <div className={styles.container}>
    <Header/>
    {children}
    <Footer/>
    </div>;
}