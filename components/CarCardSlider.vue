<template>
  <div class="relative flex items-center justify-center select-none" @mouseenter="pauseAuto" @mouseleave="resumeAuto">
    <!-- Cards Stack -->
    <div class="relative w-[700px] h-[420px]">
      <template v-for="car in cars" :key="car.id">
        <div
          v-show="cardSlots[car.id]"
          class="slider-card absolute top-1/2"
          :style="getStyle(car.id)"
        >
          <CarCard :car="car" :active="cardSlots[car.id]?.isCenter" />
        </div>
      </template>

      <!-- Prev Arrow - on left edge of active card -->
      <button
        class="absolute z-20 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/[0.08] hover:bg-white/20 active:scale-90 transition-all duration-200 shadow-lg"
        :style="{ insetInlineStart: '200px' }"
        @click="prev"
      >
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none" class="rtl:rotate-180">
          <path d="M10 3L5 8l5 5" stroke="#C4D3E8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>

      <!-- Next Arrow - on right edge of active card -->
      <button
        class="absolute z-20 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/[0.08] hover:bg-white/20 active:scale-90 transition-all duration-200 shadow-lg"
        :style="{ insetInlineStart: '490px' }"
        @click="next"
      >
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none" class="rtl:rotate-180">
          <path d="M6 3l5 5-5 5" stroke="#C4D3E8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
interface CarData {
  id: number
  image: string
  page: number
  title: string
  year: string
  km: string
  engine: string
  rating: number
}

const cars: CarData[] = [
  { id: 1, image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=500&h=300&fit=crop', page: 12, title: 'BMW 7 Series 2023', year: '2023', km: "15,000 Km's", engine: '3.0 litres', rating: 4.8 },
  { id: 2, image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=500&h=300&fit=crop', page: 13, title: 'Mercedes-Benz S-Class', year: '2022', km: "22,000 Km's", engine: '2.0 litres', rating: 4.7 },
  { id: 3, image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=500&h=300&fit=crop', page: 14, title: 'Make model model varient', year: '2011', km: "29,000 Km's", engine: '1.6 litres', rating: 4.9 },
  { id: 4, image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&h=300&fit=crop', page: 15, title: 'Porsche 911 Carrera', year: '2024', km: "5,000 Km's", engine: '3.0 litres', rating: 5.0 },
  { id: 5, image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&h=300&fit=crop', page: 16, title: 'Chevrolet Corvette C8', year: '2023', km: "8,500 Km's", engine: '6.2 litres', rating: 4.9 },
]

// Slot positions: centered layout with equal spacing
const slotConfigs = [
  { offset: -2, pos: -80,  scale: 0.75, opacity: 0,    z: 0,  brightness: 0.3 },
  { offset: -1, pos: -10,  scale: 0.85, opacity: 0.7,  z: 2,  brightness: 0.45 },
  { offset:  0, pos: 215,  scale: 1,    opacity: 1,    z: 10, brightness: 1   },
  { offset:  1, pos: 440,  scale: 0.85, opacity: 0.7,  z: 2,  brightness: 0.45 },
  { offset:  2, pos: 560,  scale: 0.75, opacity: 0,    z: 0,  brightness: 0.3 },
]

const currentIndex = ref(2)

// Map each car.id → its slot config
const cardSlots = computed(() => {
  const total = cars.length
  const map: Record<number, { pos: number; scale: number; opacity: number; z: number; brightness: number; isCenter: boolean } | null> = {}

  cars.forEach(c => { map[c.id] = null })

  slotConfigs.forEach((slot) => {
    const idx = ((currentIndex.value + slot.offset) % total + total) % total
    const car = cars[idx]
    map[car.id] = {
      pos: slot.pos,
      scale: slot.scale,
      opacity: slot.opacity,
      z: slot.z,
      brightness: slot.brightness,
      isCenter: slot.offset === 0,
    }
  })

  return map
})

function getStyle(carId: number) {
  const slot = cardSlots.value[carId]
  if (!slot) return { opacity: '0', zIndex: 0 }
  return {
    insetInlineStart: `${slot.pos}px`,
    transform: `translateY(-50%) scale(${slot.scale})`,
    opacity: `${slot.opacity}`,
    zIndex: slot.z,
    filter: slot.brightness < 1 ? `brightness(${slot.brightness})` : 'none',
  }
}

function next() {
  currentIndex.value = (currentIndex.value + 1) % cars.length
}

function prev() {
  currentIndex.value = (currentIndex.value - 1 + cars.length) % cars.length
}

// Auto-slide every 4s, pause on hover
let autoTimer: ReturnType<typeof setInterval> | null = null

function startAuto() {
  autoTimer = setInterval(next, 4000)
}
function pauseAuto() {
  if (autoTimer) { clearInterval(autoTimer); autoTimer = null }
}
function resumeAuto() {
  if (!autoTimer) startAuto()
}

onMounted(startAuto)
onUnmounted(pauseAuto)
</script>

<style scoped>
.slider-card {
  transition:
    inset-inline-start 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    filter 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
