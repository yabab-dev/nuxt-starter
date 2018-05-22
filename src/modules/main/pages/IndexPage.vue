<template>
  <div class="page">
    <h1>
      <span class="vue">Nuxt</span><span>Starter</span>
    </h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
      imperdiet arcu, sit amet aliquam libero. Fusce orci lacus,
      vehicula eu justo nec, tristique aliquam neque. Morbi a libero
      dignissim, vestibulum massa in, faucibus dolor. In et mattis
      nisl, quis blandit dui. Fusce et velit erat. Integer euismod arcu
      ac tincidunt consequat. Nam ac mattis ex, in faucibus purus.
      Fusce rutrum pharetra rutrum. Fusce velit ex, feugiat nec lorem
      nec, sollicitudin elementum ligula. Pellentesque eget risus pulvinar,
      lacinia libero nec, semper dolor. Vestibulum non elementum mi.
      Fusce non eleifend urna. Vestibulum ultricies nunc porta, congue
      risus eget, euismod tortor. In non nunc nunc.
    </p>

    <p class="text-center">
      <nuxt-link
        to="/about"
        class="button"
      >
        About
      </nuxt-link>
    </p>
  </div>
</template>

<script>
import { Component, Vue } from 'vueclass';

@Component({
  head: {
    title: 'Home',
  },
})
export default class IndexPage extends Vue {}
</script>
