<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(UserSeeder::class);
        $this->call(FollowSeeder::class);
        $this->call(PostSeeder::class);
        $this->call(LikeSeeder::class);
        $this->call(CommentSeeder::class);
    }
}
