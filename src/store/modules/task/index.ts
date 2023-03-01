import { defineStore } from 'pinia'

interface State {
    tasks: ApiTask.Stage[],
    detail: ApiTask.IssueDetail
    annexFile: ApiTask.IssueAnnexFile[],
    comments: ApiTask.IssueComment[]
}

export const useTaskStore = defineStore('task-store', {
    state: (): State => ({
        tasks: [
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
        ],
        detail: {
            "id": 38828,
            "tracker_id": 1,
            "subject": "测试任务索引是否存在",
            "description": "暂无描述",
            "status_id": 1,
            "priority_id": 1,
            "assignee_id": 1,
            "deadline": '',
            "readiness_id": 0,
            "project_id": 60,
            "creator_id": 11,
            "created_date": "2021-09-03 10:36:36",
            "updated_date": "2021-12-13 23:13:38",
            "source": 1,
            "submitter": 1,
            "stages_id": 4,
            "sort": 35858,
            "enable": 1,
            "parent_id": 0,
            "assignee_name": "King",
            "creator_name": "King",
            "issue_id": 38828,
            "watch_list": [
              {
                "user_id": 11,
                "user_name": "King"
              }
            ],
        },
        annexFile: [
            {
                "id": 1,
                "name": "test.png",
                "type": "image/png",
                "size": 2000,
                "url": "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
                "download_url": "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
            }
        ],
        comments: [
            {
                "comment_id": 1,
                "user_id": 1,
                "text": "<p>测试任务评论索引是否存在</p>",
                "user_name": "King",
                "created_date": "2021-09-03 10:39:35"
            },
            {
                "comment_id": 2,
                "user_id": 1,
                "text": "<p>测试任务评论索引是否存在</p>",
                "user_name": "King",
                "created_date": "2021-09-03 10:39:52"
            },
            {
                "comment_id": 3,
                "user_id": 1,
                "text": "<p>测试任务评论索引是否存在</p>",
                "user_name": "King",
                "created_date": "2021-09-03 10:44:37"
            }
        ]
    }),
    actions: {
        setAssignee(assignee_name: string, assignee_id: number) {
            this.detail.assignee_name = assignee_name
            this.detail.assignee_id = assignee_id
        }
    }
})
