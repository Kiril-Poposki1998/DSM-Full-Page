FROM nginx:stable-alpine

COPY ./page-content/index.html /var/www/html/index.html
COPY ./config/main-body.conf /etc/nginx/conf.d/default.conf

CMD ["nginx","-g","daemon off;"]