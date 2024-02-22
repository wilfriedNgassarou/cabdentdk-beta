import './style.css'
import { Montserrat } from 'next/font/google'
import Header from '@/app/ui/header/Index'
import Footer from '@/app/ui/footer/Index'
import TopButton from './ui/topButton/TopButton'

const montserrat = Montserrat({ subsets: ['latin']})

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <title>Cabinet Dentaire Dr Dzokem</title>
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cabinet Dentaire Dr Dzokem" />
        <link rel="icon" type="image/png" href="/logo.png" />
        <meta property="og:url" content="https://cabdentdk.com/" />
        <meta property="og:site_name" content="Cabinet Dentaire Dr Dzokem" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="4 minutes" />
        <link rel="stylesheet" href="/flickity.css" />
        <script src="/flickity.js"></script>
      </head>
      <body className={montserrat.className}>
        <TopButton />
        <Header />
        {children}
        <Footer />   
      </body>
    </html>
  )
}
