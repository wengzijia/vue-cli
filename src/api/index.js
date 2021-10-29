import axios from 'axios'


const instance = axios.create();

// 设置请求基准路径
instance.defaults.baseURL = 'http://127.0.0.1:8888';
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';



export default instance;