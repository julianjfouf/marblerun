import React, { useRef, useEffect } from "react";
import { useKeyboardControls } from "@react-three/drei";
import { addEffect } from "@react-three/fiber";
import useGame from "../stores/useGame";

const Interface = () => {
  const time = useRef();

  const forward = useKeyboardControls((state) => state.forward);
  const leftward = useKeyboardControls((state) => state.leftward);
  const backward = useKeyboardControls((state) => state.backward);
  const rightward = useKeyboardControls((state) => state.rightward);
  const jump = useKeyboardControls((state) => state.jump);

  const restart = useGame((state) => state.restart);
  const phase = useGame((state) => state.phase);

  useEffect(() => {
    const unsubscribeEffect = addEffect(() => {
      const state = useGame.getState();

      let elapsedTime = 0;

      if (state.phase === "playing") {
        elapsedTime = Date.now() - state.startTime;
      } else if (state.phase === "ended") {
        elapsedTime = state.endTime - state.startTime;
      }

      elapsedTime /= 1000;
      elapsedTime = elapsedTime.toFixed(2);
      if (time.current) {
        time.current.textContent = elapsedTime;
      }
    });

    return () => {
      unsubscribeEffect();
    };
  }, []);

  return (
    <div className="interface">
      <div ref={time} className="time">
        0.00
      </div>
      {phase === "ended" ? (
        <div className="restart" onClick={restart}>
          Restart
        </div>
      ) : null}
      <div className="controls">
        <div className="raw">
          <div className={`key ${forward ? `active` : null}`}></div>
        </div>
        <div className="raw">
          <div className={`key ${leftward ? `active` : null}`}></div>
          <div className={`key ${backward ? `active` : null}`}></div>
          <div className={`key ${rightward ? `active` : null}`}></div>
        </div>
        <div className="raw">
          <div className={`key large ${jump ? `active` : null}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Interface;
