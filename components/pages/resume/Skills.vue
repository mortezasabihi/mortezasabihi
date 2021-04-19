<template>
  <div class="mb-8">
    <!-- title -->
    <h3 class="text-2xl font-bold border-b-2 border-black pb-2 mb-4">Skills</h3>
    <!-- /title -->

    <!-- skills -->
    <div class="flex flex-wrap -mx-4">
      <div class="w-full sm:w-full md:w-6/12 lg:w-6/12 xl:w-6/12 px-4">
        <Progress title="HTML & CSS" percentage="85" />
        <Progress title="Javascript" percentage="55" />
        <Progress title="Jquery" percentage="35" />
        <Progress title="Git" percentage="20" />
        <Progress title="Sass" percentage="65" />
      </div>
      <div class="w-full sm:w-full md:w-6/12 lg:w-6/12 xl:w-6/12 px-4">
        <Progress title="Vue JS" percentage="75" />
        <Progress title="Vuex" percentage="95" />
        <Progress title="React JS" percentage="60" />
        <Progress title="Webpack" percentage="40" />
        <Progress title="Responsive Web Design" percentage="80" />
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
