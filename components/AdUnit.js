
"use client"
import Script from "next/script"
import { useEffect } from "react"

export default function AdUnit() {
  useEffect(() => {
    try { (adsbygoogle = window.adsbygoogle || []).push({}) } catch (e) {}
  }, [])

  return (
    <>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" strategy="lazyOnload" />
      <ins className="adsbygoogle"
        style={{display:"block",textAlign:"center",margin:"30px 0"}}
        data-ad-client="ca-pub-0000000000000000"
        data-ad-slot="1234567890"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
    </>
  )
}
