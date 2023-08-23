<script setup lang="ts">
interface Days {
  year: number
  month: number
  day: number
  value: string
  isCurrentMonth: boolean
  isCurrentDate: boolean
}
enum Model {
  Monday = 'Monday',
  Sunday = 'Sunday',
}

const now = useNow()
const config = ref({
  year: now.value.getFullYear(),
  month: now.value.getMonth() + 1,
  day: now.value.getDate(),
  model: Model.Sunday,
})

const weeks = computed(
  () =>
    config.value.model === Model.Sunday
      ? ['日', '一', '二', '三', '四', '五', '六']
      : ['一', '二', '三', '四', '五', '六', '日'],
)
const days = computed(() => {
  const { year, month, day } = config.value
  const start = new Date(year, month - 1, 1)
  const end = new Date(year, month, 0)
  const isSunday = config.value.model === Model.Sunday
  const lastMonth = [...[...Array((start.getDay() || 7) - (isSunday ? 1 : 0)).keys()].map(key => -key).reverse()]
  const nextMonth = [...[...Array(7 - (end.getDay() || 7) - (isSunday ? 0 : 1)).keys()].map(key => key + 1)]

  const days: Days[] = []
  const list = [lastMonth, [...Array(end.getDate()).keys()], nextMonth]

  list.forEach((week, key) => {
    if (week.length === 7)
      return

    week.forEach((num) => {
      const d = new Date(start)
      if (key === 0) {
        d.setDate(num)
      }
      else if (key === 1) {
        d.setDate(d.getDate() + num)
      }
      else {
        d.setDate(num)
        d.setMonth(d.getMonth() + 1)
      }

      const value = useDateFormat(d, 'YYYY-MM-DD').value
      days.push({
        ...getDayObj(d),
        value,
        isCurrentMonth: key === 1,
        isCurrentDate: value === useDateFormat(`${year}-${month}-${day}`, 'YYYY-MM-DD').value,
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

// 修改月份
function changeMonth(type: 'preve' | 'next') {
  const { year, month } = config.value
  let options = {}
  if (type === 'preve')
    options = month === 1 ? { year: year - 1, month: 12 } : { year, month: month - 1 }
  else if (type === 'next')
    options = month === 12 ? { year: year + 1, month: 1 } : { year, month: month + 1 }

  config.value = { ...config.value, ...options }
}

function handleClick({ year, month, day }: Days) {
  config.value = { ...config.value, year, month, day }
}
</script>

<template>
  <div>
    <div flex justify-center gap-2>
      <button @click="changeMonth('preve')">
        上个月
      </button>
      <button @click="changeMonth('next')">
        下个月
      </button>
    </div>
    <div flex items-center justify-center gap-2>
      <span>星期开始于:</span>
      <div>
        <input id="Sunday" v-model="config.model" type="radio" name="drone" value="Sunday" checked>
        <label for="Sunday">周日</label>
      </div>

      <div>
        <input id="Monday" v-model="config.model" type="radio" name="drone" value="Monday">
        <label for="Monday">周一</label>
      </div>
    </div>
  </div>

  <div grid="~ cols-7" select-none gap-2>
    <div v-for="key in weeks" :key="key" bg="gray-700" b="~ gray-400/20" rd p-2>
      {{ key }}
    </div>
    <div
      v-for="(item, index) in days" :key="index"
      bg="gray/10 hover:gray/20"
      b="~ gray-400/20"
      relative cursor-pointer rd
      :class="{
        'bg-gray/5 color-gray/200': !item.isCurrentMonth,
        'bg-emerald!': item.isCurrentDate,
      }"
      @click="handleClick(item)"
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
          {{ item.day }}
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
