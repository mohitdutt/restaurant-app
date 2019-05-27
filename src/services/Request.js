import Api from '@/services/Api'

export default {
  postData (page, data) {
    debugger
    return Api().post(page, data)
  },
  getData (page) {
    return Api().get(page)
  }
}
