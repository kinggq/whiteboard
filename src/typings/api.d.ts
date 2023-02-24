declare namespace ApiTask {
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
    }

    interface Stage {
        stages_name: string
        stages_id: number
        sort: number
        issues: Issue[]
    }
}
