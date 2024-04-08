<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{   

    public function getUserInfo(){

       $user= Auth::user();
    //    $id = Auth::id();
    //    $user = User::findOrFail($id);
        return response()->json([
            'status' => "success",
            'user' => $user
        ]);
    }

}
