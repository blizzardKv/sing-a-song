<script setup lang="ts">
import { computed, ref } from 'vue';
import { sidebarItems } from 'components/app/app-sidebar/sidebar-items';

const isDrawerOpen = ref(false);
const isMinifiedState = ref(true);
const toggleButtonIconName = computed(() => (isMinifiedState.value ? 'keyboard_arrow_right' : 'keyboard_arrow_left'));
const toggleButtonLabel = computed(() => (isMinifiedState.value ? undefined : 'Toggle'));

const onToggleButtonClick = () => {
  isMinifiedState.value = !isMinifiedState.value;
};
</script>

<template>
  <q-drawer
    v-model="isDrawerOpen"
    :mini="isMinifiedState"
    class="app-sidebar column q-pa-sm"
    show-if-above
    bordered
    :width="250"
  >
    <div class="col">
      <q-list>
        <q-item
          v-for="(item, key) in sidebarItems"
          :key="key"
          :to="item.route"
          :disable="!item.route"
          class="app-sidebar__menu-item"
          active-class="app-sidebar__menu-item_active"
          clickable
          dense
        >
          <q-item-section avatar>
            <q-icon :name="item.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>
              {{ item.title }}
            </q-item-label>
          </q-item-section>
          <q-tooltip
            v-if="isMinifiedState"
            :offset="[10, 10]"
            anchor="center right"
            self="center left"
            transition-show="jump-right"
            transition-hide="jump-left"
          >
            {{ item.title }}
          </q-tooltip>
        </q-item>
      </q-list>
    </div>
    <q-item
      clickable
      dense
      @click="onToggleButtonClick"
    >
      <q-item-section avatar>
        <q-icon :name="toggleButtonIconName" />
      </q-item-section>
      <q-item-section>
        <q-item-label>
          {{ toggleButtonLabel }}
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-drawer>
</template>

<style scoped lang="scss">
@mixin hoverable {
  background-color: rgba(69,90,100,0.12);
  border-radius: 4px;
}

.app-sidebar {
  &__menu-item {
    padding: 0 8px;
    height: 40px;
    margin-bottom: 4px;
    color: $accent;

    &:hover,
    &_active {
      @include hoverable;
    }
  }
}
</style>
