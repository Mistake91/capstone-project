import Head from "next/head";
import useLocalStorageState from "use-local-storage-state";

import GlobalStyle from "@/styles";
import Layout from "@/components/layout";

export default function App({ Component, pageProps }) {
  const [inventar, setInventar] = useLocalStorageState("inventar", {
    defaultValue: [
      { amount: 10, id: "0", name: "coal", row: 2, column: 2 },
      { amount: 110, id: "1", name: "iron ore", row: 2, column: 3 },
      { amount: 2, id: "2", name: "gold ore", row: 2, column: 4 },
      { amount: 0, id: "3", name: "iron ingot", row: 2, column: 5 },
      { amount: 0, id: "4", name: "gold ingot", row: 3, column: 2 },
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
