<template>
  <nav class="sticky top-0 z-50 bg-navy-800/95 backdrop-blur-xl">
    <div class="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-16">
      <!-- Logo -->
      <NuxtLink :to="localePath('/')" class="flex items-center gap-2 shrink-0">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M14 2L2 8l12 6 12-6-12-6z" fill="#1B6FF2" />
          <path d="M2 20l12 6 12-6" stroke="#1B6FF2" stroke-width="2" fill="none" />
          <path d="M2 14l12 6 12-6" stroke="#1B6FF2" stroke-width="2" fill="none" />
        </svg>
        <span class="text-lg font-bold text-white">Ako Sayara</span>
      </NuxtLink>

      <!-- Desktop Nav Links -->
      <ul class="hidden lg:flex items-center gap-1">
        <li>
          <NuxtLink
            :to="localePath('/')"
            class="px-3 py-2 text-sm font-medium text-brand-blue rounded-lg hover:bg-brand-blue/10 transition"
          >
            {{ $t('nav.home') }}
          </NuxtLink>
        </li>
        <li v-for="item in navItems" :key="item.key" class="relative">
          <button
            class="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-light rounded-lg hover:text-white hover:bg-brand-blue/10 transition"
          >
            {{ $t(`nav.${item.key}`) }}
            <svg
              v-if="item.hasDropdown"
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              class="opacity-60"
            >
              <path
                d="M1 1l4 4 4-4"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </li>
      </ul>

      <!-- Right Actions -->
      <div class="hidden lg:flex items-center gap-1">
        <button
          v-for="action in actions"
          :key="action.label"
          :aria-label="action.label"
          class="w-9 h-9 flex items-center justify-center rounded-full bg-navy-700/60 border border-navy-500/60 hover:bg-brand-blue/15 hover:border-brand-blue/30 transition"
        >
          <Icon :name="action.icon" class="w-5 h-5 text-muted-light" />
        </button>

        <!-- Language Switcher -->
        <button
          @click="toggleLocale"
          class="w-9 h-9 flex items-center justify-center rounded-full bg-navy-700/60 border border-navy-500/60 hover:bg-brand-blue/15 hover:border-brand-blue/30 transition text-xs font-bold text-muted-light"
        >
          {{ locale === 'en' ? 'AR' : 'EN' }}
        </button>

        <!-- User -->
        <div
          class="flex items-center gap-2 ltr:ml-1 rtl:mr-1 px-1 ltr:pr-3 rtl:pl-3 py-1 rounded-full cursor-pointer hover:bg-brand-blue/10 transition"
        >
          <img
            src="https://ui-avatars.com/api/?name=Ali&background=1B6FF2&color=fff&size=32"
            alt="Ali"
            class="w-8 h-8 rounded-full"
          />
          <span class="text-[13px] font-medium text-muted-light whitespace-nowrap"
            >{{ $t('nav.hello') }}, Ali</span
          >
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
            <path
              d="M1 1l4 4 4-4"
              stroke="#C4D3E8"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      <!-- Mobile Toggle -->
      <button class="lg:hidden p-2" aria-label="Menu" @click="mobileOpen = !mobileOpen">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 6h18M3 12h18M3 18h18" stroke="#fff" stroke-width="2" stroke-linecap="round" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="mobileOpen" class="lg:hidden px-6 pb-6 border-t border-navy-500/50 space-y-1">
      <NuxtLink
        :to="localePath('/')"
        class="block px-4 py-3 text-brand-blue bg-brand-blue/5 rounded-lg text-[15px] font-medium"
      >
        {{ $t('nav.home') }}
      </NuxtLink>
      <button
        v-for="item in navItems"
        :key="item.key"
        class="block w-full text-start px-4 py-3 text-muted-light hover:text-white hover:bg-brand-blue/10 rounded-lg text-[15px] font-medium transition"
      >
        {{ $t(`nav.${item.key}`) }}
      </button>
      <button
        @click="toggleLocale"
        class="block w-full text-start px-4 py-3 text-muted-light hover:text-white hover:bg-brand-blue/10 rounded-lg text-[15px] font-medium transition"
      >
        {{ locale === 'en' ? '🇸🇦 العربية' : '🇬🇧 English' }}
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n();
const localePath = useLocalePath();
const mobileOpen = ref(false);

const navItems = [
  { key: 'buyCar', hasDropdown: true },
  { key: 'rentCar', hasDropdown: true },
  { key: 'sellRent', hasDropdown: true },
  { key: 'spares', hasDropdown: false },
  { key: 'checkCar', hasDropdown: false },
];

const actions = [
  { icon: 'heroicons:magnifying-glass', label: 'Search' },
  { icon: 'heroicons:bell', label: 'Notifications' },
  { icon: 'heroicons:cog-6-tooth', label: 'Settings' },
];

const toggleLocale = () => {
  setLocale(locale.value === 'en' ? 'ar' : 'en');
};
</script>
