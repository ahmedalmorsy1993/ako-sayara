<template>
  <section class="pb-16">
    <div class="max-w-[1280px] mx-auto px-6">
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <CategoryCard
          v-for="cat in categories"
          :key="cat.key"
          :label="$t(`categories.${cat.key}`)"
          :icon="cat.icon"
          :icon-bg="cat.iconBg"
          :icon-color="cat.iconColor"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const categories = [
  { key: 'newCars', icon: 'heroicons:truck', iconBg: 'rgba(27,111,242,0.1)', iconColor: '#1B6FF2' },
  { key: 'usedCars', icon: 'heroicons:clock', iconBg: 'rgba(27,111,242,0.1)', iconColor: '#1B6FF2' },
  { key: 'luxuryCars', icon: 'heroicons:sparkles', iconBg: 'rgba(27,111,242,0.1)', iconColor: '#1B6FF2' },
  { key: 'electricCars', icon: 'heroicons:bolt', iconBg: 'rgba(0,212,255,0.1)', iconColor: '#00D4FF' },
  { key: 'bestPrice', icon: 'heroicons:banknotes', iconBg: 'rgba(27,111,242,0.1)', iconColor: '#1B6FF2' },
  { key: 'familyCars', icon: 'heroicons:user-group', iconBg: 'rgba(27,111,242,0.1)', iconColor: '#1B6FF2' },
  { key: 'compare', icon: 'heroicons:arrows-right-left', iconBg: 'rgba(255,215,0,0.1)', iconColor: '#FFD700' },
  { key: 'journey', icon: 'heroicons:map', iconBg: 'rgba(255,107,53,0.1)', iconColor: '#FF6B35' },
  { key: 'luxuryRentals', icon: 'heroicons:key', iconBg: 'rgba(255,255,255,0.08)', iconColor: '#FFFFFF' },
  { key: 'familyRentals', icon: 'heroicons:home-modern', iconBg: 'rgba(27,111,242,0.1)', iconColor: '#1B6FF2' },
  { key: 'bestPriceRentals', icon: 'heroicons:currency-dollar', iconBg: 'rgba(0,196,140,0.1)', iconColor: '#00C48C' },
  { key: 'classicCars', icon: 'heroicons:wrench-screwdriver', iconBg: 'rgba(27,111,242,0.1)', iconColor: '#1B6FF2' },
]
</script>
