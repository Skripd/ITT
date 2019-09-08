FROM nginx:alpine

EXPOSE 80

RUN rm -rf /usr/share/nginx/html/*

COPY ./buildfiles/nginx.conf /etc/nginx/nginx.conf

COPY ./dist/itt /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]

