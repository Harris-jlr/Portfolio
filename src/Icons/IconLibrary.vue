<script setup>
import { computed, h } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

const icons = {
    consultation: () =>
  h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', class: 'w-6 h-6' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': 1.5, d: 'M8.625 9.75h.008M12 9.75h.008M15.375 9.75h.008M12 21.75c-4.694 0-8.5-3.582-8.5-8s3.806-8 8.5-8 8.5 3.582 8.5 8c0 1.385-.383 2.678-1.052 3.77L20 20l-3.48-1.192A8.468 8.468 0 0112 21.75z' })
  ]),


    rfp: () =>
  h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', class: 'w-6 h-6' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': 1.5, d: 'M9 12.75l1.5 1.5L14.25 10.5m.75-5.25h1.5a2.25 2.25 0 012.25 2.25v12a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5v-12a2.25 2.25 0 012.25-2.25H8.25' })
  ]),


    discovery: () =>
  h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', class: 'w-6 h-6' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': 1.5, d: 'M11.25 4.5c-4.144 0-7.5 3.356-7.5 7.5s3.356 7.5 7.5 7.5 7.5-3.356 7.5-7.5-3.356-7.5-7.5-7.5zm0 0V3m0 15v1.5m8.25-8.25h1.5M3 12h1.5' })
  ]),

    design: () =>
  h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', class: 'w-6 h-6' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': 1.5, d: 'M16.862 3.487a2.25 2.25 0 113.182 3.182L9.75 17.964l-3.682.982.982-3.682L16.862 3.487z' })
  ]),


    development: () =>
  h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', class: 'w-6 h-6' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': 1.5, d: 'M16.5 3.75l4.5 8.25-4.5 8.25M7.5 3.75L3 12l4.5 8.25' })
  ]),

}

const iconComponent = computed(() => icons[props.name]?.() ?? null)
</script>

<template>
  <component :is="iconComponent" />
</template>
