#ng build --prod
#docker build -t grc.io/${PROJECT_ID}/front-user:1.0 .
#docker build -t front-user:1.0 .
#docker run -p 80 front-user:1.0
FROM nginx:1.15
COPY dist/front-users /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY frontend.conf /etc/nginx/conf.d