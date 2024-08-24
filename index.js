const express = require('express')
const bodyParser = require('body-parser')
const {user_db} = require('./utils/database')
const router = require('./routes/userRoutes')
const graphqlSchema=require('./graphQl/schema')
const graphqlResolver=require('./graphQl/resolver')
var { createHandler } = require("graphql-http/lib/use/express")
var { buildSchema } = require("graphql")
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.all(
  "/graphql",
  createHandler({
   schema: graphqlSchema,
    rootValue: graphqlResolver,
  })
)


app.use('/user', router);
user_db((client) => {
    // console.log(client);
    app.listen(3000, () => {
        console.log('server is listening to ' + 3000);
    
    })
})