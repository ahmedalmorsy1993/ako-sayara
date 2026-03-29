<template>
  <div ref="selectRef" class="relative w-full">
    <!-- Trigger -->
    <button
      type="button"
      class="w-full h-[44px] flex items-center justify-between gap-2 bg-white text-navy-800 text-[13px] font-medium rounded-xl px-4 shadow-sm border-0 cursor-pointer transition hover:shadow-md focus:ring-2 focus:ring-brand-blue/20 focus:outline-none"
      @click="toggle"
    >
      <span class="truncate" :class="selected === placeholder ? 'text-muted' : 'text-navy-800'">
        {{ selected }}
      </span>
      <svg
        class="shrink-0 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
      >
        <path d="M3.5 5.25L7 8.75l3.5-3.5" stroke="#8899AA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>

    <!-- Dropdown -->
    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 -translate-y-1 scale-[0.98]"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 -translate-y-1 scale-[0.98]"
    >
      <div
        v-show="isOpen"
        class="absolute top-full mt-1.5 inset-x-0 z-50 bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 py-1.5 max-h-[220px] overflow-y-auto custom-scrollbar"
      >
        <button
          v-for="option in options"
          :key="option"
          type="button"
          class="w-full text-start px-4 py-2.5 text-[13px] font-medium transition-colors"
          :class="selected === option
            ? 'text-brand-blue bg-brand-blue/5'
            : 'text-gray-700 hover:bg-gray-50 hover:text-navy-800'"
          @click="selectOption(option)"
        >
          {{ option }}
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  options: string[]
  modelValue?: string
  placeholder?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const isOpen = ref(false)
const selectRef = ref<HTMLElement | null>(null)

const selected = computed(() => props.modelValue || props.placeholder || props.options[0])

function toggle() {
  isOpen.value = !isOpen.value
}

function selectOption(option: string) {
  emit('update:modelValue', option)
  isOpen.value = false
}

// Close on outside click
function onClickOutside(e: MouseEvent) {
  if (selectRef.value && !selectRef.value.contains(e.target as Node)) {
    isOpen.value = false
  }
}

onMounted(() => document.addEventListener('click', onClickOutside))
onUnmounted(() => document.removeEventListener('click', onClickOutside))
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #d1d5db;
  border-radius: 4px;
}
</style>
