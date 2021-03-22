FROM ubuntu:18.04

ENV MONGODB_ENDPOINT=
ENV PORT=

RUN apt-get update && \
    apt-get -y upgrade && \
    apt-get install -y git nodejs npm

RUN git clone https://github.com/sosomasox/adl.git && \
    cd adl && \
    npm install

WORKDIR adl

ADD ./scripts/entrypoint.sh ./

CMD ["./entrypoint.sh"]
