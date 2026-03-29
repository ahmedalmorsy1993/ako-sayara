<template>
  <section class="relative z-10 -mt-14 pb-12">
    <div class="max-w-[1280px] mx-auto px-6">
      <div class="bg-gradient-to-br from-[#0E2540] to-[#0A1B33] border border-[#1A3350]/70 rounded-[20px] p-6 md:p-7 shadow-[0_12px_48px_rgba(0,0,0,0.35)]">
        <!-- Tabs -->
        <div class="flex gap-2 mb-6">
          <button
            v-for="tab in tabs"
            :key="tab.key"
            class="px-6 py-2.5 text-sm font-semibold rounded-[10px] border transition-all"
            :class="activeTab === tab.key
              ? 'text-white bg-brand-blue/20 border-brand-blue/50'
              : 'text-muted border-transparent hover:text-muted-light hover:bg-white/[0.03]'"
            @click="activeTab = tab.key"
          >
            {{ $t(`search.${tab.key}`) }}
          </button>
        </div>

        <!-- Filters -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-5">
          <div v-for="filter in filters" :key="filter.key" class="flex flex-col gap-1.5">
            <label class="text-xs font-medium text-muted ltr:pl-0.5 rtl:pr-0.5">{{ $t(`search.${filter.key}`) }}</label>
            <div class="relative">
              <select class="w-full h-[42px] ltr:pl-3.5 ltr:pr-8 rtl:pr-3.5 rtl:pl-8 bg-[#081729] border border-[#1A3350] rounded-[10px] text-brand-blue text-[13px] font-medium appearance-none cursor-pointer hover:border-brand-blue/40 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 transition">
                <option>{{ $t('search.all') }}</option>
              </select>
              <svg class="absolute ltr:right-3 rtl:left-3 top-1/2 -translate-y-1/2 pointer-events-none" width="12" height="7" viewBox="0 0 12 7" fill="none">
                <path d="M1 1l5 5 5-5" stroke="#C4D3E8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Actions -->
        <div class="flex items-center justify-between gap-4 max-sm:flex-col max-sm:items-stretch">
          <div class="flex items-center gap-2">
            <button class="flex items-center gap-1.5 px-4 py-2 text-[13px] font-medium text-muted-light bg-[#0C1E35] border border-[#1A3350]/60 rounded-[10px] hover:bg-brand-blue/[0.08] hover:border-brand-blue/30 hover:text-white transition">
              <Icon name="heroicons:arrow-path" class="w-4 h-4" />
              {{ $t('search.resetFilters') }}
            </button>
            <button class="flex items-center gap-1.5 px-4 py-2 text-[13px] font-medium text-muted-light bg-[#0C1E35] border border-[#1A3350]/60 rounded-[10px] hover:bg-brand-blue/[0.08] hover:border-brand-blue/30 hover:text-white transition">
              <Icon name="heroicons:adjustments-horizontal" class="w-4 h-4" />
              {{ $t('search.advancedFilters') }}
            </button>
          </div>
          <button class="flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold text-white btn-search-gradient rounded-xl shadow-[0_4px_20px_rgba(64,160,239,0.3)] hover:shadow-[0_6px_28px_rgba(64,160,239,0.45)] hover:-translate-y-0.5 transition-all">
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

const filters = [
  { key: 'cities' },
  { key: 'make' },
  { key: 'model' },
  { key: 'modelVariant' },
  { key: 'priceUpTo' },
]
</script>
