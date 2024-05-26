import { defineConfig } from '@farmfe/core';
import NestPlugin from './index.plugin.ts';

export default defineConfig({
  plugins: [NestPlugin()],
  compilation: {
    external: [
      // '^@nestjs/microservices$',
      // '^@nestjs/websockets$',
      // '^cache-manager$',
      // '^class-transformer$',
      // '^class-validator$',
    ],
  },
});
