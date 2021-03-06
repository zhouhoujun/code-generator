# packaged code-generator

This repo is for distribution on `npm`or `jspm`. The source for this module is in the
[main repo](https://github.com/zhouhoujun/code-generator/src/mastert).
Please file issues and pull requests against that repo.

This package use to generator data(etc. JSON data) to code (TypeScript, JavaScript, c#, Java...).

## Install

You can install this package either with `npm` or with `jspm`.

### npm

```shell
dependencies: {
  "code-generator": "https://github.com/zhouhoujun/code-generator.git#commit-ish"
}
npm install
```

### compile jspm package module example
```ts
import  { Builder, Factory, TypeScript, IFactory, IComponent } from 'code-generator';
let data:any; //json data
let builder = new Builder(new Factory());
let coder = builder.build(data);

let code = coder.exportCode(TypeScript);
```
```js
import  { Builder, Factory , JavaScript} from 'code-generator';
let data:any; //json data
let builder = new Builder(new Factory());
let coder = builder.build(data);

let code = ncoder.exportCode(JavaScript);
```

## Documentation

Documentation is available on the
[code-generator docs site](https://github.com/zhouhoujun/code-generator).

## License

MIT © [Houjun](https://github.com/zhouhoujun/)