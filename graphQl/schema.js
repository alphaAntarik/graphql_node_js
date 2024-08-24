const { buildSchema } = require('graphql');

module.exports = buildSchema(
    
    `
    type CustDataType{
    text:String
    num:Int}


    type RootQuery{
    hello: String
    hii: CustDataType
    }

    type UserDetails{
    _id:ID
        title:String!
    joke_content:String!
  
   


    }

    input User{
    title:String!
    joke_content:String!
   
    }

    type RootMutation{
    createUser(userDetails:User):UserDetails
    }

    schema{
    query: RootQuery
    mutation: RootMutation

    }
    `
)

//  query helps to get data
// mutation helps to save data
// difference between String and String! is the second one is required but 1st one isn't