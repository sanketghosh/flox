all: client-install api-install

client-install:
	cd client && pnpm install

api-install:
	cd api && pnpm install



client-run:
	cd client && pnpm run dev

api-run:
	cd api && pnpm run dev