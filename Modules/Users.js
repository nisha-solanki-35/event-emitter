const fs = require('fs')
const path = require('path')

function Users (res) {
  let obj  = {
    status: 400,
    message: 'Users not found'
  }
  if (fs.existsSync(path.dirname(__dirname) + '/files/Users.json')) {
    const data = fs.readFileSync(path.dirname(__dirname) + '/files/Users.json', 'utf-8')
    if (data === '' ) {
      return obj
    } else {
      obj = {
        status: 200,
        data: JSON.parse(data)
      }
      res.end(JSON.stringify(obj))
      return data
    }
  } else {
    return obj
  }
}

module.exports = Users