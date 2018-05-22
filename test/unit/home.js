/* eslint-disable */

import Vuex from 'vuex';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import Component from '../../src/modules/main/pages/IndexPage';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Component', () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store();
  });

  test('IndexPage.vue is correctly rendered', () => {
    const wrapper = shallowMount(Component, { localVue });
    expect(wrapper.find('h1').text()).toBe('Hello Nuxt');
  });
});
