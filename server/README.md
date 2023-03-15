# Express Starter Project

## Stack

-   MySQL (database)
-   Express (API framework)
-   Typescript (static types)
-   Prisma (object-relational mapping)

## Local Development

-   Create an `.env` file within the /src directory
    -   Set the `DATABASE_URL` variable to "mysql://root:root@local-mysql:3306/database-name-here"
-   Run `docker-compose up -d`
-   Visit the local url specified in [access](#access) section
    -   Should return JSON object with the key-value pair `"active": true`.
-   Run `docker exec -it express-starter_api_1 sh`
    -   Run `cd src && primsa migrate:database`

## Access

| Environment | URL                    |
| ----------- | ---------------------- |
| Local       | http://localhost:3000/ |
