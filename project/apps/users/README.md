# Микросервис `Users`

- CRUD для пользователей
- авторизация пользователя
- изменение пароля пользователя

## Быстрый запуск

1. Переименовать `.env-example` в `users.env`

2. Запустить docker контейнер:

```bash
docker compose --file ./apps/users/docker-compose.dev.yml --project-name "readme-users" up -d
```

3. Из директории `project` установить зависимости и запустить приложение:

```bash
npm i
npx nx run users:serve
```

4. Сервисы:

- `http://localhost:3004/api/user` - `user` api
- `http://localhost:3004/api/auth` - `auth` api
- `http://localhost:3333/api/spec` - swagger ui
- `http://localhost:8081` - mongo express ui
