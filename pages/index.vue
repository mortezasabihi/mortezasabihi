<template>
  <div>
    <PageIndexHero />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head: {
    meta: [
      {
        property: 'og:url',
        content: 'https://mortezasabihi.com',
      },
      {
        name: 'og:title',
        property: 'og:title',
        content: "Morteza Sabihi's personal website ← Morteza Sabihi",
      },
      {
        name: 'og:description',
        property: 'og:description',
        content: "Morteza Sabihi's personal website",
      },
      {
        name: 'twitter:title',
        content: "Morteza Sabihi's personal website ← Morteza Sabihi",
      },
      {
        name: 'twitter:description',
        content: "Morteza Sabihi's personal website",
      },
      {
        itemprop: 'name',
        content: "Morteza Sabihi's personal website ← Morteza Sabihi",
      },
      {
        itemprop: 'description',
        content: "Morteza Sabihi's personal website",
      },
    ],
    link: [{ rel: 'canonical', href: 'https://mortezasabihi.com' }],
  },
  transition: {
    enterActiveClass: 'animate__animated animate__fadeIn',
    leaveActiveClass: 'animate__animated animate__fadeOut animate__faster',
  },
}
</script>
