<script setup lang="ts">
import { computed, ref } from 'vue';
import { useAppStore } from 'stores/app';
import { storeToRefs } from 'pinia';
import AddSong from 'components/common/AddSong.vue';
import { useRoute } from 'vue-router';

const router = useRoute();
const currentAlbum = router.params.id;

const appStore = useAppStore();
const { musicLibrary } = storeToRefs(appStore);

const isAddSongFormVisible = ref(false);
const filteredSongsList = computed(() => musicLibrary.value.songs
  .filter((item) => item.albums
    .some(({ albumId }) => albumId === parseInt(currentAlbum as string, 10))));

const onAddSongButtonClick = () => {
  isAddSongFormVisible.value = true;
};

const onModalClose = () => {
  isAddSongFormVisible.value = false;
};
</script>

<template>
  <q-list>
    <q-item-label>Песни</q-item-label>
    <q-item
      v-for="{ id, name } in filteredSongsList"
      :key="id"
    >
      <q-item-section>{{ name }}</q-item-section>
    </q-item>
  </q-list>
  <q-btn @click="onAddSongButtonClick">
    Добавить песню
  </q-btn>
  <add-song
    v-if="isAddSongFormVisible"
    @close-modal="onModalClose"
  />
</template>
