import React, { memo, useEffect } from "react";
import OvenPlayer from "ovenplayer";

import type { ReactOvenPlayerProps } from "./types";

const ovenPlayerId = "oven-player-id";

const ReactOvenPlayer = memo((props: ReactOvenPlayerProps) => {
  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;
    const player = OvenPlayer.create(ovenPlayerId, props.config);

    if (props.isAutoReconnect) {
      player.on("error", () => {
        timeout = setTimeout(() => {
          OvenPlayer.create(ovenPlayerId, props.config);
        }, 1000);
      });
    }

    player.on("stateChanged", (stateObject) => {
      props.setState?.((state) => ({
        ...state,
        stateObject,
      }));
    });

    props.setState?.((state) => ({
      ...state,
      instance: player,
      library: OvenPlayer,
      version: player.getVersion(),
    }));

    return () => {
      if (props.isAutoReconnect) {
        player.off("error");
      }
      player.off("stateChanged");
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
