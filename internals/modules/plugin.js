import '~/modules';
import ModulesManager from './manager';

// eslint-disable-next-line
export default ({ store, client, app: { router } }) => {
  ModulesManager.registerStores({
    store,
    client,
  });
  // router.addRoutes(ModulesManager.getRoutes());
  // Bug: https://github.com/nuxt/nuxt.js/issues/2586
};
