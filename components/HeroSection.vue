<template>
  <section class="relative  pt-14 pb-28 overflow-hidden">
    <div class="max-w-[1280px] mx-auto px-6 flex items-center justify-between gap-6 relative z-10 max-md:flex-col max-md:text-center">
      <!-- Left Content -->
      <div class="flex-1 max-w-[460px] max-md:max-w-full">
        <h1 class="text-[42px] max-lg:text-[36px] max-md:text-[32px] max-sm:text-[28px]  leading-[1.15] text-white tracking-tight mb-4">
          {{ $t('hero.title') }}
        </h1>
        <p class="text-base text-muted leading-relaxed max-w-[380px] max-md:max-w-full max-md:mx-auto">
          {{ $t('hero.subtitle') }}
        </p>
      </div>

      <!-- Right - Car Slider -->
      <div class="shrink-0 max-md:mt-4">
        <CarCardSlider />
      </div>
    </div>

    <!-- Bottom gradient fade -->
    <div class="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-navy-800 pointer-events-none" />
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
