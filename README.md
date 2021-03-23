# google-books-react
# Unit 19 React Homework: Employee Directory

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## Table of Contents
* [Description](#description)
* [Links](#links)
* [User Story](#User_Story)
* [Acceptance Criteria](#Acceptance_Criteria)
* [Dependencies](#Dependencies)
* [Usage](#usage)
* [License](#license)

## Description
This application is a employee directory created with React. 

## Links
* Live Website: https://seattlesal-employee-directory.herokuapp.com/
* Github Link: https://github.com/SeattleSal/employee-directory-react

## User_Story
AS a manager or employee
I WANT to be able to view my entire employee directory at once 
SO THAT I have quick access to their contact information

## Acceptance_Criteria
Given a table of random users generated from the [Random User API](https://randomuser.me/), when the user loads the page, a table of employees should render. 

The user should be able to:

  * Sort the table by at least one category

  * Filter the users by at least one property.

## Dependencies
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Additional dependencies are:
* [axios](https://www.npmjs.com/package/axios) for making API calls
* [bootstrap](https://www.npmjs.com/package/bootstrap) for styling elements
* [react-bootstrap](https://react-bootstrap.github.io/) for styling the drop down. 
* [fontawesome](https://fontawesome.com/how-to-use/on-the-web/using-with/react) for phone and mail icons.

There is a `package.json` included, the following commands should be run to install dependencies:

```bash
npm i
```

## Usage
Use the links above to use the application live. If you prefer to run the application from your computer, you can use the following command after installing the dependencies:

```bash
npm start
```

The application displays a one page application listing the 25 random employees and their name, email, phone number and location. The user can search by first name and last name. The user can sort by first name or by last name. The user can contact the employoee by clicking on the phone number to call them or clicking on the email to start an email. 

See Screenshots:<br>
Directory: <br>
![Directory](./assets/screenshot.JPG)
<br>
Sort Options: <br>
![Sort Options](./assets/sort-options.JPG)

## License

MIT License

Copyright (c) [2021] [Sally Perez]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

