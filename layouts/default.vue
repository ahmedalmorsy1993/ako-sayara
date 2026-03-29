<template>
  <div :dir="dir" :lang="locale" class="min-h-screen flex flex-col font-sans">
    <AppNavbar />
    <main class="flex-1">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const dir = computed(() => locale.value === 'ar' ? 'rtl' : 'ltr')

useHead({
  htmlAttrs: {
    lang: locale.value,
    dir: dir.value,
  },
})
</script>
