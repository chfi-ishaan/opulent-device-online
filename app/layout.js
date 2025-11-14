
import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Script from 'next/script'

export const metadata = {
  title: 'Opulent Devices – Luxury Tech Reviews',
  description: 'Premium gadget reviews.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script id="adsense-script" async strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-0000000000000000"
          crossOrigin="anonymous" />
        <Script id="auto-ads-init" strategy="afterInteractive">
          {`(adsbygoogle = window.adsbygoogle || []).push({});`}
        </Script>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
