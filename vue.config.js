const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8080
}
})
// It's an optional config file that will be automatically loaded by @vue/cli-service if it's present in your project root (next to package.json).
// You can also use the vue field in package.json, but do note in that case you will be limited to JSON-compatible values only.
