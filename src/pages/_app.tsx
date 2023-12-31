import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div style={{ fontFamily: "Poppins, sans-serif" }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}
