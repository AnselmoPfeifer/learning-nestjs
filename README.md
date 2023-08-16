# Leaning NestJS

On this repository we have backend api and frontend using nestjs.
VSCode Extensions:
- REST Client
- Prisma

* To start backend
- cd backend
- npm install
- npm run start:dev

To improve the Compile time in around 20x we can use swc
- npm install --save-dev @swc/cli @swc/core
- Update the next-cli.json file to add this new compile time dependency
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