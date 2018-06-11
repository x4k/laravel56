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
   .sass('resources/assets/sass/app.scss', 'public/css')
  .combine([
      'resources/assets/css/animate.css',
      'resources/assets/css/bootstrap.min.css',
      'resources/assets/css/bootstrap-rtl.css',
      'resources/assets/css/font-awesome.css',
      'resources/assets/css/login.css',
      'resources/assets/css/style.css',
    ],
    'public/css/all.css'
  );
  // .styles('resources/assets/css/bootstrap.min.css', 'public/css')
  // .styles('resources/assets/css/bootstrap-rtl.css', 'public/css')
  // .styles('resources/assets/css/font-awesome.css', 'public/css')
  // .styles('resources/assets/css/login.css', 'public/css')
  // .styles('resources/assets/css/style.css', 'public/css');

mix.version();