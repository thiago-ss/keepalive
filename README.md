# ![](https://media-exp1.licdn.com/dms/image/D4D1BAQGQ8QujYTIUAQ/company-background_10000/0/1657021490626?e=2147483647&v=beta&t=bckhfmwztaIsJX-uV5h5b7izIeXcVSQpgSBcXFY9Hno)

<div align="center">
  <a href="https://github.com/features/actions" title="Go to GitHub Actions homepage"><img src="https://img.shields.io/badge/CI-GitHub_Actions-blue?logo=github-actions&logoColor=white" alt="Made with GH Actions"></a>
  <a href="https://www.docker.com/" title="Go to Docker homepage"><img src="https://badges.aleen42.com/src/docker.svg" alt="Made with Docker"></a>
  <a href="https://angular.io/"><img src="https://badges.aleen42.com/src/angular.svg"></a>
  <a href="https://jasmine.github.io/"><img src="https://badges.aleen42.com/src/jasmine.svg"></a>
</div>

# About
This project was made as a way of learning and finishing my front-end internship with Angular at [`Compass UOL`](https://compass.uol/en/home/), using [Firebase Auth](https://firebase.google.com/docs/auth), [Docker](https://www.docker.com/) and [Storybook](https://storybook.js.org/)

# Required packages
- [Node 18.x](https://nodejs.org/en/download/)
- [Angular 14.x](https://angular.io/guide/setup-local)

# Usage
Download the .zip file or clone the repository into your computer, open a terminal and run:

    npm install

to install all the dependencies.

Once it's installed, run:

    npm run start

and open [localhost on port 4200](https://localhost:4200).

<hr>

To see the unit tests with Jasmine and Karma, run:

    npm run test

It will open a Chromium browser with the results. 
You can change to the browser of your choice in the `karma.conf.js` file.


See the documentation [here](http://karma-runner.github.io/0.10/config/browsers.html).

<hr>

And last but not least, you will have to create a folder called `environments` inside the `src` folder.

Inside the new folder, create a file named `environment.ts` and put the Firebase and the API information.

You can check the `environmentExample` file to see the format and [Comments](#a-namecommentsa-comments) section to know how to get those informations.


# <a name="comments"></a> Comments
1. The design is available on [Figma](https://www.figma.com/file/mzmik9rL894EglsraZbN8P/keepalive?node-id=0%3A1)
2. This project uses the Open Weather Map, so make sure to get your own API key by signing up [here](https://home.openweathermap.org/users/sign_up).
3. Just like the API, Firebase also needs some information to work. You can follow [this](https://codinglatte.com/posts/how-to/how-to-setup-firebase-for-angular/) tutorial from Coding Latte to setup it.
4. This project is for educational purposes only, but feel free to use it however you want/need.
