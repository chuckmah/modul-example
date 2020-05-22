/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ENGLISH,
  FRENCH,
  UtilsPlugin,
  UtilsPluginOptions,
  ToastServicePlugin,
  FormPlugin,
} from "@ulaval/modul-components";
import "@ulaval/modul-components/lib/modul.min.css";
import Vue from "vue";
import App from "./App.vue";
import IconPlugin from "./icons/icons";
import router from "./router";

const utilsPluginOptions: UtilsPluginOptions = {
  i18PluginOptions: {
    curLang: FRENCH,
  },
  propagateVueParserErrors: false,
};

Vue.config.productionTip = false;

Vue.use(UtilsPlugin, utilsPluginOptions);
// Vue.use(ComponentsPlugin);
// Vue.use(DirectivesPlugin);
// Vue.use(FiltersPlugin);
Vue.use(FormPlugin);
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
    render: (h) => h(App),
  }).$mount("#app");
});
