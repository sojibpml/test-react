FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build


# 2nd stage: Serve with Nginx
FROM nginx:alpine

# Vite app build copy to nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Nginx default port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
