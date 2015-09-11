## Ionic Workshop

This workshop is designed for students in mind. You do not need prior programming experience to follow this guide. To make ths best of this workshop, getting some experience with JS is advised though not required. 

*This template does not work on its own*. It is missing the Ionic library, and AngularJS.

To use this, either create a new ionic project using the ionic node.js utility, or copy and paste this into an existing Cordova project and download a release of Ionic separately.

### Install Ionic:

This guide assumes you are using Cloud9 as an IDE with NodeJS pre-installed. You can fork this repository to begin. 

```bash
$ sudo npm install -g ionic cordova
$ ionic start myApp tabs
```
### Running the Ionic app:
Then, to run it, cd into `myApp` and run:

```bash
$ ionic serve -p $PORT --nolivereload

```
If you are asked which address to serve the app on. Chose 1 for the numbered IP address (don’t choose localhost).

Click the "Preview" button in the top menu in the IDE, and choose "Preview Running Application". This will open the Preview window for your running app.




