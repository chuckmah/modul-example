/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
import { SpritesService } from "@ulaval/modul-components";
import Vue, { PluginObject, VueConstructor } from "vue";

const IconPlugin: PluginObject<any> = {
  install(v: VueConstructor<Vue>): void {
    const svg: SpritesService = v.prototype.$svg;
    svg.addExternalSprites(
      require("@ulaval/modul-components/dist/assets/icons/sprites-default.svg"),
      "m"
    );
    // custom sprites here
  }
};

export default IconPlugin;
