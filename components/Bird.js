import { View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
const Bird = ({ bottom, birdLeft, loop }) => {
  const birdWidth = 50;
  const birdHeight = 50;
  return (
    <View
      style={{
        position: "absolute",
        width: birdWidth,
        height: birdHeight,
        left: birdLeft,
        bottom: bottom,
      }}
    >
      <LottieView
        source={require("../assets/animation/bird.json")}
        autoPlay
        loop={loop}
      />
    </View>
  );
};

export default Bird;
