<?php

namespace Database\Seeders;

use App\Models\Like;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LikeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Like::create([
            'user_id' => 1, 
            'post_id' => 2
        ]);

        Like::create([
            'user_id' => 2, 
            'post_id' => 1
        ]);

        Like::create([
            'user_id' => 3, 
            'post_id' => 2
        ]);

        Like::create([
            'user_id' => 4, 
            'post_id' => 3
        ]);

        Like::create([
            'user_id' => 5, 
            'post_id' => 1
        ]);

        Like::create([
            'user_id' => 6, 
            'post_id' => 4
        ]);

        Like::create([
            'user_id' => 1, 
            'post_id' => 5
        ]);

        Like::create([
            'user_id' => 2, 
            'post_id' => 6
        ]);
    }
}
