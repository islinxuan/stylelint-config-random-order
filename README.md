# stylelint-config-random-order

![GitHub](https://img.shields.io/github/license/islinxuan/stylelint-config-random-order?label=License)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/islinxuan/stylelint-config-random-order/CI?label=CI&logo=github)
![npm](https://img.shields.io/npm/v/stylelint-config-random-order?logo=npm)

一份 Stylelint 配置，使用 [stylelint-order](https://github.com/hudochenkov/stylelint-order) 对 CSS 属性\* 进行排序。

\* 包含眼熟的和感兴趣的，欢迎补充。

## 用法

安装 [Stylelint](https://github.com/stylelint/stylelint)，并将此包添加到你的项目中。

```sh
pnpm add -D stylelint stylelint-config-random-order
```

配置你的 stylelint 配置文件（`.stylelintrc.json`）以启用此包。

```diff
{
+  "extends": ["stylelint-config-random-order"],
-   // this package already does for you
-  "plugins": ["stylelint-order"],
+  "rules": {
+    // Add overrides and additional rules here
+  }
}
```

## 参考

- [stormwarning/styleint-config-recess-order](https://github.com/stormwarning/stylelint-config-recess-order)
- [kutsan/stylelint-config-clean-order](https://github.com/kutsan/stylelint-config-clean-order)
