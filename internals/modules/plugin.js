import '~/modules';
import ModulesManager from './manager';

// eslint-disable-next-line
export default ({ store, app: { router } }) => {
  ModulesManager.registerStores({
    store,
    client: process.client,
  });
  // router.addRoutes(ModulesManager.getRoutes());
  // Bug: https://github.com/nuxt/nuxt.js/issues/2586
};
