#!/bin/bash

docker build -t pugna-img .
docker run -v $PWD:/nodeapp pugna-img npm install

