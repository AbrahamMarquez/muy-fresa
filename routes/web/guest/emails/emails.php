<?php

use Illuminate\Support\Facades\Route;

Route::get('/recover-password-email', function () {return view('emails.recoverPasswordEmail');});
Route::get('/register-email', function () {return view('emails.RegisterEmail');});