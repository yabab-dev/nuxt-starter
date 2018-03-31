<template>
  <div>
    <h1>Hello Nuxt</h1>
    <p>
      Value from store: {{ foo }}
    </p>
    <div>
      Env: {{ env }}
    </div>
  </div>
</template>

<script>
import { Component, Vue } from '~/vueclass';
import MainStore from '../store';

@Component()
export default class IndexPage extends Vue {
  @MainStore.State('foo') foo;

  env = null;

  asyncData({ env }) {
    return {
      env: env.FOO,
    };
  }
}
</script>
