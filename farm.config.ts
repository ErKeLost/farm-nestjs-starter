import { defineConfig } from '@farmfe/core';

export default defineConfig({
  compilation: {
    input: {
      index: './src/main.ts',
    },
    script: {
      plugins: [],
      target: 'es2019',
      parser: {
        tsConfig: {
          decorators: true,
          dts: false,
          noEarlyErrors: false,
          tsx: false,
        },
      },
      decorators: {
        legacyDecorator: true,
        decoratorMetadata: true,
        decoratorVersion: '2021-12',
        includes: ['src/main.ts'],
        excludes: ['node_modules/**/*'],
      },
    },
    presetEnv: false,
    minify: false,
    lazyCompilation: true,
    output: {
      format: 'esm',
      targetEnv: 'node',
      entryFilename: '[entryName].js',
      filename: '[name].[hash].mjs',
    },
    external: [
      '^@nestjs/microservices$',
      '^@nestjs/websockets$',
      '^cache-manager$',
      '^class-transformer$',
      '^class-validator$',
    ],
  },
});
