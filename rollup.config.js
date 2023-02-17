import esbuild from 'rollup-plugin-esbuild';
import dts from 'rollup-plugin-dts';

export default [
  {
    input: 'src/index.ts',
    plugins: [esbuild()],
    output: [
      {
        dir: 'dist',
        format: 'es',
        sourcemap: true,
        exports: 'default'
      }
    ]
  },
  {
    input: 'src/index.ts',
    plugins: [dts()],
    output: {
      file: `dist/index.d.ts`,
      format: 'es',
    },
  }
]
