<template>
  <div class="container mx-auto px-8 lg:max-w-screen-md md:max-w-screen-sm">
    <!-- header -->
    <LayoutHeader />
    <!-- /header -->

    <!-- navbar -->
    <LayoutNavbar />
    <!-- /navbar -->

    <main>
      <div class="animate__animated animate__fadeIn">
        <Nuxt />
      </div>

      <!-- social media -->
      <LayoutSocialMedia />
      <!-- /social media -->
    </main>
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
