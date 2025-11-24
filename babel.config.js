// Needed for jest.
module.exports = {
  inputSourceMap: true,
  presets: [
    '@babel/preset-typescript',
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-react',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          'slate': './packages/slate/src',
          'slate-history': './packages/slate-history/src',
          'slate-hyperscript': './packages/slate-hyperscript/src',
          'slate-react': './packages/slate-react/src',
          '@deepnote/slate': './packages/slate/src',
          '@deepnote/slate-history': './packages/slate-history/src',
          '@deepnote/slate-hyperscript': './packages/slate-hyperscript/src',
          '@deepnote/slate-react': './packages/slate-react/src',
        },
      },
    ],
  ],
}
