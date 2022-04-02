import { View } from "react-native";
import React from "react";

const Obstacles = ({ obstacleLeft, ObstaclesWidth, ObstalesHeight ,obstaclesBottom = 0}) => {
  return (
    <>
 
      <View
        style={{
          position: "absolute",
          backgroundColor: "green",
          width: ObstaclesWidth,
          height: ObstalesHeight,
          left: obstacleLeft,
          bottom:obstaclesBottom,
        }}
      />

    </>
  );
};

export default Obstacles;
