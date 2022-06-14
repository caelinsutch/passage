import { gql } from "apollo-server-micro";

const userGraphql = gql`
  type User @entity {
    _id: ID! @id
    firebaseId: String! @column
    name: String @column
    username: String @column
    oneLiner: String @column
    bio: String @column
    email: String @column
    candidateData: UserCandidateData @embedded
    education: [UserEducation!]! @embedded
    experience: [UserExperience!]! @embedded
    linkedin: String @column
    twitter: String @column
    website: String @column
    github: String @column
    referredFrom: ReferralMethod @column
  }

  type UserCandidateData @entity(embedded: true) {
    collegeGraduationYear: Int! @column
    careerExperience: CareerExperience! @column
    rolesInterestedIn: [Roles!]! @column
    sectorsInterestedIn: [Sector!]! @column
    gender: Gender! @column
    ethnicity: Ethnicity! @column
    country: Country! @column
  }

  type UserEducation @entity(embedded: true) {
    school: String! @column
    degree: String! @column
    startDate: Int! @column(overrideType: "Date")
    graduationDate: Int! @column(overrideType: "Date")
    description: String @column
  }

  type UserExperience @entity(embedded: true) {
    title: String! @column
    companyName: String! @column
    location: String @column
    startDate: Int! @column(overrideType: "Date")
    endDate: Int @column(overrideType: "Date")
    description: String @column
  }

  input InitializeUserInput {
    firebaseId: String!
    phone: String!
  }

  input FinalizeUserInput {
    name: String!
    oneLiner: String!
    username: String!
    bio: String!
    email: String!
  }

  input UpdateUserInput {
    firebaseId: String
    name: String
    username: String
    oneLiner: String
    bio: String
    email: String
  }
`;

export default userGraphql;
