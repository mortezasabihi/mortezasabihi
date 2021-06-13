<template>
  <div class="bg-white p-12 rounded-lg mb-12">
    <!-- form -->
    <PageContactForm class="mb-8" />
    <!-- /form -->

    <!-- email -->
    <div class="text-gray-800">
      <font-awesome-icon :icon="['fas', 'envelope']" class="mr-2" />
      <a href="mailto:mortezasabihi87@gmail.com" class="text-sm tracking-wider">
        mortezasabihi87@gmail.com
      </a>
    </div>
    <!-- /email -->
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  head: {
    title: 'Contact',
    meta: [
      {
        property: 'og:url',
        content: 'https://mortezasabihi.com/contact',
      },
      {
        name: 'og:title',
        property: 'og:title',
        content: 'Contact Morteza Sabihi ← Morteza Sabihi',
      },
      {
        name: 'og:description',
        property: 'og:description',
        content: 'Contact Morteza Sabihi',
      },
      {
        name: 'twitter:title',
        content: 'Contact Morteza Sabihi ← Morteza Sabihi',
      },
      {
        name: 'twitter:description',
        content: 'Contact Morteza Sabihi',
      },
      {
        itemprop: 'name',
        content: 'Contact Morteza Sabihi ← Morteza Sabihi',
      },
      {
        itemprop: 'description',
        content: 'Contact Morteza Sabihi',
      },
    ],
    link: [{ rel: 'canonical', href: 'https://mortezasabihi.com/contact' }],
  },
  transition: {
    enterActiveClass: 'animate__animated animate__fadeIn',
    leaveActiveClass: 'animate__animated animate__fadeOut animate__faster',
  },
}
</script>
