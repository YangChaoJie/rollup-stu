import esbuild from 'rollup-plugin-esbuild';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import sass from 'node-sass';
import autoprefixer from 'autoprefixer';
// import scss from 'rollup-plugin-scss'
export default [
  {
    input: 'src/index.ts',
    external: ['vue'],
    extractCSS: true,
    plugins: [dts()],
    output: {
      file: `dist/index.d.ts`,
      format: 'es',
    },
  },
  {
    input: 'src/index.ts',
    plugins: [
      // scss(),
      esbuild(),
      commonjs({
        include: /node_modules/,
        extensions: ['.js']
      }),
      resolve(),
      postcss({
        // preprocessor: (content, id) => new Promise((resolve, reject) => {
        //   const result = sass.renderSync({ file: id })
        //   resolve({ code: result.css.toString() })
        // }),
        extract: true, // 提取为单独的css 文件
        extensions: ['.sass', '.css', '.scss'],
        plugins: [
          // autoprefixer,
        ]
      })
    ],
    output: [
      {
        dir: 'dist',
        format: 'es',
        sourcemap: true,
        exports: 'named'
      }
    ]
  }
]
