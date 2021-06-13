<template>
  <div class="flex flex-col mb-3">
    <div class="flex justify-between items-center flex-1 mb-2 text-gray-800">
      <!-- title -->
      <div>{{ title }}</div>
      <!-- /title -->

      <!-- percentage -->
      <div>{{ percentage }}%</div>
      <!-- /percentage -->
    </div>
    <div class="bg-gray-300 flex-1 p-1 relative">
      <!-- progress bar -->
      <div
        :style="{ width: `${percentage}%` }"
        class="absolute top-0 bottom-0 left-0 bg-red-500"
      ></div>
      <!-- /progress bar -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Progress',
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
     * Percentage
     * @type { string | number }
     */
    percentage: {
      required: true,
      type: [String, Number],
    },
  },
}
</script>
