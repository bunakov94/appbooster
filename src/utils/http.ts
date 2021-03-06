import axios, { AxiosRequestConfig } from 'axios'

export const rootBackendUrl = 'http://data.fixer.io/api/latest?access_key=cbf4df0de515db5e32100223cb3b4556&format=1'

const axiosInstance = axios.create({
  baseURL: rootBackendUrl,
  withCredentials: false,
})

class Http {
  public static get<T>(url: string, params?: Record<string, string>): Promise<ResponseDto<T>> {
    return axiosInstance.get(url, {
      params,
    })
  }

  public static post<T>(url: string, body?: never, config?: AxiosRequestConfig): Promise<ResponseDto<T>> {
    return axiosInstance.post(url, body, config)
  }

  public static put<T>(url: string, body?: never): Promise<ResponseDto<T>> {
    return axiosInstance.put(url, body)
  }

  public static patch<T>(url: string, body?: never): Promise<ResponseDto<T>> {
    return axiosInstance.patch(url, body)
  }

  public static delete<T>(url: string): Promise<ResponseDto<T>> {
    return axiosInstance.delete(url)
  }
}

export interface ResponseDto<T> {
  data: T
  status: number
  statusText: string
}

export default Http
