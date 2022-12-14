FROM amd64/ubuntu:20.04

RUN apt-get update \ 
    && apt-get install -y sudo \
    && apt-get install -y wget \
    && apt-get install -y build-essential

RUN adduser --disabled-password --gecos '' docker && adduser docker sudo && echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers
USER docker
COPY --from=golang:1.16 /usr/local/go/ /usr/local/go/
RUN sudo chown -R docker:docker /usr/local/go
ENV GOPATH=$HOME/go
ENV PATH=$PATH:$GOPATH/bin:/usr/local/go/bin
# COPY --from=starport/cli:latest /usr/bin /usr/bin
WORKDIR /go/src/github.com/VoroshilovMax/bettery
COPY . .
RUN sudo chown -R docker:docker /go/src/github.com/VoroshilovMax/bettery
RUN go mod tidy
# RUN starport chain build
RUN GOOS=linux GOARCH=amd64 go build -v /go/src/github.com/VoroshilovMax/bettery/cmd/betteryd/main.go   
EXPOSE 26657
EXPOSE 26656
EXPOSE 6060 
EXPOSE 9090 
EXPOSE 1317 
RUN  /go/src/github.com/VoroshilovMax/bettery/main init bettery --chain-id my-test-chain
CMD ["betteryd", "start"]