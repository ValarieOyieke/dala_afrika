import Image from 'next/image'
import Link from 'next/link'
import styles from './styles/page.module.css'
import Hero from './hero/page'

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
              <h3>Education</h3>
            </div>

            <div className={styles.card}>
              <h3>Collaboration</h3>
            </div>

            <div className={styles.card}>
              <h3>Discussion</h3>
            </div>

            <div className={styles.card}>
              <h3>Advocacy</h3>
            </div>
        </div>
       </div>
    </main>
  )
}
