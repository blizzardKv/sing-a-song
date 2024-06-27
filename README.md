# Test songs project

Запуск режима разработки

## Install the dependencies
```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
npm run dev

или

quasar d
```

Возможен запуск дев-мода через docker-контейнер

### Установка зависимостей

```bash
docker build -t dockerize-quasar .
```

### Запуск контейнера

```bash
docker run -it -p 8000:80 --rm dockerize-quasar
```

Контейнер будет запущен по адресу

```bash
https://localhost:8000
```
