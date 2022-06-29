<h1 align="center">TodoApp</h1>

<div align="center">
  <img src="https://github.com/X-VINCENT/WebPool/blob/main/TodoApp/assets/icon.png" width="400px" alt="icon">
</div>

## :beginner: Introduction
The TodoApp is a TodoList Application, like Trello.<br />
This app is made with Vue.js for the frontend part and with Node.js/MySQL for the backend part.<br />
In this app, you can add, remove and update tasks.<br />
For each task, you can define a title, a description, a status and a color.

## :ledger: Index

- [Usage](#zap-usage)
  - [Installation](#electric_plug-installation)
  - [Commands](#package-commands)
- [Development](#wrench-development)
  - [Pre-Requisites](#notebook-pre-requisites)
  - [Build](#hammer-build)  
  - [Deployment](#rocket-deployment)  
- [Community](#cherry_blossom-community)
  - [Contribution](#fire-contribution)
- [Gallery](#camera-gallery)
- [Credit/Acknowledgment](#star2-creditacknowledgment)

## :zap: Usage

###  :electric_plug: Installation
- First, you have to clone this repo.<br />
- To install the needed dependecies for the server, go to <a href="https://github.com/X-VINCENT/WebPool/tree/main/TodoApp/server">TodoApp/server</a> then run :
```
$ npm install
```
- Then you have to rename the .env.example to .env and set the PORT to 8081, the HOST to the host of your MySQL Database, the USER to a user registered in MySQL, the ROOT_PASSWORD to the password of the user and the DATABASE to todoapp-db.<br />
- Then run : 
```
$ mysql -u "put_your_user_here" -p"put_the_password_of_the_user_here" < sql/todoapp.sql
```

- To install the needed dependecies for the client, go to <a href="https://github.com/X-VINCENT/WebPool/tree/main/TodoApp/client">TodoApp/client</a> then run :
```
$ npm install
```

###  :package: Commands
- To launch the server, go to <a href="https://github.com/X-VINCENT/WebPool/tree/main/TodoApp/server">TodoApp/server</a> then run :
```
$ npm run start
```
- To launch the client, go to <a href="https://github.com/X-VINCENT/WebPool/tree/main/TodoApp/client">TodoApp/client</a> then run :
```
$ npm run serve
```
- Then you can go to <a href="http://localhost:8080">localhost:8080</a> and you're in.

##  :wrench: Development
If you want other people to contribute to this project, this is the section, make sure you always add this.

### :notebook: Pre-Requisites
List all the pre-requisites the system needs to develop this project.
- MySQL
- @vue/cli
- A browser ;)

###  :hammer: Build

### :rocket: Deployment

## :cherry_blossom: Community
If you think the is something missing on the app, create an issue.

 ###  :fire: Contribution

 Your contributions are always welcome and appreciated. Following are the things you can do to contribute to this project.

 1. **Report a bug** <br>
 If you think you have encountered a bug, and I should know about it, feel free to report it [here]() and I will take care of it.

 2. **Request a feature** <br>
 You can also request for a feature [here](), and if it will viable, it will be picked for development.  

 3. **Create a pull request** <br>
 It can't get better then this, your pull request will be appreciated by the community. You can get started by picking up any open issues from [here]() and make a pull request.

 > If you are new to open-source, make sure to check read more about it [here](https://www.digitalocean.com/community/tutorial_series/an-introduction-to-open-source) and learn more about creating a pull request [here](https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github).


##  :camera: Gallery
<div align="center">
  <img src="https://github.com/X-VINCENT/WebPool/blob/main/TodoApp/assets/full_screen.png" alt="icon">
</div>
<div align="center">
  <img src="https://github.com/X-VINCENT/WebPool/blob/main/TodoApp/assets/short.png" alt="icon">
</div>
<div align="left">
  <img src="https://github.com/X-VINCENT/WebPool/blob/main/TodoApp/assets/create_task.png" width="49.5%" alt="icon">
  <img src="https://github.com/X-VINCENT/WebPool/blob/main/TodoApp/assets/edit_task.png" width="49.5%" alt="icon">
</div>

## :star2: Credit/Acknowledgment
<a href="https://github.com/X-VINCENT">@X-VINCENT</a>
