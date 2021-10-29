// 导入axios的请求实例
import axios from "./index";

export function fetchCar(){
    return axios.get("/car")
}