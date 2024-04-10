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
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/logout', [AuthController::class, 'logout']);

// User
Route::post('/get-feed', [UserController::class, 'getFeed']);
Route::post('/add-comment', [UserController::class, 'addComment']);
Route::delete('/delete-like/{id}', [UserController::class, 'deleteLike']);
Route::post('/add-like', [UserController::class, 'addLike']);
Route::post('/update-user', [UserController::class, 'updateUser']);