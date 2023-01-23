import GlobalStyle from "@/styles";
import Head from "next/head";
import { Grid } from "@/components/homeStyles";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Grid>
        <Component {...pageProps} />

        {window.location.href === "http://localhost:3000/worldmap" ? (
          ""
        ) : (
          <StyledWMButton
            onClick={() => {
              window.location.href = "./worldmap";
            }}
          />
        )}
      </Grid>
    </>
  );
}

const StyledWMButton = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 25%;
  grid-column: 2;
  grid-row: 1;
  margin-top: 25px;
`;
