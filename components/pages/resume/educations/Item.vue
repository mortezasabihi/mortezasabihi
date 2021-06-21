<template>
  <div
    class="
      mb-4
      transform
      hover:scale-105
      transition
      duration-300
      ease-in-out
      grid grid-cols-3
      gap-4
      md:flex
    "
  >
    <!-- icon -->
    <div
      class="
        w-14
        h-14
        sm:w-16 sm:h-16
        bg-gray-300
        flex
        items-center
        justify-center
        rounded-md
        col-span-1
      "
    >
      <font-awesome-icon
        :icon="['fas', 'university']"
        class="text-lg text-gray-700"
      />
    </div>
    <!-- /icon -->

    <div class="col-span-2">
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
