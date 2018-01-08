import axios from 'axios'
// import { changeLoading } from '../redux/actions'

const Axios = axios.create({
  // baseURL: 'https://www.vue-js.com/api/v1/,
  timeout: 10000,
  responseType: 'json'
})

let getHttpOptions = ((options) => {
  let temp = ''
  for (let i in options) {
    temp += `&${i}=${options[i]}`
  }
  return temp
})

// let postHttpOptions = ((options) => {
//   let temp = ''
// })



const fetch = (type='get', url, options) => {
  return new Promise((resolve, reject) => {
    const config = {
      method: type,
      url: type === 'get' ? url + getHttpOptions(options) : url,
      ...options
    }
    Axios(config)
      .then(response => {
      // changeLoading(false)
      const res = response.data
      if(response.status !== 200) {
        reject(res)
      }else {
        resolve(res)
      }
    })
    .catch((error) => {
      reject(error)
    })
 })
}

export default fetch