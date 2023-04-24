const fs = require('fs')
const path = require('path')

function Registration (data, res) {
  let usersData = []
  if (fs.existsSync(path.dirname(__dirname) + '/files/Users.json')) {
    let arr = fs.readFileSync(path.dirname(__dirname) + '/files/Users.json', 'utf-8')
    if (arr === '') {
      usersData.push(data)
    } else {
      usersData = [...JSON.parse(arr)]
      usersData.push(data)
    }
    fs.writeFileSync(path.dirname(__dirname) + '/files/Users.json', JSON.stringify(usersData))
  } else {
    const usersData = []
    usersData.push(data)
    fs.writeFileSync(path.dirname(__dirname) + '/files/Users.json', JSON.stringify(usersData))
  }
  const obj = {
    status: 200,
    message: "You've registered successfully"
  }
  res.Statuscode = 200
  res.end(JSON.stringify(obj))
  return(JSON.stringify(obj))
}

module.exports = Registration