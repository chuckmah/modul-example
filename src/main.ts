/* eslint-disable @typescript-eslint/no-explicit-any */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import IconPlugin from "./icons/icons";
import {
  UtilsPluginOptions,
  UtilsPlugin,
  ComponentsPlugin,
  DirectivesPlugin,
  FiltersPlugin,
  ToastServicePlugin,
  FRENCH,
  ENGLISH
} from "@ulaval/modul-components";
import "@ulaval/modul-components/lib/modul.min.css";

const utilsPluginOptions: UtilsPluginOptions = {
  i18PluginOptions: {
    curLang: "fr"
  },
  propagateVueParserErrors: false
};

Vue.config.productionTip = false;

Vue.use(UtilsPlugin, utilsPluginOptions);
Vue.use(ComponentsPlugin);
Vue.use(DirectivesPlugin);
Vue.use(FiltersPlugin);
Vue.use(ToastServicePlugin);
Vue.use(IconPlugin);

const curLang: string = localStorage.getItem("lang") || FRENCH;

let langPromise: Promise<any>;
if (curLang === ENGLISH) {
  langPromise = import(/* webpackChunkName: "en" */ "./lang/english");
} else {
  langPromise = import(/* webpackChunkName: "fr" */ "./lang/french");
}

langPromise.then((langPlugin: any) => {
  Vue.use(langPlugin.default);
  new Vue({
    router,
    render: h => h(App)
  }).$mount("#app");
});
