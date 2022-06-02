import styles from '../styles/Layout.module.css';
import Header from './Header';
import Nav from './Nav';

export const Layout = ({children}:any) => {
  return (
    <>
      <Nav/>
      <div className={styles.container}>
        <main className={styles.main}>
          <Header/>
          {children}
        </main>
      </div>
    </>
  )
}
