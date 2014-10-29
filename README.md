# README

Very lean starting point for a js kata, with node, and jasmine.

Once you are set up with the prerequisites, delete the existing kata code and do what you wish but apply the node module approach: module.exports in implementation js, and require assignments in the spec.js

## Setting up the prerequisites

A. To install node js go to http://nodejs.org/download/ and install.

B. To install jasmine-node globally: 

> npm install jasmine-node -g

C. That's it your good to go.

## Running the tests

Autotest when tests change and run the tests when the code changes. Nice.

> jasmine-node spec --autotest --watch code --color --verbose

Or to run tests manually

> jasmine-node specs/*spec.js

Please excuse the ridiculous FizzBuzz example kata code. This was for a coding workout and entertainment purposed only.