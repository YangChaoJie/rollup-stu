import { series, parallel, src, dest }  from 'gulp'
// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import dartSass from 'sass'
import fs from 'fs-extra'
import { resolve } from 'node:path'
const { existsSync, emptyDir, mkdirSync } = fs
function clean(cb: any) {
  // body omitted
  console.log('clean-----');
  cb();
}

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function build(cb: any) {
  // body omitted
  console.log('build-----');
  cb();
}

function javascript(cb: any) {
  // body omitted
  cb();
}

function css(cb: any) {
  // body omitted
  cb();
}

function ensureEmptyDir(dir: string) {
  existsSync(dir) ? emptyDir(dir) : mkdirSync(dir)
}

// function typeScriptTransfrom () {
//   return src('src/*.ts').pipe()
// }
const cssDir = resolve(__dirname, 'css')
const themesDir = resolve(__dirname, 'themes')

function buildStyle() {
  ensureEmptyDir(cssDir)

  const sass = gulpSass(dartSass)

  return src(resolve(__dirname, 'style/*.scss'))
    .pipe(sass.sync())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(cleanCSS())
    .pipe(dest(cssDir))
}

const a = series(clean, build, parallel(javascript, css, buildStyle))
export default a
