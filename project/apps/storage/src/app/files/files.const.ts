export enum FilesErrorMessage {
  FileNotFound = 'File record with id not found',
}

export enum FilesPropDesc {
  Id = 'File ID',
  CreatedAt = 'Date of creation',
  Hash = 'Hash name of the file',
  MimeType = 'Mime type of the file',
  FileExt = 'Extension of the file',
  FileName = 'Name of the file',
  FilePath = 'Path of file\'s dir',
  FileSrc = 'Path of the file',
  FileSize = 'Size of the file in bytes',
  Offset = 'Skit the number of items',
  Limit = 'Limit the number of items',
  Count = 'Total items count',
  Page = 'Page number',
  Pages = 'Total number of pages',
}

export enum FilesApiDesc {
  Upload = 'Upload file',
  GetAll = 'Return list of file\'s records',
  GetOne = 'Return file record by id',
  Remove = 'Delete file by id',
}
