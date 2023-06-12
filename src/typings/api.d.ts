declare namespace ApiAuth {
    type UserInfo = {
        user: Auth.UserInfo;
        token: string;
    }
}

declare namespace ApiTask {
    type IssueTagType = 'info' | 'success' | 'warning'

    type IssueStatusType = keyof typeof import('@/enum').EnumTaskStatus

    interface IssueTag {
        tag_name: string
        tag_type: IssueTagType
    }

    interface Issue {
        subject: string
        issue_id: number
        sort: number
        priority_id: number
        assignee_name?: string
        assignee_id?: number
        created_date?: string
        deadline?: string
        watch?: number
        tags?: IssueTag[]
        status?: IssueStatusType
    }

    interface Stage {
        stages_name: string
        stages_id: number
        sort: number
        issues: Issue[]
    }

    interface IssueDetail {
        id: number
        tracker_id: number
        subject: string
        description?: string
        status_id?: number
        priority_id?: number
        assignee_id?: number
        deadline?: string
        readiness_id: number
        project_id: number
        creator_id: number
        milestone_id?: number
        created_date: string
        updated_date?: string
        source: number
        submitter: number
        stages_id: number
        sort: number
        enable: number
        parent_id: number
        assignee_name?: string
        creator_name?: string
        issue_id: number
        watch_list?: IssueWatch[]
    }

    interface IssueWatch {
        user_id: number
        user_name: string
    }

    interface IssueAnnexFile {
        id: number
        name: string
        type: string
        size: number
        url: string
        download_url: string
    }

    interface IssueComment {
        comment_id: number
        user_id: number
        text: string
        user_name: string
        created_date: string
    }
}

declare namespace ApiMember {
    interface Member {
        key: number
        value: string
    }
}
