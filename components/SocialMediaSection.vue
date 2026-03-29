<template>
  <section class="py-12 border-t border-navy-500/40">
    <div class="max-w-[1280px] mx-auto px-6">
      <h2 class="text-xl font-bold text-white text-center mb-8">{{ $t('social.title') }}</h2>
      <div class="flex items-center justify-center gap-6 flex-wrap">
        <a
          v-for="s in socials"
          :key="s.name"
          :href="s.url"
          :aria-label="s.name"
          target="_blank"
          rel="noopener noreferrer"
          class="w-[52px] h-[52px] flex items-center justify-center rounded-full border border-navy-500/60 bg-navy-700/40 hover:border-brand-blue/50 hover:bg-brand-blue/10 hover:-translate-y-0.5 transition-all"
        >
          <Icon :name="s.icon" class="w-6 h-6" :class="s.colorClass" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const socials = [
  { name: 'Facebook', icon: 'mdi:facebook', url: '#', colorClass: 'text-brand-blue' },
  { name: 'Instagram', icon: 'mdi:instagram', url: '#', colorClass: 'text-brand-blue' },
  { name: 'TikTok', icon: 'ic:baseline-tiktok', url: '#', colorClass: 'text-brand-blue' },
  { name: 'X', icon: 'ri:twitter-x-fill', url: '#', colorClass: 'text-brand-blue' },
  { name: 'LinkedIn', icon: 'mdi:linkedin', url: '#', colorClass: 'text-brand-blue' },
  { name: 'YouTube', icon: 'mdi:youtube', url: '#', colorClass: 'text-brand-red' },
]
</script>
