# Микросервис `Users`

- CRUD для пользователей
- авторизация пользователя
- изменение пароля пользователя

## Быстрый запуск

1. Переименовать `.env-example` в `users.env`

2. Запустить docker контейнер:

```bash
docker compose --file ./apps/users/docker-compose.dev.yml --env-file ./apps/users/users.env --project-name "readme-users" up -d
```

3. Из директории `project` установить зависимости и запустить приложение:

```bash
npm i
npx nx run users:serve
```

Запуск приложения с генерацией REST API клиета:

```bash
npx nx run users:serve:generate_client
```

4. Сервисы:

- `http://localhost:3004/api/spec` - users api spec
- `http://localhost:8081` - ui mongo express (username: `admin`, password: `test`)
