# Project Management App

This project allows for teams to collaborate on various project. It uses Firebase as a serverless tool for the backend and React for the frontend development.

## What the app looks like
![image](https://user-images.githubusercontent.com/46341318/162326295-9860595c-7e78-4abc-8a13-9c5046eee0fc.png)

## How to run the app
1. Either fork or download the app and open the folder in the cli.
2. Install all dependencies using 'npm i' command.
3. Start the web server using 'npm start'. This will run React on port at http://localhost:3000/

## How to create a project
1. Create an account by clicking on the sign up button if you're connecting for the first time.
2. After accessing the dashboard homepage, click on "New Project" that redirects to the create project page.
3. Select the project title, write the project details, set a due date, a category, assign the project to one or multiple members, click "Add project".
4. You are redirected to the dashboard page with the newly project created.

## User Stories
- A user must sign up to have access.
- When connected, a user views the dashboard.
- A user can create a project.
- A user can comment on a project.
- A user can assign one or more users to a project.
- A user can see who is connected.
- A user can filter projects based on their category.
- A user who created a project is the only one who is able to archive the project.

## Features
- Authentication
  - account settings are stored in Firebase.
  
- Creating a project
  - projects are stored in Firebase.
  - projects created are displayed on the dashboard page.

- Display users who created accounts
  - these users can be assigned to any project
  - users who are connected can be visible
  - users credentials are stored in Firebase

- Assign one or more users to a project

- Display thumbnails for each users
  - when creating an account, users must uplaod an image.

- Add comments to projects
  - comments are displayed on the project detail page.

- Filtering the projects based on their category
  - the filter selection is displayed on the dashboard page.

## Dependencies
- firebase
- date-fns
- react-router-dom
- react-select

