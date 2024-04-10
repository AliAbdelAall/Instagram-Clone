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

        ]);

        User::create([
            'username' => "Ahmad",
            'email' => "ahmad@gmail.com",
            'password' => Hash::make("ahmad12345"),
            'full_name' => "Ahmad Farou",
            'bio' => "Full Stack Web Developer",

        ]);

        User::create([
            'username' => "Mhamad",
            'email' => "mhamad@gmail.com",
            'password' => Hash::make("mhamad12345"),
            'full_name' => "Mhamad Ballan",
            'bio' => "Full Stack Web Developer",

        ]);

        User::create([
            'username' => "Hsein",
            'email' => "hsein@gmail.com",
            'password' => Hash::make("hsein12345"),
            'full_name' => "Hsein Taktak",
            'bio' => "Full Stack Web Developer",

        ]);

        User::create([
            'username' => "3laych",
            'email' => "3laych@gmail.com",
            'password' => Hash::make("3laych12345"),
            'full_name' => "Ali Abdelaal",
            'bio' => "Full Stack Web Developer",

        ]);

        User::create([
            'username' => "ITS_WICK",
            'email' => "wick@gmail.com",
            'password' => Hash::make("wick12345"),
            'full_name' => "Ahmad Kabalan",
            'bio' => "Full Stack Web Developer",

        ]);

    }
}
