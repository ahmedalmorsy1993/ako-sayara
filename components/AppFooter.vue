<template>
  <footer class="bg-white text-gray-800 pt-12">
    <div class="max-w-[1280px] mx-auto px-6">
      <!-- Main Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[240px_1fr_1fr_1.5fr] gap-10 pb-10">
        <!-- Brand Column -->
        <div class="sm:col-span-2 lg:col-span-1">
          <div class="flex items-center gap-2 mb-5">
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
              <path d="M14 2L2 8l12 6 12-6-12-6z" fill="#1B6FF2" />
              <path d="M2 20l12 6 12-6" stroke="#1B6FF2" stroke-width="2" fill="none" />
              <path d="M2 14l12 6 12-6" stroke="#1B6FF2" stroke-width="2" fill="none" />
            </svg>
            <span class="text-lg font-bold text-gray-900">Ako Sayara</span>
          </div>

          <!-- Store Badges -->
          <div class="flex gap-2 flex-wrap mb-2">
            <a href="#" class="flex items-center gap-2 px-3 py-1.5 bg-gray-900 rounded-lg text-white hover:opacity-85 transition">
              <Icon name="mdi:apple" class="w-4 h-4" />
              <div class="flex flex-col leading-tight">
                <span class="text-[8px] text-gray-400 uppercase tracking-wide">Download on the</span>
                <span class="text-[13px] font-semibold">{{ $t('footer.downloadAppStore') }}</span>
              </div>
            </a>
            <a href="#" class="flex items-center gap-2 px-3 py-1.5 bg-gray-900 rounded-lg text-white hover:opacity-85 transition">
              <Icon name="mdi:google-play" class="w-4 h-4" />
              <div class="flex flex-col leading-tight">
                <span class="text-[8px] text-gray-400 uppercase tracking-wide">GET IT ON</span>
                <span class="text-[13px] font-semibold">{{ $t('footer.downloadGooglePlay') }}</span>
              </div>
            </a>
          </div>
          <a href="#" class="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-900 rounded-lg text-white hover:opacity-85 transition mb-5">
            <Icon name="mdi:cellphone" class="w-4 h-4 text-red-500" />
            <div class="flex flex-col leading-tight">
              <span class="text-[8px] text-gray-400 uppercase tracking-wide">EXPLORE IT ON</span>
              <span class="text-[13px] font-semibold">{{ $t('footer.downloadAppGallery') }}</span>
            </div>
          </a>

          <p class="text-sm font-semibold text-gray-800 mb-2.5">{{ $t('footer.helpImprove') }}</p>
          <button class="px-6 py-2.5 border-2 border-brand-blue rounded-full text-brand-blue text-[13px] font-semibold hover:bg-brand-blue hover:text-white transition">
            {{ $t('footer.sendFeedback') }}
          </button>
        </div>

        <!-- About Us -->
        <div>
          <h4 class="text-[15px] font-bold text-gray-900 mb-4">{{ $t('footer.aboutUs') }}</h4>
          <ul class="space-y-2.5">
            <li><a href="#" class="text-[13px] text-gray-500 hover:text-brand-blue transition">{{ $t('footer.aboutUs') }}</a></li>
            <li><a href="#" class="text-[13px] text-gray-500 hover:text-brand-blue transition">{{ $t('footer.aboutAkoSayara') }}</a></li>
            <li><a href="#" class="text-[13px] text-gray-500 hover:text-brand-blue transition">{{ $t('footer.whyAkoSayara') }}</a></li>
            <li><a href="#" class="text-[13px] text-gray-500 hover:text-brand-blue transition">{{ $t('footer.careers') }}</a></li>
          </ul>
        </div>

        <!-- Guides -->
        <div>
          <h4 class="text-[15px] font-bold text-gray-900 mb-4">{{ $t('footer.guides') }}</h4>
          <ul class="space-y-2.5">
            <li><a href="#" class="text-[13px] text-gray-500 hover:text-brand-blue transition">{{ $t('footer.buyingGuide') }}</a></li>
            <li><a href="#" class="text-[13px] text-gray-500 hover:text-brand-blue transition">{{ $t('footer.rentingGuide') }}</a></li>
            <li><a href="#" class="text-[13px] text-gray-500 hover:text-brand-blue transition">{{ $t('footer.sellGuide') }}</a></li>
            <li><a href="#" class="text-[13px] text-gray-500 hover:text-brand-blue transition">{{ $t('footer.rentGuide') }}</a></li>
            <li><a href="#" class="text-[13px] text-gray-500 hover:text-brand-blue transition">{{ $t('footer.buyingSpareGuide') }}</a></li>
            <li><a href="#" class="text-[13px] text-gray-500 hover:text-brand-blue transition">{{ $t('footer.sellingSpareGuide') }}</a></li>
          </ul>
        </div>

        <!-- Quick Search -->
        <div class="sm:col-span-2 lg:col-span-1">
          <h4 class="text-[15px] font-bold text-gray-900 mb-4">{{ $t('footer.quickSearch') }}</h4>
          <div class="grid grid-cols-2 gap-x-6">
            <ul class="space-y-2.5">
              <li><a href="#" class="text-[13px] text-gray-500 hover:text-brand-blue transition">{{ $t('footer.findDealer') }}</a></li>
              <li><a href="#" class="text-[13px] text-gray-500 hover:text-brand-blue transition">{{ $t('footer.findBrand') }}</a></li>
              <li><a href="#" class="text-[13px] text-gray-500 hover:text-brand-blue transition">{{ $t('footer.newCars') }}</a></li>
              <li><a href="#" class="text-[13px] text-gray-500 hover:text-brand-blue transition">{{ $t('footer.usedCars') }}</a></li>
              <li><a href="#" class="text-[13px] text-gray-500 hover:text-brand-blue transition">{{ $t('footer.luxuryCars') }}</a></li>
              <li><a href="#" class="text-[13px] text-gray-500 hover:text-brand-blue transition">{{ $t('footer.electricCars') }}</a></li>
            </ul>
            <ul class="space-y-2.5">
              <li><a href="#" class="text-[13px] text-gray-500 hover:text-brand-blue transition">{{ $t('footer.classicCars') }}</a></li>
              <li><a href="#" class="text-[13px] text-gray-500 hover:text-brand-blue transition">{{ $t('footer.familyCars') }}</a></li>
              <li><a href="#" class="text-[13px] text-gray-500 hover:text-brand-blue transition">{{ $t('footer.bestPrice') }}</a></li>
              <li><a href="#" class="text-[13px] text-gray-500 hover:text-brand-blue transition">{{ $t('footer.luxuryRentals') }}</a></li>
              <li><a href="#" class="text-[13px] text-gray-500 hover:text-brand-blue transition">{{ $t('footer.familyRentals') }}</a></li>
              <li><a href="#" class="text-[13px] text-gray-500 hover:text-brand-blue transition">{{ $t('footer.bestPriceRentals') }}</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="flex flex-col sm:flex-row items-center justify-between py-5 border-t border-gray-200 gap-4">
        <p class="text-[13px] text-gray-400 text-center sm:text-left">{{ $t('footer.allRights') }}</p>
        <div class="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
          <a href="#" class="text-[13px] text-gray-500 hover:text-brand-blue transition">{{ $t('footer.faqs') }}</a>
          <a href="#" class="text-[13px] text-gray-500 hover:text-brand-blue transition">{{ $t('footer.terms') }}</a>
          <a href="#" class="text-[13px] text-gray-500 hover:text-brand-blue transition">{{ $t('footer.privacy') }}</a>
          <a href="#" class="text-[13px] text-gray-500 hover:text-brand-blue transition">{{ $t('footer.cookies') }}</a>
          <a href="#" class="text-[13px] text-gray-500 hover:text-brand-blue transition">{{ $t('footer.contactUs') }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
