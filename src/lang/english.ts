/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Vue, { PluginObject, VueConstructor } from "vue";
import { EnglishPlugin as ModulEnglishPlugin } from "@ulaval/modul-components";

const EnglishPlugin: PluginObject<any> = {
  install(v: VueConstructor): void {
    Vue.use(ModulEnglishPlugin);

    // additional traduction here
  }
};

export default EnglishPlugin;
