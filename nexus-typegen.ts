/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./api/context"
import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * Date custom scalar type
     */
    date<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateScalar";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * Date custom scalar type
     */
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateScalar";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateScalar: any
}

export interface NexusGenObjects {
  Memory: { // root type
    body?: string | null; // String
    createdAt?: NexusGenScalars['DateScalar'] | null; // DateScalar
    deletedAt?: NexusGenScalars['DateScalar'] | null; // DateScalar
    id?: string | null; // String
    owner?: NexusGenRootTypes['User'] | null; // User
    story?: string | null; // String
    title?: string | null; // String
    updatedAt?: NexusGenScalars['DateScalar'] | null; // DateScalar
  }
  MemoryConnectionEdge: { // root type
    cursor?: string | null; // String
    node?: NexusGenRootTypes['Memory'] | null; // Memory
  }
  MemoryConnectionResponse: { // root type
    edges?: Array<NexusGenRootTypes['MemoryConnectionEdge'] | null> | null; // [MemoryConnectionEdge]
    pageInfo?: NexusGenRootTypes['PageInfo'] | null; // PageInfo
  }
  Mutation: {};
  PageInfo: { // root type
    endCursor?: string | null; // String
    hasNextPage?: boolean | null; // Boolean
  }
  Query: {};
  Site: { // root type
    collaborators?: Array<NexusGenRootTypes['User'] | null> | null; // [User]
    createdAt?: NexusGenScalars['DateScalar'] | null; // DateScalar
    deletedAt?: NexusGenScalars['DateScalar'] | null; // DateScalar
    id?: string | null; // String
    owner?: NexusGenRootTypes['User'] | null; // User
    title?: string | null; // String
    updatedAt?: NexusGenScalars['DateScalar'] | null; // DateScalar
  }
  SiteConnectionEdge: { // root type
    cursor?: string | null; // String
    node?: NexusGenRootTypes['Site'] | null; // Site
  }
  SiteConnectionResponse: { // root type
    edges?: Array<NexusGenRootTypes['SiteConnectionEdge'] | null> | null; // [SiteConnectionEdge]
    pageInfo?: NexusGenRootTypes['PageInfo'] | null; // PageInfo
  }
  User: { // root type
    createdAt?: NexusGenScalars['DateScalar'] | null; // DateScalar
    deletedAt?: NexusGenScalars['DateScalar'] | null; // DateScalar
    email?: string | null; // String
    firstName?: string | null; // String
    id?: string | null; // String
    lastName?: string | null; // String
    updatedAt?: NexusGenScalars['DateScalar'] | null; // DateScalar
  }
  UserConnectionEdge: { // root type
    cursor?: string | null; // String
    node?: NexusGenRootTypes['User'] | null; // User
  }
  UserConnectionResponse: { // root type
    edges?: Array<NexusGenRootTypes['UserConnectionEdge'] | null> | null; // [UserConnectionEdge]
    pageInfo?: NexusGenRootTypes['PageInfo'] | null; // PageInfo
  }
}

export interface NexusGenInterfaces {
  Edge: NexusGenRootTypes['MemoryConnectionEdge'] | NexusGenRootTypes['SiteConnectionEdge'] | NexusGenRootTypes['UserConnectionEdge'];
  Node: NexusGenRootTypes['Memory'] | NexusGenRootTypes['Site'] | NexusGenRootTypes['User'];
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenInterfaces & NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Memory: { // field return type
    body: string | null; // String
    createdAt: NexusGenScalars['DateScalar'] | null; // DateScalar
    deletedAt: NexusGenScalars['DateScalar'] | null; // DateScalar
    id: string | null; // String
    owner: NexusGenRootTypes['User'] | null; // User
    story: string | null; // String
    title: string | null; // String
    updatedAt: NexusGenScalars['DateScalar'] | null; // DateScalar
  }
  MemoryConnectionEdge: { // field return type
    cursor: string | null; // String
    node: NexusGenRootTypes['Memory'] | null; // Memory
  }
  MemoryConnectionResponse: { // field return type
    edges: Array<NexusGenRootTypes['MemoryConnectionEdge'] | null> | null; // [MemoryConnectionEdge]
    pageInfo: NexusGenRootTypes['PageInfo'] | null; // PageInfo
  }
  Mutation: { // field return type
    createMemory: NexusGenRootTypes['Memory']; // Memory!
    createSite: NexusGenRootTypes['Site']; // Site!
    createUser: NexusGenRootTypes['User'] | null; // User
    deleteUser: NexusGenRootTypes['User'] | null; // User
    editMemory: NexusGenRootTypes['Memory']; // Memory!
    editSite: NexusGenRootTypes['Site']; // Site!
    editUser: NexusGenRootTypes['User'] | null; // User
  }
  PageInfo: { // field return type
    endCursor: string | null; // String
    hasNextPage: boolean | null; // Boolean
  }
  Query: { // field return type
    memory: NexusGenRootTypes['Memory'] | null; // Memory
    memoryConnection: NexusGenRootTypes['MemoryConnectionResponse'] | null; // MemoryConnectionResponse
    site: NexusGenRootTypes['Site'] | null; // Site
    siteConnection: NexusGenRootTypes['SiteConnectionResponse'] | null; // SiteConnectionResponse
    user: NexusGenRootTypes['User'] | null; // User
    userConnection: NexusGenRootTypes['UserConnectionResponse'] | null; // UserConnectionResponse
    users: NexusGenRootTypes['User'] | null; // User
  }
  Site: { // field return type
    collaborators: Array<NexusGenRootTypes['User'] | null> | null; // [User]
    createdAt: NexusGenScalars['DateScalar'] | null; // DateScalar
    deletedAt: NexusGenScalars['DateScalar'] | null; // DateScalar
    id: string | null; // String
    owner: NexusGenRootTypes['User'] | null; // User
    title: string | null; // String
    updatedAt: NexusGenScalars['DateScalar'] | null; // DateScalar
  }
  SiteConnectionEdge: { // field return type
    cursor: string | null; // String
    node: NexusGenRootTypes['Site'] | null; // Site
  }
  SiteConnectionResponse: { // field return type
    edges: Array<NexusGenRootTypes['SiteConnectionEdge'] | null> | null; // [SiteConnectionEdge]
    pageInfo: NexusGenRootTypes['PageInfo'] | null; // PageInfo
  }
  User: { // field return type
    createdAt: NexusGenScalars['DateScalar'] | null; // DateScalar
    deletedAt: NexusGenScalars['DateScalar'] | null; // DateScalar
    email: string | null; // String
    firstName: string | null; // String
    id: string | null; // String
    lastName: string | null; // String
    updatedAt: NexusGenScalars['DateScalar'] | null; // DateScalar
  }
  UserConnectionEdge: { // field return type
    cursor: string | null; // String
    node: NexusGenRootTypes['User'] | null; // User
  }
  UserConnectionResponse: { // field return type
    edges: Array<NexusGenRootTypes['UserConnectionEdge'] | null> | null; // [UserConnectionEdge]
    pageInfo: NexusGenRootTypes['PageInfo'] | null; // PageInfo
  }
  Edge: { // field return type
    cursor: string | null; // String
  }
  Node: { // field return type
    id: string | null; // String
  }
}

