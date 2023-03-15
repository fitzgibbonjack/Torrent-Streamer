# PTO - Second Screen (FE)

## Project Overview

-  Release: 1.0.0
-  Project Owner: Jake Levell
-  Developer(s): Jack Fitzgibon, Jake Levell
-  <a href="https://teamcity.ops.designbysweet.com/project/PtoSecondScreenFrontend?mode=builds" target="_blank">
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/TeamCity_Icon.png" alt="TeamCity Deployments" height="16 " style="vertical-align: middle">
        TeamCity Deployments
    </a>
-  <a href="https://wearesweetltd.monday.com/boards/3861167327/views/87579200" target="_blank">
       <img src="https://s3.amazonaws.com/general-assets/monday-200x200.png" alt="Monday Board" height="16 " style="vertical-align: middle">
       Monday Board [March Subscription]
   </a>

## Requirements

-  Docker - https://docs.docker.com/get-docker/
-  docker-compose - https://docs.docker.com/compose/install/
-  Traefik - https://github.com/WeAreSweet/WAS-Traefik-Proxy

## Running the application locally

-  Set up the <a href="https://github.com/WeAreSweet/PTO-SecondScreen" target="_blank">API</a>
-  Populate .env file from <a href="https://start.1password.com/open/i?a=U72PMWVNJ5BNVAA5IKYVRBFZB4&h=my.1password.com&i=yazh3p6dloknxhe5nh26r6jzgu&v=7nsmaq5xfn6kzuix3hfj6krfoy">here</a>
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

| Environment |                       URL                       |
| ----------: | :---------------------------------------------: |
|       Local |              http://localhost:3000              |
|         Dev | http://secondscreen-frontend.dev.protriathletes.org  |
|        Test | http://secondscreen-frontend.test.protriathletes.org |
|  Production | https://secondscreen-frontend.protriathletes.org |
