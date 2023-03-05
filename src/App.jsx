import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Experience from "./components/Experience";
import { Canvas } from "@react-three/fiber";
import Lights from "./components/Lights";
import { KeyboardControls } from "@react-three/drei";
import Interface from "./components/Interface";

function App() {
  return (
    <KeyboardControls
      map={[
        { name: "forward", keys: ["ArrowUp", "KeyW"] },
        { name: "backward", keys: ["ArrowDown", "KeyS"] },
        { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
        { name: "rightward", keys: ["ArrowRight", "KeyD"] },
        { name: "jump", keys: ["Space"] },
      ]}
    >
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
        gl={{ antialias: true }}
      >
        <Experience />
      </Canvas>
      <Interface />
    </KeyboardControls>
  );
}

export default App;
