# Project Overview

This project encompasses three key components: a TypeScript algorithm, a ReactJS component, and a PostgreSQL view, each fulfilling distinct requirements.

## TypeScript Algorithm

### Description
Generates a sequence of alternative Monday's dates between a specified start and end date.

### Usage
```typescript
run 'node task1'
```
adjust dates accordingly in the task1/index.js file to get desired output

# ReactJS App

### Description
Generates a sequence of alternative Monday's dates between a specified start and end date.

### Assumptions

- I assumed that the calendar is only for the five working days of the week
- Provided no detail of selection of a time slot , I have assumed that one slot can be selected each day.
- Provided no functionality, I have just assumed that light greens are available slots and dark green are selected
- I have assumed that the default start week will be the current day if today is weekday and next week if today is weekend 

## Available Scripts

In the project directory, you can run:

### `yarn`
### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# PostGres View

## Description
This view provides sum of duration worked grouped by provider , date and status

### Usage
```SELECT * 
FROM provider_work_summary
WHERE status = 'APPROVED'
```