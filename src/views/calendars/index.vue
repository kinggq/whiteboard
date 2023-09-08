<script setup lang='ts'>
function handleUpdateValue(_: number,
  { year, month, date }: { year: number; month: number; date: number }) {
  window.$message?.success(`${year}-${month}-${date}`)
}
</script>

<template>
  <div>
    <div p-20px style="box-shadow: 0 12px 16px 0 rgb(0 0 0 / 12%);">
      <div flex>
        <div flex-1>
          <div>
            <n-calendar
              #="{ year, month, date }"
              @update:value="handleUpdateValue"
            >
              <template :slot-scope="{ year, month, date }">
                {{ year }}
              </template>
              {{ year }}-{{ month }}-{{ date }}
            </n-calendar>
          </div>
        </div>
        <div w-200px pl-20px>
          <h3 pb-20px>
            日历
          </h3>
          <n-space :vertical="true">
            <n-checkbox>法定日历</n-checkbox>
            <n-checkbox>团队日历</n-checkbox>
          </n-space>
        </div>
      </div>
    </div>
  </div>
</template>
