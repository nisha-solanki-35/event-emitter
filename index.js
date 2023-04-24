const http = require('http');
const Login = require('./Modules/Login');
const Registration = require('./Modules/Registration');
const Users = require('./Modules/Users');
const EventEmitter = require('events').EventEmitter;
const em = new EventEmitter();

const server = http.createServer((req, res) => {
  let body = ''
  const request = req.url
  req.on('data', async chunk => {
    body = await body + chunk.toString();
  }).on('end', () => {
    switch (request) {
      case '/register/v1':
        em.emit('Register', Registration(JSON.parse(body), res))
        break
      case '/login/v1':
        em.emit('Login', Login(body, res));
        break
      case '/users/v1':
        em.emit('Users', Users(res))
      default:
        break
    }
  })
})

em.on('Register', data => console.log('Completed register processing ' + data))
em.on('Login', data => console.log('Completed login processing ' + data))
em.on('Users', data => console.log('Completed users processing ' + data))

server.listen(8080, () => console.log('Port listening on 8080'))