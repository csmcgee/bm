# Useful commands
docker run -v $(pwd):/app -w /app -u $(id -u) -p 3000:3000 -p 9229:9229 node:carbon npm run debug