module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'vue/attribute-hyphenation': 'off',
    'vue/no-v-html': 'off',
    'vue/component-definition-name-casing': 'off',
    'vue/valid-v-slot': 'off'
  }
}
