<?php

namespace Database\Seeders;

use App\Models\Follow;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FollowSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Follow::create([
            'follower_id' => 1, 
            'followed_id' => 2
        ]);

        Follow::create([
            'follower_id' => 1, 
            'followed_id' => 3
        ]);

        Follow::create([
            'follower_id' => 1, 
            'followed_id' => 4
        ]);

        Follow::create([
            'follower_id' => 2, 
            'followed_id' => 1
        ]);

        Follow::create([
            'follower_id' => 2, 
            'followed_id' => 3
        ]);

        Follow::create([
            'follower_id' => 3, 
            'followed_id' => 1
        ]);

        Follow::create([
            'follower_id' => 3, 
            'followed_id' => 2
        ]);

        Follow::create([
            'follower_id' => 4, 
            'followed_id' => 1
        ]);

        Follow::create([
            'follower_id' => 5, 
            'followed_id' => 1
        ]);

        Follow::create([
            'follower_id' => 6, 
            'followed_id' => 1
        ]);

    }
}
