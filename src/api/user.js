import axios from '@/utils/request'
import store from '@/store';

// 用户签到
// const userSign = () => { 
//   const header = {
//     Authorization: 'Bearer ' + store.state.token,
//     'Content-Type': 'application/json'
//   }
//   return axios.get('/user/fav', {
//     headers: header
//   })
// }
const userSign = () => axios.get('/user/fav')

const updateUserInfo = (data) => axios.post('/user/update', data)

export { 
  userSign,
  updateUserInfo
}