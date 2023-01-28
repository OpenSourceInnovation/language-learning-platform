FROM node:16.19.0 As development

WORKDIR /backend

COPY package*.json ./

COPY prisma ./prisma/

RUN npm install --only=development

RUN npx prisma generate

COPY . .

RUN npm run build

FROM node:16.19.0 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /backend

COPY package*.json ./

COPY prisma ./prisma/

RUN npm install --only=production

RUN npx prisma generate


COPY . .

COPY --from=development /backend/dist ./dist

CMD ["node", "dist/main"]