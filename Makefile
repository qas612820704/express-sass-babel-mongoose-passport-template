.PHONY: dbserv dbclient test es6

dbserv:
	mkdir -p ./db
	mongod --port 20000 --dbpath ./db

dbclient:
	mongo --port 20000

test:
	@./node_modules/.bin/mocha
