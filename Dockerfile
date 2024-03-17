FROM node:21-slim as build
USER node
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --force

COPY . .
RUN npx prisma generate
RUN npm run build

####################
FROM node:21-slim as production
ENV NODE_ENV production
WORKDIR /usr/src/app

# Resolve prisma binary target
RUN apt-get update -y && apt-get install -y openssl

COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/.env ./.env
COPY --from=build /usr/src/app/package.json .
COPY --from=build /usr/src/app/package-lock.json .

EXPOSE 3000
CMD [ "npm", "run", "start:migrate:prod" ]
