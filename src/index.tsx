import React, { memo, useEffect } from "react";
import OvenPlayer from "ovenplayer";

import type { ReactOvenPlayerProps, ReactOvenPlayerState } from "./types";

const ovenPlayerId = "oven-player-id";
const pastOldState = (state: ReactOvenPlayerState | null) => {
  if (state) {
    return {
      ...state,
    };
  } else return {};
};

const ReactOvenPlayer = memo((props: ReactOvenPlayerProps) => {
  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;
    const player = OvenPlayer.create(ovenPlayerId, props.config);

    if (props.isAutoReconnect) {
      player.on("error", () => {
        timeout = setTimeout(() => {
          const player = OvenPlayer.create(ovenPlayerId, props.config);
          props.setState?.(
            (state) =>
              ({
                ...pastOldState(state),
                instance: player,
              }) as ReactOvenPlayerState,
          );
        }, 1000);
      });
    }

    player.on("stateChanged", (stateObject) => {
      props.setState?.(
        (state) =>
          ({
            ...pastOldState(state),
            stateObject,
          }) as ReactOvenPlayerState,
      );
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
