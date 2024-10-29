const Configuration = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-line-length': [2, 'always', 500],
  },
}

export default Configuration
