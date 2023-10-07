import type OvenPlayer from "ovenplayer";
import type { OvenPlayerConfig, OvenPlayerInstance, OvenPlayerEvents } from "ovenplayer";
import type React from "react";
export type ReactOvenPlayerProps = {
    config: OvenPlayerConfig;
    state?: ReactOvenPlayerState | null;
    setState?: React.Dispatch<React.SetStateAction<ReactOvenPlayerState | null>>;
    wrapperStyles?: React.CSSProperties;
    isAutoReconnect?: boolean;
};
export type ReactOvenPlayerState = {
    library: OvenPlayer;
    instance: OvenPlayerInstance;
    version: string;
    stateObject?: OvenPlayerEvents["stateChanged"];
};
