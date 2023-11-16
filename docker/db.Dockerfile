FROM postgres:16.1-alpine3.18
RUN apk add --no-cache --update musl musl-utils musl-locales tzdata
ENV TZ=Europe/Paris
RUN cp /usr/share/zoneinfo/Europe/Paris /etc/localtime
RUN echo 'export LC_ALL=fr_FR.UTF-8' >> /etc/profile.d/locale.sh && \
  sed -i 's|LANG=C.UTF-8|LANG=fr_FR.UTF-8|' /etc/profile.d/locale.sh