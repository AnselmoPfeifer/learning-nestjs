# Local Setup for Nest Api

Link: https://www.youtube.com/watch?v=74Rks96yaAY
Time: 1:09:18

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
- npx prisma migrate dev
- npx prisma studio
