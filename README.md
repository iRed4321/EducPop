# EducPop project

A web application developed with spring by **Arwlowloh** that allows anyone to create a Popular Education session of BubblePop !
The animator connects to the app to launch a new session that any user can join with a temporary URL. Then, everyone in the session can send words that are going to grow following the number of people who suggested it !

## Deployment

Docker must be installed and working on your server and your port 2223 must be available.
After cloning the project, you can run the following command to deploy the app :

```bash
docker-compose up
```
You can now access the app on your server from [http://localhost:2223](http://localhost:2223)

## Development environment

### Requirement

+ Java 17 or higher
+ Maven
+ Docker or PostgreSQL

### The database

The app need to be connected to a PostgreSQL database to work. You can either run a preconfigured docker container that will make the database available on port 5433 or run your own database.

#### With docker (recommended)

```bash
docker-compose up db
```

#### With your own database

You can run your own database on your machine or on a server.
You need to create a database named `app` and a user `user` with the password `pass` that have all the rights on the database. The database must be available on port `5433`.

### Backend Development

First you have to make the project frontend available by spring by running :

```bash
mvn clean
mvn clean
mvn clean package -DskipTests
mvn spring-boot:run
```
Your backend is now available on [http://localhost:8080](http://localhost:8080) !
Your changes will be automatically reloaded when you save your java files.

### Frontend Development

To work on the react frontend, you first need to start the backend server with :

```bash
mvn clean
mvn clean
mvn clean
mvn spring-boot:run
```
Then, open an other terminal and enter theses commands:

```bash
cd src/main/frontend
npm start
```

You are now ready to work on the frontend at localhost:3000. The server will automatically reload when you save your changes.

**Note about Node:** The frontend is using node 21.4.0. If you have a much lower version, you can have bugs. In this case, you can either upgrade your node version or run ```build/node/npm start``` instead of ```npm start```.