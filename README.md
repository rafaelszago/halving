
# Halving Node.js API

API to calculate the amount of time left until the BTC halving

---
## Requirements

For development, you will only need Node.js and a node global package, NPM, installed in your environement.

## Install

    $ git clone https://github.com/rafaelszago/halving-api
    $ cd halving-api
    $ npm install

## Create your .env (you might check .env.example)

```
NODE_ENV=development
HOST=localhost
PORT=3000
```  

## Development

    $ npm run dev
Access  [http://localhost:3000/api/v1](http://localhost:3000/api/v1)


## Production

    $ npm run prod