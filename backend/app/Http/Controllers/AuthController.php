<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','register']]);
    }

    public function login(Request $request)
    {   
        $request->validate([
            'identifier' => 'required|string',
            'password' => 'required|string',
        ]);
        $credentials = $request->only('identifier', 'password');

        if(filter_var($credentials['identifier'], FILTER_VALIDATE_EMAIL)){
            $token = Auth::attempt(['email' => $credentials['identifier'], 'password' => $credentials['password']]);
        }else{
            $token = Auth::attempt(['username' => $credentials['identifier'], 'password' => $credentials['password']]);
        }

        if (!$token) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized',
            ], 401);
        }

        $user = Auth::user();
        return response()->json([
                'status' => 'success',
                'token' => $token,
            ]);

    }

    public function register(Request $request){
        $request->validate([
            'email' => 'required|string|email|max:255|unique:users',
            'full_name' => 'required|string|min:8',
            'username' => 'required|string|max:255',
            'password' => 'required|string|min:6',

        ]);

        $user = User::create([
            'email' => $request->email,
            'full_name' => $request->full_name,
            'username' => $request->username,
            'password' => Hash::make($request->password),

        ]);

        $token = Auth::login($user);
        return response()->json([
            'status' => 'success',
            'token' => $token,
        ]);
    }

    public function logout()
    {
        Auth::logout();
        return response()->json([
            'status' => 'success',
            'message' => 'Successfully logged out',
        ]);
    }

    public function refresh()
    {
        return response()->json([
            'status' => 'success',
            'user' => Auth::user(),
            'authorisation' => [
                'token' => Auth::refresh(),
                'type' => 'bearer',
            ]
        ]);
    }

}
