import OvenPlayer, { OvenPlayerConfig, OvenPlayerInstance } from "ovenplayer";
import React from "react";
export type OvenPlayerProps = {
    config: OvenPlayerConfig;
    state?: OvenPlayerState | null;
    setState?: (state: OvenPlayerState) => void;
    wrapperStyles?: React.CSSProperties;
};
export type OvenPlayerState = {
    library: OvenPlayer;
    instance: OvenPlayerInstance;
    version: string;
};
