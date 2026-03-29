<template>
  <section class="pb-0 pt-4" style="background: linear-gradient(180deg, #000623 0%, #010723 50%, #40A0EF 85%, #ffffff 100%)">
    <div class="max-w-[1280px] mx-auto px-6 pb-20">
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <CategoryCard
          v-for="cat in categories"
          :key="cat.key"
          :label="$t(`categories.${cat.key}`)"
          :icon="cat.icon"
          :icon-color="cat.iconColor"
          :coming-soon="cat.comingSoon"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const categories = [
  { key: 'newCars', icon: 'mdi:car-sports' },
  { key: 'usedCars', icon: 'mdi:car-clock' },
  { key: 'luxuryCars', icon: 'mdi:car-convertible' },
  { key: 'electricCars', icon: 'mdi:car-electric-outline' },
  { key: 'bestPrice', icon: 'mdi:hand-coin-outline' },
  { key: 'familyCars', icon: 'mdi:car-estate' },
  { key: 'compare', icon: 'mdi:cellphone-star', iconColor: '#A78BFA' },
  { key: 'journey', icon: 'mdi:map-marker-path', iconColor: '#FF6B35' },
  { key: 'luxuryRentals', icon: 'mdi:car-convertible' },
  { key: 'familyRentals', icon: 'mdi:bus-side' },
  { key: 'bestPriceRentals', icon: 'mdi:hand-coin' },
  { key: 'classicCars', icon: 'mdi:car-vintage', comingSoon: true },
]
</script>
