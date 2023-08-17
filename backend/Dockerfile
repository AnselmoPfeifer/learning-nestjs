ARG image_base

FROM ${image_base} as build

USER node
WORKDIR /src

# Copy package management files
COPY package*.json  ./
COPY prisma         ./prisma/

# Install app dependencies
RUN npm install

# Copy over project files
COPY . .

# Run build and create package
RUN mkdir app \
    && npm run build \
    && cp -r dist node_modules prisma package*.json app

# Keep layers small \
# One of the best things you can do to speed up image building is to
# just put less stuff into your build. Fewer parts mean the cache stays smaller.
FROM ${image_base}
ARG database_url
ENV NODE_ENV=production

# Install system dependencies
RUN apt-get update \
    && apt-get update -y \
    && apt-get install -y openssl procps

USER node
WORKDIR /src
COPY --from=build /src/app  .

RUN npm install prisma@5.1.1 \
    && echo "DATABASE_URL=${database_url}" > .env

EXPOSE 3000
