<template>
  <div class="m-0 p-0">
    <!-- Hero Section de Ventana Completa (100vh) -->
    <header class="hero-section">
      <div class="hero-overlay"></div>
      <div class="container h-100 d-flex flex-column justify-content-center align-items-center text-center text-white position-relative z-1">
        <h1 class="display-3 fw-bold text-shadow mb-3 mt-5">Nail's by Monik</h1>
        <p class="fs-4 lead mb-4 text-shadow" style="max-width: 700px;">{{ $t('home.description') }}</p>
        <NuxtLink :to="localePath('/agenda')" class="btn btn-primary-custom btn-lg rounded-pill px-5 py-3 fs-5 fw-bold shadow mt-3 bounce-hover">
          <i class="fa-regular fa-calendar-check me-2"></i>{{ $t('catalog.book') }}
        </NuxtLink>
      </div>
    </header>

    <!-- Info Section Corta -->
    <div class="container my-5 py-5">
      <div class="row align-items-center">
        <div class="col-md-6 mb-5 mb-md-0">
          <h2 class="text-primary-custom fw-bold mb-4 display-6">Visítanos y relájate</h2>
          
          <div class="d-flex align-items-start mb-4">
            <div class="bg-light rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center me-3 text-primary-custom" style="width: 60px; height: 60px;">
              <i class="fa-solid fa-location-dot fs-3"></i>
            </div>
            <div>
              <h5 class="fw-bold mb-1">{{ $t('home.location_label') }}</h5>
              <p class="text-muted mb-0 fs-5">{{ $t('home.location') }}</p>
            </div>
          </div>

          <div class="d-flex align-items-start mb-4">
            <div class="bg-light rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center me-3 text-primary-custom" style="width: 60px; height: 60px;">
              <i class="fa-regular fa-clock fs-3"></i>
            </div>
            <div>
              <h5 class="fw-bold mb-1">Horarios</h5>
              <p class="text-muted mb-0 fs-5">Lunes a Sábado: 8:00 AM - 5:00 PM <br> Domingo: Cerrado</p>
            </div>
          </div>
          
        </div>
        <div class="col-md-6 text-center">
          <img src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1374&auto=format&fit=crop" class="img-fluid rounded-4 shadow-lg w-100" style="object-fit: cover; max-height: 400px;" alt="Spa Service">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>

<style scoped>
.hero-section {
  height: 100vh;
  background-image: url('https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2000&auto=format&fit=crop');
  background-size: cover;
  background-position: center;
  position: relative;
}

/* En el inicio, como el hero_section abarca toda la pantalla y el navbar está en top fixo, nos aseguramos de que el div general no deje vacíos blancos */

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.45); 
}

.text-shadow {
  text-shadow: 2px 2px 6px rgba(0,0,0,0.8);
}

.bounce-hover {
  transition: transform 0.2s ease-in-out;
}
.bounce-hover:hover {
  transform: scale(1.05);
}
</style>