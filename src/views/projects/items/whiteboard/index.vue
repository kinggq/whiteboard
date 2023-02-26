<template>
    <div flex-1 overflow-hidden>
        <n-scrollbar x-scrollable h-full content-style="height: 100%">
            <draggable :tasks="result">
                <template #stage-header="stage">
                    <StageHeader :stage="stage" />
                </template>
                <template #issue-content="issue">
                    <Issue :issue="issue" />
                </template>
            </draggable>
        </n-scrollbar>
    </div>
</template>
    
<script setup lang='ts'>
import { type } from 'os';
import { ref } from 'vue'
import {
    Draggable,
    StageHeader,
    Issue
} from './components'

const drag = ref(false)

const result = ref<ApiTask.Stage[]>([
      {
        "stages_id": 4,
        "stages_name": "功能验证清单",
        "sort": 40,
        "issues": [
          {
            "issue_id": 23341,
            "subject": "需求提交区规则",
            "assignee_id": 1,
            "assignee_name": "测试账号",
            "created_date": "2020-04-29 12:11:38",
            "priority_id": 1,
            "deadline": '',
            "sort": 0,
            "watch": 1,
            "tags": [
                {
                    tag_name: '功能需求',
                    tag_type: 'info'
                },
            ],
          },
          {
            "issue_id": 38828,
            "subject": "测试任务索引是否存在",
            "assignee_id": 11,
            "assignee_name": "文滔",
            "created_date": "2021-09-03 10:36:36",
            "priority_id": 1,
            "deadline": '',
            "sort": 1,
            "watch": 0,
            "tags": [
                {
                    tag_name: '功能需求',
                    tag_type: 'info'
                },
                {
                    tag_name: 'BUG',
                    tag_type: 'info'
                },
            ]
          },
          {
            "issue_id": 39031,
            "subject": "测试",
            "assignee_id": 189,
            "assignee_name": "包国强",
            "created_date": "2021-09-15 15:00:09",
            "priority_id": 1,
            "deadline": '',
            "sort": 2,
            "watch": 0,
            "tags": [
                {
                    tag_name: '细节优化',
                    tag_type: 'success'
                },
            ]
          }
        ]
      },
      {
        "stages_id": 50,
        "stages_name": "周计划",
        "sort": 41,
        "issues": [
          {
            "issue_id": 38330,
            "subject": "issue-create 接口创建测试标题-1",
            "assignee_id": 11,
            "assignee_name": "文滔",
            "created_date": "2021-08-10 17:31:14",
            "priority_id": 1,
            "deadline": '',
            "sort": 0,
            "watch": 0,
            "tags": [
                {
                    tag_name: '架构',
                    tag_type: 'warning'
                },
            ]
          },
          {
            "issue_id": 38333,
            "subject": "issue-create 接口创建测试标题-2",
            "assignee_id": 11,
            "assignee_name": "文滔",
            "created_date": "2021-08-10 17:38:14",
            "priority_id": 1,
            "deadline": '',
            "sort": 1,
            "watch": 0,
            "tags": [
                {
                    tag_name: '功能需求',
                    tag_type: 'info'
                },
            ]
          }
        ]
      },
      {
        "stages_id": 59,
        "stages_name": "已关闭",
        "sort": 95,
        "issues": []
      },
      {
        "stages_id": 24,
        "stages_name": "废弃",
        "sort": 99,
        "issues": [
            {
                "issue_id": 38333,
                "subject": "issue-create 接口创建测试标题-2",
                "assignee_id": 11,
                "assignee_name": "文滔",
                "created_date": "2021-08-10 17:38:14",
                "priority_id": 1,
                "deadline": '',
                "sort": 1,
                "watch": 0,
                "tags": []
            }
        ]
      },
      {
        "stages_id": 0,
        "stages_name": "未分类",
        "sort": 0,
        "issues": []
      }
    ])
</script>
    
<style>

</style>
