proba:
	echo 'Well done!'

install:
	npm install

start:
	npm run babel-node -- src/index.js
	npm run babel-node -- src/bin/brain-games.js

publish:
	npm publish
