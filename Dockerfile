FROM nginx:stable-alpine

COPY ./page-content/* /var/www/html/
COPY ./config/main-body.conf /etc/nginx/conf.d/default.conf

CMD ["nginx","-g","daemon off;"]