<script setup lang='ts'>
import { routeName } from '@/router'

interface Props {
  issue: ApiTask.Issue
}

const props = defineProps<Props>()

const { routerPush } = useRouterPush()

function toDetail() {
  routerPush({ name: routeName('projects_items_whiteboard_detail'), query: { issue_id: props.issue.issue_id } })
}
</script>

<template>
  <div @click="toDetail">
    <div relative>
      <div>
        <div>
          <n-tag
            v-for="(tag, index) in issue.tags"
            :key="index"
            size="small"
            :bordered="false"
            :type="tag.tag_type"
          >
            {{ tag.tag_name }}
          </n-tag>
          <span pl-6px pr-20px>{{ issue.subject }}</span>
        </div>
      </div>
      <n-button text absolute-rt>
        <icon-ic:outline-more-horiz text-22px />
      </n-button>
    </div>
    <div flex-between mt-20px>
      <div />
      <n-avatar
        round
        size="small"
        src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      />
    </div>
  </div>
</template>

<style>

</style>
