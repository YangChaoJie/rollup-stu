export default {
  // config options

  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'test'
    },
    cssCodeSplit: true,
    rollupOptions: {
      input: 'src/index.ts',
      output: [
        {
          dir: 'dist/es',
          format: 'es',
          // sourcemap: true,
          preserveModules: true,
          preserveModulesRoot: __dirname,
          entryFileNames: '[name].cjs',
          exports: 'named'
        },
        {
          dir: 'dist/cjs',
          format: 'cjs',
          // sourcemap: 'true',
          preserveModules: true,
          preserveModulesRoot: __dirname,
          entryFileNames: '[name].mjs',
          exports: 'named'
        }
      ]
    }
  }
}
