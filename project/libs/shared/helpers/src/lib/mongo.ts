export interface IMongoConnectionParams {
  username: string,
  password: string,
  host: string,
  port: string | number,
  dbName: string,
  dbAuth: string,
}

export function getMongoConnectionString({
  username, password, host, port, dbName, dbAuth,
}: IMongoConnectionParams) {
  return `mongodb://${username}:${password}@${host}:${port}/${dbName}?authSource=${dbAuth}`;
}
