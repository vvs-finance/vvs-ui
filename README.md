# VVS Toolkit

This repository is a monorepo manage with [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) and [Lerna](https://lerna.js.org/). 

Forked from https://github.com/pancakeswap/pancake-toolkit

Imported https://github.com/pancakeswap/pancake-frontend

Imported https://github.com/pancakeswap/pancake-swap-sdk

Imported https://github.com/pancakeswap/pancake-info-api

## Packages

- `vvs-uikit` : React components used to build the VVS UI
- `vvs-eslint-config` : An ESLint config for VVS, with Typescript and Prettier support
- `vvs-frontend` : Main VVS web app
- `vvs-info-api` : express nodejs API implementation for VVS on-chain data query
- `vvs-prelaunch` : prelaunch landing page with count down clock
- `vvs-profile-sdk` : Handy functions to retrieve data for VVS Profile system
- `vvs-swap-sdk`: Handy functions to retrieve data for VVS contracts
- `token-lists` : Main VVS token list and tools to validate it

## How to use

### Install `lerna`

```
npm install --global lerna
```

### Install dependencies

```
lerna bootstrap
```

### Build `vvs-uikit`

```
lerna run build --scope=vvs-uikit
```

### Build `vvs-sdk`

```
lerna run build --scope=vvs-sdk
```
### Build `vvs-info-api`

```
lerna run build --scope=vvs-info-api
```

### Start `vvs-info-api`

```
lerna run start:dev --stream --scope=vvs-info-api
```

### Build `vvs-frontend`

```
lerna run build --scope=vvs-frontend
```

### Start `vvs-frontend`

```
lerna run start --stream --scope=vvs-frontend
```

### Start `vss-frontend` with build the dependencies

```
lerna run build --scope={vvs-uikit,vvs-sdk} && lerna run start --stream --scope=vvs-frontend
```

### Run test

```
lerna run test
```

### Run lint

```
lerna run lint
```

### Run prettier check
```
lerna run format:check
```

## Troubleshooting

### Add child package to existing monorepo with git history

```
lerna import ~/pancake-frontend --flatten
lerna import ~/pancake-swap-sdk --flatten
lerna import ~/pancake-info-api --flatten
```

`--flatten` is important and commit history may lost without it
change `name` in `<child>/package.json` after imported

### Add sibling dependencies

```
lerna add vvs-uikit --scope=vvs-frontend
lerna add vvs-sdk --scope=vvs-frontend
```

### Remove child dependencies (when changing branches with different dependencies)

```
lerna clean  -y
```

### Remove root dependencies

```
rm -rf node_modules
```

### Remove locked dependencies

```
rm yarn.lock
```

### Resolve incorrect version of dependencies

Change package version in `<root>/package.json`

## References

https://medium.com/mitterio/multirepo-to-lerna-js-monorepo-80f6657cb443

https://stackoverflow.com/questions/60906133/cannot-add-dependency-to-sibling-monorepo-package-using-lerna

https://github.com/lerna/lerna/issues/2352
