// 导入axios的请求实例
import axios from "./index";

export function fetchLogin(data){
    return axios.post('/user',data)
}