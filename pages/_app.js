import GlobalStyle from "@/styles";
import Head from "next/head";
import { Grid } from "@/components/homeStyles";
import styled from "styled-components";
import { useRouter } from "next/router";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [coal, setCoal] = useLocalStorageState("coal", {
    defaultValue: 0,
  });

  function worldmapButton() {
    if (location.pathname === "/worldmap") {
      router.back();
    } else {
      location.pathname = "/worldmap";
    }
  }

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Grid>
        <Component {...pageProps} coal={coal} setCoal={setCoal} />
        <WorldmapButton onClick={worldmapButton} />
        <MaterialList>
          <li>Coal:{coal}</li>
        </MaterialList>
      </Grid>
    </>
  );
}

const WorldmapButton = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 25%;
  grid-column: 2;
  grid-row: 1;
  margin-top: 25px;
`;

const MaterialList = styled.ul`
  list-style: none;
  grid-column: 2;
  grid-row: 13;
  margin: 0;
  padding: 0;
`;
