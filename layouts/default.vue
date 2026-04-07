<template>
  <div>
    <AppNavbar />
    <main class="min-vh-100 bg-light" :class="{ 'pt-5 mt-4': !isHome }">
      <slot />
    </main>
    <footer class="text-center py-3 theme-d4">
      <p class="mb-0">
        Nail's by Monik &copy;{{ year }} — {{ $t('footer.rights') }}
      </p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isHome = computed(() => {
  return route.name && route.name.toString().startsWith('index')
})
const year = new Date().getFullYear()
</script>