# EducPop project

A web application developed with spring by **Arwlowloh** that allows anyone to create a Popular Education session of BubblePop !
The animator connects to the app to launch a new session that any user can join with a temporary URL. Then, everyone in the session can send words that are going to grow following the number of people who suggested it !

## Installation

### Requirements

Docker

### Build and run the app

```bash
    cd EducPop & docker-compose up
```

## Development environment

### Requirement

+ Java 17 or higher
+ Maven
+ Docker

### Run the DB

```bash
    cd EducPop & docker-compose up db
```

### Run the app

```bash
    cd EducPop
    mvn install
    mvn spring-boot:run
```