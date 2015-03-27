var assemble = require('assemble');
var extname = require('gulp-extname');

assemble.layouts('templates/layouts/*.hbs');
assemble.partials('templates/partials/**/*.hbs');
assemble.option({'assets': '../../assets'});

assemble.task('html', function () {
  assemble.src('./templates/views/**/*.hbs')
    .pipe(extname())
    .pipe(assemble.dest('./dist/views'))
});
