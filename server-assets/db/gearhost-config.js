//this file is pretty much always the same
let mongoose = require('mongoose')

//changes from project to project
//connection string will always be: mongodb://<Username>:<pasword>@<database server>/<server name>

const connectionString = 'mongodb://catherinecoffee:Database06!@den1.mongo1.gear.host:27001/catherinecoffee'

let connection = mongoose.connection;

//establishes connection to databse

mongoose.connect(connectionString, {
  useNewUrlParser: true
})

//console log errors

connection.on('error', err => {
  console.log('DATABSE ERROR: ', err)
})

//confirm connection
connection.once('open', () => {
  console.log('succesfully connected to databse')
})