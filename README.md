# README

Very lean starting point for a js kata, with node, and jasmine.

To install jasmine-node globally

> npm install jasmine-node -g

To simply run the tests

> jasmine-node specs/*spec.js

Autotest when tests change and run the tests when the code changes. Nice.

> jasmine-node spec --autotest --watch code --color --verbose

Or from within the spec dir if just working with spec and inline classes for kata

> jasmine-node spec.js --autotest --watch . --color --verbose