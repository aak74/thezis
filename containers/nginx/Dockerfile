FROM nginx:1.14

LABEL maintainer="Andrew Kopylov <aa74ko@gmail.com>"

RUN apt-get update \
  && apt-get install --no-install-recommends --no-install-suggests -y \
  curl netcat

COPY ./rootfs /

# ENV DEFAULT_USER=1000
ARG DEFAULT_USER=1000
ENV DEFAULT_USER=${DEFAULT_USER}

RUN usermod -u $DEFAULT_USER nginx\
	&& chown -R $DEFAULT_USER:$DEFAULT_USER /var/cache/nginx \
	&& chown -R $DEFAULT_USER:$DEFAULT_USER /var/log/nginx \
	&& chown -R $DEFAULT_USER:$DEFAULT_USER /etc/nginx \
	&& chmod -R g+w /var/cache/nginx

EXPOSE 8080

USER $DEFAULT_USER:$DEFAULT_USER

HEALTHCHECK --interval=5s --timeout=3s \
  CMD curl -f http://localhost:8080/status/ || exit 1
