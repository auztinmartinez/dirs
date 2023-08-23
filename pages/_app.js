import "../styles/global.css"
import Layout from "../components/layout.js"
import Head from "next/head"
import {NextUIProvider} from "@nextui-org/react";
import '../dist/output.css'

export default function AppWrapper({ Component, pageProps }) {
  return (
    <>
    <NextUIProvider>
      <Head>
        <title>{pageProps.title ? pageProps.title : "DIRS Radiometer Project"}</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
    </>
  )
}