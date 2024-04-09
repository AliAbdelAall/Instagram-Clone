<?php

namespace Database\Seeders;

use App\Models\Comment;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Comment::create([
            'user_id' => 1, 
            'post_id' => 2, 
            'comment' => 'Great post!'
        ]);

        Comment::create([
            'user_id' => 2, 
            'post_id' => 1, 
            'comment' => 'Nice!'
        ]);

        Comment::create([
            'user_id' => 3, 
            'post_id' => 2, 
            'comment' => 'Awesome!'
        ]);

        Comment::create([
            'user_id' => 4, 
            'post_id' => 3, 
            'comment' => 'Amazing!'
        ]);

        Comment::create([
            'user_id' => 5, 
            'post_id' => 1, 
            'comment' => 'Fantastic!'
        ]);

        Comment::create([
            'user_id' => 6, 
            'post_id' => 4, 
            'comment' => 'Incredible!'
        ]);

        Comment::create([
            'user_id' => 1, 
            'post_id' => 5, 
            'comment' => 'Impressive!'
        ]);

        Comment::create([
            'user_id' => 2, 
            'post_id' => 6, 
            'comment' => 'Brilliant!'
        ]);
    }
}
