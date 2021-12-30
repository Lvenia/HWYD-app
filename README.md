# Web Application "How Was Your Day"

A tool for tracking how everyday actions affect a person's well-being.

<a href="https://hwyd.kresinska.com/" target="_blank">Go to the app</a>

---
### Technical Keys 

* single-page React application build of React class components;
* client-side routing with React Router v5;
* state managed with Redux;
* HTTP requests with axios;
* responsive design;
* styled with React Bootstrap and styled-components;
* data visualization with react-chartjs-2 charting library;
* unit-testing with Mocha and Chai;
* CI/CD with CircleCI pipeline.

This is my first React based application, intended as an opportunity to learn the React Ecosystem and apply acquired knowledge. 
I was responsible for the idea, design and frontend implementation.

---
### Main features

1. Home page with conditional rendering depending on the user login status.
2. Quiz section where user rates his day and answers short questions about the quality of his sleep, nutrition, hydration, and daily activities.
3. Gathered information gets interpreted into keywords and points and shown in Day Review and Overview sections respectively.
4. Day Review section contains a date picker and a corresponding to the picked date summary cards.
5. Overview page consists of a chart area and a modal with information about the point system.
6. The X-axis of the chart shows dates, two Y-axis show quiz points and the day rating.
7. Points awarded in each quiz category are shown as a bar chart in the week and month time period range while the monthly average points are shown in the year range.

 ![](./screenshots/hwyd-app.gif)
