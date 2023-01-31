import GlobalStyle from "@/styles";
import Head from "next/head";
import useLocalStorageState from "use-local-storage-state";
import Layout from "@/components/layout";

export default function App({ Component, pageProps }) {
  const [inventar, setInventar] = useLocalStorageState("inventar", {
    defaultValue: [
      { coal: 10 },
      { ironore: 110 },
      { goldore: 2 },
      { ironingot: 0 },
      { goldingot: 0 },
    ],
  });

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>

      <Layout inventar={inventar}>
        <Component
          {...pageProps}
          inventar={inventar}
          setInventar={setInventar}
        />
      </Layout>
    </>
  );
}
