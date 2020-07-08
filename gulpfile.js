const {src, task} = require('gulp');
let eslint = require('gulp-eslint');
let src_args = [
  'app/models/Education.js',
  'app/routes.js',
  'config/db.js',
  'server.js',
  'public/js/controllers/*.js',
  'public/js/services/*.js',
  'public/js/*.js'
];

task('lint', () => {
    return src(src_args)
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint({"fix":false}))
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format('stylish'));
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        //.pipe(eslint.failAfterError());
});
