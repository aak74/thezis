FROM nginx:1.14

LABEL maintainer="Andrew Kopylov <aa74ko@gmail.com>"

RUN apt-get update \
  && apt-get install --no-install-recommends --no-install-suggests -y \
  curl netcat

COPY ./rootfs /

# ENV UID=1000
ARG UID=1000
ENV UID=${UID}
ARG GID=1000
ENV GID=${GID}

RUN usermod -u $UID nginx\
  && groupmod -g $UID nginx \
	&& chown -R $UID:$GID /var/cache/nginx \
	&& chown -R $UID:$GID /var/log/nginx \
	&& chown -R $UID:$GID /etc/nginx \
	&& chmod -R g+w /var/cache/nginx

EXPOSE 8080

USER $UID:$GID

HEALTHCHECK --interval=5s --timeout=3s \
  CMD curl -f http://localhost:8080/status/ || exit 1
