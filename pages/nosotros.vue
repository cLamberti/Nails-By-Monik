<template>
  <div class="container py-4">
    <div class="row align-items-center g-4">
      <div class="col-md-6">
        <h2 class="text-primary-custom">{{ $t('about.title') }}</h2>
        <p class="lead">{{ $t('about.text') }}</p>
        <ul class="list-unstyled">
          <li v-for="item in services" :key="item">
            <i class="fa-solid fa-check text-primary-custom me-2"></i>{{ item }}
          </li>
        </ul>
      </div>
      <div class="col-md-6 text-center">
        <img src="/img/logos.png" alt="Nail's by Monik" class="img-fluid" style="max-width: 180px;" />
        <div class="mt-4">
          <p><i class="fa-solid fa-map-pin text-primary-custom me-2"></i>Bijagua de Upala, Costa Rica</p>
          <p><i class="fa-solid fa-phone text-primary-custom me-2"></i>7039-6647</p>
          <p><i class="fa-solid fa-clock text-primary-custom me-2"></i>Lun – Sáb / 9:00am – 5:00pm</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
useHead({ title: `${t('about.title')} — Nail's by Monik` })

const services = [
  'Uñas Acrílicas', 'Gel de Calcio', 'Gel X',
  'Encapsuladas', 'Semipermanente', 'Manicure & Pedicure Spa'
]
</script>