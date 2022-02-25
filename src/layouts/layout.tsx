import styles from './layout.module.scss'

import { Header } from '../components/Header/header';
import { Footer } from '../components/Footer/footer';



export const Layout = ({ children }) => {
    return (
        <div className={styles.container}>

          <Header/>

          <div className={styles.childrenContainer}>
            { children }
          </div>
        
          <div className={styles.footer}>
            <Footer />
          </div>
          
    </div>
 
    )
}
  