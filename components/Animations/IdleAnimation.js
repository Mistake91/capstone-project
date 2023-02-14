import Idle1 from "../../images/Character/Idle1.png";
import Idle2 from "../../images/Character/Idle2.png";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [Idle1, Idle2];

export default function IdleAnimation() {
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
