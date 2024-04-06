<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function(Blueprint $table){
            $table->id();
            $table->string('username');
            $table->string('email');
            $table->string('password');
            $table->string('full_name');
            $table->string('bio');
            $table->string('profile_image');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
