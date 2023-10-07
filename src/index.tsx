import React, { useEffect } from "react";
import OvenPlayer from "ovenplayer";

import type { OvenPlayerProps } from "./types";

const ovenPlayerId = "oven-player-id";

export default (props: OvenPlayerProps) => {
  useEffect(() => {
    OvenPlayer.create(ovenPlayerId, {
      ...props.config,
    });
  }, []);
  return <div id={ovenPlayerId} />;
};
