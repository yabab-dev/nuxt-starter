<template>
  <div class="layout default-layout">

    <nuxt-link
      :to="{ name: 'main.index' }"
      class="home-link"
    >
      Home
    </nuxt-link>
    <nuxt-link
      :to="{ name: 'main.about' }"
      class="about-link"
    >
      About
    </nuxt-link>

    <nuxt/>

  </div>
</template>

<script>
export default {};
</script>
