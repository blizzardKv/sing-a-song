<script setup lang="ts">
import { ref } from 'vue';
import { useAppStore } from 'stores/app';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import { QDialog, useQuasar } from 'quasar';

interface SongsItem {
  id: number,
  name: string,
  albums: {
    albumId: number,
    trackNumber: number,
  }[]
}

const $q = useQuasar();

const emit = defineEmits<{
  'close-modal': []
}>();

const router = useRoute();
const currentAlbum = router.params.id;

const appStore = useAppStore();
const { musicLibrary } = storeToRefs(appStore);

const dialogComponent = ref<QDialog | null>(null);
const isDialogShown = ref(true);
const songName = ref('');

const onDialogHide = () => {
  songName.value = '';
  isDialogShown.value = true;
  emit('close-modal');
};

const isSongExistInCurrentAlbum = (
  songs: SongsItem[],
  songNameValue: string,
  currentAlbumToNumber: number,
) => {
  const isExists = songs
    .find((song) => song.name === songNameValue)
    ?.albums.some((album) => album.albumId === currentAlbumToNumber);

  if (isExists) {
    $q.notify({
      message: 'Наименование песни уже есть в данном альбоме, выберите другое название',
      color: 'warning',
    });
    return true;
  }

  return false;
};

const onFormSubmit = () => {
  try {
    const { songs } = musicLibrary.value;
    const songNameValue = songName.value;
    const currentAlbumToNumber = parseInt(currentAlbum as string, 10);

    if (isSongExistInCurrentAlbum(songs, songNameValue, currentAlbumToNumber)) return;

    let songItem = songs.find((song) => song.name === songNameValue);

    if (!songItem) {
      const newId = songs.length ? songs[songs.length - 1].id + 1 : 1;
      songItem = {
        id: newId,
        name: songNameValue,
        albums: [],
      };
      songs.push(songItem);
    }

    let lastTrackNumber = 0;
    songs.forEach((song) => {
      song.albums.forEach((album) => {
        if (album.albumId === currentAlbumToNumber && album.trackNumber > lastTrackNumber) {
          lastTrackNumber = album.trackNumber;
        }
      });
    });

    songItem.albums.push({
      albumId: currentAlbumToNumber,
      trackNumber: lastTrackNumber + 1,
    });
    $q.notify({
      message: 'Песня успешно добавлена',
      color: 'success',
    });
    dialogComponent.value?.hide();
  } catch (error) {
    $q.notify({
      message: 'Ошибка добавления песни',
      color: 'error',
    });
  }
};
</script>

<template>
  <q-dialog
    ref="dialogComponent"
    v-model="isDialogShown"
    class="add-song"
    @hide="onDialogHide"
  >
    <q-card class="q-pa-md">
      <q-form @submit.prevent="onFormSubmit">
        <q-card-section>
          <h5 class="q-ma-none">
            Добавить песню в альбом
          </h5>
        </q-card-section>

        <q-card-section class="q-mb-md">
          <q-input
            v-model="songName"
            label="Название песни"
            required
          />
        </q-card-section>

        <q-card-section>
          <q-btn
            type="submit"
            dense
            no-caps
            color="accent"
          >
            Добавить
          </q-btn>
        </q-card-section>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<style scoped lang="scss">
.add-song {
  &__dialog {
    background-color: #fff;
  }
}
</style>
