import axios from '@/utils/request'
import qs from "qs";

///qs 可以避免params这种写法
const getList = (options) => {
    return axios.get('/public/list?' + qs.stringify(options))
//   return axios.get('/public/list', {
//     params: {
//       catalog: options.catalog,
//       type: options.type,
//     }
//   })
}

const getTips = () => {
    return axios.get('/public/tips')
}

const getLinks = () => {
    return axios.get('/public/links')
}
const getTop = () => {
    return axios.get('/public/topWeek')
}
export {
    getList,getTips,getLinks,getTop
}