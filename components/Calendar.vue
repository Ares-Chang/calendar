<script setup lang="ts">
const now = useNow()
const config = ref({
  year: now.value.getFullYear(),
  month: now.value.getMonth() + 1,
  day: now.value.getDate(),
})

const weeks = ['一', '二', '三', '四', '五', '六', '日']
const days = computed(() => {
  const { year, month } = config.value
  const start = new Date(year, month - 1, 1)
  const end = new Date(year, month, 0)
  const lastMonth = [...[...Array(start.getDay() - 1).keys()].map(key => -key).reverse()]
  const nextMonth = [...[...Array(7 - (end.getDay() || 7)).keys()].map(key => key + 1)]

  interface Days {
    year: number
    month: number
    day: number
    value: string
    isCurrentMonth: boolean
  }
  const days: Days[] = []
  const list = [lastMonth, [...Array(end.getDate()).keys()], nextMonth]

  list.forEach((week, key) => {
    week.forEach((day) => {
      const d = new Date(start)
      if (key === 0) {
        d.setDate(day)
      }
      else if (key === 1) {
        d.setDate(d.getDate() + day)
      }
      else {
        d.setDate(day)
        d.setMonth(d.getMonth() + 1)
      }
      days.push({
        ...getDayObj(d),
        value: useDateFormat(d, 'YYYY-MM-DD').value,
        isCurrentMonth: key === 1,
      })
    })
  })

  return days
})

function getDayObj(date: Date) {
  const d = new Date(date)
  return {
    year: d.getFullYear(),
    month: d.getMonth() + 1,
    day: d.getDate(),
  }
}

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
      v-for="({ day, isCurrentMonth }, index) in days" :key="index"
      bg="gray/10 hover:gray/20"
      b="~ gray-400/20"
      relative cursor-pointer rd
      :class="{
        'bg-gray/5 color-gray/200': !isCurrentMonth,
      }"
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
            v-for="(_, dot) in 7" :key="dot"
            h-2 w-2 rd-full bg-pink
          />
        </div>
      </div>
    </div>
  </div>
</template>
