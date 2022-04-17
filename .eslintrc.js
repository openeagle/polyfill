const path = require('path')

module.exports = {
  root: true,
  extends: ['@openeagle/eslint-config-vue/typescript'],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          [
            '@openeagle/vue-component-template',
            path.resolve(__dirname, './src'),
          ],
        ],
      },
    },
  },
}
