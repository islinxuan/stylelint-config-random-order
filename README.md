# stylelint-config-random-order

![GitHub](https://img.shields.io/github/license/islinxuan/stylelint-config-random-order?label=License&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAAAV1BMVEUAAADv7+/39/f09PT39/fz8/P19fX19fX09PT09PT29vb29vb19fX19fX09PT09PT19fX19fX19fX19fX29vb09PT19fX19fX19fX19fX19fX19fX19fXEeTYZAAAAHHRSTlMAECAwP0BPUF9gb3B/gI+Qn6CvsL/Az9Df4O/wQqu59AAABHRJREFUeNrtmtFy4jwMRu0EN38ANw0YmiR6/+f8d7qdUbYi7EnxdrjwueidzbHIJ5mCKxQKhUKhkJl6v6/ds+FP8ouTd89Fkg+Seypa+aR1z0Qnn0T3TFzkk0vRKlpFq2gVraL1jwjHU1oyyS3S6Rjcz/FfEkx6cT9DhaSUVLkfYD/JRqb905XqZwrWTPItpuaff474Hif/XKXSgj1TqTIUzO+O63wtVR8XjPLJGBf0Xwt2XGe36lwPgnmvyfCp3wUz1Cu1mgQT6UyMgplu1+sslLHmozqMQjm7WwwC6fyWG4TvBHJ1t5hhqcLWiw0t2OxuceGl4lqsYHat0pADNd+7BjbkrQjOgFIzR++olinYDNNtCf16n3m/9K1/5NLs2/5yZ/s+OELSJVXeu3ylOydnwGsl5tWKYk6M6UWZcmnZYdI7jB1EbU6t1gwciAnlkFNrYPEjgyjk0wpiToxpwRDlWibh4AFBa6XiWjDhvEeYQit9Lq0ejBy+dvJcCyVc6XkrtcQ8WlEs1ebuMLPEcK3hxtZxcysNoyaGa5GEj4G3VLPWHTQxXIsk/ODoiW2hW+e11gFrgYTP3rXbWmqja/8IZf+gltkMntgUOv6ZyuohLbtX5C3VepxBYqBWtxhm5MSKfddYYlSLJdy+1H28HqF2H6DEqBZJ+Lv7oOY9IppPbSgxqoUSrqtgS7VrUWJUCyXcnpi3UlvABLVAwskDoly1Da9mc6OW3UUfJB0iV9qG18O5VWt9EzhEdG3nlHpxUKQFEm5aWc9bqcOJUS2ccPuKoA2vhGjgWmsJb1b+BdnhNswTo1o84XSIHL62YZ4Y1WIJV971xLyV0sSoFk+4bam0DePEWC38BOmJG9yGQWKsFl8NhojtTjwxVovX2i+dYRumiVEtmnCl3y5NE6NaPOHobbJtmCfGarGEgyEymUCAxCCtZq2VgiFi2zBPjNViCQdDRNtwC+4ARAs8OrYmV9yGUWJUiy8DQ8S2JXi/tFog4aCxgSYOEqNaOOHg9a3t/cRMXMsmHF2LQRsGiVEtmnAwREwbBokhWqCV2iFygGtBYqwWT7gdIrzQ9rLPtEDCzQPSmOdN3up7xVr+csQTLS9sa78fxKRuQj+aq14nWRCIVpAlw/GmmX95kyXT8nFTprcXbybIqx5nu5YyvO13bkG1Oyb5wmieGE3a6bjb7bxzv/7uX5MYZke0NCNLhpTS6/EtpSQWfRP9KJtpkZamiTP67T8c2t5Obb34T518t30pHD7VRTB22gZesPmw8XY6CqWvbJ8dmVTkn3zs1lxKaf9esVGlgJYS+vmvO1dujfr+6nPz/f8G+vZ8x6mr3X1Cd7vi87mtHv4qKl5ubXyoHKFq4nnpNl+6Q53rm/0qHOL58psutsFtpQ4fqBDTeiaKVtEqWkWraBWtolW0ilbRKlp+n+4xySdTusfeu6xUV8nCtXI5SZKJ5DJSSzZql49WstG6fATJRsiZQ8lG1ixGyUR0WYlPZaVUbXyYdmPXKhQKhUKh8D841WxvY/5yCAAAAABJRU5ErkJggg==)
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
