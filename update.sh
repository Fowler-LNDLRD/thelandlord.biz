#!/user/bin/bash

set -e

pm2 stop website && git pull && npm i && npm run build && pm2 start website && pm2 logs website
