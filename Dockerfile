FROM node:16.14

WORKDIR /app

COPY package*.json pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN pnpm install

COPY . .

RUN pnpm run build

EXPOSE 3000

CMD ["pnpm", "dev"]
