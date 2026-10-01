# Node.js Demo App - CI/CD Pipeline

## Project Overview

This project demonstrates an automated CI/CD pipeline for a Node.js web application using GitHub Actions and Docker.

The pipeline automatically tests the application, builds a Docker image, logs in to Docker Hub, and pushes the Docker image to Docker Hub whenever code is pushed to the `main` branch.

## Technologies Used

- Node.js
- Git
- GitHub
- GitHub Actions
- Docker
- Docker Hub
- npm

## Application

The application is a sample Node.js web application.

It runs on:

```text
http://localhost:3000 

Health Check
http://localhost:3000/health
The health endpoint returns the application status.
CI/CD Workflow
The GitHub Actions workflow is located at:
.github/workflows/main.yml
Pipeline Flow
Developer pushes code
        |
        v
GitHub Repository
        |
        v
GitHub Actions
        |
        v
Checkout Code
        |
        v
Setup Node.js
        |
        v
Install Dependencies
        |
        v
Run Tests
        |
        v
Build Docker Image
        |
        v
Login to Docker Hub
        |
        v
Push Docker Image
        |
        v
Docker Hub
GitHub Actions Steps
The pipeline contains the following steps:
1. Checkout Code
Downloads the latest source code from the GitHub repository.
2. Setup Node.js
Sets up the Node.js environment required by the application.
3. Install Dependencies
Installs the project dependencies using npm.
4. Run Tests
Runs the automated application tests using:
npm test
5. Build Docker Image
Builds the Docker image using the project's Dockerfile.
6. Login to Docker Hub
Authenticates with Docker Hub using GitHub repository secrets.
The following secrets are used:
DOCKERHUB_USERNAME
DOCKERHUB_TOKEN
The Docker Hub access token is stored securely in GitHub Secrets and is not included in the source code.
7. Push Docker Image
Pushes the successfully built Docker image to Docker Hub.
Docker Hub Image
Docker Hub repository:
pooja3012/nodejs-demo-app
Docker image:
pooja3012/nodejs-demo-app:latest
The image was successfully published by the GitHub Actions CI/CD pipeline.
Run the Application Locally
Install dependencies:
npm install
Start the application:
npm start
Open:
http://localhost:3000
Run Tests Locally
Run:
npm test
Build Docker Image Locally
Build the image:
docker build -t nodejs-demo-app .
Run the container:
docker run -d --name nodejs-demo-app-container -p 3000:3000 nodejs-demo-app
Docker Hub Image Usage
The published image can be downloaded from Docker Hub using:
docker pull pooja3012/nodejs-demo-app:latest
It can then be started using:
docker run -d --name nodejs-demo-app-container -p 3000:3000 pooja3012/nodejs-demo-app:latest
Project Structure
nodejs-demo-app/
|
|-- .github/
| |-- workflows/
| |-- main.yml
|
|-- test/
| |-- app.test.js
|
|-- app.js
|-- dockerfile
|-- package.json
|-- package-lock.json
|-- .dockerignore
|-- .gitignore
|-- README.md
CI/CD Result
The GitHub Actions pipeline completed successfully with all major stages passing:
Checkout Code ✓
Setup Node.js ✓
Install Dependencies ✓
Run Tests ✓
Build Docker Image ✓
Login to Docker Hub ✓
Push Docker Image ✓
The Docker image is available on Docker Hub with the latest tag.
Repository
GitHub Repository:
https://github.com/poojajadhsam16-hash/nodejs-demo-app⁠�
