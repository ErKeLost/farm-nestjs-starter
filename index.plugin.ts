import type { Config } from "@farmfe/core/binding";

export default function NestPlugin(options?: Config['config']) {
  // not support multiple input files in nestjs we just need to use one input file first one
  const inputFileEntry = Object.values(options?.input || {})[0] ?? 'src/main.ts';
  
  return {
    name: 'NestPlugin',
    config: (_config) => ({
      compilation: {
        input: {
          'NestJs': inputFileEntry,
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
            includes: [inputFileEntry],
            excludes: ['node_modules/**/*'],
          },
        },
        presetEnv: false,
        treeShaking: false,
        minify: false,
        output: {
          format: 'esm',
          targetEnv: 'node',
          entryFilename: '[entryName].js',
          filename: '[name].[hash].mjs',
        },
        ...options
      }
    })
  };
}