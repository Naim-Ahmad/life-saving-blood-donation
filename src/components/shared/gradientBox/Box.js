"use client";

import animationData from "@/assets/bloadDonation.json";
import lottieConfig from "@/config/lottieFiles";
import Lottie from "react-lottie";

const Box = () => {
  return (
    <div className={`max-md hidden lg:block flex-1`}>
      <Lottie options={lottieConfig(animationData)} />
    </div>
  );
};

export default Box;
