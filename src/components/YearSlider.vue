<template>
    <div
      ref="handle"
      class="w-16 h-4 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.6)] transition-all duration-300 cursor-pointer z-10"
      :style="{ left: position + 'px', transform: 'translateX(-50%)' }"
      @mousedown.prevent="startDrag"
    ></div>
  </template>
  
  
  <script setup>
  import { ref, watch, onMounted } from 'vue'
  
  const props = defineProps({
    activeYear: Number,
    years: Array
  })
  
  const emit = defineEmits(['jump'])
  
  const handle = ref(null)
  const position = ref(0)
  const spacing = ref(0)
  let containerWidth = 0
  
  // Sync dot position when activeYear changes
  watch(() => props.activeYear, updatePosition, { immediate: true })
  
  onMounted(() => {
    const container = handle.value?.parentElement?.querySelector('div.border-t')
    if (container) {
      containerWidth = container.offsetWidth
      spacing.value = containerWidth / (props.years.length - 1)
      updatePosition()
    }
  })
  
  function updatePosition() {
    const index = props.years.indexOf(props.activeYear)
    if (index !== -1 && spacing.value) {
      position.value = index * spacing.value
    }
  }
  
  // Drag logic
  let dragging = false
  let startX = 0
  
  function startDrag(e) {
    dragging = true
    startX = e.clientX
    document.addEventListener('mousemove', onDrag)
    document.addEventListener('mouseup', stopDrag)
  }
  
  function stopDrag() {
    dragging = false
    document.removeEventListener('mousemove', onDrag)
    document.removeEventListener('mouseup', stopDrag)
  
    const index = Math.round(position.value / spacing.value)
    const clampedIndex = Math.max(0, Math.min(props.years.length - 1, index))
    const snappedYear = props.years[clampedIndex]
    emit('jump', snappedYear)
  }
  
  function onDrag(e) {
    if (!dragging) return
    const delta = e.clientX - startX
    const newPos = position.value + delta
    if (newPos >= 0 && newPos <= containerWidth) {
      position.value = newPos
      startX = e.clientX
    }
  }
  </script>
  