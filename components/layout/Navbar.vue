<template>
  <nav class="mb-16">
    <ul
      class="
        flex
        justify-center
        flex-col
        md:flex-row
        text-center
        leading-loose
        md:leading-normal
        animate__animated animate__fadeInRight
      "
    >
      <li v-for="(link, index) in links" :key="index">
        <nuxt-link
          :to="link.url"
          :class="[
            'mx-5 hover:text-white focus:text-white text-2xl transition duration-150 ease-in-out',
            currentPage === link.url ? 'text-white' : 'text-gray-300',
          ]"
        >
          {{ link.title }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      links: [
        {
          title: 'Home',
          url: '/',
        },
        {
          title: 'Resume',
          url: '/resume',
        },
        {
          title: 'Contact Me',
          url: '/contact',
        },
      ],
    }
  },
  computed: {
    /**
     * Current page route
     * @returns { string }
     */
    currentPage() {
      return this.$route.path
    },
  },
}
</script>
