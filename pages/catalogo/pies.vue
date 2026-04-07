<template>
  <div class="container py-4">
    <h4 class="text-primary-custom mb-4">{{ $t('catalog.hands_title') }}</h4>

    <div id="carousel" class="mb-4">
      <div id="carouselManos" class="carousel carousel-dark slide">
        <div class="carousel-indicators">
          <button
            v-for="(_, i) in handServices" :key="i"
            type="button"
            data-bs-target="#carouselManos"
            :data-bs-slide-to="i"
            :class="{ active: i === 0 }"
          />
        </div>
        <div class="carousel-inner">
          <div
            v-for="(s, i) in handServices" :key="s.id"
            class="carousel-item"
            :class="{ active: i === 0 }"
          >
            <img
              :src="s.image"
              class="img-carousel d-block mx-auto"
              :alt="locale === 'es' ? s.nameEs : s.nameEn"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>{{ locale === 'es' ? s.nameEs : s.nameEn }}</h5>
              <p>₡ {{ s.price.toLocaleString('es-CR') }}</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselManos" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" />
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselManos" data-bs-slide="next">
          <span class="carousel-control-next-icon" />
        </button>
      </div>
    </div>

    <div class="service-grid">
      <ServiceCard
        v-for="s in handServices"
        :key="s.id"
        :name="locale === 'es' ? s.nameEs : s.nameEn"
        :price="s.price"
        :image="s.image"
        @book="goToAgenda"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { services } from '~/data/services'

const { locale, t } = useI18n()
const localePath = useLocalePath()
const router = useRouter()

const handServices = computed(() => services.filter(s => s.category === 'manos'))

useHead({ title: `${t('catalog.hands_title')} — Nail's by Monik` })

function goToAgenda() {
  router.push(localePath('/agenda'))
}
</script>