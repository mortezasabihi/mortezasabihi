<template>
  <div class="mb-8">
    <!-- title -->
    <h3 class="text-2xl font-bold border-b-2 border-black pb-2 mb-4">Skills</h3>
    <!-- /title -->

    <!-- skills -->
    <div class="flex flex-wrap -mx-4">
      <div class="w-full sm:w-full md:w-6/12 lg:w-6/12 xl:w-6/12 px-4">
        <UiProgress title="HTML & CSS" percentage="85" />
        <UiProgress title="Javascript / ES6" percentage="60" />
        <UiProgress title="Jquery" percentage="35" />
        <UiProgress title="Redux" percentage="50" />
        <UiProgress title="Git" percentage="20" />
        <UiProgress title="SASS / SCSS" percentage="65" />
        <UiProgress title="PWA" percentage="50" />
        <UiProgress title="TailwindCSS" percentage="95" />
        <UiProgress title="Bootstrap / Bootstrap Vue" percentage="70" />
      </div>
      <div class="w-full sm:w-full md:w-6/12 lg:w-6/12 xl:w-6/12 px-4">
        <UiProgress title="Vue JS / Nuxt JS" percentage="85" />
        <UiProgress title="Vuex" percentage="95" />
        <UiProgress title="Vuetify" percentage="70" />
        <UiProgress title="React JS" percentage="70" />
        <UiProgress title="Webpack" percentage="40" />
        <UiProgress title="Responsive Web Design" percentage="80" />
        <UiProgress title="SSR / SPA" percentage="80" />
        <UiProgress title="Responsive Web Design" percentage="80" />
        <UiProgress title="Docker" percentage="10" />
      </div>
    </div>
    <!-- /skills -->
  </div>
</template>

<script>
export default {
  name: 'Skills',
}
</script>
