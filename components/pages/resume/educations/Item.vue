<template>
  <div
    class="
      flex
      items-center
      mb-4
      transform
      hover:scale-105
      transition
      duration-300
      ease-in-out
    "
  >
    <!-- icon -->
    <div
      class="
        w-16
        h-16
        bg-gray-300
        flex
        items-center
        justify-center
        mr-6
        rounded-md
      "
    >
      <font-awesome-icon
        :icon="['fas', 'university']"
        class="text-lg text-gray-700"
      />
    </div>
    <!-- /icon -->

    <div>
      <!-- title -->
      <div class="tracking-wider mb-2">
        {{ title }} -
        <span class="text-xs text-gray-700">{{ date }}</span>
      </div>
      <!-- /title -->

      <!-- degree -->
      <div class="font-light tracking-wider text-sm">
        {{ degree }}
      </div>
      <!-- /degree -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'EducationItem',
  props: {
    /**
     * Title
     * @type { string }
     */
    title: {
      required: true,
      type: String,
    },
    /**
     * Date
     * @type { string }
     */
    date: {
      required: true,
      type: String,
    },
    /**
     * Degree
     * @type { string }
     */
    degree: {
      required: true,
      type: String,
    },
  },
}
</script>
