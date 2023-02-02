import Head from "next/head";
import useLocalStorageState from "use-local-storage-state";

import GlobalStyle from "@/styles";
import Layout from "@/components/layout";

export default function App({ Component, pageProps }) {
  const [inventory, setInventory] = useLocalStorageState("inventory", {
    defaultValue: {
      coal: { amount: 10, id: "0", row: 2, column: 2, name: "coal" },
      ironore: { amount: 10, id: "1", row: 2, column: 3, name: "iron ore" },
      goldore: { amount: 10, id: "2", row: 2, column: 4, name: "gold ore" },
      ironingot: { amount: 10, id: "3", row: 2, column: 5, name: "iron ingot" },
      goldingot: { amount: 10, id: "4", row: 3, column: 2, name: "gold ingot" },
    },
  });

  function smelterIron() {
    const updatedInventory = {
      ...inventory,
      coal: {
        ...inventory.coal,
        amount: (inventory.coal.amount -= 1),
      },
      ironore: {
        ...inventory.ironore,
        amount: (inventory.ironore.amount -= 1),
      },
      ironingot: {
        ...inventory.ironingot,
        amount: (inventory.ironingot.amount += 1),
      },
    };
    setInventory(updatedInventory);
  }

  function smelterGold() {
    const updatedInventory = {
      ...inventory,
      coal: {
        ...inventory.coal,
        amount: (inventory.coal.amount -= 1),
      },
      goldore: {
        ...inventory.goldore,
        amount: (inventory.goldore.amount -= 1),
      },
      goldingot: {
        ...inventory.goldingot,
        amount: (inventory.goldingot.amount += 1),
      },
    };
    setInventory(updatedInventory);
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
