/* eslint-disable */
import { GraphQLResolveInfo } from "graphql";
import gql from "graphql-tag";
import * as ApolloReactCommon from "@apollo/client";
import * as ApolloReactHooks from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> &
  { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AdditionalEntityFields = {
  path?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
};

export enum CareerExperience {
  EntryLevel = "EntryLevel",
  Junior = "Junior",
  Senior = "Senior",
}

export enum Country {
  Afghanistan = "Afghanistan",
  Albania = "Albania",
  Algeria = "Algeria",
  Andorra = "Andorra",
  Angola = "Angola",
  Antigua = "Antigua",
  Argentina = "Argentina",
  Armenia = "Armenia",
  Australia = "Australia",
  Austria = "Austria",
  Azerbaijan = "Azerbaijan",
  Bahamas = "Bahamas",
  Bahrain = "Bahrain",
  Bangladesh = "Bangladesh",
  Barbados = "Barbados",
  Belarus = "Belarus",
  Belgium = "Belgium",
  Belize = "Belize",
  Benin = "Benin",
  Bhutan = "Bhutan",
  Bolivia = "Bolivia",
  BosniaHerzegovina = "BosniaHerzegovina",
  Botswana = "Botswana",
  Brazil = "Brazil",
  Brunei = "Brunei",
  Bulgaria = "Bulgaria",
  Burkina = "Burkina",
  Burundi = "Burundi",
  Cambodia = "Cambodia",
  Cameroon = "Cameroon",
  Canada = "Canada",
  CapeVerde = "CapeVerde",
  CentralAfricanRep = "CentralAfricanRep",
  Chad = "Chad",
  Chile = "Chile",
  China = "China",
  Colombia = "Colombia",
  Comoros = "Comoros",
  Congo = "Congo",
  CostaRica = "CostaRica",
  Croatia = "Croatia",
  Cuba = "Cuba",
  Cyprus = "Cyprus",
  CzechRepublic = "CzechRepublic",
  Denmark = "Denmark",
  Djibouti = "Djibouti",
  Dominica = "Dominica",
  DominicanRepublic = "DominicanRepublic",
  EastTimor = "EastTimor",
  Ecuador = "Ecuador",
  Egypt = "Egypt",
  ElSalvador = "ElSalvador",
  EquatorialGuinea = "EquatorialGuinea",
  Eritrea = "Eritrea",
  Estonia = "Estonia",
  Ethiopia = "Ethiopia",
  Federation = "Federation",
  Fiji = "Fiji",
  Finland = "Finland",
  France = "France",
  Gabon = "Gabon",
  Gambia = "Gambia",
  Georgia = "Georgia",
  Germany = "Germany",
  Ghana = "Ghana",
  Greece = "Greece",
  Grenada = "Grenada",
  Guatemala = "Guatemala",
  Guinea = "Guinea",
  GuineaBissau = "GuineaBissau",
  Guyana = "Guyana",
  Haiti = "Haiti",
  Honduras = "Honduras",
  Hungary = "Hungary",
  Iceland = "Iceland",
  India = "India",
  Indonesia = "Indonesia",
  Iran = "Iran",
  Iraq = "Iraq",
  Ireland = "Ireland",
  Islands = "Islands",
  Israel = "Israel",
  Italy = "Italy",
  IvoryCoast = "IvoryCoast",
  Jamaica = "Jamaica",
  Japan = "Japan",
  Jordan = "Jordan",
  Kazakhstan = "Kazakhstan",
  Kenya = "Kenya",
  Kiribati = "Kiribati",
  Korea = "Korea",
  Kosovo = "Kosovo",
  Kuwait = "Kuwait",
  Kyrgyzstan = "Kyrgyzstan",
  Laos = "Laos",
  Latvia = "Latvia",
  Lebanon = "Lebanon",
  Leone = "Leone",
  Lesotho = "Lesotho",
  Liberia = "Liberia",
  Libya = "Libya",
  Liechtenstein = "Liechtenstein",
  Lithuania = "Lithuania",
  Luxembourg = "Luxembourg",
  Macedonia = "Macedonia",
  Madagascar = "Madagascar",
  Malawi = "Malawi",
  Malaysia = "Malaysia",
  Maldives = "Maldives",
  Mali = "Mali",
  Malta = "Malta",
  MarshallIslands = "MarshallIslands",
  Mauritania = "Mauritania",
  Mauritius = "Mauritius",
  Mexico = "Mexico",
  Micronesia = "Micronesia",
  Moldova = "Moldova",
  Monaco = "Monaco",
  Mongolia = "Mongolia",
  Montenegro = "Montenegro",
  Morocco = "Morocco",
  Mozambique = "Mozambique",
  Myanmar = "Myanmar",
  Namibia = "Namibia",
  Nauru = "Nauru",
  Nepal = "Nepal",
  Netherlands = "Netherlands",
  NewZealand = "NewZealand",
  Nicaragua = "Nicaragua",
  Niger = "Niger",
  Nigeria = "Nigeria",
  NorthKorea = "NorthKorea",
  Norway = "Norway",
  Oman = "Oman",
  Pakistan = "Pakistan",
  Palau = "Palau",
  Panama = "Panama",
  PapuaNewGuinea = "PapuaNewGuinea",
  Paraguay = "Paraguay",
  Peru = "Peru",
  Philippines = "Philippines",
  Poland = "Poland",
  Portugal = "Portugal",
  Qatar = "Qatar",
  Romania = "Romania",
  Russian = "Russian",
  Rwanda = "Rwanda",
  SaintVincenttheGrenadines = "SaintVincenttheGrenadines",
  Samoa = "Samoa",
  SanMarino = "SanMarino",
  SaoTomePrincipe = "SaoTomePrincipe",
  SaudiArabia = "SaudiArabia",
  Senegal = "Senegal",
  Serbia = "Serbia",
  Seychelles = "Seychelles",
  Sierra = "Sierra",
  Singapore = "Singapore",
  Slovakia = "Slovakia",
  Slovenia = "Slovenia",
  Solomon = "Solomon",
  Somalia = "Somalia",
  South = "South",
  SouthAfrica = "SouthAfrica",
  SouthSudan = "SouthSudan",
  Spain = "Spain",
  SriLanka = "SriLanka",
  StKittsNevis = "StKittsNevis",
  StLucia = "StLucia",
  Sudan = "Sudan",
  Suriname = "Suriname",
  Swaziland = "Swaziland",
  Sweden = "Sweden",
  Switzerland = "Switzerland",
  Syria = "Syria",
  Taiwan = "Taiwan",
  Tajikistan = "Tajikistan",
  Tanzania = "Tanzania",
  Thailand = "Thailand",
  Togo = "Togo",
  Tonga = "Tonga",
  TrinidadTobago = "TrinidadTobago",
  Tunisia = "Tunisia",
  Turkey = "Turkey",
  Turkmenistan = "Turkmenistan",
  Tuvalu = "Tuvalu",
  Uganda = "Uganda",
  Ukraine = "Ukraine",
  UnitedArabEmirates = "UnitedArabEmirates",
  UnitedKingdom = "UnitedKingdom",
  UnitedStates = "UnitedStates",
  Uruguay = "Uruguay",
  Uzbekistan = "Uzbekistan",
  Vanuatu = "Vanuatu",
  VaticanCity = "VaticanCity",
  Venezuela = "Venezuela",
  Vietnam = "Vietnam",
  Yemen = "Yemen",
  Zambia = "Zambia",
  Zimbabwe = "Zimbabwe",
}

export type CreateUserInput = {
  name: Scalars["String"];
};

export enum Ethnicity {
  AfricanAmerican = "AfricanAmerican",
  AmericanIndian = "AmericanIndian",
  Asian = "Asian",
  East = "East",
  Latino = "Latino",
  MiddleEastern = "MiddleEastern",
  NaiveHawaiian = "NaiveHawaiian",
  PacificIslander = "PacificIslander",
  SouthAsian = "SouthAsian",
  SoutheastAsian = "SoutheastAsian",
  White = "White",
}

export enum Gender {
  Female = "Female",
  Male = "Male",
  Other = "Other",
}

export type Mutation = {
  createUser: User;
};

export type MutationCreateUserArgs = {
  user: CreateUserInput;
};

export type Query = {
  user?: Maybe<User>;
};

export type QueryUserArgs = {
  id: Scalars["ID"];
};

export enum Roles {
  Account = "Account",
  Analyst = "Analyst",
  Architecture = "Architecture",
  BackendEngineering = "BackendEngineering",
  BigData = "BigData",
  Blockchain = "Blockchain",
  CommunityManager = "CommunityManager",
  Compliance = "Compliance",
  Consulting = "Consulting",
  ContentCreation = "ContentCreation",
  Copywriting = "Copywriting",
  CustomerSupport = "CustomerSupport",
  DataScience = "DataScience",
  Devops = "Devops",
  Education = "Education",
  EventsManager = "EventsManager",
  FrontendEngineering = "FrontendEngineering",
  FullStackEngineering = "FullStackEngineering",
  Hr = "HR",
  Illustrator = "Illustrator",
  Legal = "Legal",
  Mlai = "MLAI",
  Marketing = "Marketing",
  MobileEngineering = "MobileEngineering",
  ProductManager = "ProductManager",
  ProjectManager = "ProjectManager",
  Recruiter = "Recruiter",
  Robotics = "Robotics",
  Sales = "Sales",
  SocialMediaManager = "SocialMediaManager",
  UiuxDesign = "UIUXDesign",
}

export enum Sector {
  Aggregator = "Aggregator",
  Analytics = "Analytics",
  BorrowingLending = "BorrowingLending",
  Browser = "Browser",
  BuyingSelling = "BuyingSelling",
  Communication = "Communication",
  Content = "Content",
  DeFi = "DeFi",
  Discovery = "Discovery",
  Financial = "Financial",
  Gaming = "Gaming",
  Governance = "Governance",
  Identity = "Identity",
  Insurance = "Insurance",
  L1Protocol = "L1Protocol",
  L2Protocol = "L2Protocol",
  Makers = "Makers",
  Market = "Market",
  Nft = "NFT",
  Security = "Security",
  Services = "Services",
  Social = "Social",
  Staking = "Staking",
  Storage = "Storage",
  Wallet = "Wallet",
}

export enum Skill {
  Aws = "AWS",
  AdobeIllustrator = "AdobeIllustrator",
  Agile = "Agile",
  Ansible = "Ansible",
  Apache = "Apache",
  Architecture = "Architecture",
  Building = "Building",
  CPlusPlus = "CPlusPlus",
  Crm = "CRM",
  CSharp = "CSharp",
  Clojure = "Clojure",
  Cloud = "Cloud",
  Cobol = "Cobol",
  Community = "Community",
  DataVisualization = "DataVisualization",
  Design = "Design",
  Devops = "Devops",
  Discord = "Discord",
  Docker = "Docker",
  DotNet = "DotNet",
  EmailMarketing = "EmailMarketing",
  EmbeddedSystems = "EmbeddedSystems",
  Erlang = "Erlang",
  Event = "Event",
  Figma = "Figma",
  Finance = "Finance",
  Firebase = "Firebase",
  Flutter = "Flutter",
  GCloud = "GCloud",
  GOlang = "GOlang",
  GraphQl = "GraphQL",
  Growth = "Growth",
  Java = "Java",
  Javascript = "Javascript",
  Kotlin = "Kotlin",
  Lamp = "Lamp",
  Lareavel = "Lareavel",
  Leadership = "Leadership",
  Linux = "Linux",
  Lisp = "Lisp",
  Mern = "MERN",
  MachineLearning = "MachineLearning",
  Managemet = "Managemet",
  Marketing = "Marketing",
  Meteor = "Meteor",
  Native = "Native",
  NexJs = "NexJS",
  NoSql = "NoSQL",
  ObjectiveC = "ObjectiveC",
  Php = "PHP",
  Perl = "Perl",
  Photoshop = "Photoshop",
  Planning = "Planning",
  React = "React",
  Research = "Research",
  Rust = "Rust",
  Sql = "SQL",
  Scrum = "Scrum",
  Serverless = "Serverless",
  Swift = "Swift",
  Teaching = "Teaching",
  ThreeDDesign = "ThreeDDesign",
  Twitter = "Twitter",
  Typescript = "Typescript",
  Ui = "UI",
  Ux = "UX",
  Web3js = "Web3js",
}

export type UpdateUserInput = {
  name?: InputMaybe<Scalars["String"]>;
};

export type User = {
  _id: Scalars["ID"];
  bio: Scalars["String"];
  candidateData: UserCandidateData;
  education: Array<UserEducation>;
  email: Scalars["String"];
  experience: Array<UserExperience>;
  firebaseId: Scalars["String"];
  github: Scalars["String"];
  linkedin: Scalars["String"];
  name: Scalars["String"];
  oneLiner: Scalars["String"];
  twitter: Scalars["String"];
  website: Scalars["String"];
};

export type UserCandidateData = {
  careerExperience: CareerExperience;
  collegeGraduationYear: Scalars["Int"];
  country: Country;
  ethnicity: Ethnicity;
  gender: Gender;
  rolesInterestedIn: Array<Roles>;
  sectorsInterestedIn: Array<Sector>;
};

export type UserEducation = {
  degree: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  graduationDate: Scalars["Int"];
  school: Scalars["String"];
  startDate: Scalars["Int"];
};

export type UserExperience = {
  companyName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  endDate?: Maybe<Scalars["Int"]>;
  location?: Maybe<Scalars["String"]>;
  startDate: Scalars["Int"];
  title: Scalars["String"];
};

export type HomeQueryQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type HomeQueryQuery = { user?: { _id: string } | null };

export const HomeQueryDocument = gql`
  query HomeQuery($id: ID!) {
    user(id: $id) {
      _id
    }
  }
`;

/**
 * __useHomeQueryQuery__
 *
 * To run a query within a React component, call `useHomeQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeQueryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useHomeQueryQuery(
  baseOptions: ApolloReactHooks.QueryHookOptions<
    HomeQueryQuery,
    HomeQueryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<HomeQueryQuery, HomeQueryQueryVariables>(
    HomeQueryDocument,
    options
  );
}
export function useHomeQueryLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    HomeQueryQuery,
    HomeQueryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<HomeQueryQuery, HomeQueryQueryVariables>(
    HomeQueryDocument,
    options
  );
}
export type HomeQueryQueryHookResult = ReturnType<typeof useHomeQueryQuery>;
export type HomeQueryLazyQueryHookResult = ReturnType<
  typeof useHomeQueryLazyQuery
>;
export type HomeQueryQueryResult = ApolloReactCommon.QueryResult<
  HomeQueryQuery,
  HomeQueryQueryVariables
>;
import { ObjectId } from "mongodb";
export type UserDbObject = {
  _id: ObjectId;
  bio: string;
  candidateData: UserCandidateDataDbObject;
  education: Array<UserEducationDbObject>;
  email: string;
  experience: Array<UserExperienceDbObject>;
  firebaseId: string;
  github: string;
  linkedin: string;
  name: string;
  oneLiner: string;
  twitter: string;
  website: string;
};

export type UserCandidateDataDbObject = {
  careerExperience: string;
  collegeGraduationYear: number;
  country: string;
  ethnicity: string;
  gender: string;
  rolesInterestedIn: Array<string>;
  sectorsInterestedIn: Array<string>;
};

export type UserEducationDbObject = {
  degree: string;
  description?: Maybe<string>;
  graduationDate: Date;
  school: string;
  startDate: Date;
};

export type UserExperienceDbObject = {
  companyName: string;
  description?: Maybe<string>;
  endDate?: Date;
  location?: Maybe<string>;
  startDate: Date;
  title: string;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AdditionalEntityFields: AdditionalEntityFields;
  String: ResolverTypeWrapper<Scalars["String"]>;
  CareerExperience: CareerExperience;
  Country: Country;
  CreateUserInput: CreateUserInput;
  Ethnicity: Ethnicity;
  Gender: Gender;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  Roles: Roles;
  Sector: Sector;
  Skill: Skill;
  UpdateUserInput: UpdateUserInput;
  User: ResolverTypeWrapper<User>;
  UserCandidateData: ResolverTypeWrapper<UserCandidateData>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  UserEducation: ResolverTypeWrapper<UserEducation>;
  UserExperience: ResolverTypeWrapper<UserExperience>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AdditionalEntityFields: AdditionalEntityFields;
  String: Scalars["String"];
  CreateUserInput: CreateUserInput;
  Mutation: {};
  Query: {};
  ID: Scalars["ID"];
  UpdateUserInput: UpdateUserInput;
  User: User;
  UserCandidateData: UserCandidateData;
  Int: Scalars["Int"];
  UserEducation: UserEducation;
  UserExperience: UserExperience;
  Boolean: Scalars["Boolean"];
}>;

export type UnionDirectiveArgs = {
  discriminatorField?: Maybe<Scalars["String"]>;
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type UnionDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = UnionDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AbstractEntityDirectiveArgs = {
  discriminatorField: Scalars["String"];
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type AbstractEntityDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = AbstractEntityDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EntityDirectiveArgs = {
  embedded?: Maybe<Scalars["Boolean"]>;
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type EntityDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = EntityDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ColumnDirectiveArgs = {
  overrideType?: Maybe<Scalars["String"]>;
};

export type ColumnDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = ColumnDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IdDirectiveArgs = {};

export type IdDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = IdDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type LinkDirectiveArgs = {
  overrideType?: Maybe<Scalars["String"]>;
};

export type LinkDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = LinkDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EmbeddedDirectiveArgs = {};

export type EmbeddedDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = EmbeddedDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type MapDirectiveArgs = {
  path: Scalars["String"];
};

export type MapDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = MapDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = ResolversObject<{
  createUser?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateUserArgs, "user">
  >;
}>;

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = ResolversObject<{
  user?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<QueryUserArgs, "id">
  >;
}>;

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"]
> = ResolversObject<{
  _id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  bio?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  candidateData?: Resolver<
    ResolversTypes["UserCandidateData"],
    ParentType,
    ContextType
  >;
  education?: Resolver<
    Array<ResolversTypes["UserEducation"]>,
    ParentType,
    ContextType
  >;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  experience?: Resolver<
    Array<ResolversTypes["UserExperience"]>,
    ParentType,
    ContextType
  >;
  firebaseId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  github?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  linkedin?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  oneLiner?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  twitter?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  website?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserCandidateDataResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserCandidateData"] = ResolversParentTypes["UserCandidateData"]
> = ResolversObject<{
  careerExperience?: Resolver<
    ResolversTypes["CareerExperience"],
    ParentType,
    ContextType
  >;
  collegeGraduationYear?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType
  >;
  country?: Resolver<ResolversTypes["Country"], ParentType, ContextType>;
  ethnicity?: Resolver<ResolversTypes["Ethnicity"], ParentType, ContextType>;
  gender?: Resolver<ResolversTypes["Gender"], ParentType, ContextType>;
  rolesInterestedIn?: Resolver<
    Array<ResolversTypes["Roles"]>,
    ParentType,
    ContextType
  >;
  sectorsInterestedIn?: Resolver<
    Array<ResolversTypes["Sector"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserEducationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserEducation"] = ResolversParentTypes["UserEducation"]
> = ResolversObject<{
  degree?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  graduationDate?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  school?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserExperienceResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserExperience"] = ResolversParentTypes["UserExperience"]
> = ResolversObject<{
  companyName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  endDate?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserCandidateData?: UserCandidateDataResolvers<ContextType>;
  UserEducation?: UserEducationResolvers<ContextType>;
  UserExperience?: UserExperienceResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = any> = ResolversObject<{
  union?: UnionDirectiveResolver<any, any, ContextType>;
  abstractEntity?: AbstractEntityDirectiveResolver<any, any, ContextType>;
  entity?: EntityDirectiveResolver<any, any, ContextType>;
  column?: ColumnDirectiveResolver<any, any, ContextType>;
  id?: IdDirectiveResolver<any, any, ContextType>;
  link?: LinkDirectiveResolver<any, any, ContextType>;
  embedded?: EmbeddedDirectiveResolver<any, any, ContextType>;
  map?: MapDirectiveResolver<any, any, ContextType>;
}>;
