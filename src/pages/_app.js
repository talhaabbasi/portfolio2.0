import { useEffect } from "react"
import { useRouter } from "next/router"
import * as gtag from "../../lib/gtag"
import Head from "next/head"
import Theme from "../styles/theme"

const App = ({ Component, pageProps }) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Theme>
        <Head>
          <title>Talha Abbasi</title>
        </Head>
        <Component {...pageProps} />
      </Theme>
    </>
  )
}

export default App
