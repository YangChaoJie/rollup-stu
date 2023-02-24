import gulp from 'gulp'
const { series, parallel } = gulp;
// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
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

const a = series(clean, build, parallel(javascript, css))
export default a
