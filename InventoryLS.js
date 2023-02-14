import Coal from "./images/Item/Coal.png";
import Gear from "./images/Item/Gear.png";
import Gold_Armor_Plate from "./images/Item/Gold_Armor_Plate.png";
import Gold_Ingot from "./images/Item/Gold_Ingot.png";
import Gold_Ore from "./images/Item/Gold_Ore.png";
import Iron_Ingot from "./images/Item/Iron_Ingot.png";
import Iron_Ore from "./images/Item/Iron_Ore.png";
import Wood_Stick from "./images/Item/Wood_Stick.png";
export const InventoryLS = {
  coal: {
    amount: 0,
    id: "0",
    name: "coal",
    worth: 1,
    identifier: "coal",
    overallAmount: 999,
    icon: Coal,
  },
  ironore: {
    amount: 0,
    id: "1",
    name: "iron ore",
    worth: 3,
    identifier: "ironore",
    overallAmount: 99,
    icon: Iron_Ore,
  },
  goldore: {
    amount: 0,
    id: "2",
    name: "gold ore",
    worth: 5,
    identifier: "goldore",
    overallAmount: 999,
    icon: Gold_Ore,
  },
  ironingot: {
    amount: 0,
    id: "3",
    name: "iron ingot",
    worth: 10,
    identifier: "ironingot",
    overallAmount: 0,
    icon: Iron_Ingot,
  },
  goldingot: {
    amount: 0,
    id: "4",
    name: "gold ingot",
    worth: 15,
    identifier: "goldingot",
    overallAmount: 0,
    icon: Gold_Ingot,
  },
  woodstick: {
    amount: 0,
    id: "5",
    name: "wood sticks",
    worth: 1,
    price: 2,
    identifier: "woodstick",
    icon: Wood_Stick,
  },
  gear: {
    amount: 0,
    id: "6",
    name: "gear",
    worth: 7,
    identifier: "gear",
    icon: Gear,
  },
  goldarmor: {
    amount: 0,
    id: "7",
    name: "gold armor",
    worth: 70,
    identifier: "goldarmor",
    icon: Gold_Armor_Plate,
  },
  dwarfi: { amount: 0, id: "99", name: "dwarfi" },
};
