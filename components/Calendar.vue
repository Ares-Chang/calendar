<script setup lang="ts">
const now = useNow()
const config = ref({
  year: now.value.getFullYear(),
  month: now.value.getMonth() + 1,
  day: now.value.getDate(),
})

const weeks = ['日', '一', '二', '三', '四', '五', '六']
const days = computed(() => {
  const { year, month } = config.value
  const date = new Date(year, month - 1, 1)
  const day = date.getDay()
  const days = new Date(year, month, 0).getDate()
  const prevDays = new Date(year, month - 1, 0).getDate()
  const nextDays = 42 - day - days
  const daysArr = []
  for (let i = 0; i < day; i++)
    daysArr.push(prevDays - i)

  for (let i = 1; i <= days; i++)
    daysArr.push(i)

  for (let i = 1; i <= nextDays; i++)
    daysArr.push(i)

  return daysArr
})
function prevMonth() {
  const { year, month } = config.value
  if (month === 1)
    config.value = { year: year - 1, month: 12, day: config.value.day }
  else
    config.value = { year, month: month - 1, day: config.value.day }
}

function nextMonth() {
  const { year, month } = config.value
  if (month === 12)
    config.value = { year: year + 1, month: 1, day: config.value.day }
  else
    config.value = { year, month: month + 1, day: config.value.day }
}
</script>

<template>
  <div>
    <div>
      <button @click="prevMonth">
        上个月
      </button>
      <button @click="nextMonth">
        下个月
      </button>
    </div>
    <div>
      {{ config }}
    </div>
  </div>

  <div grid="~ cols-7" select-none gap-2>
    <div v-for="key in weeks" :key="key" bg="gray-700" b="~ gray-400/20" rd p-2>
      {{ key }}
    </div>
    <div
      v-for="(day, index) in days" :key="index"
      bg="gray/10 hover:gray/20"
      b="~ gray-400/20"
      relative cursor-pointer rd
    >
      <div pt-full />
      <div
        flex="~ col"
        absolute left-0 top-0
        h-full w-full
        items-center justify-center
        gap-2 p-2
      >
        <div text-2xl>
          {{ day }}
        </div>
        <div flex="~ wrap" items-center justify-center gap-2>
          <div
            v-for="(_, dot) in 70" :key="dot"
            h-2 w-2 rd-full bg-pink
          />
        </div>
      </div>
    </div>
  </div>
</template>
