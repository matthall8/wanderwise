import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
            <meta charSet="UTF-8" />
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Muli:wght@500;700;800;900&display=swap" rel="stylesheet" /> 
            <Script
              id="gtm-script"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                  __html: `
                      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                      })(window,document,'script','dataLayer','GTM-KGVHFFBQ');
                  `,
              }}
          />        
        </Head>
        <body>
          <noscript>
            <iframe 
              src="https://www.googletagmanager.com/ns.html?id=GTM-KGVHFFBQ"
              height="0" 
              width="0" 
              style={{ display: 'none', visibility: 'hidden' }} />
            </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
