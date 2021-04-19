<template>
  <header class="text-center uppercase my-16">
    <nuxt-link to="/">
      <h1
        class="text-6xl text-white tracking-wide animate__animated animate__fadeInDown"
      >
        {{ $store.getters['getGithub'].name }}
      </h1>
    </nuxt-link>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>
