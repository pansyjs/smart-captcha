import { createConfig, type Config } from '@umijs/test';

const defaultConfig = createConfig({
  target: 'browser'
});

const config: Config.InitialOptions = {
  ...defaultConfig,
  clearMocks: true,
  resetMocks: false,
  transform: {
    ...defaultConfig.transform
  },
  setupFiles: [...(defaultConfig.setupFiles || [])],
  setupFilesAfterEnv: [...(defaultConfig.setupFilesAfterEnv || []), './tests/setupFilesAfterEnv.ts']
};

export default config;
