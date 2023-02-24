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
          dir: 'es',
          format: 'es',
          // sourcemap: true,
          preserveModules: true,
          preserveModulesRoot: __dirname,
          entryFileNames: '[name].cjs',
          exports: 'named'
        },
        {
          dir: 'cjs',
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
