# fiora-ui-react

一个基于 React 开发的 UI 库

# 配置项

- [x] typescript

- [x] git-cz

- [x] jest 单测

- [x] eslint 配置

- [x] 支持按需加载

- [x] CI/CD

# 名字由来

纪念 LOL 中一个英雄 - 无双剑姬(菲奥娜)

# 如何安装

`npm install fiora-ui-react`

`yarn add fiora-ui-react`

# 如何使用

后续会将实例补充到官方文档中...

该方式为全量引入

```typescript jsx
import { Button } from "fiora-ui-react";
import "fiora-ui-react/lib/css/index.css"

const App = () => (
  <>
    <Button className="marginRight10">Default</Button>
  </>
);
```

# 按需加载

使用 babel-plugin-component 插件

配置如下:

```js
[
  'component', {
    'libraryName': 'fiora-ui-react',
    'styleLibrary': {
      'name': 'css',
      'base': false, // no base.css file
      'path': '[module].css'
    }
  }
]
```
