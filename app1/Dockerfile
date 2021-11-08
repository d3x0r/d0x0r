
FROM d3x0r/node-alpine-run as d3x0r-node-alpine
WORKDIR /app

copy db /
COPY src src
#RUN yarn install --production
#CMD ["node", "src/index.js"]
CMD ["node"]
