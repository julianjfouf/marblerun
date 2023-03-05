import React from "react";
import { OrbitControls } from "@react-three/drei";
import Level, { BlockSpinner } from "./Level";
import Lights from "./Lights";
import { Physics, Debug } from "@react-three/rapier";
import Player from "./Player";
import useGame from "../stores/useGame";
import Effects from "./Effects";

const Experience = () => {
  const blocksCount = useGame((state) => state.blocksCount);
  const blocksSeed = useGame((state) => state.blocksSeed);
  return (
    <>
      <color args={["#bdedfc"]} attach="background" />
      {/* <OrbitControls enableDamping={false} makeDefault /> */}
      <Physics>
        {/* <Debug /> */}
        <Lights />
        <Level count={blocksCount} seed={blocksSeed} />
        <Player />
      </Physics>
      {/* <Effects /> */}
    </>
  );
};

export default Experience;
