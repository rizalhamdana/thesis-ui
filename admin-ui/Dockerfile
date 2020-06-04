FROM nginx


RUN rm /etc/nginx/conf.d/default.conf


COPY . /usr/share/nginx/html

COPY ./conf/nginx.conf /etc/nginx/conf.d

EXPOSE 80