# Local Setup for Nest Api

- Using node version 16: nvm use 16.13.0
- Install nestjs/cli: npm install -g @nestjs/cli
- Install class validator: npm install class-validator

- Create new Nest Resource: nest generate resource categories
- Create new Module: nest generate module prisma
- Create new service: nest generate service prisma/prisma
- Create Videos resources - nest generate resource videos

## Database Migration

- npm install @prisma/client
- npx prisma init
- npx prisma studio (to start local database studio)
