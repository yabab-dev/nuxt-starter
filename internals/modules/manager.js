import { State, Getter, Mutation, Action, namespace } from 'vuex-class';

const ModulesManager = {
  modules: [],

  use(module) {
    if (Array.isArray(module)) {
      for (const m of module) this.use(m);
    } else {
      this.modules.push(module);
    }
    return this;
  },

  getRoutes() {
    let routes = [];
    for (const module of this.modules) {
      if (module.routes && Array.isArray(module.routes))
        routes = [...routes, ...module.routes];
    }
    return routes;
  },

  registerStores({ store, client }) {
    for (const module of this.modules) {
      if (module.stores && Array.isArray(module.stores)) {
        for (const moduleStore of module.stores) {
          store.registerModule(
            moduleStore.name,
            moduleStore.store,
            client ? { preserveState: true } : {},
          );
        }
      }
    }
  },

  store(name, store) {
    // Auto namespace store
    store.namespaced = true;

    // Store datas
    return {
      // Name
      name,
      // Vuex store itself
      store,
      // Decorators
      State: namespace(name, State),
      Getter: namespace(name, Getter),
      Mutation: namespace(name, Mutation),
      Action: namespace(name, Action),
    };
  },
};

export default ModulesManager;
export const store = ModulesManager.store.bind(ModulesManager);
