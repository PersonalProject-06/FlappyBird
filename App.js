import { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import Bird from "./components/Bird";
import Obstacles from "./components/Obstacles";
const App = () => {
  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;
  const birdPositionLeft = screenWidth / 2 - 25;
  const [birdBottom, setBirdBottom] = useState(screenHeight / 2);
  const [loop, setLoop] = useState(true);
  const [obstacleLeft, setObstacleLeft] = useState(screenWidth);
  const ObstaclesWidth = 60;
  const ObstalesHeight = 300;
  const gap = 260;
  const gravity = 3;
  let gameTimerId;
  let obstacleLeftTimerId;
  useEffect(() => {
    if (birdBottom <= 0) {
      setLoop(false);
    }
    if (birdBottom > 0) {
      gameTimerId = setInterval(() => {
        setBirdBottom((birdBottom) => birdBottom - gravity);
      }, 30);
      return () => {
        clearInterval(gameTimerId);
      };
    }

  
  }, [birdBottom]);
  useEffect(() => {
    if (obstacleLeft > -ObstaclesWidth) {
      obstacleLeftTimerId = setInterval(() => {
        setObstacleLeft((obstacleLeft) => obstacleLeft - 5);
      }, 30);
      return () => {
        clearInterval(obstacleLeftTimerId);
      }
    }else {
      setObstacleLeft(screenWidth);
    }
    
  }, [obstacleLeft]);
  return (
    <>
      <View style={styles.container}>
        <Bird
          bottom={birdBottom - 25}
          birdLeft={birdPositionLeft}
          loop={loop}
        />
      </View>
      <Obstacles
        ObstaclesWidth={ObstaclesWidth}
        ObstalesHeight={ObstalesHeight }
        gap={gap}
        obstacleLeft={obstacleLeft}
        obstaclesBottom={+ObstalesHeight + +gap}
      />
      <Obstacles
        ObstaclesWidth={ObstaclesWidth}
        ObstalesHeight={ObstalesHeight}
        gap={gap}
        obstacleLeft={obstacleLeft}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
