# Установка

Для работы необходим docker и docker-compose. С инструкцией по установке можно ознакомиться по ссылкам: [docker](https://docs.docker.com/engine/install/) и [docker-compose](https://docs.docker.com/compose/install/)

## Клонирование репозитория
```
git clone https://github.com/gg-goodgenius/threads
cd threads
```

## Запуск backend
Ддя запуска необходимо настроить переменные окружения. Для этого необходимо создать файл .env в директории backend/threads. Пример содержимого указан ниже:
```
# режим отладки, может принимать значения True или False
DEBUG=
# адрес подключения, например sqlite:///./db.sqlite3
DATABASE_URL=
# ключ безопсности сессий djanog, например django-insecure-r!i0s78w3q_mao&k^u)w1a2
SECRET_KEY=
# разрешенные хосты для запуска
ALLOWED_HOSTS=
# включать раздел администрирования средствами django, может принимать значения True или False
ADMINSITE=
# токен для телеграм бота
TELEGRAM_TOKEN=
```
После этого можено приступать, к запуску backend:
```
docker-composer -f backend/docker-compose.yml up -d --build
```
После запуска API будет доступен по адресу http://localhost:8000/ (админка  http://localhost:8000/admin)
