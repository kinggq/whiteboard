declare namespace EnumType {
    type LoginModuleKey = keyof typeof import('@/enum').EnumLoginModule

    /** 布局模式 */
    type LayoutComponentName = keyof typeof import('@/enum').EnumLayoutComponentName
}

declare namespace App {
    type GlobalMenuOption = import('naive-ui').MentionOption & {
        key: string
        label: string
        routeName: string
        routePath: string
        children?: GlobalMenuOption[]
    }
}

/** 请求的相关类型 */
declare namespace Service {
    /**
     * 请求的错误类型：
     * - axios: axios错误：网络错误, 请求超时, 默认的兜底错误
     * - http: 请求成功，响应的http状态码非200的错误
     * - backend: 请求成功，响应的http状态码为200，由后端定义的业务错误
     */
    type RequestErrorType = 'axios' | 'http' | 'backend';

    /** 请求错误 */
    interface RequestError {
        /** 请求服务的错误类型 */
        type: RequestErrorType;
        /** 错误码 */
        code: string;
        /** 错误信息 */
        msg: string;
    }

    /** 后端接口返回的数据结构配置 */
    interface BackendResultConfig {
        /** 表示后端请求状态码的属性字段 */
        codeKey: string;
        /** 表示后端请求数据的属性字段 */
        dataKey: string;
        /** 表示后端消息的属性字段 */
        msgKey: string;
        /** 后端业务上定义的成功请求的状态 */
        successCode: number | string;
    }

    /** 自定义的请求成功结果 */
    interface SuccessResult<T = any> {
        /** 请求错误 */
        error: null;
        /** 请求数据 */
        data: T;
    }

    /** 自定义的请求失败结果 */
    interface FailedResult {
        /** 请求错误 */
        error: RequestError;
        /** 请求数据 */
        data: null;
    }

    /** 自定义的请求结果 */
    type RequestResult<T = any> = SuccessResult<T> | FailedResult;

    /** 多个请求数据结果 */
    type MultiRequestResult<T extends any[]> = T extends [infer First, ...infer Rest]
        ? [First] extends [any]
        ? Rest extends any[]
        ? [Service.RequestResult<First>, ...MultiRequestResult<Rest>]
        : [Service.RequestResult<First>]
        : Rest extends any[]
        ? MultiRequestResult<Rest>
        : []
        : [];

    /** 请求结果的适配器函数 */
    type ServiceAdapter<T = any, A extends any[] = any> = (...args: A) => T
}
