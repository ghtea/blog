module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-react': { // ref: https://theme-ui.com/guides/jsx-pragma#using-nextjs
          importSource: 'theme-ui',
          runtime: 'automatic',
          throwIfNamespace: false,
        },
      },
    ],
  ],
}