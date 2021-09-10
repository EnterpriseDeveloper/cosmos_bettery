
FROM golang:1.16-buster AS build

ENV PACKAGES curl make git libc-dev bash gcc linux-headers eudev-dev python3
RUN apk add --no-cache $PACKAGES

WORKDIR /go/src/github.com/VoroshilovMax/bettery

RUN curl https://get.starport.network/starport! | bash
RUN sudo mv starport /usr/local/bin/
# Add source files
COPY . .
RUN starport chain build

EXPOSE 26656 26657 1317 9090
CMD ["betteryd", "start"]