<template>
  <div class="page">
    <h1>
      <span>About</span>
    </h1>

    <p>
      Fusce rutrum pharetra rutrum. Fusce velit ex, feugiat nec lorem
      nec, sollicitudin elementum ligula. Pellentesque eget risus pulvinar,
      lacinia libero nec, semper dolor. Vestibulum non elementum mi.
      Fusce non eleifend urna. Vestibulum ultricies nunc porta, congue
      risus eget, euismod tortor. In non nunc nunc.<br>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
      imperdiet arcu, sit amet aliquam libero. Fusce orci lacus,
      vehicula eu justo nec, tristique aliquam neque. Morbi a libero
      dignissim, vestibulum massa in, faucibus dolor. In et mattis
      nisl, quis blandit dui. Fusce et velit erat. Integer euismod arcu
      ac tincidunt consequat. Nam ac mattis ex, in faucibus purus.
    </p>

    <p class="text-center">
      <nuxt-link
        to="/"
        class="button"
      >
        Home
      </nuxt-link>
    </p>
  </div>
</template>

<script>
import { Component, Vue } from 'vueclass';

@Component({
  head: {
    title: 'About',
  },
})
export default class AboutPage extends Vue {}
</script>
