<script setup lang="ts">
import { liveQuery } from 'dexie'
import { from, useObservable } from '@vueuse/rxjs'

const list = useObservable(
  from(
    liveQuery(async () =>
      await db.menus.where('id').equals('Domain').toArray(),
    ),
  ),
)

watchEffect(() => {
  console.log(list.value)
})

function add() {
  db.menus.add({
    id: 'Domain',
    label: 'Domain',
    children: [],
  })
}
</script>

<template>
  <div>
    {{ list }}
    <button @click="add">
      add
    </button>
  </div>
</template>
