# manual

## start editor

npm run swagger project edit

## start stab server

npm run swagger project start

## combine many yaml file

npm run gulp

# install

npm install swagger

npm install swagger-editor

edit package.json

```JavaScript
  "scripts": {
    "swagger" : "swagger"
  },
```

npm run swagger project create back-rest-server

# auto build

https://service.plan-b.co.jp/blog/tech/35333/

# Error: Cannot find module swagger_router

https://qiita.com/0_a_e/items/1a99b0f0f31d9137d5bb

node_modules/bagpipes/libfittingTypes/user.js の 24 列目、

```JavaScript
var split = err.message.split(path.sep);
```
を

```JavaScript
var split = err.message.split('\n')[0].split(path.sep);
```
に変更する
