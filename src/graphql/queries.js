/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCartModel = /* GraphQL */ `
  query GetCartModel($id: ID!) {
    getCartModel(id: $id) {
      id
      itemId
      units
      price
      points
      name
      image
      sold
      collected
      createdAt
      updatedAt
    }
  }
`;
export const listCartModels = /* GraphQL */ `
  query ListCartModels(
    $filter: ModelCartModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCartModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        itemId
        units
        price
        points
        name
        image
        sold
        collected
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      Image
      createdAt
      updatedAt
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        Image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStoreItem = /* GraphQL */ `
  query GetStoreItem($id: ID!) {
    getStoreItem(id: $id) {
      id
      name
      description
      price
      image
      location
      units
      category
      valueAdded
      createdAt
      updatedAt
    }
  }
`;
export const listStoreItems = /* GraphQL */ `
  query ListStoreItems(
    $filter: ModelStoreItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStoreItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        price
        image
        location
        units
        category
        valueAdded
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
