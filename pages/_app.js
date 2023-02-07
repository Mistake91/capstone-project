import Head from "next/head";
import useLocalStorageState from "use-local-storage-state";

import GlobalStyle from "@/styles";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  const [inventory, setInventory] = useLocalStorageState("inventory", {
    defaultValue: {
      coal: { amount: 10, id: "0", name: "coal", worth: 1, identifier: "coal" },
      ironore: {
        amount: 10,
        id: "1",
        name: "iron ore",
        worth: 3,
        identifier: "ironore",
      },
      goldore: {
        amount: 10,
        id: "2",
        name: "gold ore",
        worth: 5,
        identifier: "goldore",
      },
      ironingot: {
        amount: 10,
        id: "3",
        name: "iron ingot",
        worth: 10,
        identifier: "ironingot",
      },
      goldingot: {
        amount: 10,
        id: "4",
        name: "gold ingot",
        worth: 15,
        identifier: "goldingot",
      },
      woodstick: {
        amount: 0,
        id: "5",
        name: "wood sticks",
        worth: 1,
        price: 2,
        identifier: "woodstick",
      },
      dwarfi: { amount: 10, id: "99", name: "dwarfi" },
    },
  });
  function smelterIron() {
    setInventory((prevInventory) => {
      const updatedInventory = {
        ...prevInventory,
        coal: {
          ...prevInventory.coal,
          amount: prevInventory.coal.amount - 1,
        },
        ironore: {
          ...prevInventory.ironore,
          amount: prevInventory.ironore.amount - 1,
        },
        ironingot: {
          ...prevInventory.ironingot,
          amount: prevInventory.ironingot.amount + 1,
        },
      };
      return updatedInventory;
    });
  }

  function smelterGold() {
    setInventory((prevInventory) => {
      const updatedInventory = {
        ...prevInventory,
        coal: {
          ...prevInventory.coal,
          amount: prevInventory.coal.amount - 1,
        },
        goldore: {
          ...prevInventory.goldore,
          amount: prevInventory.goldore.amount - 1,
        },
        goldingot: {
          ...prevInventory.goldingot,
          amount: prevInventory.goldingot.amount + 1,
        },
      };
      return updatedInventory;
    });
  }

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>

      <Layout inventory={inventory}>
        <Component
          {...pageProps}
          inventory={inventory}
          setInventory={setInventory}
          smelterIron={smelterIron}
          smelterGold={smelterGold}
        />
      </Layout>
    </>
  );
}
