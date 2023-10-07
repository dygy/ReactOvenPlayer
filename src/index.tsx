import React, { memo, useEffect } from "react";
import OvenPlayer from "ovenplayer";

import type { ReactOvenPlayerProps } from "./types";

const ovenPlayerId = "oven-player-id";

const ReactOvenPlayer = memo((props: ReactOvenPlayerProps) => {
  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;
    const player = OvenPlayer.create(ovenPlayerId, props.config);

    player.on("error", () => {
      timeout = setTimeout(() => {
        OvenPlayer.create(ovenPlayerId, props.config);
      }, 1000);
    });

    props.setState?.({
      instance: player,
      library: OvenPlayer,
      version: player.getVersion(),
    });

    return () => {
      player.off("error");
      OvenPlayer.removePlayer(player);
      clearTimeout(timeout);
    };
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
