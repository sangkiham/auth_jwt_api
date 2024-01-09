const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,

    // Build Directory
    outputDir: '../src/main/resources/static',

    devServer: {
		proxy: 'http://localhost' // Spring Boot Server
	},

    pluginOptions: {
      vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
    }
})
