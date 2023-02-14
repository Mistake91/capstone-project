import Head from "next/head";
import useLocalStorageState from "use-local-storage-state";
import { useState, useEffect } from "react";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import styled from "styled-components";

import GlobalStyle from "@/styles";
import Layout from "@/components/Layout/Layout";
import { AchievementList } from "@/AchievementList";
import { InventoryLS } from "../InventoryLS";
import UnlockedAV from "../images/Globals/UnlockedAchievement.png";

export default function App({ Component, pageProps }) {
  const [inventory, setInventory] = useLocalStorageState("inventory", {
    defaultValue: InventoryLS,
  });
  const [achievements, setAchievements] = useLocalStorageState("achievements", {
    defaultValue: AchievementList,
  });
  const ironIngotAchievements = Object.values(achievements).filter(
    (achievement) => achievement.material === "ironingot"
  );
  const goldIngotAchievements = Object.values(achievements).filter(
    (achievement) => achievement.material === "goldingot"
  );
  const lockedAVS = Object.values(achievements).filter(
    (achievement) => achievement.unlocked === false
  );

  useEffect(() => {
    Object.values(lockedAVS).map((achievement) => {
      if (achievement.unlocked === true) {
        toast(
          <StyledDiv>
            <Image src={UnlockedAV} alt="" />{" "}
            <StyledP>{achievement.name}</StyledP>
          </StyledDiv>
        );
      }
    });
  }, [
    achievements,
    ironIngotAchievements,
    inventory,
    setAchievements,
    lockedAVS,
  ]);

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

  const [activity, setActivity] = useState("idle");
  const [characterPosition, setCharacterPositon] = useState({
    row: 16,
    column: 3,
  });

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
          activity={activity}
          setActivity={setActivity}
          characterPosition={characterPosition}
          setCharacterPositon={setCharacterPositon}
          achievements={achievements}
          setAchievements={setAchievements}
        />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          transition={Slide}
          toastStyle={{
            backgroundColor: "transparent",
            boxShadow: "none",
            margin: "0 0 0 18%",
          }}
        />
      </Layout>
    </>
  );
}
const StyledDiv = styled.div`
  position: relative;
`;
const StyledP = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
`;
