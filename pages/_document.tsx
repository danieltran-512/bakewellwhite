import { Html, Head, Main, NextScript } from 'next/document'

//Import fonts
export default function Document() {
    return (
      <Html>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" /> 
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /> 
            <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@300&family=Oxygen+Mono&family=Syne:wght@500;600;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
