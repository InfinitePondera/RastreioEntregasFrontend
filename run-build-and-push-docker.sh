#!/bin/bash

npm run build

docker system prune -af

docker build -t tracking-web .

docker login

docker tag tracking-web:latest jeffreyutfpr/dio/tracking-web:latest

docker push jeffreyutfpr/dio/tracking-web:latest