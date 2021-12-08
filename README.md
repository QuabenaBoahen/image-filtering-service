# Udagram Image Filtering Microservice

Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

### Setup Node Environment

You'll need to create a new node server. Open a new terminal within the project directory and run:

1. Initialize a new project: `npm i`
2. run the development server with `npm run dev`

### Prerequisite for deployment

You must have installed AWS EB cli before following the steps below. 

You can follow this link https://aws.amazon.com/getting-started/hands-on/set-up-command-line-elastic-beanstalk/ to install and setup EB cli

### Deploying the system to AWS Elastic Beanstalk

1. Setup a new EB application by entering the following command: `eb init` and selecting/providing appropriate values for setting up the project for deployment
2. After the completion of step 1 above, a `config.yml` file which will serve as the configuration file for the project is created in a new directory known as `.elasticbeanstalk`
3. Run `npm run build` to transpile and package our code into a .zip file
4.  Add this `deploy:
               artifact: ./www/Archive.zip` to the `config.yml` to tell Elastic Beanstalk to use this Archive.zip file for deployment
5. Finally, run `eb create` to create a setup of AWS Resources necessary to run the application

### Screenshots of successful deployment
![](https://github.com/QuabenaBoahen/image-filtering-service/blob/master/deployment_screenshots/image-filtering-service-boahen-deployment-screenshot.png) 

### Credited links

1. Specifics of npm's package handling - (https://docs.npmjs.com/cli/v8/configuring-npm/package-json)
2. How to display image from http request to external API with Node.js - (https://pretagteam.com/question/how-to-display-image-from-http-request-to-external-api-with-nodejs)


