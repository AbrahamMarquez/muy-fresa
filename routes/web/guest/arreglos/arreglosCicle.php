<?php

use Illuminate\Support\Facades\Route;

Route::get('/arrangements', function () {return view('main.index');});
Route::get('/arrangements/{product}/show', function () {return view('main.index');});

