var assemble = require('assemble');

assemble.layouts('templates/layouts/*.html');
assemble.partials('templates/partials/**/*.html');
assemble.option({'assets': '../../assets'});

assemble.task('html', function () {
  assemble.src('./templates/views/**/*.html')
    .on('data', function () {
      console.log(assemble.views);
    })
    .pipe(assemble.dest('./dist/views'))
});