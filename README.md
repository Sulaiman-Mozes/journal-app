# My Journal App

## Live Application
 - https://journal--app.herokuapp.com/

## Product Description

## Set up 

- Ensure that node and yarn are installed

- Clone the Journal App repo and cd into it
    ```
    git clone https://github.com/Sulaiman-Mozes/journal-app.git
    ```
- Install Dependencies
    ```
    yarn install
    ```

- Create Application environment variables and save them in .env-sample file
    ```
    MONGODB_URI = " "
    PORT=7777
    SECRET="hello"
    BASE_URL= "http://localhost:7777/"
    ```

- Run application.
    - Development Server
        ```
        yarn start:dev

        yarn start:dev
        ```
    - Build
        ```
        yarn build
        ```
    - Run Production
        ```
        - Make sure you build first
        
        yarn  start
        ```
    - Run Linter
        ```
        yarn lint
        ```
    - Fix Linter Errors
        ```
        yarn lint --fix
        ```

- Running Tests
     - To run tests, run the command below.
        ```
        yarn test
        ```
    - To run  and check for test coverage. Run the command below:
        ```
        yarn test:cov
        ```
 

## Built with
- JavaScript
- React/Redux
- Node/Express
- MongoDB

## Contribution guide
##### Contributing
When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.This Project shall be utilising a [GitHub Issues](https://github.com/Sulaiman-Mozes/journal-app/issues) to track  the work done.

 ##### Pull Request Process
- A contributor shall identify a task to be done from the [GitHub Issues](https://github.com/Sulaiman-Mozes/journal-app/issues) .If there is a bug , feature or chore that has not be included among the tasks, the contributor can add it only after consulting the owner of this repository and the task being accepted.
- The Contributor shall then create a branch off  the ` develop` branch where they are expected to undertake the task they have chosen.
- After  undertaking the task, a fully detailed pull request shall be submitted to the owners of this repository for review.
- If there any changes requested, it is expected that these changes shall be effected and the pull request resubmitted for review. Once all the changes are accepted, the pull request shall be closed and the changes merged into `develop` by the owners of this repository.
