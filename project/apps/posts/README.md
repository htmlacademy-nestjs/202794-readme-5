# Микросервис `Posts`

- CRUD для публикаций
- CRUD для комментариев к публикациям

## Быстрый запуск

1. Переименовать `.env-example` в `posts.env`

2. Запустить docker контейнер:

`docker compose --file ./apps/posts/docker-compose.dev.yml --env-file ./apps/posts/posts.env --project-name "readme-posts" up -d`

3. Подготовить postgres миграции и создать prisma клиент:

  - валидация prisma schema: ```npx nx run posts:db:lint```
  - cбросить prisma миграцию: ```npx nx run posts:db:reset```
  - применить prisma миграцию: ```npx nx run posts:db:migrate -- --name "Create Posts tables"```
  - сгенерировать prisma клиент: ```npx nx run posts:db:generate```
  - наполнить данными: ```npx nx run posts:db:seed```

4. Из директории `project` установить зависимости и запустить приложение:

```bash
npm i
npx nx run posts:serve
```

Запуск приложения с генерацией REST API клиета:

```bash
npx nx run posts:serve:generate_client
```

5. Сервисы:

- `http://localhost:3002/api/spec` - posts api spec
- `http://localhost:8082/` - ui pgAdmin (username: `admin`, password: `test`)
