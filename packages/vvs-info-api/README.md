# VVS Finance API

The VVS Finance API is a set of endpoints used by market aggregators (e.g. coinmarketcap.com) to surface VVS Finance liquidity
and volume information. All information is fetched from the underlying subgraphs.

## Documentation

The documentation of the endpoints, for VVS Finance, can be found [here](documentation.md).

## Development

### Build

```shell
# Install dependencies
yarn

# Build project
yarn build

# Start local server
yarn start:dev
```

Find the endpoints in `src/api/index.ts`.

```shell
# api/pairs.ts
curl -X GET 'localhost:3000/api/pairs'

# ...
```

## Docker

### Build image
```shell
docker build . -t vvs/vvs-info-api --no-cache
docker build --build-arg DOT_ENV_ARG=dev . -t vvs/vvs-info-api --no-cache
docker build --build-arg DOT_ENV_ARG=sta . -t vvs/vvs-info-api --no-cache
docker build --build-arg DOT_ENV_ARG=prod . -t vvs/vvs-info-api --no-cache
```

### Run on port
```shell
docker run -dp <port>:3000 vvs/vvs-info-api
```

## Production

### Deploy

