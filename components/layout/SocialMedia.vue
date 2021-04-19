<template>
  <div class="mb-20 mx-auto lg:max-w-sm animate__animated animate__fadeInUp">
    <div class="text-center tracking-widest font-bold mb-6">
      Stay in touch with me on:
    </div>

    <div class="flex items-center justify-between flex-row-reverse">
      <a
        v-for="(item, index) in items"
        :key="index"
        :href="item.url"
        target="_blank"
        class="w-12 h-12 flex items-center justify-center rounded-full hover:bg-white focus:bg-white text-lg transform hover:scale-150 focus:scale-150 transition ease-in-out duration-150"
      >
        <font-awesome-icon :icon="['fab', item.icon]" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SocialMedia',
  data() {
    return {
      items: [
        { icon: 'telegram-plane', url: 'https://t.me/mortezasabihi' },
        { icon: 'instagram', url: 'https://www.instagram.com/morteza.sabihi' },
        { icon: 'twitter', url: 'https://twitter.com/mortezasabihi' },
        {
          icon: 'linkedin-in',
          url: 'https://ir.linkedin.com/in/mortezasabihi',
        },
        { icon: 'github', url: 'https://github.com/mortezasabihi' },
      ],
    }
  },
}
</script>
