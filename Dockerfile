# Используем Node.js как базовый образ
FROM node:18

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json из папки server
COPY ./server/package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальной исходный код бэкенда
COPY ./server ./

# Указываем порт, который использует приложение
EXPOSE 3001

# Команда для запуска приложения
CMD ["npm", "start"]
