import Vue from 'vue';
import Router from 'vue-router';
import ModulesManager from 'vue-mm';

// Install vue-router
Vue.use(Router);

// Router builder
export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      // Modules routes
      ...ModulesManager.getRoutes(),

      // Other routes
      // ...
    ],
  });
}
