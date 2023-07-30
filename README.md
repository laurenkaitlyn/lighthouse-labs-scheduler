# Interview Scheduler

Interview Scheduler is a single-page application (SPA) that allows users to book technical interviews between students and mentors. Appointments can be between the hours of 12 PM and 5 PM, Monday to Friday. Each appointment has one student and one interviewer. When creating a new appointment, the user can enter any student name while the interviewer is chosen from a predefined list. The user can save the appointment and view the entire schedule of appointments on any day of the week. Appointments can also be edited or deleted. The front end of this project is built with React and makes requests to an API to fetch and store appointment data from a database.

## Setup

Install dependencies with `npm install`.
This application requires an API server to run:

https://github.com/lighthouse-labs/scheduler-api

Run these servers simultaneously

## Running Webpack Development Server
The Interview Scheduler project has been tested with Node v12.22.x (Vagrant & WSL) and v15.14.0 (M1) and may not work with a newer version. Please ensure that you are using this version of node.
```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Main Page:

<img width="1430" alt="Screenshot 2023-07-19 at 1 35 07 AM" src="https://github.com/laurenkaitlyn/lighthouse-labs-scheduler/assets/68622003/c3b3b7cb-15fb-46a1-b812-b6583ab50408">

## Booking New Appointment:

<img width="1263" alt="Screenshot 2023-07-19 at 1 38 40 AM" src="https://github.com/laurenkaitlyn/lighthouse-labs-scheduler/assets/68622003/088eb03b-2855-40fb-b1a9-74805b14888e">

## Editing appointments:

<img width="1433" alt="Screenshot 2023-07-19 at 1 35 19 AM" src="https://github.com/laurenkaitlyn/lighthouse-labs-scheduler/assets/68622003/ba144604-1734-4a6b-9e58-56648496e81b">

## Delete Appointment Confirmation:

<img width="1433" alt="Screenshot 2023-07-19 at 1 35 41 AM" src="https://github.com/laurenkaitlyn/lighthouse-labs-scheduler/assets/68622003/521d78a6-e1d3-4a72-81fd-550294a182a1">
