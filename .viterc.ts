import {cwd} from '@micra/vite-config/utilities/cwd';
import {defineConfig} from '@micra/vite-config/library';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: cwd('index.ts'),
        complete: cwd('complete.ts'),
      },
    },
  },
});
