<?php

use Illuminate\Support\Facades\Route;

Route::get('/shopping', function () {return view('main.index');});
Route::get('/arrangements/checkout', function () {return view('main.index');});
Route::get('/arrangements/checkout/payment', function () {return view('main.index');});
Route::get('/arrangements/checkout/product', function () {return view('main.index');});

