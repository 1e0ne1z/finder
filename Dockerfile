FROM        node:16.14.0-alpine

LABEL       author="Leonel Velasquez"

ENV         PORT=3001

WORKDIR     /var/www

COPY        package.json package-lock.json ./

RUN         npm install

COPY        . ./

EXPOSE      $PORT

ENTRYPOINT [ "npm", "start" ]