import { gql } from "@apollo/client";

const RegisterFormGql = gql`
  mutation CreateUser($user: CreateUserInput!) {
    createUser(user: $user) {
      _id
      firebaseId
      phone
      name
      username
      oneLiner
      bio
      email
    }
  }

  query SearchUser($phone: String!) {
    userSearch(phone: $phone) {
      _id
    }
  }
`;

export default RegisterFormGql;
