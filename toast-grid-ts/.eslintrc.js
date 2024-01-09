module.exports = {
  "env": {
      "browser": true,
      "es2021": true,
      "node": true
  },
  "extends": [
      "eslint:recommended",
      "plugin:vue/vue3-essential",
      '@vue/typescript/recommended'
  ],
  "overrides": [
      {
          "env": {
              "node": true
          },
          "files": [
              ".eslintrc.{js,cjs}"
          ],
          "parserOptions": {
              "sourceType": "script"
          }
      }
  ],
  // "parserOptions": {
  //     "ecmaVersion": "latest",
  //     "sourceType": "module"
  // },
  "plugins": [
      "vue"
  ],
  "rules": {
      'vue/multi-word-component-names': 0,
      "no-unused-vars": ["error", { "vars": "all", "args": "none", "ignoreRestSiblings": false }],
      'vue/valid-template-root': 0
  }
}
