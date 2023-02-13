import Head from "next/head";
import useLocalStorageState from "use-local-storage-state";
import { useEffect } from "react";

import GlobalStyle from "@/styles";
import Layout from "@/components/Layout";
import { AchievementList } from "@/AchievementList";
import { InventoryLS } from "../InventoryLS";

export default function App({ Component, pageProps }) {
  const [inventory, setInventory] = useLocalStorageState("inventory", {
    defaultValue: InventoryLS,
  });

  const [achievements, setAchievements] = useLocalStorageState("achievements", {
    defaultValue: AchievementList,
  });
  console.log(achievements);
  const ironIngotAchievements = Object.values(achievements).filter(
    (achievement) => achievement.material === "ironingot"
  );
  const goldIngotAchievements = Object.values(achievements).filter(
    (achievement) => achievement.material === "goldingot"
  );
  useEffect(() => {
    Object.values(ironIngotAchievements).map((achievement) => {
      if (inventory.ironingot.overallAmount === achievement.amount) {
        setAchievements(achievements, (achievement.unlocked = true));
      }
    });
  }, [achievements, ironIngotAchievements, inventory, setAchievements]);
  useEffect(() => {
    Object.values(goldIngotAchievements).map((achievement) => {
      if (inventory.goldingot.overallAmount === achievement.amount) {
        setAchievements(achievements, (achievement.unlocked = true));
      }
    });
  }, [achievements, goldIngotAchievements, inventory, setAchievements]);
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
          overallAmount: prevInventory.ironingot.overallAmount + 1,
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
          overallAmount: prevInventory.goldingot.overallAmount + 1,
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
          overallAmount: prevInventory.gear.overallAmount + 2,
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
          overallAmount: prevInventory.goldarmor.overallAmount + 1,
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
          achievements={achievements}
          setAchievements={setAchievements}
        />
      </Layout>
    </>
  );
}
