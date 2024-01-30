export enum TagsErrorMessage {
  TagNotFound = 'Tag is not found',
}

export enum TagsPropDesc {
  TagId = 'Tag ID',
  CreatedAt = 'Date of creation',
  UpdatedAt = 'Date of updating',
  Text = 'Text of the tag',
  Offset = 'Skit the number of items',
  Limit = 'Limit the number of items',
  Count = 'Total items count',
  Page = 'Page number',
  Pages = 'Total number of pages',
}

export enum TagsApiDesc {
  Create = 'Create post\'s tag',
  GetAll = 'Return list of post\'s tags',
  GetOne = 'Return post\'s tag by id',
  Remove = 'Delete post\'s tag',
}
