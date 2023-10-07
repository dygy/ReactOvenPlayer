import OvenPlayer, { OvenPlayerConfig, OvenPlayerInstance } from "ovenplayer";
import React from "react";

export type ReactOvenPlayerProps = {
  config: OvenPlayerConfig;
  state?: ReactOvenPlayerState | null;
  setState?: (state: ReactOvenPlayerState) => void;
  wrapperStyles?: React.CSSProperties;
  isAutoReconnect?: boolean;
};

export type ReactOvenPlayerState = {
  library: OvenPlayer;
  instance: OvenPlayerInstance;
  version: string;
};
