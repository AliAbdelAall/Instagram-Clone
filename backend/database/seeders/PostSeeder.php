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
            'image_url' => 'image1.jpg'
        ]);

        Post::create([
            'user_id' => 2, 
            'caption' => 'Second post', 
            'image_url' => 'image2.jpg'
        ]);

        Post::create([
            'user_id' => 3, 
            'caption' => 'Third post', 
            'image_url' => 'image3.jpg'
        ]);

        Post::create([
            'user_id' => 4, 'caption' => 
            'Fourth post', 'image_url' => 
            'image4.jpg'
        ]);

        Post::create([
            'user_id' => 5, 
            'caption' => 'Fifth post', 
            'image_url' => 'image5.jpg'
        ]);

        Post::create([
            'user_id' => 6, 
            'caption' => 'Fifth post', 
            'image_url' => 'image6.jpg'
        ]);
    }
}   
