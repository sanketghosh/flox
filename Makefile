npm: npm-client-install npm-api-install
pnpm: pnpm-client-install pnpm-api-install

npm-client-install:
	cd client && npm install

npm-api-install:
	cd api && npm install

pnpm-client-install:
	cd client && pnpm install

pnpm-api-install:
	cd api && pnpm install

