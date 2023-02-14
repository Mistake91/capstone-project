import Hammer1 from "../../images/Character/Hammer1.png";
import Hammer2 from "../../images/Character/Hammer2.png";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [Hammer1, Hammer2];

export default function HammerAnimation() {
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
