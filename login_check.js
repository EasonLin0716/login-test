function loginCheck(account, users) {

  let userName = null

  // iterate users and check each user data
  users.forEach(user => {

    if (user.email === account.email) {
      if (user.password === account.password) {
        userName = user.firstName
      }
    }

  })

  return userName
}

module.exports = loginCheck