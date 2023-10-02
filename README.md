# Captcha Service
This project built using docker and there are two components:
2. **MongoDB**: database layer for the application. To store the question and answer for the captcha.
3. **Backend API**: RESTful API for the application.

## Getting started
To get started, you need to:

 - Create your own docker-compose.override.yml file by
    ```bash
    cp docker-compose.override.yml.dist docker-compose.override.yml
    ```
    you can change the mongodb port and the backend api port in the docker-compose.override.yml file.

 - Create an env file to store your fastify host and port and the and mongodb credentials.
    ```bash
    cp .env.dist .env
    ```

 - Run the following command to build the project:
   ```bash
   docker-compose build 
   ```

 - Build the dependencies needed for the project:
   ```bash
   docker-compose run --rm app npm install
   ```

 - Run the project:
   ```bash
   docker-compose up -d
   ```

## Behaviour
The backend API is built using Fastify and it exposed two endpoints:
1. GET /captcha - returns a captcha question and answer
2. GET /validate - validates the captcha answer

## Tests
To run the tests, you need to:
```bash
docker-compose run --rm app npm test
```
For manual testing, you can use the postman collection in the project root folder postman