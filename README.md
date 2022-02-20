## Getting Started

A Next.js starter kit with [Sign-in With Ethereum]('https://docs.login.xyz/') + [ethers.js]('https://docs.ethers.io/v5/') + [iron-session]('https://github.com/vvo/iron-session')

> **Note**: This is a barebones, fairly unopinionated implementation of Sign-in with Ethereum authentication that requires the [MetaMask]('https://metamask.io/') extension. It will not work without it. Additional wallets are not featured; however, you may use [Web3Modal]('https://github.com/Web3Modal/web3modal') or other similar libraries to provide additional features.

First, install the dependencies:

```bash
npm i
# or
yarn add
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## API routes

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on:

- [http://localhost:3000/api/nonce](http://localhost:3000/api/nonce). This endpoint can be edited in `pages/api/nonce.js`.
- [http://localhost:3000/api/verify](http://localhost:3000/api/nonce). This endpoint can be edited in `pages/api/verify.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

To learn more about Sign-in with Ethereum take a look at the following resources:

- [SIWE documentation](https://docs.login.xyz/) - learn about SIWE implementation
- [iron-session documentation](https://github.com/vvo/iron-session) - learn about iron-session

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
