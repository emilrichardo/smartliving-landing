const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();


gulp.task('sass',()=>{
	gulp.src('./src/scss/*.scss')
		.pipe(sass({
			outputStyle: 'compressed' /* nested | compact | expanded | compressed */
		}).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers:['last 3 versions']
		}))
		.pipe(gulp.dest('./public/assets/css'))
		.pipe(browserSync.stream())
})

/* En el caso de que se quiera vigilar mas de un scss dentro de un carpeta, indicar con .../*.scss */
gulp.task('serve',['sass'], ()=>{
	browserSync.init({
		server: './public'
	})
	gulp.watch('./src/scss/*.scss',['sass'])
	gulp.watch("./public/*.html").on('change', browserSync.reload)
})

gulp.task('default', ['serve']);