<template>
  <section class="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-600 pt-14 pb-28 overflow-hidden">
    <!-- Radial glow -->
    <div class="absolute -top-1/3 ltr:right-0 rtl:left-0 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(27,111,242,0.06)_0%,transparent_70%)] pointer-events-none" />

    <div class="max-w-[1280px] mx-auto px-6 flex items-center justify-between gap-6 relative z-10 max-md:flex-col max-md:text-center">
      <!-- Left Content -->
      <div class="flex-1 max-w-[460px] max-md:max-w-full">
        <h1 class="text-[42px] max-lg:text-[36px] max-md:text-[32px] max-sm:text-[28px] font-extrabold leading-[1.15] text-white tracking-tight mb-4">
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
