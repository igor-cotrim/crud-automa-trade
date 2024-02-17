# CRUD AUTOMA TRADE

This is an extended version of the [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app` that includes:

- UI Components using [shadcn/ui](https://ui.shadcn.com) - which is built on top of [Radix UI](https://radix-ui.com) & [Tailwind CSS](https://tailwindcss.com)
- Full-Stack CRUD example with tRPC mutations (protected routes) using the UI components together with [react-hook-form](https://react-hook-form.com).
- Docker Compose setup for local database
- [`@next/font`] for optimized fonts

[Try it out now!](https://crud-automa-trade-qe77.vercel.app/)

## Getting Started

1. Install deps

```bash
pnpm install
```

2. Add a DATABASE_PASSWORD and DATABASE_URL in your .env file

```bash
cp .env.example .env
```

3. Start the db

```bash
docker compose up -d
```

4. Push the schema to the db

```bash
pnpm db:push
```

5. Start the dev server

```bash
pnpm dev
```

---

## What's next?

&#9745; All Crud <br/>
&#9744; Tests <br/>



