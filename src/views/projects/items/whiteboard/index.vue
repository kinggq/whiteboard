<template>
    <div flex-1 overflow-hidden>
        <n-scrollbar x-scrollable h-full content-style="height: 100%">
            <draggable :tasks="result">
                <template #stage-header="stage">
                    <StageHeader :stage="stage" />
                </template>
                <template #issue-content="issue">
                    <p>{{  issue.subject }}</p>
                </template>
            </draggable>
        </n-scrollbar>
    </div>
</template>
    
<script setup lang='ts'>
import { ref } from 'vue'
import {
    Draggable,
    StageHeader
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
            "watch": 1
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
            "watch": 0
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
            "watch": 0
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
            "watch": 0
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
            "watch": 0
          }
        ]
      },
      {
        "stages_id": 1,
        "stages_name": "需求评估",
        "sort": 47,
        "issues": [
          {
            "issue_id": 32800,
            "subject": "[功能需求] 任务标签",
            "assignee_id": 40,
            "assignee_name": "张慧明",
            "created_date": "2020-12-16 18:50:53",
            "priority_id": 1,
            "deadline": '',
            "sort": 0,
            "watch": 0
          },
          {
            "issue_id": 32801,
            "subject": "[功能需求] 人员选择器分组",
            "assignee_id": 40,
            "assignee_name": "张慧明",
            "created_date": "2020-12-16 18:54:16",
            "priority_id": 1,
            "deadline": '',
            "sort": 1,
            "watch": 0
          }
        ]
      },
      {
        "stages_id": 23,
        "stages_name": "复核",
        "sort": 48,
        "issues": [
          {
            "issue_id": 32325,
            "subject": "[功能需求] 管理员可以删除所有人任务",
            "assignee_id": 40,
            "assignee_name": "张慧明",
            "created_date": "2020-11-30 15:11:32",
            "priority_id": 1,
            "deadline": '',
            "sort": 0,
            "watch": 0
          },
          {
            "issue_id": 32947,
            "subject": "[功能需求] 白板独立入口",
            "assignee_id": 40,
            "assignee_name": "张慧明",
            "created_date": "2020-12-21 16:08:02",
            "priority_id": 1,
            "deadline": '',
            "sort": 1,
            "watch": 1
          },
          {
            "issue_id": 32739,
            "subject": "[功能需求] 子任务完成状态",
            "assignee_id": 40,
            "assignee_name": "张慧明",
            "created_date": "2020-12-14 17:56:10",
            "priority_id": 1,
            "deadline": '',
            "sort": 2,
            "watch": 1
          },
          {
            "issue_id": 32729,
            "subject": "[功能需求]上传文件后，由上传者设置访问密码？",
            "assignee_id": 189,
            "assignee_name": "包国强",
            "created_date": "2020-12-14 13:03:53",
            "priority_id": 1,
            "deadline": '',
            "sort": 3,
            "watch": 1
          },
          {
            "issue_id": 22098,
            "subject": "关注者交互探讨",
            "assignee_id": 40,
            "assignee_name": "张慧明",
            "created_date": "2020-04-08 16:25:03",
            "priority_id": 1,
            "deadline": '',
            "sort": 4,
            "watch": 1
          }
        ]
      },
      {
        "stages_id": 3,
        "stages_name": "处理中",
        "sort": 87,
        "issues": [
          {
            "issue_id": 39654,
            "subject": "[优化需求] 工单统计优化",
            "assignee_id": 189,
            "assignee_name": "包国强",
            "created_date": "2021-10-29 11:31:53",
            "priority_id": 3,
            "deadline": '',
            "sort": 0,
            "watch": 1
          },
          {
            "issue_id": 38947,
            "subject": "[功能需求] 任务统计",
            "assignee_id": 189,
            "assignee_name": "包国强",
            "created_date": "2021-09-09 13:43:04",
            "priority_id": 1,
            "deadline": '',
            "sort": 1,
            "watch": 1
          },
          {
            "issue_id": 37766,
            "subject": "[功能需求] 评论定位",
            "assignee_id": 189,
            "assignee_name": "包国强",
            "created_date": "2021-07-12 14:42:12",
            "priority_id": 1,
            "deadline": '',
            "sort": 2,
            "watch": 1
          },
          {
            "issue_id": 38821,
            "subject": "白板需求记录",
            "assignee_id": 189,
            "assignee_name": "包国强",
            "created_date": "2021-09-03 10:25:57",
            "priority_id": 1,
            "deadline": '',
            "sort": 3,
            "watch": 1
          }
        ]
      },
      {
        "stages_id": 64,
        "stages_name": "验收或等待",
        "sort": 89,
        "issues": [
          {
            "issue_id": 39653,
            "subject": "[优化需求] 工单搜索增加时间范围搜索及关键字段",
            "assignee_id": 189,
            "assignee_name": "包国强",
            "created_date": "2021-10-29 11:08:18",
            "priority_id": 3,
            "deadline": '',
            "sort": 0,
            "watch": 1
          },
          {
            "issue_id": 36772,
            "subject": "[功能需求] 任务搜索优化需求",
            "assignee_id": 11,
            "assignee_name": "文滔",
            "created_date": "2021-05-27 16:23:37",
            "priority_id": 1,
            "deadline": '',
            "sort": 1,
            "watch": 1
          },
          {
            "issue_id": 35111,
            "subject": "[功能需求] 工单列表模式",
            "assignee_id": 189,
            "assignee_name": "包国强",
            "created_date": "2021-03-15 11:38:22",
            "priority_id": 3,
            "deadline": "2021-08-24",
            "sort": 2,
            "watch": 1
          },
          {
            "issue_id": 35920,
            "subject": "[架构] 统一入口",
            "assignee_id": 11,
            "assignee_name": "文滔",
            "created_date": "2021-04-12 14:08:17",
            "priority_id": 1,
            "deadline": '',
            "sort": 3,
            "watch": 1
          },
          {
            "issue_id": 36771,
            "subject": "[功能需求] 关联任务",
            "assignee_id": 11,
            "assignee_name": "文滔",
            "created_date": "2021-05-27 15:43:14",
            "priority_id": 1,
            "deadline": '',
            "sort": 4,
            "watch": 1
          }
        ]
      },
      {
        "stages_id": 21,
        "stages_name": "已完成(本周)",
        "sort": 90,
        "issues": [
          {
            "issue_id": 38334,
            "subject": "issue-create 接口创建测试标题-35",
            "assignee_id": 11,
            "assignee_name": "文滔",
            "created_date": "2021-08-10 17:38:36",
            "priority_id": 1,
            "deadline": '',
            "sort": 0,
            "watch": 0
          },
          {
            "issue_id": 37550,
            "subject": "[功能需求] 任务标题格式化",
            "assignee_id": 11,
            "assignee_name": "文滔",
            "created_date": "2021-07-05 12:19:10",
            "priority_id": 1,
            "deadline": '',
            "sort": 1,
            "watch": 1
          },
          {
            "issue_id": 37769,
            "subject": "[优化] 评论及任务描述文本缓存触发条件优化",
            "assignee_id": 189,
            "assignee_name": "包国强",
            "created_date": "2021-07-12 14:55:43",
            "priority_id": 1,
            "deadline": '',
            "sort": 2,
            "watch": 1
          }
        ]
      },
      {
        "stages_id": 59,
        "stages_name": "已关闭",
        "sort": 95,
        "issues": [
          {
            "issue_id": 32793,
            "subject": "[功能需求] 任务优先级",
            "assignee_id": 40,
            "assignee_name": "张慧明",
            "created_date": "2020-12-16 14:37:31",
            "priority_id": 1,
            "deadline": '',
            "sort": 0,
            "watch": 1
          },
          {
            "issue_id": 35908,
            "subject": "[功能需求] 任务卡片内可进行列表移动",
            "assignee_id": 11,
            "assignee_name": "文滔",
            "created_date": "2021-04-12 10:06:58",
            "priority_id": 1,
            "deadline": '',
            "sort": 1,
            "watch": 1
          },
          {
            "issue_id": 35287,
            "subject": "白板URL中参数传递方式优化",
            "assignee_id": 189,
            "assignee_name": "包国强",
            "created_date": "2021-03-19 22:11:27",
            "priority_id": 1,
            "deadline": '',
            "sort": 2,
            "watch": 1
          },
          {
            "issue_id": 32946,
            "subject": "[功能需求] 评论删除",
            "assignee_id": 40,
            "assignee_name": "张慧明",
            "created_date": "2020-12-21 15:59:16",
            "priority_id": 1,
            "deadline": '',
            "sort": 3,
            "watch": 1
          },
          {
            "issue_id": 35453,
            "subject": "[BUG] 关闭当前工单后无法打开其他工单",
            "assignee_id": 189,
            "assignee_name": "包国强",
            "created_date": "2021-03-26 19:42:14",
            "priority_id": 1,
            "deadline": '',
            "sort": 4,
            "watch": 1
          },
          {
            "issue_id": 35639,
            "subject": "[功能需求] 链接分享优化 ",
            "assignee_id": 11,
            "assignee_name": "文滔",
            "created_date": "2021-03-30 19:24:14",
            "priority_id": 1,
            "deadline": '',
            "sort": 5,
            "watch": 1
          },
          {
            "issue_id": 34681,
            "subject": "[功能需求] 分享优化(增加含项目标题链接)",
            "assignee_id": 189,
            "assignee_name": "包国强",
            "created_date": "2021-02-26 18:57:06",
            "priority_id": 1,
            "deadline": '',
            "sort": 6,
            "watch": 1
          },
          {
            "issue_id": 34682,
            "subject": "[功能需求] 文件上传及管理模块",
            "assignee_id": 11,
            "assignee_name": "文滔",
            "created_date": "2021-02-26 19:02:51",
            "priority_id": 1,
            "deadline": '',
            "sort": 7,
            "watch": 1
          },
          {
            "issue_id": 32730,
            "subject": "[功能需求] 移动端适配",
            "assignee_id": 189,
            "assignee_name": "包国强",
            "created_date": "2020-12-14 13:21:13",
            "priority_id": 1,
            "deadline": '',
            "sort": 8,
            "watch": 1
          },
          {
            "issue_id": 32418,
            "subject": "[功能需求] 浏览器 Title 与项目名一致",
            "assignee_id": 189,
            "assignee_name": "包国强",
            "created_date": "2020-12-03 17:17:11",
            "priority_id": 1,
            "deadline": '',
            "sort": 9,
            "watch": 1
          },
          {
            "issue_id": 32447,
            "subject": "[UI] 成员按钮右对齐",
            "assignee_id": 189,
            "assignee_name": "包国强",
            "created_date": "2020-12-04 16:37:17",
            "priority_id": 1,
            "deadline": '',
            "sort": 10,
            "watch": 1
          },
          {
            "issue_id": 32352,
            "subject": "[UI] 评论输入框按钮遮挡",
            "assignee_id": 189,
            "assignee_name": "包国强",
            "created_date": "2020-11-30 21:53:39",
            "priority_id": 1,
            "deadline": '',
            "sort": 11,
            "watch": 1
          },
          {
            "issue_id": 31769,
            "subject": "[BUG] 移动列表未保存状态",
            "assignee_id": 189,
            "assignee_name": "包国强",
            "created_date": "2020-11-17 14:05:35",
            "priority_id": 1,
            "deadline": '',
            "sort": 12,
            "watch": 1
          },
          {
            "issue_id": 32350,
            "subject": "[功能需求] 输入内容缓存",
            "assignee_id": 189,
            "assignee_name": "包国强",
            "created_date": "2020-11-30 21:52:23",
            "priority_id": 1,
            "deadline": '',
            "sort": 13,
            "watch": 1
          },
          {
            "issue_id": 22099,
            "subject": "任务列表交互",
            "assignee_id": 40,
            "assignee_name": "张慧明",
            "created_date": "2020-04-08 16:25:58",
            "priority_id": 1,
            "deadline": "2020-04-17",
            "sort": 14,
            "watch": 0
          },
          {
            "issue_id": 23882,
            "subject": "截止日期选定后是否可以移除",
            "assignee_id": 189,
            "assignee_name": "包国强",
            "created_date": "2020-05-09 14:48:46",
            "priority_id": 1,
            "deadline": '',
            "sort": 15,
            "watch": 0
          },
          {
            "issue_id": 23881,
            "subject": "列表重命名确定后输入框不会消失",
            "assignee_id": 189,
            "assignee_name": "包国强",
            "created_date": "2020-05-09 14:47:54",
            "priority_id": 1,
            "deadline": '',
            "sort": 16,
            "watch": 1
          },
          {
            "issue_id": 29594,
            "subject": "处理白板任务创建异常",
            "assignee_id": 189,
            "assignee_name": "包国强",
            "created_date": "2020-09-16 11:45:44",
            "priority_id": 1,
            "deadline": '',
            "sort": 17,
            "watch": 1
          },
          {
            "issue_id": 22097,
            "subject": "任务指派人交互",
            "assignee_id": 40,
            "assignee_name": "张慧明",
            "created_date": "2020-04-08 16:20:59",
            "priority_id": 1,
            "deadline": "2020-04-17",
            "sort": 18,
            "watch": 0
          },
          {
            "issue_id": 22094,
            "subject": "负责人和指派人默认应关注",
            "assignee_id": 189,
            "assignee_name": "包国强",
            "created_date": "2020-04-08 15:52:17",
            "priority_id": 1,
            "deadline": "2020-04-17",
            "sort": 19,
            "watch": 1
          },
          {
            "issue_id": 22463,
            "subject": "任务编辑状态遗留的异常",
            "assignee_id": 189,
            "assignee_name": "包国强",
            "created_date": "2020-04-14 17:50:44",
            "priority_id": 1,
            "deadline": "2020-04-17",
            "sort": 20,
            "watch": 0
          },
          {
            "issue_id": 22134,
            "subject": "页面有列表过多或者任务过多出现滚动条时右击自助菜单位置偏移问题",
            "assignee_id": 189,
            "assignee_name": "包国强",
            "created_date": "2020-04-09 10:04:08",
            "priority_id": 1,
            "deadline": "2020-04-13",
            "sort": 21,
            "watch": 1
          },
          {
            "issue_id": 22096,
            "subject": "删除任务异常",
            "assignee_id": 40,
            "assignee_name": "张慧明",
            "created_date": "2020-04-08 16:18:57",
            "priority_id": 1,
            "deadline": "2020-04-08",
            "sort": 22,
            "watch": 0
          },
          {
            "issue_id": 22093,
            "subject": "富文本编辑器显示异常",
            "assignee_id": 189,
            "assignee_name": "包国强",
            "created_date": "2020-04-08 15:50:43",
            "priority_id": 1,
            "deadline": "2020-04-17",
            "sort": 23,
            "watch": 0
          },
          {
            "issue_id": 23335,
            "subject": "点击发送评论多次，评论会出现多条相同的评论",
            "assignee_id": 189,
            "assignee_name": "包国强",
            "created_date": "2020-04-29 12:01:15",
            "priority_id": 1,
            "deadline": "2020-04-29",
            "sort": 24,
            "watch": 1
          },
          {
            "issue_id": 22100,
            "subject": "白板左上角 Titile 应为项目名称 ",
            "assignee_id": 189,
            "assignee_name": "包国强",
            "created_date": "2020-04-08 16:26:58",
            "priority_id": 1,
            "deadline": "2020-04-17",
            "sort": 25,
            "watch": 0
          },
          {
            "issue_id": 23759,
            "subject": "【细节优化】任务拖拽时鼠标滚轮控制浏览器左右滑动",
            "assignee_id": 189,
            "assignee_name": "包国强",
            "created_date": "2020-05-07 16:13:03",
            "priority_id": 1,
            "deadline": '',
            "sort": 26,
            "watch": 1
          },
          {
            "issue_id": 23342,
            "subject": "截止日期建议默认可置空 ，尤其是对于包体追踪任务 ， 这个截止日期并无实际作用 。",
            "assignee_id": 189,
            "assignee_name": "包国强",
            "created_date": "2020-04-29 12:17:49",
            "priority_id": 1,
            "deadline": '',
            "sort": 27,
            "watch": 0
          },
          {
            "issue_id": 23880,
            "subject": "添加关注者后消失",
            "assignee_id": 40,
            "assignee_name": "张慧明",
            "created_date": "2020-05-09 14:47:17",
            "priority_id": 1,
            "deadline": '',
            "sort": 28,
            "watch": 0
          },
          {
            "issue_id": 31573,
            "subject": "[功能需求] 子任务能否进行排序调整",
            "assignee_id": 189,
            "assignee_name": "包国强",
            "created_date": "2020-11-11 17:56:34",
            "priority_id": 1,
            "deadline": '',
            "sort": 29,
            "watch": 1
          },
          {
            "issue_id": 23884,
            "subject": "创建任务时的截止日期非必选项，但是更新任务时截止日期是必选项",
            "assignee_id": 40,
            "assignee_name": "张慧明",
            "created_date": "2020-05-09 14:49:54",
            "priority_id": 1,
            "deadline": '',
            "sort": 30,
            "watch": 0
          },
          {
            "issue_id": 23899,
            "subject": "右键删除非自己负责的任务时，提示 参数错误",
            "assignee_id": 1,
            "assignee_name": "测试账号",
            "created_date": "2020-05-09 17:56:29",
            "priority_id": 1,
            "deadline": '',
            "sort": 31,
            "watch": 0
          },
          {
            "issue_id": 24909,
            "subject": "添加关注者后，是否可以自动钉钉同步消息",
            "assignee_id": 40,
            "assignee_name": "张慧明",
            "created_date": "2020-05-29 15:01:01",
            "priority_id": 1,
            "deadline": '',
            "sort": 32,
            "watch": 1
          },
          {
            "issue_id": 26353,
            "subject": "直链功能",
            "assignee_id": 40,
            "assignee_name": "张慧明",
            "created_date": "2020-06-28 17:41:36",
            "priority_id": 1,
            "deadline": '',
            "sort": 33,
            "watch": 0
          },
          {
            "issue_id": 23885,
            "subject": "偶现添加任务后提示“添加成功”，但是 UI 未发生变化",
            "assignee_id": 189,
            "assignee_name": "包国强",
            "created_date": "2020-05-09 14:50:53",
            "priority_id": 1,
            "deadline": '',
            "sort": 34,
            "watch": 1
          },
          {
            "issue_id": 26354,
            "subject": "前端存在细节问题整理",
            "assignee_id": 189,
            "assignee_name": "包国强",
            "created_date": "2020-06-28 18:00:04",
            "priority_id": 1,
            "deadline": '',
            "sort": 35,
            "watch": 1
          },
          {
            "issue_id": 27468,
            "subject": "评论内嵌图片的优化需求",
            "assignee_id": 189,
            "assignee_name": "包国强",
            "created_date": "2020-07-29 16:01:13",
            "priority_id": 1,
            "deadline": '',
            "sort": 36,
            "watch": 1
          },
          {
            "issue_id": 26331,
            "subject": "[功能需求] 子任务功能",
            "assignee_id": 40,
            "assignee_name": "张慧明",
            "created_date": "2020-06-28 10:39:29",
            "priority_id": 1,
            "deadline": '',
            "sort": 37,
            "watch": 1
          },
          {
            "issue_id": 32756,
            "subject": "[BUG][安全隐患] 白板主页跳转时显示携带 Token ， 若直接分享，极易造成账号风险 ",
            "assignee_id": 40,
            "assignee_name": "张慧明",
            "created_date": "2020-12-15 15:53:50",
            "priority_id": 1,
            "deadline": '',
            "sort": 38,
            "watch": 0
          },
          {
            "issue_id": 31770,
            "subject": "[功能需求] 个人评论编辑功能",
            "assignee_id": 40,
            "assignee_name": "张慧明",
            "created_date": "2020-11-17 14:06:04",
            "priority_id": 1,
            "deadline": '',
            "sort": 39,
            "watch": 1
          },
          {
            "issue_id": 26351,
            "subject": "[功能需求] 任务检索功能",
            "assignee_id": 40,
            "assignee_name": "张慧明",
            "created_date": "2020-06-28 17:38:23",
            "priority_id": 1,
            "deadline": '',
            "sort": 40,
            "watch": 0
          },
          {
            "issue_id": 31572,
            "subject": "[功能需求] 项目成员管理功能",
            "assignee_id": 189,
            "assignee_name": "包国强",
            "created_date": "2020-11-11 17:02:51",
            "priority_id": 1,
            "deadline": '',
            "sort": 41,
            "watch": 1
          },
          {
            "issue_id": 28316,
            "subject": "[功能需求] 任务卡片复制功能",
            "assignee_id": 189,
            "assignee_name": "包国强",
            "created_date": "2020-08-18 10:04:20",
            "priority_id": 1,
            "deadline": '',
            "sort": 42,
            "watch": 1
          },
          {
            "issue_id": 32353,
            "subject": "[UI] 关注者选择确认按钮位置调整",
            "assignee_id": 189,
            "assignee_name": "包国强",
            "created_date": "2020-11-30 21:57:50",
            "priority_id": 1,
            "deadline": '',
            "sort": 43,
            "watch": 1
          }
        ]
      },
      {
        "stages_id": 24,
        "stages_name": "废弃",
        "sort": 99,
        "issues": [
          {
            "issue_id": 23907,
            "subject": "修改非自己负责的任务，如标题、描述等后，活动内是否可以有记录显示",
            "assignee_id": 40,
            "assignee_name": "张慧明",
            "created_date": "2020-05-09 18:15:08",
            "priority_id": 1,
            "deadline": '',
            "sort": 0,
            "watch": 0
          },
          {
            "issue_id": 32446,
            "subject": "[UI] 成员图标统一风格",
            "assignee_id": 189,
            "assignee_name": "包国强",
            "created_date": "2020-12-04 16:32:52",
            "priority_id": 1,
            "deadline": '',
            "sort": 1,
            "watch": 1
          },
          {
            "issue_id": 32351,
            "subject": "[功能需求] 富文本编辑器功能扩展",
            "assignee_id": 189,
            "assignee_name": "包国强",
            "created_date": "2020-11-30 21:53:00",
            "priority_id": 1,
            "deadline": '',
            "sort": 2,
            "watch": 1
          },
          {
            "issue_id": 32731,
            "subject": "[功能需求] DingTalk 通知优化",
            "assignee_id": 40,
            "assignee_name": "张慧明",
            "created_date": "2020-12-14 13:31:45",
            "priority_id": 1,
            "deadline": '',
            "sort": 3,
            "watch": 1
          },
          {
            "issue_id": 32732,
            "subject": "[功能需求] Dingtalk 链接分享优化",
            "assignee_id": 40,
            "assignee_name": "张慧明",
            "created_date": "2020-12-14 13:39:12",
            "priority_id": 1,
            "deadline": '',
            "sort": 4,
            "watch": 1
          },
          {
            "issue_id": 32783,
            "subject": "[BUG] 项目成员列表及待添加列表出现重复",
            "assignee_id": 189,
            "assignee_name": "包国强",
            "created_date": "2020-12-16 11:38:06",
            "priority_id": 1,
            "deadline": '',
            "sort": 5,
            "watch": 1
          },
          {
            "issue_id": 32751,
            "subject": "[运维] 正式域名申请及配置",
            "assignee_id": 182,
            "assignee_name": "宋大伟",
            "created_date": "2020-12-15 13:47:17",
            "priority_id": 1,
            "deadline": '',
            "sort": 6,
            "watch": 1
          },
          {
            "issue_id": 31571,
            "subject": "[功能需求] 任务卡片复制功能",
            "assignee_id": 40,
            "assignee_name": "张慧明",
            "created_date": "2020-11-11 17:00:40",
            "priority_id": 1,
            "deadline": '',
            "sort": 7,
            "watch": 0
          },
          {
            "issue_id": 23890,
            "subject": "白板-天赐平台 内删除任务，工单内的还在",
            "assignee_id": 40,
            "assignee_name": "张慧明",
            "created_date": "2020-05-09 16:00:52",
            "priority_id": 1,
            "deadline": '',
            "sort": 8,
            "watch": 0
          },
          {
            "issue_id": 23895,
            "subject": "任务负责人是否可以支持删除关注者",
            "assignee_id": 40,
            "assignee_name": "张慧明",
            "created_date": "2020-05-09 16:31:26",
            "priority_id": 1,
            "deadline": '',
            "sort": 9,
            "watch": 0
          },
          {
            "issue_id": 23891,
            "subject": "任务评论内的链接是否可以支持点击打开",
            "assignee_id": 40,
            "assignee_name": "张慧明",
            "created_date": "2020-05-09 16:06:51",
            "priority_id": 1,
            "deadline": '',
            "sort": 10,
            "watch": 0
          },
          {
            "issue_id": 23721,
            "subject": "截止时间移除。",
            "assignee_id": 40,
            "assignee_name": "张慧明",
            "created_date": "2020-05-06 18:52:33",
            "priority_id": 1,
            "deadline": '',
            "sort": 11,
            "watch": 0
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
