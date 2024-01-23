export interface IRabbitMQConnectionParams {
  username: string,
  password: string,
  host: string,
  port: string | number,
}

export function getRabbitMQConnectionString({
  username, password, host, port,
}: IRabbitMQConnectionParams) {
  return `amqp://${username}:${password}@${host}:${port}`;
}
