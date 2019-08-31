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

  // if server didn't find any matching data from users.json, will return null
  return userName
}

module.exports = loginCheck