import GlobalStyle from "@/styles";
import Head from "next/head";
import { Grid } from "@/components/homeStyles";
import useLocalStorageState from "use-local-storage-state";
import Layout from "@/components/layout";

export default function App({ Component, pageProps }) {
  const [materials, setMaterials] = useLocalStorageState("materials", {
    defaultValue: [{ coal: 0 }, { iron: 0 }],
  });

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Grid>
        <Component
          {...pageProps}
          materials={materials}
          setMaterials={setMaterials}
        />
        <Layout materials={materials} />
      </Grid>
    </>
  );
}
