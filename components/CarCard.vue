<template>
  <div class="car-card-wrapper w-[270px]" :class="{ 'is-active': active }">
    <div class="car-card-inner rounded-2xl space-y-4 overflow-hidden p-3">
      <!-- Image -->
      <div class="relative w-full h-[200px] overflow-hidden bg-[#0D1E33] rounded-2xl">
        <img :src="car.image" :alt="car.title" class="w-full h-full object-cover" loading="lazy" />
      </div>

      <!-- Body -->
      <div class="bg-gradient-to-b from-[#0D1E33] to-[#081426]">
        <!-- Badge + Rating -->
        <div class="flex items-center justify-between mb-2">
          <span
            class="px-2.5 py-[2px] bg-brand-green/10 text-brand-green text-[11px] font-bold rounded"
          >
            {{ $t('hero.bestSeller') }}
          </span>
          <div class="flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M6 1l1.55 3.14L11 4.63 8.5 7.07l.59 3.43L6 8.88 2.91 10.5l.59-3.43L1 4.63l3.45-.49L6 1z"
                fill="#FFD700"
              />
            </svg>
            <span class="text-[12px] font-bold text-brand-gold">{{ car.rating }}</span>
          </div>
        </div>

        <!-- Title -->
        <h3 class="text-[15px] font-bold text-white mb-2.5 leading-snug">{{ car.title }}</h3>

        <!-- Specs -->
        <div class="flex items-center gap-1.5 mb-1.5 flex-wrap">
          <span
            class="text-[11px] text-muted-light/80 border border-[#1E3A5C]/80 rounded-md px-2 py-[2px]"
            >{{ car.year }}</span
          >
          <span
            class="text-[11px] text-muted-light/80 border border-[#1E3A5C]/80 rounded-md px-2 py-[2px]"
            >{{ car.km }}</span
          >
          <span
            class="text-[11px] text-muted-light/80 border border-[#1E3A5C]/80 rounded-md px-2 py-[2px]"
            >{{ car.engine }}</span
          >
        </div>

        <!-- Tags + Bookmark -->
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-1.5">
            <span
              class="text-[11px] text-muted-light/80 border border-[#1E3A5C]/80 rounded-md px-2 py-[2px]"
              >{{ $t('hero.automatic') }}</span
            >
            <span
              class="text-[11px] text-muted-light/80 border border-[#1E3A5C]/80 rounded-md px-2 py-[2px]"
              >{{ $t('hero.petrol') }}</span
            >
          </div>
          <button class="text-muted/50 hover:text-brand-cyan transition p-0.5">
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
              <path
                d="M3.5 2h9a1 1 0 011 1v11.5l-5.5-3-5.5 3V3a1 1 0 011-1z"
                stroke="currentColor"
                stroke-width="1.2"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  car: {
    image: string;
    page: number;
    title: string;
    year: string;
    km: string;
    engine: string;
    rating: number;
  };
  active?: boolean;
}>();

const { t } = useI18n();
</script>

<style scoped>
.car-card-wrapper {
  border-radius: 16px;
  padding: 1px;
  background: transparent;
  border: 1px solid rgba(26, 48, 80, 0.5);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.15, 1);
}

.car-card-wrapper.is-active {
  border: none;
  padding: 1.5px;
  background: linear-gradient(
    168.82deg,
    #1bb2de 1.7%,
    rgba(123, 127, 234, 0) 27.12%,
    rgba(123, 127, 234, 0) 61.28%,
    #1bb2de 99.52%
  );
  box-shadow:
    0 0 30px rgba(27, 178, 222, 0.12),
    0 20px 60px rgba(0, 0, 0, 0.4);
}

.car-card-inner {
  background: linear-gradient(180deg, #0d1e33 0%, #081426 100%);
}
</style>
