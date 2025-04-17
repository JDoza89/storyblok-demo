This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
This project is using the Nextjs fetch api to connect to a Storyblok instance using the content delivery api.
This is a simple blog site.

If you would like to use this as a starting point you need to: 
1. Create a Storyblok account
2. Create a starter space
3. Populate the env variables in the env file
4. Create a "Blog" Content type block that contains a field "title" of type text and a field "body" of type Rich Text.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The root page contains a list of available blog pages by slug

This is hosted in Netlify: [https://playful-chimera-7903f0.netlify.app/hire-me](https://playful-chimera-7903f0.netlify.app/hire-me)
