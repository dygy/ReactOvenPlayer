import OvenPlayer, { OvenPlayerConfig } from "ovenplayer";
import type { Ref } from "react";

export type OvenPlayerProps = {
  config: OvenPlayerConfig;
  ref?: Ref<OvenPlayer>;
};
