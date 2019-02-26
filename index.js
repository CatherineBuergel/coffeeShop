let express = require('express')
let bp = require('body-parser')
let server = express()
let port = 3000

//initialize connection to databse
require('./server-assets/db/gearhost-config')


//middlewear
server.use(bp.json())
//allows forms to be used:
server.use(bp.urlencoded({ extended: true }))

//routes
let drinkRoutes = require('./server-assets/routes/drink-routes')
//use plural of your model
server.use('/api/drinks', drinkRoutes)



//catchall
server.use('*', (request, response, next) => {
  response.status(404).send('No matching routes')
})

//start server
server.listen(port, () => {
  console.log('server is running on port:' + port)
})