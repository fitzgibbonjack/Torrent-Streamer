# PTO - Second Screen (FE)

## Project Overview

-  Release: 1.0.0

## Requirements

-  Docker - https://docs.docker.com/get-docker/
-  docker-compose - https://docs.docker.com/compose/install/
-  Traefik - https://github.com/WeAreSweet/WAS-Traefik-Proxy

## Running the application locally

-  Set up the API
-  Populate `.env` file using `.env.example` for reference
-  Run `docker-compose up -d`
-  Visit the local url specified in [access](#access) section

## Standards, Conventions, Caveats etc.

-  This project uses TypeScript to enforce types. Avoid using the `any` type as this provides no value in terms of type checking.
-  Variant of <a href="https://sass-guidelin.es/#the-7-1-pattern" target="_blank">7-1 architecture</a> for SCSS file structure.
-  <a href="http://getbem.com" target="_blank">BEM</a> for SCSS/CSS methodology.
-  Check `.editorconfig` for indentation, max line length, etc.
-  Rems to be used for measurement in SCSS. Pixels can be converted with the `calc-rem` function.
-  When installing a new NPM package, ensure you rebuild and restart the Docker container by running `docker-compose down` followed by `docker-compose up -d --build`.
-  Global styles must be imported within the `gatsby-browser.js` file.
-  SCSS modules are used within the project, providing performance benefits over traditional import methods. More information can be found [here](https://www.gatsbyjs.com/docs/how-to/styling/css-modules/).

## Access

| Environment |          URL          |
| ----------: | :-------------------: |
|       Local | http://localhost:3000 |
|         Dev |                       |
|        Test |                       |
|  Production |                       |
