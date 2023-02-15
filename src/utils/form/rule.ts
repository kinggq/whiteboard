import { REGEXP_USER_NAME } from '@/config'

function createRequireFormRule(message = '不能为空') {
    return { required: true, message }
}

export const formRule = {
    username: [
        createRequireFormRule('请输入用户名'),
        { pattern: REGEXP_USER_NAME, message: '用户名格式错误', trigger: 'input' }
    ]
}
