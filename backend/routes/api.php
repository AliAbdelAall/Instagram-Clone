<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Models\User;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Authentication 
Route::controller(AuthController::class)->group(function (){
  Route::post('/login', 'login');
  Route::post('/register', 'register');
  Route::post('/logout', 'logout');
});


// User

Route::controller(UserController::class)->group(function (){
  Route::post('/get-feed', 'getFeed');
  Route::post('/add-comment','addComment');
  Route::delete('/delete-like/{id}','deleteLike');
  Route::post('/add-like','addLike');
  Route::post('/update-user','updateUser');
  Route::post('/add-post','addPost');
  Route::get('/get-suggestions','getSuggestions');
  Route::post('/create-follow','createFollow');
});
