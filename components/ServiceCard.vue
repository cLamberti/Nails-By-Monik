<template>
  <div class="service-card">
    <img :src="image" :alt="name" loading="lazy" />
    <div class="mt-2 d-flex flex-column flex-grow-1">
      <strong>{{ name }}</strong>
      <p class="text-primary-custom mb-0 mt-1">
        {{ $t('catalog.price') }}: <strong>₡ {{ price.toLocaleString('es-CR') }}</strong>
      </p>
      <button
        class="btn btn-sm btn-primary-custom mt-auto mt-2 w-100"
        @click="$emit('book', name)"
      >
        <i class="fa-solid fa-calendar-plus me-1"></i>
        {{ $t('catalog.book') }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  price: number
  image: string
}>()

defineEmits<{ book: [name: string] }>()
</script>