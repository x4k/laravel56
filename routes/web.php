<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Auth::routes();

Route::get('/home', 'HomeController@home');

Route::get('/', 'HomeController@index')->name('index');
Route::get('/index_v1', 'HomeController@index_v1');
Route::get('/index_v2', 'HomeController@index_v2');