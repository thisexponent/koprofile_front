import gql from "graphql-tag";

const USER = gql(`
  query{
        user{
            name,
            id,
            name,
            email,
            birth,
            address,
            phone,
            password,
            gender,
            photo,
        }
  }
`)

export default USER