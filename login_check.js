function loginCheck(account, users) {

  let result = {
    loginSuccess: false,
    name: ''
  }

  // iterate users and check each user data
  users.forEach(user => {

    if (user.email === account.email && user.password === account.password) {
      result.loginSuccess = true
      result.name = user.firstName
    }

  })

  console.log(result)

  return result
}

module.exports = loginCheck