<template>
  <section class="py-12 bg-white">
    <div class="max-w-[1280px] mx-auto px-6">
      <h2 class="text-xl font-bold text-gray-900 text-center mb-8">{{ $t('social.title') }}</h2>
      <div class="flex items-center justify-center gap-6 flex-wrap">
        <a
          v-for="s in socials"
          :key="s.name"
          :href="s.url"
          :aria-label="s.name"
          target="_blank"
          rel="noopener noreferrer"
          class="w-[52px] h-[52px] flex items-center justify-center rounded-full border border-gray-200 bg-white hover:border-brand-blue/50 hover:bg-brand-blue/5 hover:-translate-y-0.5 transition-all shadow-sm"
        >
          <Icon :name="s.icon" class="w-6 h-6" :style="{ color: s.color }" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const socials = [
  { name: 'Facebook', icon: 'mdi:facebook', url: '#', color: '#1877F2' },
  { name: 'Instagram', icon: 'mdi:instagram', url: '#', color: '#E4405F' },
  { name: 'TikTok', icon: 'ic:baseline-tiktok', url: '#', color: '#000000' },
  { name: 'X', icon: 'ri:twitter-x-fill', url: '#', color: '#000000' },
  { name: 'LinkedIn', icon: 'mdi:linkedin', url: '#', color: '#0A66C2' },
  { name: 'YouTube', icon: 'mdi:youtube', url: '#', color: '#FF0000' },
]
</script>
