"use client";
import animationData from "@/assets/blood.json";
import lottieConfig from "@/config/lottieFiles";
import Lottie from "react-lottie";

export default function LottieBlood(props) {
  return <Lottie options={lottieConfig(animationData)} {...props} />;
}
