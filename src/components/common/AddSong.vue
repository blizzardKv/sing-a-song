<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits<{
  'close-modal': []
}>();

const isDialogShown = ref(true);
const songName = ref('');

const onDialogHide = () => {
  songName.value = '';
  isDialogShown.value = true;
  emit('close-modal');
};
</script>

<template>
  <q-dialog
    v-model="isDialogShown"
    class="add-song"
    @hide="onDialogHide"
  >
    <q-card class="q-pa-md">
      <q-form>
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
