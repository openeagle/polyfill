# @openeagle/polyfill

常见运行环境的 polyfill 代码库，现有版本支持以下环境：

- vue3：支持 Proxy 的移动端浏览器

    iOS >= 10，Chrome >= 49

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#browser_compatibility

- vue3-modules：支持 Script Module 和 Dynamic Import 的移动端浏览器

    iOS >= 11.3，Chrome >= 63

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#browser_compatibility

## 安装使用

1. 安装

    ```shell
    $ npm install @openeagle/polyfill
    ```

2. 集成：在项目入口文件的第一行引入 polyfoll

    - vue3：

        ```js
        import '@openeagle/polyfill/lib/vu3' // import '@openeagle/polyfill/dist/vu3'
        ```

    - vue3-modules：

        ```js
        import '@openeagle/polyfill/lib/vu3-modules' // import '@openeagle/polyfill/dist/vu3-modules'
        ```
