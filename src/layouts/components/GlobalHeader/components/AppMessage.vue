<script setup lang="ts">

</script>

<template>
  <n-popover trigger="click" :show-arrow="false">
    <template #trigger>
      <hover-container w-40px relative content="系统消息">
        <icon-clarity:notification-line text-18px />
        <n-badge :value="10" :max="9" absolute top--2px right-0px />
      </hover-container>
    </template>
    <n-card :bordered="false" title="通知" size="small" header-style="padding: 0;" footer-style="padding: 0;">
      <template #header-extra>
        <div>
          <n-button text type="primary">
            <icon-material-symbols:settings-outline />
            通知设置
          </n-button>
        </div>
      </template>
      <div w-300px p-20px>
        暂无消息
      </div>
      <template #footer>
        <div text-center>
          <n-button quaternary type="primary">
            查看全部通知
          </n-button>
        </div>
      </template>
    </n-card>
  </n-popover>
</template>
