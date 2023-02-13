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
        amount: 1,
        id: "5",
        name: "wood sticks",
        worth: 1,
        price: 2,
        identifier: "woodstick",
      },
      gear: {
        amount: 1,
        id: "6",
        name: "gear",
        worth: 7,
        identifier: "gear",
      },
      goldarmor: {
        amount: 1,
        id: "7",
        name: "gold armor",
        worth: 70,
        identifier: "goldarmor",
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

  function craftGear() {
    setInventory((prevInventory) => {
      const updatedInventory = {
        ...prevInventory,
        ironingot: {
          ...prevInventory.ironingot,
          amount: prevInventory.ironingot.amount - 1,
        },
        gear: {
          ...prevInventory.gear,
          amount: prevInventory.gear.amount + 2,
        },
      };
      return updatedInventory;
    });
  }

  function craftGoldArmor() {
    setInventory((prevInventory) => {
      const updatedInventory = {
        ...prevInventory,
        goldingot: {
          ...prevInventory.goldingot,
          amount: prevInventory.goldingot.amount - 5,
        },
        goldarmor: {
          ...prevInventory.goldarmor,
          amount: prevInventory.goldarmor.amount + 1,
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
          craftGear={craftGear}
          craftGoldArmor={craftGoldArmor}
        />
      </Layout>
    </>
  );
}
