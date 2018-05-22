<template>
  <div class="default-layout">
    <github-corner/>
    <nuxt/>
  </div>
</template>

<script>
import { Component, Vue } from 'vueclass';
import GithubCorner from '../components/GithubCorner';

@Component({
  components: {
    GithubCorner,
  },
})
export default class DefaultLayout extends Vue {}
</script>
