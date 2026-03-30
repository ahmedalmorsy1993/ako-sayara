<template>
  <div class="bg-primary min-h-screen relative overflow-hidden blur-bg">
    <!-- Ambient background glows -->
    <!-- 1. Top left (behind Hero text) -->
    <div class="absolute -top-[100px] -left-[100px] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(27,111,242,0.25)_0%,transparent_60%)] pointer-events-none" />
    <!-- 2. Top right (behind car slider) -->
    <div class="absolute top-[100px] -right-[150px] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(21,89,204,0.2)_0%,transparent_60%)] pointer-events-none" />
    <!-- 3. Middle center/left (behind Search filter box) -->
    <div class="absolute top-[500px] left-[5%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(27,178,222,0.2)_0%,transparent_60%)] pointer-events-none" />

    <div class="relative z-10 block w-full">
      <HeroSection />
      <SearchSection />
      <CategoriesSection />
      <SocialMediaSection />
      <AppFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Ako Sayara - Find the perfect car for you',
})
</script>

<style scoped>
.blur-bg {
  position: relative;
  background: rgba(42, 45, 50, 0.01); /* #2A2D32 1% */
}

.blur-bg::before {
  content: "";
  position: absolute;
  inset: 0;
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);

  /* progressive blur mask */
  mask-image: linear-gradient(
    to bottom,
    rgba(0,0,0,1) 0%,
    rgba(0,0,0,0.7) 40%,
    rgba(0,0,0,0.3) 70%,
    rgba(0,0,0,0.1) 100%
  );

  -webkit-mask-image: linear-gradient(
    to bottom,
    rgba(0,0,0,1) 0%,
    rgba(0,0,0,0.7) 40%,
    rgba(0,0,0,0.3) 70%,
    rgba(0,0,0,0.1) 100%
  );
  z-index: 0;
  pointer-events: none;
}
</style>
