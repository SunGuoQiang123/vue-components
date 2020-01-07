import Tabs from './tabs.vue';

const obj = {
  install(Vue) {
    Vue.component(Tabs.name, Tabs);
  }
};

// Auto-install
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

export default obj;
