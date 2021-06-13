<template>
  <div class="bg-white p-12 rounded-lg mb-12">
    <!-- about me -->
    <PageResumeAboutMe />
    <!-- /about me -->

    <!-- skills -->
    <PageResumeSkills />
    <!-- /skills -->

    <!-- experiences -->
    <PageResumeExperiences />
    <!-- /experiences -->

    <!-- educations -->
    <PageResumeEducations />
    <!-- /educations -->
  </div>
</template>

<script>
export default {
  name: 'ResumePage',
  head: {
    title: 'Resume',
    meta: [
      {
        property: 'og:url',
        content: 'https://mortezasabihi.com/resume',
      },
      {
        name: 'og:title',
        property: 'og:title',
        content: "Morteza Sabihi's resume ← Morteza Sabihi",
      },
      {
        name: 'og:description',
        property: 'og:description',
        content: "Morteza Sabihi's resume",
      },
      {
        name: 'twitter:title',
        content: "Morteza Sabihi's resume ← Morteza Sabihi",
      },
      {
        name: 'twitter:description',
        content: "Morteza Sabihi's resume",
      },
      {
        itemprop: 'name',
        content: "Morteza Sabihi's resume ← Morteza Sabihi",
      },
      {
        itemprop: 'description',
        content: "Morteza Sabihi's resume",
      },
    ],
    link: [{ rel: 'canonical', href: 'https://mortezasabihi.com/resume' }],
  },
  transition: {
    enterActiveClass: 'animate__animated animate__fadeIn',
    leaveActiveClass: 'animate__animated animate__fadeOut animate__faster',
  },
}
</script>
