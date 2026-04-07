<template>
  <div class="container py-4">
    <h4 class="text-primary-custom mb-4">{{ $t('agenda.title') }}</h4>
    <div class="row g-4">
      <div class="col-md-7">
        <div class="card p-4 shadow-sm">
          <AppCalendar />
        </div>
      </div>
      <div class="col-md-5">
        <div class="card p-4 shadow-sm h-100 d-flex flex-column">
          <h6 class="mb-3">Resumen</h6>
          <div v-if="formattedDate" class="mb-2">
            <i class="fa-solid fa-calendar-check text-primary-custom me-2"></i>
            <strong>{{ formattedDate }}</strong>
          </div>
          <div v-if="selectedTime" class="mb-3">
            <i class="fa-solid fa-clock text-primary-custom me-2"></i>
            <strong>{{ selectedTime }}</strong>
          </div>
          <p v-if="!formattedDate" class="text-muted small">
            {{ $t('agenda.no_date') }}
          </p>
          <NuxtLink
            v-if="selectedDate && selectedTime"
            :to="localePath('/contacto')"
            class="btn btn-primary-custom mt-auto"
          >
            {{ $t('agenda.go_to_contact') }}
            <i class="fa-solid fa-arrow-right ms-1"></i>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const { selectedDate, selectedTime, formattedDate } = useAppointment()

useHead({ title: `${t('agenda.title')} — Nail's by Monik` })
</script>