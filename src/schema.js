import { gql } from 'apollo-server-express';
// GraphQL: TypeDefs
const TYPEDEFS = gql
`
    type Car {
        name : String 
    }

    type Query {
        allCars: [Car!]!
    }

    type Mutation {
        createCar(name: String!): Car!
    }
`
export default TYPEDEFS;