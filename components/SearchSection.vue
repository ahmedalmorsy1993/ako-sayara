<template>
  <section class="relative z-10 -mt-14 pb-12">
    <div class="max-w-[1280px] mx-auto px-6">
      <div class="search-box border border-[#1A3350]/70 rounded-[20px] p-6 md:p-7">
        <!-- Tabs -->
        <div class="flex gap-2 mb-6">
          <button
            v-for="tab in tabs"
            :key="tab.key"
            class="px-7 py-2.5 text-sm font-semibold rounded-xl border transition-all"
            :class="activeTab === tab.key
              ? 'text-brand-blue bg-brand-blue/10 border-brand-blue/40'
              : 'text-muted border-transparent hover:text-muted-light hover:bg-white/[0.03]'"
            @click="activeTab = tab.key"
          >
            {{ $t(`search.${tab.key}`) }}
          </button>
        </div>

        <!-- Filters -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-5">
          <div v-for="filter in filters" :key="filter.key" class="flex flex-col gap-1.5">
            <label class="text-xs font-medium text-muted-light">{{ $t(`search.${filter.key}`) }}</label>
            <CustomSelect
              v-model="filterValues[filter.key]"
              :options="filter.options"
              :placeholder="$t('search.all')"
            />
          </div>
        </div>

        <!-- Actions -->
        <div class="flex items-center justify-between gap-4 max-sm:flex-col max-sm:items-stretch">
          <div class="flex items-center gap-2">
            <button class="flex items-center gap-1.5 px-4 py-2.5 text-[13px] font-medium text-muted-light bg-transparent border border-[#1A3350]/60 rounded-xl hover:bg-brand-blue/[0.06] hover:border-brand-blue/30 hover:text-white transition">
              <Icon name="heroicons:arrow-path" class="w-4 h-4" />
              {{ $t('search.resetFilters') }}
            </button>
            <button class="flex items-center gap-1.5 px-4 py-2.5 text-[13px] font-medium text-muted-light bg-transparent border border-[#1A3350]/60 rounded-xl hover:bg-brand-blue/[0.06] hover:border-brand-blue/30 hover:text-white transition">
              <Icon name="heroicons:adjustments-horizontal" class="w-4 h-4" />
              {{ $t('search.advancedFilters') }}
            </button>
          </div>
          <button class="flex items-center justify-center gap-2 px-10 py-3 text-sm font-semibold text-white btn-search-gradient rounded-xl shadow-[0_4px_20px_rgba(64,160,239,0.25)] hover:shadow-[0_6px_28px_rgba(64,160,239,0.4)] hover:-translate-y-0.5 transition-all max-sm:w-full">
            <Icon name="heroicons:magnifying-glass" class="w-[18px] h-[18px]" />
            {{ $t('search.searchCars') }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const activeTab = ref('buyTab')

const tabs = [
  { key: 'buyTab' },
  { key: 'rentTab' },
]

const filterValues = reactive<Record<string, string>>({
  cities: '',
  make: '',
  model: '',
  modelVariant: '',
  priceUpTo: '',
})

const filters = [
  { key: 'cities', options: [t('search.all'), 'Baghdad', 'Erbil', 'Sulaymaniyah', 'Basra', 'Duhok'] },
  { key: 'make', options: [t('search.all'), 'Toyota', 'BMW', 'Mercedes', 'Hyundai', 'Kia', 'Ford'] },
  { key: 'model', options: [t('search.all'), 'Camry', 'Corolla', 'Land Cruiser', 'Prado', 'Accent'] },
  { key: 'modelVariant', options: [t('search.all'), 'SE', 'LE', 'XLE', 'Sport', 'Limited'] },
  { key: 'priceUpTo', options: [t('search.all'), '$10,000', '$20,000', '$30,000', '$50,000', '$100,000'] },
]
</script>

<style scoped>
.search-box {
  background: linear-gradient(145deg, #0E2540, #081729);
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.35);
}
</style>
