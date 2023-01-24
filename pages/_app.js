import GlobalStyle from "@/styles";
import Head from "next/head";
import { Grid } from "@/components/homeStyles";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

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
        <Component {...pageProps} />
        <WorldmapButton onClick={worldmapButton} />
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
