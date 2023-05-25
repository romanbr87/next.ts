import { AppProps } from 'next/app'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import '../style/style.css'

export default function App({ Component, pageProps }: AppProps) {
  return ( 
    <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=yes" />
      <link rel="canonical" href="https://kishurit.vercel.app/" />
      <meta name="application-url" content="https://kishurit.vercel.app/" />

      <meta name="google-site-verification" content="INZ1lPlJ4uJihxsPJiYcnm62efEwDySXzWSfo5iZfIQ" />
      <meta name="robots" content="index, follow, noodp, noydir" />
      <meta name="googlebot" content="index, follow, noodp, noydir" />
      <meta name="bingbot" content="index, follow, noodp, noydir" />
      <meta name="generator" content="slidify" />
      <meta name="google" content="notranslate" />

      <meta name="title" content="קישורית" />
      <meta name="application-name" content="קישורית" />
      <meta name="image" content="/newjob.jpg" />
      <meta name="description" content="אינדקס אתרים של מקומות תעסוקה, חברות כוח אדם, לוחות דרושים ועמותות בתחום התעסוקה" />
      <meta name="keywords" content="קישורית, גיוס, עובדים, תעסוקה, עבודה, דרושים, מקומות תעסוקה, מקומות עבודה" />
      <meta name="author" content="https://www.facebook.com/RonenBr60" />

      <link rel="icon" href="/newjob.jpg" />
      <link id="favicon" rel="shortcut icon" href="/newjob.jpg" />
      <link rel="apple-touch-icon" href="/newjob.jpg" />

      <meta itemProp="name" content="קישורית" />
      <meta itemProp="description" content="אינדקס אתרים של מקומות תעסוקה, חברות כוח אדם, לוחות דרושים ועמותות בתחום התעסוקה" />
      <meta itemProp="image" content="/newjob.jpg" />

      <meta property="og:locale" content="he_IL" />
      <meta property="og:title" content="קישורית" />
      <meta property="og:site_name" content="קישורית" />
      <meta property="og:description" content="אינדקס אתרים של מקומות תעסוקה, חברות כוח אדם, לוחות דרושים ועמותות בתחום התעסוקה" />
      <meta property="og:url" content="https://kishurit.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/newjob.jpg" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="fb:pages" content="110682567074630" />
      <meta property="og:description" content="אינדקס אתרים של מקומות תעסוקה, חברות כוח אדם, לוחות דרושים ועמותות בתחום התעסוקה" />

      <meta name="twitter:title" content="קישורית" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ronenbr60" />
      <meta name="twitter:description" content="אינדקס אתרים של מקומות תעסוקה, חברות כוח אדם, לוחות דרושים ועמותות בתחום התעסוקה" />
      <meta name="twitter:text:description" content="אינדקס אתרים של מקומות תעסוקה, חברות כוח אדם, לוחות דרושים ועמותות בתחום התעסוקה" />
      <meta name="twitter:image" content="/newjob.jpg" />
      <meta name="twitter:image:src" content="/newjob.jpg" />

      <link rel="manifest" href="/manifest.json" />
      <title>קישורית</title>
    </Head>
    <Component {...pageProps} />
    </>
  )
}
