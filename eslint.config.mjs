import antfu from '@antfu/eslint-config';

export default antfu(
  {
    react: true,
    stylistic: {
      semi: true,
    },
    ignores: [
      'es',
      'lib',
      'dist'
    ],
  },
);
