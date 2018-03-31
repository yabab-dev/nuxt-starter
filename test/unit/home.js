/* eslint-disable */

import Vuex from 'vuex';
import { mount, createLocalVue } from '@vue/test-utils';
import Component from '../src/modules/main/pages/IndexPage';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Component', () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store();
    store.registerModule('main', {
      namespaced: true,
      state: { foo: 'bar ' },
    });
  });

  test('IndexPage.vue is correctly constructed', () => {
    const wrapper = mount(Component, { store, localVue });
    expect(wrapper.find('h1').text()).toBe('Hello Nuxt');
    expect(wrapper.find('p').text()).toBe('Value from store: bar');
  });
});
