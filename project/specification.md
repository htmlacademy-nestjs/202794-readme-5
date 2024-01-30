# «Readme»

«Readme» — это простой headless-движок для блога, построенный с помощью микросервисной архитектуры и современного фреймворка Nest.js. Проект состоит из нескольких микросервисов, каждый сервис решает одну задачу.

## Start the app

Выполнить следующие шаги из директории `project`.

```bash
echo "Используем актуальный LTS-релиз платформы Node.js"
nvm install
nvm use

echo "Устанавливаем npm зависимости"
npm i

echo "Задаем переменные окружения"
cp ./apps/notify/.env-example ./apps/notify/notify.env
cp ./apps/posts/.env-example ./apps/posts/posts.env
cp ./apps/storage/.env-example ./apps/storage/storage.env
cp ./apps/users/.env-example ./apps/users/users.env

echo "Устанавливаем docker образы"
docker compose --file ./apps/notify/docker-compose.dev.yml --env-file ./apps/notify/notify.env --project-name "readme-notify" up -d
docker compose --file ./apps/posts/docker-compose.dev.yml --env-file ./apps/posts/posts.env --project-name "readme-posts" up -d
docker compose --file ./apps/storage/docker-compose.dev.yml --env-file ./apps/storage/storage.env --project-name "readme-storage" up -d
docker compose --file ./apps/users/docker-compose.dev.yml --env-file ./apps/users/users.env --project-name "readme-users" up -d

echo "Настраиваем prisma client"
npx nx run posts:db:generate
npx nx run posts:db:seed

echo "Запускаем приложения"
npm run serve
```

## Discover the app

Доступные микросервисы:

- Точка входа API: `http://localhost:3000`
- Рассылка почтовых нотификаций: `http://localhost:3001`
  - `http://localhost:1083/` - ui smtp сервера
  - `http://localhost:1088/` - ui rabbitmq сервера (username: `admin`, password: `test`)
  - `http://localhost:8083/` - ui mongo express (username: `admin`, password: `test`)
- Сервис публикаций (авторы, комментарии, лайки, теги): `http://localhost:3002`
  - `http://localhost:3002/api/spec` - posts api spec
  - `http://localhost:8082/` - ui pgAdmin (username: `admin`, password: `test`)
- Файловое хранилище: `http://localhost:3003`
  - `http://localhost:3003/api/spec` - storage api spec
  - `http://localhost:8084` - ui mongo express (username: `admin`, password: `test`)
- Пользователи и авторизация: `http://localhost:3004`
  - `http://localhost:3004/api/spec` - users api spec
  - `http://localhost:8081` - ui mongo express (username: `admin`, password: `test`)
