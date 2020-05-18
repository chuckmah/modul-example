/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Vue, { PluginObject, VueConstructor } from "vue";
import { FrenchPlugin as ModulFrenchPlugin } from "@ulaval/modul-components";

const FrenchPlugin: PluginObject<any> = {
  install(v: VueConstructor): void {
    Vue.use(ModulFrenchPlugin);

    // additional traduction here
  }
};

export default FrenchPlugin;
