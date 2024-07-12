all: client-install api-install

client-install:
	cd client && npm install

api-install:
	cd api && npm install



client-run:
	cd client && npm run dev

api-run:
	cd api && npm run dev