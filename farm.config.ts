import { defineConfig } from '@farmfe/core';

export default defineConfig({
  compilation: {
    input: {
      index: './src/main.ts',
    },
    script: {
      plugins: [],
      target: 'esnext',
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
        decoratorMetadata: false,
        decoratorVersion: '2021-12',
        includes: ['src/main.ts'],
        excludes: [],
      },
    },
    minify: false,
    persistentCache: false,
    output: {
      format: 'esm',
      targetEnv: 'node',
      entryFilename: '[entryName].mjs',
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
