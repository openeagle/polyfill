const targets = {
  vue3: 'ios_saf >= 10, chrome >= 50',
  'vue3-esmodule': 'ios_saf >= 11, chrome >= 61',
}

function createConfig(target) {
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          corejs: {
            version: '3.22.0',
            proposals: true,
          },
          modules: false,
          useBuiltIns: 'entry',
          targets: targets[target],
        },
      ],
    ],
  }
}

module.exports = {
  overrides: [
    {
      test: './src/vue3.js',
      ...createConfig('vue3'),
    },
    {
      test: './src/vue3-modules.js',
      ...createConfig('vue3-esmodule'),
    },
  ],
}
