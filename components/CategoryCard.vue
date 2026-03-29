<template>
  <div class="flex flex-col items-center justify-center gap-3 p-6 bg-gradient-to-br from-navy-700 to-navy-800 border border-navy-500/50 rounded-2xl cursor-pointer transition-all duration-200 hover:border-brand-blue/40 hover:bg-gradient-to-br hover:from-[#153050] hover:to-navy-700 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)]">
    <div class="w-14 h-14 flex items-center justify-center rounded-[14px]" :style="{ background: iconBg }">
      <Icon :name="icon" class="w-7 h-7" :style="{ color: iconColor }" />
    </div>
    <span class="text-[13px] font-semibold text-muted-light text-center whitespace-nowrap">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  icon: string
  iconBg?: string
  iconColor?: string
}>()
</script>
