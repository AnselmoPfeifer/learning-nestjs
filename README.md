# Leaning NestJS

## About

On this repository we have backend api using nestjs.

- VSCode Extensions:
  - REST Client
  - Prisma
  - Dev container

## How to start on development

To start backend, we need to access the api folder and install all dependencies, start database server, and run the prisma database migration.`

```
cd backend
npm install
docker-compose up -d database
npx prisma generate
npx prisma migrate deploy
npm run start:dev
```

## To deploy in another environment

`docker-compose up -d --build`

- Using REST Client extension on VSCode we can check all requests on api.http file.

## Improviments

To improve the Compile time in around 20x we can use swc (Rust-based platform for the Web),
SWC is 20x faster than Babel on a single thread and 70x faster on four cores.

```
npm install --save-dev @swc/cli @swc/core
```

Update the next-cli.json file to add this new compile time dependency

```
{
  "$schema": "https://json.schemastore.org/nest-cli",
  "collection": "@nestjs/schematics",
  "sourceRoot": "src",
  "compilerOptions": {
    "deleteOutDir": true,
    "builder": "swc",
    "typeCheck": true
  }
}
```
