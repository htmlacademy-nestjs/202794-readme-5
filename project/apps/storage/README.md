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

Запуск приложения с генерацией REST API клиета:

```bash
npx nx run storage:serve:generate_client
```

4. Сервисы:

- `http://localhost:3003/api/spec` - storage api spec
- `http://localhost:8084` - ui mongo express (username: `admin`, password: `test`)
