FROM node:12.16.1-alpine3.9

RUN apk update
RUN apk add nginx supervisor --no-cache

COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf


COPY ./ /app
RUN rm -rf /app/build

ARG BUILD_TYPE
ENV BUILD_TYPE=$BUILD_TYPE

WORKDIR /app
RUN sh /app/docker/build.sh

RUN mkdir -p /run/nginx
CMD supervisord -c /etc/supervisor/conf.d/supervisord.conf
