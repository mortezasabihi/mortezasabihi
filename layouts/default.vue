<template>
  <div class="container mx-auto px-8 lg:max-w-screen-md md:max-w-screen-sm">
    <!-- header -->
    <Header />
    <!-- /header -->

    <!-- navbar -->
    <Navbar />
    <!-- /navbar -->

    <main>
      <div class="animate__animated animate__fadeIn">
        <Nuxt />
      </div>

      <!-- social media -->
      <SocialMedia />
      <!-- /social media -->
    </main>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  head: {
    bodyAttrs: {
      class: 'font-body bg-indigo-700 overflow-x-hidden',
    },
  },
}
</script>
