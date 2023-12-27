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
  - наполнить данными: ```npx nx run posts:db:seed```
  - сгенерировать prisma клиент: ```npx nx run posts:db:generate```

4. Из директории `project` установить зависимости и запустить приложение:

```bash
npm i
npx nx run posts:serve
```

5. Сервисы:

- `http://localhost:3003/api/post` - `post` api
- `http://localhost:3003/api/spec` - swagger ui
- `http://localhost:8082/` - pgAdmin ui
