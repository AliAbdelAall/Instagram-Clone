<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'username' => "Ali",
            'email' => "ali@gmail.com",
            'password' => Hash::make("ali12345"),
            'full_name' => "Ali Abdelaal",
            'bio' => "Full Stack Web Developer",
            'profile_image' => "backend\storage\app\public\default_profile\Default_pfp.jpg"
        ]);
        User::create([
            'username' => "Ahmad",
            'email' => "ahmad@gmail.com",
            'password' => Hash::make("ahmad12345"),
            'full_name' => "Ahmad Farou",
            'bio' => "Full Stack Web Developer",
            'profile_image' => "backend\storage\app\public\default_profile\Default_pfp.jpg"
        ]);
        User::create([
            'username' => "Mhamad",
            'email' => "mhamad@gmail.com",
            'password' => Hash::make("mhamad12345"),
            'full_name' => "Mhamad Ballan",
            'bio' => "Full Stack Web Developer",
            'profile_image' => "backend\storage\app\public\default_profile\Default_pfp.jpg"
        ]);
        User::create([
            'username' => "Hsein",
            'email' => "hsein@gmail.com",
            'password' => Hash::make("hsein12345"),
            'full_name' => "Hsein Taktak",
            'bio' => "Full Stack Web Developer",
            'profile_image' => "backend\storage\app\public\default_profile\Default_pfp.jpg"
        ]);
    }
}
