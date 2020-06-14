import Axios, { AxiosInstance, Method, AxiosResponse } from 'axios'
import qs from 'qs'
import { injectable } from 'tsyringe'
import { Endpoints } from '../misc/Endpoints'
import { getToken } from '@/utils/cookies'

@injectable()
export default class ApiService {
  public client: AxiosInstance

  constructor() {
    this.client = Axios.create({
      baseURL: Endpoints.baseUrl,
      timeout: 50000,
    })

    if (process.env.NODE_ENV !== 'production') {
      this.client.interceptors.request.use((request) => {
        console.log('===========================================')
        console.log('===NODE_ENV', process.env.NODE_ENV)
        console.log(
          '===REQUEST URL',
          (request.baseURL || 'undefined') + (request.url || 'undefined')
        )
        console.log('===REQUEST METHOD', request.method)
        console.log('===REQUEST HEADER', request.headers)
        console.log('===REQUEST DATA', request.data)
        console.log('===NODE_ENV', process.env.NODE_ENV)
        console.log('===========================================')
        return request
      })

      this.client.interceptors.response.use((response) => {
        console.log('===========================================')
        console.log('===NODE_ENV', process.env.NODE_ENV)
        console.log('===RESPONSE STATUS', response.status)
        console.log('===RESPONSE HEADER', response.headers)
        console.log('===RAW RESPONSE DATA', response.request._response)
        console.log('===RESPONSE DATA', response.data)
        console.log('===NODE_ENV', process.env.NODE_ENV)
        console.log('===========================================')
        return response
      })
    }
  }

  public async invoke(
    method: Method = 'get',
    url: string = '',
    params: Object = {},
    payload: any = null,
    headers: Map<string, string> = new Map()
  ): Promise<AxiosResponse<any>> {
    // content-type application/json
    this.client.defaults.headers['Content-Type'] = 'application/json'
    // set custom header if any
    headers.forEach((value: string, key: string) => {
      this.client.defaults.headers.common[key] = value
    })

    // set auth bearer
    this.client.defaults.headers.Authorization = 'Bearer ' + getToken()
    return await this.client.request({
      url,
      params,
      paramsSerializer: (par) => qs.stringify(par, { encode: false }),
      data: payload ? payload.toJSON() : null,
      method,
    })
  }
}
