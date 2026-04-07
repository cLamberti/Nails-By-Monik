<template>
  <div class="container py-4">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h4 class="text-primary-custom mb-4">{{ $t('contact.title') }}</h4>
        <div class="card p-4 shadow-sm">
          <ContactForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
useHead({ title: `${t('contact.title')} — Nail's by Monik` })
</script>