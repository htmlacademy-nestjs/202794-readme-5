# Микросервис `Notify`

- рассыка email сообщений

## Быстрый запуск

1. Переименовать `.env-example` в `notify.env`

2. Запустить docker контейнер:

`docker compose --file ./apps/notify/docker-compose.dev.yml --env-file ./apps/notify/notify.env --project-name "readme-notify" up -d`

3. Из директории `project` установить зависимости и запустить приложение:

```bash
npm i
npx nx run notify:serve
```

Отправить тестовое письмо:

```bash
curl smtp://admin:test@localhost:8025 --mail-from m@mail.me --mail-rcpt m@mail.local --upload-file ./README.md
```

4. Сервисы:

  - `http://localhost:1083/` - ui smtp сервера
  - `http://localhost:1088/` - ui rabbitmq сервера (username: `admin`, password: `test`)
  - `http://localhost:8083/` - ui mongo express (username: `admin`, password: `test`)
