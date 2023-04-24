const fs = require('fs')
const path = require('path')

function Login (userData, res) {
  let obj  = {
    status: 400,
    message: 'User not found'
  }
  if (fs.existsSync(path.dirname(__dirname) + '/files/Users.json')) {
    const data = fs.readFileSync(path.dirname(__dirname) + '/files/Users.json', 'utf-8')
    if (data === '' ) {
      return obj
    } else {
      const index = JSON.parse(users)?.findIndex(data => (data.sEmail === JSON.parse(userData).sEmail) && data.sPassword === JSON.parse(userData).sPassword)
      if (index >= 0) {
        res.statusCode = 200
        obj = {
          status: 200,
          message: 'Logged in successfully'
        }
      } else {
        res.statusCode = 400
      }
      res.end(JSON.stringify(obj))
      return data
    }
  } else {
    return obj
  }
}

module.exports = Login