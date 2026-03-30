<template>
  <nav class="sticky top-0 z-50 bg-navy-800/95 backdrop-blur-xl">
    <div class="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-16">
      <!-- Logo -->
      <NuxtLink :to="localePath('/')" class="flex items-center gap-2 shrink-0">
       <img src="~/assets/images/logo.svg" alt="Logo"/>
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
         
          class="w-9 h-9 flex items-center justify-center   transition"
        >
        <img src="~/assets/images/search.png" alt="Search"/>
        </button>
           <button
         
          class="w-9 h-9 flex items-center justify-center rounded-full  transition"
        >
        <img src="~/assets/images/notification.png" alt="notification"/>
        </button>  
      

        <!-- Language Switcher -->
        <button
          @click="toggleLocale"
          class="w-9 h-9 flex items-center justify-center"
        >
        <img src="~/assets/images/language-switcher.png" alt="language-switcher"/>
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
