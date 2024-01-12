export default function lottieConfig(animationData) {
  // console.log(animationData);
  return {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
}
