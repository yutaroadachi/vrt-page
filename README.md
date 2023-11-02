# vrt-page

Visual Regression Testing for page

# Getting started

1. Install dependencies

```sh
npm ci
```

2. Copy `paths.ts.example` to `paths.ts` and set paths you want to vrt

```sh
cp paths.ts.example paths.ts
```

3. Launch any server on port 3000

4. Take expected screenshots

```sh
npm run vrt
```

5. Compare actual and expected screenshots

```sh
npm run vrt
```

# How to update snapshots

```sh
npm run vrt:update-snapshots
```

# How to show report

```sh
npm run vrt:show-report
```
