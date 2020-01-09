/*
* 用户请求相关模块
*/
import request from '@/utils/request'
export const login = data => {
// 具体的请求代码
  return request({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data
  })
}
