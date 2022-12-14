<?php

use Illuminate\Support\Facades\Route;

Route::get('/recover-password', function () {return view('main.index');});
Route::get('/verification-code', function () {return view('main.index');});
Route::get('/verification-password', function () {return view('main.index');});
