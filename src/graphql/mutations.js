/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCartModel = /* GraphQL */ `
  mutation CreateCartModel(
    $input: CreateCartModelInput!
    $condition: ModelCartModelConditionInput
  ) {
    createCartModel(input: $input, condition: $condition) {
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
export const updateCartModel = /* GraphQL */ `
  mutation UpdateCartModel(
    $input: UpdateCartModelInput!
    $condition: ModelCartModelConditionInput
  ) {
    updateCartModel(input: $input, condition: $condition) {
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
export const deleteCartModel = /* GraphQL */ `
  mutation DeleteCartModel(
    $input: DeleteCartModelInput!
    $condition: ModelCartModelConditionInput
  ) {
    deleteCartModel(input: $input, condition: $condition) {
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
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      name
      Image
      createdAt
      updatedAt
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      name
      Image
      createdAt
      updatedAt
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      name
      Image
      createdAt
      updatedAt
    }
  }
`;
export const createStoreItem = /* GraphQL */ `
  mutation CreateStoreItem(
    $input: CreateStoreItemInput!
    $condition: ModelStoreItemConditionInput
  ) {
    createStoreItem(input: $input, condition: $condition) {
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
export const updateStoreItem = /* GraphQL */ `
  mutation UpdateStoreItem(
    $input: UpdateStoreItemInput!
    $condition: ModelStoreItemConditionInput
  ) {
    updateStoreItem(input: $input, condition: $condition) {
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
export const deleteStoreItem = /* GraphQL */ `
  mutation DeleteStoreItem(
    $input: DeleteStoreItemInput!
    $condition: ModelStoreItemConditionInput
  ) {
    deleteStoreItem(input: $input, condition: $condition) {
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
