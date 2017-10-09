export default class ApiUsers {
  static getList(action) {
    const timeout = 1000
    return new Promise(resolve => {
      setTimeout(() => {
        let users = []
        for (let i = 1; i <= 45; i++) {
          users.push({
            id: i,
            username: 'John' + i,
            job: 'Employee' + i
          })
        }
        resolve(users)
      }, timeout)
    })
  }
  static add(action) {

  }
  static edit(action) {

  }
  static delete(action) {

  }
}