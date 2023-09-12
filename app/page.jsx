import Image from 'next/image'
import Link from 'next/link'
import styles from './styles/page.module.css'
import Hero from './components/Hero'


export const metadata = {
  title: 'Dala Afrika | Home',
}

export default function Home() {
  return (
    <main className={styles.main}>
       <Hero /> 
       <div className={styles.about}>
          <h2>What We Do</h2>
        <div className={styles.cards}>
            <div className={styles.card}>
              <h3>Educate</h3>
              <p>We offer a variety of educational resources on blockchain and Web3 technologies</p>
            </div>

            <div className={styles.card}>
              <h3>Collaborate</h3>
              <p>We collaborate with blockchain projects and initiatives to help them get into the African market.</p>
            </div>

            <div className={styles.card}>
              <h3>Advocate</h3>
              <p>We advocate for the adoption of Web3 technologies in Africa.</p>
            </div>
            
        </div>
        <button className={styles.moreBtn}>FIND OUT MORE</button>
       </div>
    </main>
  )
}
