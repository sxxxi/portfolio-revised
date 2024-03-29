FROM node:21-alpine
WORKDIR /frontend
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY . .
RUN npm run build
ENTRYPOINT npm run dev


