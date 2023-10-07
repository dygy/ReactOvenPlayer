/// <reference types="react" />
import OvenPlayer, { OvenPlayerConfig } from "ovenplayer";
export type OvenPlayerProps = {
  config: OvenPlayerConfig;
  ref: React.Ref<OvenPlayer>;
};