export interface NexusGenFieldTypeNames {
  Memory: { // field return type name
    body: 'String'
    createdAt: 'DateScalar'
    deletedAt: 'DateScalar'
    id: 'String'
    owner: 'User'
    story: 'String'
    title: 'String'
    updatedAt: 'DateScalar'
  }
  MemoryConnectionEdge: { // field return type name
    cursor: 'String'
    node: 'Memory'
  }
  MemoryConnectionResponse: { // field return type name
    edges: 'MemoryConnectionEdge'
    pageInfo: 'PageInfo'
  }
  Mutation: { // field return type name
    createMemory: 'Memory'
    createSite: 'Site'
    createUser: 'User'
    deleteUser: 'User'
    editMemory: 'Memory'
    editSite: 'Site'
    editUser: 'User'
  }
  PageInfo: { // field return type name
    endCursor: 'String'
    hasNextPage: 'Boolean'
  }
  Query: { // field return type name
    memory: 'Memory'
    memoryConnection: 'MemoryConnectionResponse'
    site: 'Site'
    siteConnection: 'SiteConnectionResponse'
    user: 'User'
    userConnection: 'UserConnectionResponse'
    users: 'User'
  }
  Site: { // field return type name
    collaborators: 'User'
    createdAt: 'DateScalar'
    deletedAt: 'DateScalar'
    id: 'String'
    owner: 'User'
    title: 'String'
    updatedAt: 'DateScalar'
  }
  SiteConnectionEdge: { // field return type name
    cursor: 'String'
    node: 'Site'
  }
  SiteConnectionResponse: { // field return type name
    edges: 'SiteConnectionEdge'
    pageInfo: 'PageInfo'
  }
  User: { // field return type name
    createdAt: 'DateScalar'
    deletedAt: 'DateScalar'
    email: 'String'
    firstName: 'String'
    id: 'String'
    lastName: 'String'
    updatedAt: 'DateScalar'
  }
  UserConnectionEdge: { // field return type name
    cursor: 'String'
    node: 'User'
  }
  UserConnectionResponse: { // field return type name
    edges: 'UserConnectionEdge'
    pageInfo: 'PageInfo'
  }
  Edge: { // field return type name
    cursor: 'String'
  }
  Node: { // field return type name
    id: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createMemory: { // args
      body: string; // String!
      story: string; // String!
      title: string; // String!
    }
    createSite: { // args
      title: string; // String!
    }
    createUser: { // args
      email: string; // String!
      firstName: string; // String!
      lastName: string; // String!
    }
    deleteUser: { // args
      id: string; // String!
    }
    editMemory: { // args
      body: string; // String!
      id: string; // String!
      story: string; // String!
      title: string; // String!
    }
    editSite: { // args
      id: string; // String!
      title: string; // String!
    }
    editUser: { // args
      email: string; // String!
      firstName: string; // String!
      id: string; // String!
      lastName: string; // String!
    }
  }
  Query: {
    memory: { // args
      id: string; // String!
    }
    memoryConnection: { // args
      after?: string | null; // String
      first: number; // Int!
    }
    site: { // args
      id: string; // String!
    }
    siteConnection: { // args
      after?: string | null; // String
      first: number; // Int!
    }
    user: { // args
      id: string; // String!
    }
    userConnection: { // args
      after?: string | null; // String
      first: number; // Int!
    }
    users: { // args
      id: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
  Edge: "MemoryConnectionEdge" | "SiteConnectionEdge" | "UserConnectionEdge"
  Node: "Memory" | "Site" | "User"
}

export interface NexusGenTypeInterfaces {
  Memory: "Node"
  MemoryConnectionEdge: "Edge"
  Site: "Node"
  SiteConnectionEdge: "Edge"
  User: "Node"
  UserConnectionEdge: "Edge"
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = keyof NexusGenInterfaces;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = "Edge" | "Node";

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}