# Console

Gonzalo Verdugo's portfolio, framed as a GCP-style console. Angular 22 standalone, zoneless, Material 3.

## Development

```bash
npm install
npm start
```

Opens at `http://localhost:4200/` with live reload.

## Build

```bash
npm run build
```

Output goes to `dist/console/browser`.

## Tests

```bash
npm test
```

Runs unit tests with Vitest via `@angular/build`.

## Deploy

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the app and publishes `dist/console/browser` to GitHub Pages. No manual deploy step required.
