FROM node:14-alpine as builder
WORKDIR /usr/app
COPY package.json yarn.lock ./
RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn yarn
COPY . ./
RUN yarn build

FROM node:14-alpine
WORKDIR /usr/app
COPY package.json yarn.lock ./
RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn yarn --prod
COPY --from=builder /usr/app/dist ./
EXPOSE 4000
CMD ["node", "dist/index.js"]
