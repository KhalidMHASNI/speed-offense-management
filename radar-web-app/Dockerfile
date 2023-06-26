FROM node:14 as build

WORKDIR /app

COPY . .

RUN npm install && npm run build

FROM nginx:latest

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
