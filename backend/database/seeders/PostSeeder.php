<?php

namespace Database\Seeders;

use App\Models\Post;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {   

        Post::create([
            'user_id' => 1, 
            'caption' => 'First post', 
            'post_image' => 'background3.jpg'
        ]);

        Post::create([
            'user_id' => 2, 
            'caption' => 'Second post', 
            'post_image' => 'background3.jpg'
        ]);

        Post::create([
            'user_id' => 3, 
            'caption' => 'Third post', 
            'post_image' => 'background3.jpg'
        ]);

        Post::create([
            'user_id' => 4, 
            'caption' => 'Fourth post', 
            'post_image' => 'background3.jpg'
        ]);

        Post::create([
            'user_id' => 5, 
            'caption' => 'Fifth post', 
            'post_image' => 'background3.jpg'
        ]);

        Post::create([
            'user_id' => 6, 
            'caption' => 'Fifth post', 
            'post_image' => 'background3.jpg'
        ]);
    }
}   
