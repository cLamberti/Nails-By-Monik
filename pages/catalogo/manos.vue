<template>
  <div class="container my-5">
    <h1 class="text-primary-custom fw-bold text-center mb-5">{{ $t('catalog.hands_title') }}</h1>
    
    <div class="service-grid">
      <ServiceCard 
        v-for="service in handsServices" 
        :key="service.id" 
        :service="service" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { services } from '@/data/services'

const handsServices = computed(() => {
  return services.filter(s => s.category === 'manos')
})
</script>