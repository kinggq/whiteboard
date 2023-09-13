<script setup lang='ts'>
import '@wangeditor/editor/dist/css/style.css'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
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

const valueHtml = ref('<p>hello</p>')
const editorConfig = { placeholder: '请输入内容...' }
const editorRef = shallowRef()
const toolbarConfig = ref({
  excludeKeys: ['fullScreen', 'code', 'group-video', 'codeBlock', 'bulletedList', 'numberedList', 'blockquote', 'bold', 'italic', 'todo', 'insertImage', 'insertLink', 'emotion'],
})

function handleCreated(val: string) {
  editorRef.value = val
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
      <div absolute bottom-0 w-full>
        <Toolbar
          ref="editorRef"
          mode="default"
          style="border-bottom: 1px solid #ccc"
        />
        <Editor
          v-model="valueHtml"
          style="height: 100px; overflow-y: hidden;"
          :default-config="editorConfig"
          mode="default"
          @created="handleCreated"
        />
      </div>
    </n-card>
  </n-modal>
</template>

<style>
</style>
