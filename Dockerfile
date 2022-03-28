FROM registry.cn-qingdao.aliyuncs.com/dataease/fabric8-java-alpine-openjdk8-jre:edge-chromium

# RUN echo -e 'https://dl-cdn.alpinelinux.org/alpine/edge/main/\nhttps://dl-cdn.alpinelinux.org/alpine/edge/community/' > /etc/apk/repositories 

# RUN apk add chromium chromium-chromedriver fontconfig --no-cache --allow-untrusted

# ADD simsun.ttc /usr/share/fonts/

# RUN cd /usr/share/fonts/ \
#    && mkfontscale \
#    && mkfontdir \
#    && fc-cache -fv

ARG IMAGE_TAG

RUN mkdir -p /opt/apps

RUN mkdir -p /opt/dataease/data/feature/full

ADD mapFiles/* /opt/dataease/data/feature/full/

RUN mkdir -p /opt/dataease/drivers

ADD drivers/* /opt/dataease/drivers/

ADD backend/target/backend-$IMAGE_TAG.jar /opt/apps

ENV JAVA_APP_JAR=/opt/apps/backend-$IMAGE_TAG.jar

ENV AB_OFF=true

ENV JAVA_OPTIONS=-Dfile.encoding=utf-8

HEALTHCHECK --interval=15s --timeout=5s --retries=20 --start-period=30s CMD curl -f 127.0.0.1:8081

CMD ["/deployments/run-java.sh"]
