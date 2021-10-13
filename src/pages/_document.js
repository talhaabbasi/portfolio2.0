import Document, { Head, Html, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang="en-GB">
        <Head>
          <meta
            name="keywords"
            content="web development, programming, portfolio, developer"
          />
          <link rel="icon" href="images/logo.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="Portfolio Website for Talha Abbasi"
          />
          <meta name="title" property="og:title" content="Portfolio" />
          <meta property="og:type" content="Website" />
          <meta name="image" property="og:image" content="images/logo.png" />
          <meta
            name="description"
            property="og:description"
            content="Portfolio Website for Talha Abbasi"
          />
          <meta name="author" content="Talha Abbasi" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
