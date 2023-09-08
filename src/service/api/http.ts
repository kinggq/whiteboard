import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'

class HttpClient {
  private instance = axios.create({
    baseURL: import.meta.env.VITE_BASIC_API, // 你的 API 基础 URL
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  constructor() {
    this._initializeResponseInterceptor()
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError,
    )
  }

  private _handleResponse = ({ data }: AxiosResponse) => data

  private _handleError = (error: any) => Promise.reject(error)

  public get<T = any>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return this.instance.get(url, config)
  }

  public post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return this.instance.post(url, data, config)
  }
}

export const httpClient = new HttpClient()
