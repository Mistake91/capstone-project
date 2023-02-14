import Smelter1 from "../images/Home/Smelter1.png";
import Smelter2 from "../images/Home/Smelter2.png";
import Smelter3 from "../images/Home/Smelter3.png";
import Smelter4 from "../images/Home/Smelter4.png";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [Smelter1, Smelter2, Smelter3, Smelter4];

export default function SmelterAnimation() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 300);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return <Image src={images[currentIndex]} alt="Smelter" priority />;
}
