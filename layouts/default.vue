<template>
  <div class="container mx-auto px-8 lg:max-w-screen-md md:max-w-screen-sm">
    <!-- header -->
    <LayoutHeader />
    <!-- /header -->

    <!-- navbar -->
    <LayoutNavbar />
    <!-- /navbar -->

    <a
      v-if="$route.path === '/resume'"
      download
      href="/resume.pdf"
      target="_blank"
      class="
        text-white
        mb-10
        px-5
        py-2
        text-lg
        tracking-wider
        border-2 border-white
        rounded-full
        hover:bg-white hover:text-indigo-600
        transition
        transform
        hover:scale-110
        block
        md:hidden
        text-center
        animate__animated animate__fadeIn
      "
      >Get My Resume</a
    >

    <main>
      <div class="animate__animated animate__fadeIn">
        <Nuxt />
      </div>

      <!-- social media -->
      <LayoutSocialMedia />
      <!-- /social media -->
    </main>

    <a
      download
      href="/resume.pdf"
      target="_blank"
      class="
        text-white
        fixed
        bottom-0
        right-0
        mr-14
        mb-14
        px-5
        py-2
        text-lg
        tracking-wider
        border-2 border-white
        rounded-full
        hover:bg-white hover:text-indigo-600
        transition
        transform
        hover:scale-110
        hidden
        md:block
      "
      >Get My Resume</a
    >
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  head: {
    bodyAttrs: {
      class:
        'font-body bg-gradient-to-b md:bg-gradient-to-r from-indigo-600 to-pink-800 overflow-x-hidden',
    },
  },
}
</script>
