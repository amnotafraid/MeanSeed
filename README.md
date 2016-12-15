<a id="top"></a>
#JUnk
* [Introduction](#intro)

* [Build the Code](#build)

* [Run the Code](#run)

* [View of Front Page](#front-page)

* [Host the Code](#host)

<a id="intro"></a>
##Introduction [top](#top)

While I was learning the MEAN stack, I worked through several tutorials. One tutorial that formed the basis for my development was [this one](https://www.gitbook.com/book/amnotafraid/i-mean-it/edit#) by J. Cole Morrison. He separated the client part, or the Angular part, from the server part, or the Node and Express part.
<a id="build"></a>
##Build the Code [top](#top)
Some version info:

```
node -v
v6.0.0
```
If you have Node, Mongo, Bower, Compass, and Git installed on a Mac OSX computer, you can deploy the MeanSeed application as follows. These directions should work for a Windows environment with some modifications.

First, clone the MeanSeed code. In the directory where you want the root, do a git clone. It will create a MeanSeed directory and get all the code inside that directory:
```
git clone https://github.com/amnotafraid/MeanSeed.git
```
In the MeanSeed directory, you want a directory structure for your data that looks like this:
```
└─data
     ├── db
     └── logs
```
You can get that by going inside the MeanSeed directory and typing:
```
mkdir -p data/db && mkdir data/logs
```
In the MeanSeed/client directory, install the software needed like this:
```
npm install
bower install jquery
```
In the MeanSeed/server directory:
```
npm install
```
<a id="run"></a>
##Run the code [top](#top)
In the MeanSeed directory, start mongo with the following command:
```
mongod --dbpath data/db/ --logpath data/logs/mongodb.log --logappend
```
Start the software in the client directory, MeanSeed/client:
```
grunt serve
```
This should open a browser at localhost:9000, but you can close it because you don't need it. 
Start the software in the server directory, MeanSeed/server:
```
npm test
```
Open up a browser at http://localhost:3000. You should see your app:

<a id="front-page">
##</a> [top](#top)

![meanseed front page](https://cloud.githubusercontent.com/assets/1727761/21093854/abdd6b3a-c019-11e6-9e5a-d17f72920dc6.png)
<a id="host"></a>
##Host the code [top](#top)
I have instruction on how to host this code [here](https://amnotafraid.gitbooks.io/i-mean-it/content/hosting_on_bitnami.html)

