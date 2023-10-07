import React, { memo, useEffect } from "react";
import OvenPlayer from "ovenplayer";

import type { OvenPlayerProps } from "./types";

const ovenPlayerId = "oven-player-id";

const ReactOvenPlayer = memo((props: OvenPlayerProps) => {
  useEffect(() => {
    const player = OvenPlayer.create(ovenPlayerId, {
      ...props.config,
    });
    props.setState?.({
      instance: player,
      library: OvenPlayer,
      version: player.getVersion(),
    });
  }, []);
  return (
    <div
      style={
        props.wrapperStyles || {
          minWidth: 300,
        }
      }
    >
      <div id={ovenPlayerId} />
    </div>
  );
});

export * from "./types";
export default ReactOvenPlayer;
