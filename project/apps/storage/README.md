# Микросервис `Storage`

- сохранение файлов

## Быстрый запуск

1. Переименовать `.env-example` в `storage.env`

2. Запустить docker контейнер:

```bash
docker compose --file ./apps/storage/docker-compose.dev.yml --env-file ./apps/storage/storage.env --project-name "readme-storage" up -d
```

3. Из директории `project` установить зависимости и запустить приложение:

```bash
npm i
npx nx run storage:serve
```

4. Сервисы:

- `http://localhost:3008/api/files` - `files` api
- `http://localhost:3008/api/spec` - swagger ui
- `http://localhost:8084` - mongo express ui
