FROM postgres:latest

ENV POSTGRES_USER user

ENV POSTGRES_PASSWORD password

ADD ./init.sql /docker-entrypoint-initdb.d/

EXPOSE 5432