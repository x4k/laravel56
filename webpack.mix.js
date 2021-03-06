let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
    .js('resources/assets/js/index.js', 'public/js')
    .js('resources/assets/js/global.js', 'public/js')
    .js('resources/assets/js/flot.js', 'public/js')
    .js('resources/assets/js/peity.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css')
  .combine([
          'resources/assets/css/bootstrap.min.css',
          'resources/assets/css/font-awesome.css',
          'resources/assets/css/animate.css',
          'resources/assets/css/style.css'
    ],
    'public/css/index.css'
  );

mix.version();