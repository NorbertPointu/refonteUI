module.exports = {
  sections: [
    {
      name: 'Best practices',
      sections: [
        {
          name: 'Form',
          content: 'src/documentations/forms/forms.md',
          exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
          usageMode: 'hide'
        }]
    },
    {
      name: 'Project Hooks',
      components: './src/hooks/**/*.js',
      exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand' // 'hide' | 'collapse' | 'expand'
    },
    {
      name: 'Components',
      components: 'src/components/**/[A-Z]*.js',
      exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand',
      ignore: ['src/documentations']
    }
  ],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    }
  }
}
