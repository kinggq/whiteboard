<template>
    <n-form  size="large" :show-label="false">
        <n-form-item>
            <n-input placeholder="请输入用户名" />
        </n-form-item>
        <n-form-item>
            <n-input type="password" show-password-on="click" placeholder="请输入密码" />
        </n-form-item>
        <n-space :vertical="true" :size="24">
            <n-space justify="space-between">
                <n-checkbox>记住我</n-checkbox>
                <n-button :text="true">忘记密码？</n-button>
            </n-space>
            <n-button :block="true" type="primary" size="large">确定</n-button>
        </n-space>
    </n-form>
</template>
