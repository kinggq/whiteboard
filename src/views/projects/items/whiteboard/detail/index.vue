<script setup lang='ts'>
import {
  Addition,
  CommentActivity,
  DetailHeader,
  Section,
  Subject,
} from './components'

const { routerBack } = useRouterPush()

function onMaskClick() {
  routerBack()
}
</script>

<template>
  <n-modal :show="true" :on-mask-click="onMaskClick">
    <n-card
      :bordered="false" size="huge" role="dialog" aria-modal="true"
      style="width: 960px; height: calc(100vh - 32px);" content-style="padding: 0;"
    >
      <DetailHeader />
      <div px-20px>
        <div bb-primary py-20px>
          <Subject />
          <Addition />
        </div>
        <div bb-primary py-20px>
          <Section />
        </div>
        <CommentActivity mt-20px />
      </div>
    </n-card>
  </n-modal>
</template>

<style>
</style>
