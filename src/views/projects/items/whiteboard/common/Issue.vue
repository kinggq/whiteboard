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

function handlePriority() {
  console.log('priority')
}

const priorityBg = computed(
  () =>
    props.issue.priority_id === 0
      ? '#51b53f'
      : props.issue.priority_id === 1
        ? '#999'
        : props.issue.priority_id === 2
          ? 'orange'
          : '#df3c1f',
)
</script>

<template>
  <div class="issue" relative p-10px tabindex="0" focus:bg="#fff6c1" focus:dark:bg="gray" @click="toDetail">
    <div
      v-show="issue.priority_id !== 1"
      absolute left-0
      top-0 w-4px
      rounded-l-4px
      h-full
      :style="{ backgroundColor: priorityBg }"
      class="priority"
      @click.stop="handlePriority"
    />
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

<style scoped lang="less">
.issue {
  &:hover {
    .priority {
      display: block !important;
    }
  }
}
</style>
