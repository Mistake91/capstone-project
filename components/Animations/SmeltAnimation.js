import Smelter1 from "../../images/Character/Smelter1.png";
import Smelter2 from "../../images/Character/Smelter2.png";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [Smelter1, Smelter2];

export default function SmeltAnimation() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 500);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return <Image src={images[currentIndex]} alt="Character" />;
}
