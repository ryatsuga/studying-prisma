# Studying Prisma

## Getting Start

1. Run 'yarn' to install dependencies
2. Run 'docker-compose -f k8s/stack.yml -p ignitenodejs up -d' to run a docker container with postgressql + adminer
3. Create a .env file with the content in the .env.example
4. Run 'yarn prisma generate' to generate Models and 'yarn prisma migrate dev' to create database schema
5. Write some code on server.ts file and run it with 'yarn ts-node-dev server.ts'
