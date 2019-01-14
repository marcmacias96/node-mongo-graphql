import express from 'express'
import mongoose from 'mongoose'
import {ApolloServer} from 'apollo-server-express'
import typeDefs from './schema'
import resolvers from './resolvers'

const app = express()

mongoose.connect('mongodb+srv://macias96:Guitarra2896@@nodejs-mongodb-ezqoh.azure.mongodb.net/test?retryWrites=true',{
    useNewUrlParser: true
})
.then(() => console.log('mongodb Conectado'))

// mongodb models
import Car from './models/Car'
    


//settings 

app.set('port',process.env.PORT ||  3000);

const SERVER = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
        Car
    },
    introspection: true,
    playground: true,
    playground: {
        endpoint: `http://192.168.0.44:3000/graphql`,
        settings: {
            'editor.theme': 'dark'
        }
    }
})
//routes 
SERVER.applyMiddleware({
    app
})


app.listen(app.get('port'),() => {
    console.log(`server on port ${app.get('port')}`);
    
})