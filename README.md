# BoardDom - A react app

This app was built to be the frontend of my previously created API.

It utilises React.js, react-router-dom, Axios, dayjs and FontAweome

---
## Hosted frontend

- https://elegant-begonia-da9051.netlify.app/

## Repo and hosted backend

- https://github.com/MattLBC/backend-project-heroku 
- https://boargames-backend.herokuapp.com/api  

---

## Available Endpoints

The available endpoints for the site

#### `/`

Home page of the site, displays all reviews.
Can toggle ascending/descending (default is date posted)

#### `/category/:category`

Accessed through dropdown menu in the top left

Allows users to filter by given category of boardgame

#### `/reviews/sort_by/:sort_by`

Accessed through dropdown menu in the top left

Allows users to filter by given sort choice

#### `/review/:review_id`

A page displaying a given review, associated image and info about the review. 

Also has an optional comments section that can be viewed if desired. Controlled by toggle button.

If you are logged in you are also able to comment and delete comments you have posted. If not provides link to log in page.

#### `/login/`

Page that allows users to log in. User is stored in local storage so doesn't expire between sessions. 

Also displays current logged in user and associated information.

---

### Error endpoints

#### `/review/:invalid_review_id`
#### `/reviews/sort_by/:invalid_category`
#### `/*`

Returns different error pages for each eendpoint errors

---

### Additional functionality

Can vote on reviews and comments, once per render.

---

## Set-up 

If you wish you use this repo locally you will need to do the following steps;

---

- ### Cloning

Follow [this link](https://github.com/MattLBC/nc-games) to the github repo hosting the project.

In your terminal navigate to the directory you wish to store the repo in, then run the following command

```
git clone REPO_URL_HERE
```

For any issues or further instructions please check the github docs on [cloning a repo](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

---

- ### Dependencies 

To install all dependencies required for the app to run use the following command;

```
npm install
```

Your package.json should now contain the following:

```
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^0.27.2",
    "dayjs": "^1.11.3",
    "react": "^18.1.0",
    "react-dom": "^18.1.0",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  }
```
If you are missing any packages, run the following for each package

```
npm install PACKAGE_NAME_HERE
```

For further info please view check the docs for each package.

---


### Minimum node version 
- v17.6.0