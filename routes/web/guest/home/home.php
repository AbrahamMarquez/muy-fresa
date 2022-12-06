<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {return view('main.index');});
Route::get('/login', function () {return view('main.index');});