<template>
  <div class="bg-navy-800">
    <HeroSection />
    <SearchSection />
    <CategoriesSection />
    <!-- Gradient transition from navy to white -->
    <div class="h-80 bg-gradient-to-b from-navy-800 via-[#1a3a5c] via-30% to-white"></div>
    <SocialMediaSection />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Ako Sayara - Find the perfect car for you',
})
</script>
