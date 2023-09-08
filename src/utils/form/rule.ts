function createRequireFormRule(message = '不能为空') {
  return { required: true, message }
}

export const formRule = {
  username: [
    createRequireFormRule('请输入用户名'),
    { /* pattern: REGEXP_USER_NAME, */ message: '用户名格式错误', trigger: 'input' },
  ],
  password: [
    createRequireFormRule('请输入密码'),
    { /* pattern: PEGEXP_USER_NAME, */ message: '密码为6-18位数字/字符/符号的组合', trigger: 'input' },
  ],
}
