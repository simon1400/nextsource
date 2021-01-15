import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KNNXC8T" height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe></noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
