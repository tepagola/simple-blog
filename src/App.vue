<script setup>
import { computed } from 'vue';
import { RouterLink, RouterView, useRoute } from 'vue-router';

const router = useRoute();

const isHome = computed(() => router.path === '/');
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Simple blog</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link" active-class="active" aria-current="page">Inicio</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link" active-class="active">Acerca de</RouterLink>
          </li>
          <li class="nav-item" v-if="isHome">
            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#newArticleModal">
              Launch demo modal
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container py-5">
    <RouterView />
  </div>
</template>


<style scoped></style>
