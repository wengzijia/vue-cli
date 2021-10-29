// 导入axios的请求实例
import axios from "./index";

export function fetchYule(){
    return axios.get("/pastime")
}