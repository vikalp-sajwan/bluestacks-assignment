# Created with Create React App

## Technologies used:
- React 17
- Styled-components for CSS-in-js
- Mock-service-worker for mocking actual backend, stored in local storage for persistence
- Also https://reach.tech/dialog and https://reach.tech/tabs
- Reset CSS by Chris Coyier(CSS-tricks)

## The project is quite generic so didn't feel to add any comments. Some points to note are:

- The code for mock api is here https://github.com/vikalp-sajwan/bluestacks-assignment/blob/master/src/mocks/handlers.js . It has only two endpoints, `/data` GET to get all campaign data and `/updateschedule` PUT to update time of an event and return complete updated data.
- Getting, managing in state and updating data is done in only this top-level component https://github.com/vikalp-sajwan/bluestacks-assignment/blob/master/src/components/MainContent.js
- Because there was a lot of ambiguity with respect to sample data(there was no event start and end time to figure out which will be live), I assumed that only upcoming campaigns can be Re-scheduled. So, the reschedule button in shown only for upcoming events and only time for them can be updated.
