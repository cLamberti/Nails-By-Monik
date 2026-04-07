<template>
  <nav 
    id="navbar" 
    class="navbar navbar-expand-lg fixed-top transition-all"
    :class="isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'"
    :data-bs-theme="isScrolled ? 'light' : 'dark'"
    style="border-radius: 0;"
  >
    <div class="container-fluid px-2 px-md-4">
      <NuxtLink class="navbar-brand d-flex align-items-center" :to="localePath('/')">
        <img src="/img/logos.png" alt="Nail's by Monik" height="45" class="me-2" />
        <span class="fw-bold fs-5" :class="isScrolled ? 'text-primary-custom' : 'text-white'">Nail's by Monik</span>
      </NuxtLink>

      <button
        class="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
          <li class="nav-item">
            <NuxtLink class="nav-link fw-bold px-3" :class="isScrolled ? 'text-dark' : 'text-white'" :to="localePath('/')">{{ $t('nav.home') }}</NuxtLink>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle fw-bold px-3" :class="isScrolled ? 'text-dark' : 'text-white'" href="#" role="button" data-bs-toggle="dropdown">
              {{ $t('nav.catalog') }}
            </a>
            <ul class="dropdown-menu border-0 shadow">
              <li><NuxtLink class="dropdown-item fw-medium" :to="localePath('/catalogo/manos')">{{ $t('nav.hands') }}</NuxtLink></li>
              <li><NuxtLink class="dropdown-item fw-medium" :to="localePath('/catalogo/pies')">{{ $t('nav.feet') }}</NuxtLink></li>
            </ul>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link fw-bold px-3" :class="isScrolled ? 'text-dark' : 'text-white'" :to="localePath('/nosotros')">{{ $t('nav.about') }}</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link fw-bold px-3" :class="isScrolled ? 'text-dark' : 'text-white'" :to="localePath('/agenda')">{{ $t('nav.agenda') }}</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link fw-bold px-3" :class="isScrolled ? 'text-dark' : 'text-white'" :to="localePath('/contacto')">{{ $t('nav.contact') }}</NuxtLink>
          </li>
        </ul>

        <div class="d-flex gap-2 justify-content-center mt-2 mt-lg-0">
          <button
            class="btn btn-sm d-flex align-items-center justify-content-center shadow-sm fs-5"
            :class="locale === 'es' ? (isScrolled ? 'btn-primary-custom text-white' : 'btn-light') : (isScrolled ? 'btn-outline-secondary' : 'btn-outline-light')"
            @click="setLocale('es')"
            title="Español"
            style="width: 45px; height: 35px; padding-bottom: 2px;"
          >
            🇨🇷
          </button>
          <button
            class="btn btn-sm d-flex align-items-center justify-content-center shadow-sm fs-5"
            :class="locale === 'en' ? (isScrolled ? 'btn-primary-custom text-white' : 'btn-light') : (isScrolled ? 'btn-outline-secondary' : 'btn-outline-light')"
            @click="setLocale('en')"
            title="English"
            style="width: 45px; height: 35px; padding-bottom: 2px;"
          >
            🇺🇸
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'

const { locale, setLocale, t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

const isScrolled = ref(false)

// Comprobamos si la ruta es la home para decidir si hacemos transparente el navbar inicialmente.
const isHome = computed(() => {
  return route.name && route.name.toString().startsWith('index')
})

const handleScroll = () => {
  if (!isHome.value) {
    isScrolled.value = true
    return
  }
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

watch(isHome, () => {
  handleScroll()
})
</script>

<style scoped>
.transition-all {
  transition: all 0.3s ease-in-out;
}
.nav-link:hover {
  color: var(--color-primary-light) !important;
}
</style>