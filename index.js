var gulp = require('gulp');
var path = require('path');

module.exports = function (dest) {
    gulp.src(path.join(__dirname, './build/**/*'))
        .pipe(gulp.dest(dest));
};
