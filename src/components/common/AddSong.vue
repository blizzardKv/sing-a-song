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
  <q-dialog v-model="isDialogShown" @hide="onDialogHide">
    <q-form>
      <q-input v-model="songName" label="Название песни" required />
      <q-btn type="submit">Добавить</q-btn>
    </q-form>
  </q-dialog>
</template>

<style scoped>

</style>
