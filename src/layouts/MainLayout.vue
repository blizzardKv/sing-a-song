<script setup lang="ts">
import AppSidebar from 'components/app/app-sidebar/AppSidebar.vue';
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <app-sidebar />
    <q-page-container>
      <q-page class="q-pa-md">
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>
