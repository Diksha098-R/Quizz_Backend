# Quizz_Backend
Backend for quizz app

This project is built to serve as a backend support for Quiz app. 

### Setup process:
Follow these steps to install & start the Backend server
```
git clone https://github.com/Diksha098-R/Quizz_Backend.git
```
```
cd ./Quizz_Backend
```
```
npm install
```
```
npm run build
```
```
npm start
```

These steps should start the backend server on port `3001`.

### Tech stack used:
- NodeJs
- Express
- Typescript

### Apis built:
- `GET`/list : To get all the questions of the quiz when user clicks on start button
- `POST`/question : To save the response of the user
- `GET`/score : To get the calculated result of the quiz.

PS: `POST`/question is the only one which is dummy, since there was no data layer added. Others are all working live.

### Score calculation:
```
(Total correct answers/Total questions)/100
```
