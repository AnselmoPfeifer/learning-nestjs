# Local Setup for Nest Api

Link: https://www.youtube.com/watch?v=74Rks96yaAY
Time: 1:09:18

- Using node version 16: nvm use 16.13.0
- Install nestjs/cli: npm install -g @nestjs/cli

- Create new Nest Resource: nest generate resource categories
- Create new Module: nest generate module prisma
- Create new service: nest generate service prisma/prisma

## Database Migration

- npm install @prisma/client
- npx prisma init
- npx prisma migrate dev
- npx prisma studio
- nest generate module prisma