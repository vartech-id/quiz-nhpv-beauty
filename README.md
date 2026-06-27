# Quiz NHPV Beauty

An interactive web quiz built with Nuxt, Prisma, and SQLite.

The application is designed for a **fixed portrait digital signage display** with a resolution of **1080 × 1920 px (9:16)**.

## Tech Stack

- Nuxt 4
- Vue 3
- Bun
- Prisma ORM
- SQLite / LibSQL
- Tailwind CSS

## Installation

```bash
git clone <repository-url>
cd quiz-nhpv-beauty
bun install
```

## Environment

Create a `.env` file in the project root:

```env
DATABASE_URL="file:./prisma/dev.db"
```

## Database Setup

Validate the Prisma schema:

```bash
bunx --bun prisma validate
```

Create the database and run migrations:

```bash
bunx --bun prisma migrate deploy
bunx --bun prisma generate
```

When creating a new migration during development:

```bash
bunx --bun prisma migrate dev --name migration_name
bunx --bun prisma generate
```

## Development

```bash
bun run dev
```

Open:

```text
http://localhost:3000
```

## Production Build

```bash
bunx --bun prisma generate
bun run build
node --env-file=.env .output/server/index.mjs
```

## Digital Signage

Recommended display configuration:

```text
Orientation : Portrait
Resolution  : 1080 × 1920 px
Aspect Ratio: 9:16
Display Scale: 100%
```

Run Chrome in kiosk mode:

```bash
chrome.exe --kiosk http://localhost:3000
```

## Static Assets

Store static files inside the `public` directory.

Example:

```text
public/images/welcome-nona.png
```

Use an absolute path:

```vue
<img src="/images/welcome-nona.png" alt="Welcome Nona" />
```

For CSS:

```css
.page {
  background-image: url("/images/welcome-nona.png");
}
```

## Prisma Studio

```bash
bunx --bun prisma studio
```

## Common Issues

### Missing database table

```bash
bunx --bun prisma migrate deploy
bunx --bun prisma generate
```

### Missing LibSQL runtime module

```bash
bun add @libsql/isomorphic-ws ws
rm -rf .nuxt .output
bun run build
```
