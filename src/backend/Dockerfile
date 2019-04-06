FROM node:8-alpine

RUN mkdir /var/log/node
WORKDIR /app
RUN npm install -g nodemon

RUN apk add --no-cache curl shadow

ARG UID=1000
ENV UID=${UID}
ARG GID=1000
ENV GID=${GID}
RUN usermod -u $UID node \
  && groupmod -g $GID node

USER node:node

EXPOSE 3000 5858
HEALTHCHECK --interval=5s --timeout=3s \
  CMD curl -f http://localhost:3000/status || exit 1

CMD "/app/run.sh"
