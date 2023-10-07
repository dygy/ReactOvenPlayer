import React, { memo, useEffect } from "react";
import OvenPlayer from "ovenplayer";

import type { OvenPlayerProps } from "./types";

const ovenPlayerId = "oven-player-id";

const ReactOvenPlayer = memo((props: OvenPlayerProps) => {
  useEffect(() => {
    OvenPlayer.create(ovenPlayerId, {
      ...props.config,
    });
  }, []);
  return (
    <div
      style={
        props.wrapperStyles || {
          minWidth: 300,
        }
      }
      id={ovenPlayerId}
    />
  );
});

export default ReactOvenPlayer;
