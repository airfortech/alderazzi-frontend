# Alderazzi - Frontend

Webpage for one of https://arkadia.rpg.pl guild.

Most components are fully universal and customizable by many props, which allows for quick implementing new features.

<br>

## Live

https://ra-test.airm.ct8.pl

Password for all roles:

    test1234

<br>

## Alderazzi - Backend API

**Github:** https://github.com/airfortech/ra-panel-backend

Api used by mudlet (mud client) scripts too (lua language).

<br>

## Features

### Global errors from api handling on frontend. Returns info using react-query and react-toastify:

![img](/res/toastify.png)

### Custom Form component based on yup and react hook form (customizable by many props):

![img](/res/login.png)

![img](/res/form.png)

![img](/res/date.png)

### Custom Table component created from scratch (customizable by many props). I am going to create library from this component:

![img](/res/table.png)

![img](/res/enemies.png)

### Custom List component (customizable by many props):

![img](/res/list.png)

### Custom Prompt component (customizable by many props):

![img](/res/prompt.png)

### Custom Modal component (customizable by many props):


![img](/res/backup.png)

### Admin settings including manual and auto backup and changing password for all roles:

![img](/res/settings.png)

### Graph stats:

![img](/res/stats.png)

### Custom Button component (see screenshots above).

### Github actions:

- deploy to linux hosting (production and test servers),

<br>

## Tech Stack

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

<br>

## Additional Main Packages

axios - https://www.npmjs.com/package/axios

react query - https://www.npmjs.com/package/@tanstack/react-query

material ui - https://www.npmjs.com/package/@mui/material

react icons - https://www.npmjs.com/package/react-icons

yup - https://www.npmjs.com/package/yup

dayjs - https://www.npmjs.com/package/dayjs

jotai - https://www.npmjs.com/package/jotai

react-toastify - https://www.npmjs.com/package/react-toastify

nivo - https://github.com/plouc/nivo#readme

<br>

## Project Structure

in progress

<br>

## Run Project

Config file:

    src/config/.env

Development mode:

    npm start

Build Test app:

    npm run build:test

Build Production app:

    npm run build:production