import './globals.css'
import { Inter, Open_Sans } from 'next/font/google'

// components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400','600', '700', '900'],
  variable: '--font-inter'
})


const openSans = Open_Sans ({ 
  subsets: ['latin'],
  variable: '--font-open-sans'
})


export const metadata = {
  title: 'Dala Afrika',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${openSans.className} ${openSans.variable}  ${inter.variable}`}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
