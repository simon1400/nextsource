#!/bin/bash
set -e

cd /app

if [ ! -d "/app/node_modules" ]; then
    yarn install
    npm run build
fi


npm run start