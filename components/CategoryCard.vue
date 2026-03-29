<template>
  <div
    class="relative flex flex-col items-center justify-center gap-3 p-6 bg-navy-700/40 border border-navy-500/30 rounded-2xl cursor-pointer transition-all duration-200 hover:border-brand-blue/40 hover:bg-navy-700/60 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] backdrop-blur-sm"
  >
    <span
      v-if="comingSoon"
      class="absolute top-2 right-3 text-[11px] italic text-[#2386F0] font-medium"
    >
      Coming soon
    </span>
    <div class="w-14 h-14 flex items-center justify-center">
      <Icon :name="icon" class="w-8 h-8" :style="iconColor ? { color: iconColor } : {}" :class="{ 'text-white': !iconColor }" />
    </div>
    <span class="text-[13px] font-medium text-muted-light text-center whitespace-nowrap">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  icon: string
  iconColor?: string
  comingSoon?: boolean
}>()
</script>
