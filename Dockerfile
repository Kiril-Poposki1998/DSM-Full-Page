FROM nginx:stable-alpine

COPY ./page-content/* /var/www/html/
COPY ./config/main-body.conf /etc/nginx/conf.d/default.conf

ENV NAVBAR_URL "http://localhost:8081/"
CMD ["nginx","-g","daemon off;"]